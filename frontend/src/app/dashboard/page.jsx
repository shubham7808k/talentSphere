'use client';
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { User, Database, CreditCard, History } from "lucide-react";

export default function Dashboard() {
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john@example.com",
    storage: "15GB",
  });
  const [editable, setEditable] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const toggleEdit = () => setEditable(!editable);

  const cardAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <div className="p-6 max-w-5xl mx-auto bg-gradient-to-tr from-indigo-50 via-white to-indigo-100 rounded-3xl shadow-lg">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-indigo-700 animate-pulse">🌟 User Dashboard 🌟</h1>
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid grid-cols-4 gap-2 mb-6 bg-indigo-200 p-3 rounded-full shadow-inner">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="w-4 h-4" /> Profile
          </TabsTrigger>
          <TabsTrigger value="data" className="flex items-center gap-2">
            <Database className="w-4 h-4" /> Data
          </TabsTrigger>
          <TabsTrigger value="payment" className="flex items-center gap-2">
            <CreditCard className="w-4 h-4" /> Payment
          </TabsTrigger>
          <TabsTrigger value="history" className="flex items-center gap-2">
            <History className="w-4 h-4" /> History
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile">
          <motion.div {...cardAnimation}>
            <Card className="mt-2 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700">Name</label>
                    <Input
                      name="name"
                      value={userData.name}
                      onChange={handleChange}
                      disabled={!editable}
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700">Email</label>
                    <Input
                      name="email"
                      value={userData.email}
                      onChange={handleChange}
                      disabled={!editable}
                      className="rounded-xl"
                    />
                  </div>
                  <Button onClick={toggleEdit} className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md">
                    {editable ? "Save" : "Edit"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Stored Data Tab */}
        <TabsContent value="data">
          <motion.div {...cardAnimation}>
            <Card className="mt-2 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-gray-800 text-lg">📦 Current storage used: <span className="font-semibold">{userData.storage}</span></p>
                <p className="mt-4">Upload new files (simulated)</p>
                <Input type="file" multiple className="mt-3 rounded-xl" />
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Payment Tab */}
        <TabsContent value="payment">
          <motion.div {...cardAnimation}>
            <Card className="mt-2 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <h2 className="font-bold text-2xl text-indigo-700 mb-2">💳 Payment Details</h2>
                <p>Subscription Plan: <span className="font-semibold">Premium</span></p>
                <p>Next Payment Due: 2025-05-30</p>
                <Button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md">Update Payment Method</Button>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* History Tab */}
        <TabsContent value="history">
          <motion.div {...cardAnimation}>
            <Card className="mt-2 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <h2 className="font-bold text-2xl text-indigo-700 mb-2">📜 Activity History</h2>
                <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-1">
                  <li>Edited profile on 2025-04-28</li>
                  <li>Uploaded files on 2025-04-20</li>
                  <li>Payment processed on 2025-04-15</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
