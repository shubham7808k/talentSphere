require('dotenv').config();

//impport express
const express = require('express');
const multer = require("multer");
const cors = require('cors'); 
const Userrouter = require('./routers/userRouter');
const pdf = require("pdf-parse");
const fs = require("fs");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const upload = multer({ dest: "uploads/" });
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

//initialize express
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use('/user', Userrouter);

//endpoint or route
app.get('/', (req, res) => {
    res.send('responde from express');
});

app.post("/upload-pdf", upload.single("pdf"), async (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded." });
    }
  
    try {
      const dataBuffer = fs.readFileSync(req.file.path);
      const data = await pdf(dataBuffer);
      const extractedText = data.text;
  
      const prompt = `Extract and structure the following resume/CV text into JSON format with the following keys: name, email, phone, summary, skills (array), experience (array of objects with keys: position, company, start_date, end_date, description), education (array of objects with keys: degree, institution, end_year, Location, percentage/CGPA/GPA; note that some people write location after the institute separated with a comma, so please accommodate this possibility in the institution field), and projects (array of objects with keys: title, description, technologies). Use only valid JSON format.\n\n${extractedText}`;
  
      const result = await model.generateContent(prompt);
      const response = result.response ? result.response : result; // Ensure correct handling
      const jsonOutput = response.text ? response.text() : response.text; // Check if text method exists
  
      console.log("Raw response:", jsonOutput);
  
      const cleanedJson = jsonOutput.replace(/```json|```/g, "").trim();
  
      try {
        const parsedJSON = JSON.parse(cleanedJson);
        res.json(parsedJSON);
      } catch (parseError) {
        console.error("JSON Parsing Error:", parseError);
        res.status(500).json({ error: "Invalid JSON response from AI model." });
      }
    } catch (error) {
      console.error("Error processing PDF:", error);
      res.status(500).json({ error: "Failed to process PDF." });
    } finally {
      fs.unlink(req.file.path, (err) => {
        if (err) console.error("Error deleting file:", err);
      });
    }
  });

// /add
app.get('/add', (req, res) => {
    res.send('responde from add');
});

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});
