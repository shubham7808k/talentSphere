import Navbar from '@/components/Navbar';
import React from 'react'

const Home = () => {
  return (
    <div>
      <>
        {/* nav bar section */}
        <Navbar />

        {/* hero seciton */}
        <div className="relative w-full h-[320px]" id="home">
          <div className="absolute inset-0 opacity-80">
            <img
              src="https://static.wixstatic.com/media/5af200_b7e6f7d7e4044fc3902e910ffed572a5~mv2.png/v1/fill/w_980,h_674,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/5af200_b7e6f7d7e4044fc3902e910ffed572a5~mv2.png"
              alt="Background Image"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <h1 className="text-grey-700 font-extrabold text-4xl md:text-5xl leading-tight mb-2">
                Transform your talent into a visual story
              </h1>
              <p className="font-regular text-xl mb-8 mt-4 font-bold">
                Smart AI transforms your resume into a stunning portfolio with zero effort.
              </p>
              <a
                href="#contactUs"
                className="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858]  transition duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        {/* our services section */}
        <section className="py-10" id="services">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/678837e76c0afa8b039c82f7_068b6139-28d4-4d90-a387-4dc6a15be801.webp"
                  alt="wheat flour grinding"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    AI-Powered Portfolio Builder
                  </h3>
                  <p className="text-gray-700 text-base">
                    Upload your resume, and our AI extracts key details to create a structured portfolio. Customize your portfolio with a few clicks.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://static.wixstatic.com/media/41e17b_bc634c32cfcf42ec82bdbb99f389acb0~mv2.jpg"
                  alt="Coffee"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    Customizable Templates
                  </h3>
                  <p className="text-gray-700 text-base">
                    Choose from multiple pre-designed templates tailored for different fields. Modify layouts, fonts, colors, and sections using drag-and-drop editing.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://designshack.net/wp-content/uploads/Business-Portfolio-MS-Word-Template-1.webp"
                  alt="Coffee"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    Seamless Integrations
                  </h3>
                  <p className="text-gray-700 text-base">
                    Generate a custom link to share with recruiters and clients. Connect with LinkedIn, GitHub, and social media for easy portfolio updates.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://mdbcdn.b-cdn.net/wp-content/uploads/2018/01/corporate.jpg"
                  alt="Coffee"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    Easy Download & Sharing
                  </h3>
                  <p className="text-gray-700 text-base">
                    Download your portfolio in PDF format or host it as a web link. Share your portfolio with one click for better visibility.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://tint.creativemarket.com/_GXSeHW1zxbCtUw7yOUehuSIH0mPiok8HvpWHnjZDa8/width:1200/height:800/gravity:nowe/rt:fill-down/el:1/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzQwMC80MDA1LzQwMDUzODgvMDFfZnJvbnRjb3Zlci1vLmpwZw?1518611018"
                  alt="Coffee"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-6 bg-white text-center rounded-b-lg md:min-h-full">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    Analytics & AI-Based Suggestions
                  </h3>
                  <p className="text-gray-700 text-base">
                    Receive AI-powered feedback to improve your portfolio. Track portfolio views and recruiter interactions.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://www.creatisimo.net/wp-content/uploads/2024/06/portfolio-template04.jpg"
                  alt="papad"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    Cloud-Based Access
                  </h3>
                  <p className="text-gray-700 text-base">
                    Edit and update your portfolio anytime, anywhere on any device. Your portfolio is securely stored in the cloud.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about us */}
        <section className="bg-gray-100" id="aboutus">
          <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div className="max-w-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  About Us
                </h2>
                <p className="mt-4 text-gray-600 text-lg">
                  TalentSphere is an AI-powered portfolio builder designed to help professionals, students, freelancers, and job seekers create visually appealing and structured online portfolios without requiring coding or design skills. Our platform leverages automation, AI-driven content organization, and seamless integrations to simplify the portfolio-building process.
                </p>
              </div>
              <div className="mt-12 md:mt-0">
                <img
                  src="https://blog.flipbuilder.com/wp-content/uploads/2024/01/Photography-Portfolio-Template.png"
                  alt="About Us Image"
                  className="object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
        {/* why us  */}
        <section className="text-gray-700 body-font mt-10">
          <div className="flex justify-center text-3xl font-bold text-gray-800 text-center">
            Why Us?
          </div>
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-wrap text-center justify-center">
              <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                  <div className="flex justify-center">
                    <img
                      src="https://cdn-icons-png.freepik.com/512/1465/1465515.png?ga=GA1.1.1733521931.1740638147"
                      className="w-32 mb-3"
                    />
                  </div>
                  <h2 className="title-font font-regular text-2xl text-gray-900">
                    Proper Utilization of Resume Data
                  </h2>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                  <div className="flex justify-center">
                    <img
                      src="https://cdn-icons-png.freepik.com/512/18566/18566162.png?ga=GA1.1.1733521931.1740638147"
                      className="w-32 mb-3"
                    />
                  </div>
                  <h2 className="title-font font-regular text-2xl text-gray-900">
                    Customization
                  </h2>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                  <div className="flex justify-center">
                    <img
                      src="https://cdn-icons-png.freepik.com/512/18960/18960923.png?ga=GA1.1.1733521931.1740638147"
                      className="w-32 mb-3"
                    />
                  </div>
                  <h2 className="title-font font-regular text-2xl text-gray-900">
                    Time Efficiency
                  </h2>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                  <div className="flex justify-center">
                    <img
                      src="https://cdn-icons-png.freepik.com/512/11773/11773214.png?ga=GA1.1.1733521931.1740638147"
                      className="w-32 mb-3"
                    />
                  </div>
                  <h2 className="title-font font-regular text-2xl text-gray-900">
                    Seamless Integration
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* steps */}
        <section className="text-gray-600 body-font bg-gray-100" id="steps">
          <div className="flex justify-center text-3xl font-bold text-gray-800 text-center py-10">
            How It Works
          </div>
          <div className="container px-5 py-15 mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-full">
              <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      Upload Resume
                    </h2>
                    <p className="leading-relaxed">
                      Upload your PDF or DOCX resume, and our AI will extract key details like skills, experience, and education.
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      Choose a Template
                    </h2>
                    <p className="leading-relaxed">
                      Select from a variety of pre-designed templates tailored for different industries.
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx={12} cy={5} r={3} />
                      <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      Customize Your Portfolio
                    </h2>
                    <p className="leading-relaxed">
                      Use drag-and-drop tools to modify sections, colors, fonts, and layouts. Add projects, certifications, and media files to showcase your work
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      Save & Download
                    </h2>
                    <p className="leading-relaxed">
                      Save your portfolio securely and download it as a PDF or web format.
                    </p>
                  </div>
                </div>
                <div className="flex relative">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      Share Your Portfolio
                    </h2>
                    <p className="leading-relaxed">
                      Get a custom link to share with recruiters and clients.

                    </p>
                  </div>
                </div>
              </div>
              <img
                className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
                src="https://static-cse.canva.com/blob/1100617/create_portfolio_lead.11d341cb.jpg"
                alt="step"
              />
            </div>
          </div>
        </section>

        {/* gallery */}
        <section className="text-gray-700 body-font" id="gallery">
          <div className="flex justify-center text-3xl font-bold text-gray-800 text-center py-10">
            Templates
          </div>
          <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            <div className="group relative">
              <img
                src="https://i.pinimg.com/736x/8e/29/f0/8e29f0f390dada4e092ae2fac30832d8.jpg"
                alt="Image 1"
                className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-150 duration-500"
              />
            </div>
            <div className="group relative">
              <img
                src="https://i.pinimg.com/736x/51/48/5e/51485e4099011f09130fb9ec1e6ae3b3.jpg"
                alt="Image 1"
                className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-150 duration-500"
              />
            </div>
            <div className="group relative">
              <img
                src="https://marketplace.canva.com/EAFEPKh7HZc/1/0/1131w/canva-beige-modern-with-abstract-element-creative-resume-b5lqGq4tb8I.jpg"
                alt="Image 1"
                className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-150 duration-500"
              />
            </div>
            <div className="group relative">
              <img
                src="https://i.pinimg.com/736x/7d/0e/7d/7d0e7d9ceacd5ffde9f131b825423b3c.jpg"
                alt="Image 1"
                className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-150 duration-500"
              />
            </div>
            {/* Repeat this div for each image */}
          </div>
        </section>
        {/* Visit us section */}
        <section className="bg-gray-100">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-20 lg:px-8">
            <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900" id="contactUs">
                Visit Our Location
              </h2>
              <p className="mt-3 text-lg text-gray-500">Let us serve you the best</p>
            </div>
            <div className="mt-8 lg:mt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                    <div className="border-t border-gray-200 px-6 py-4">
                      <h3 className="text-lg font-bold text-gray-900">Contact</h3>
                      <p className="mt-1 font-bold text-gray-600">
                        <a href="tel:+123">Phone: +91 123456789</a>
                      </p>
                      <a className="flex m-1" href="tel:+919823331842">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-between h-10 w-30 rounded-md bg-indigo-500 text-white p-2">
                            {/* Heroicon name: phone */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                              />
                            </svg>
                            Call now
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="px-6 py-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Our Address
                      </h3>
                      <p className="mt-1 text-gray-600">
                        Sale galli, 60 foot road, Latur
                      </p>
                    </div>
                    <div className="border-t border-gray-200 px-6 py-4">
                      <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                      <p className="mt-1 text-gray-600">
                        Monday - Sunday : 2pm - 9pm
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden order-none sm:order-first">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13246.82965926419!2d80.93676538724002!3d26.785107196710083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfb787dfbbd53%3A0x93e8f520720a89e7!2sTelibagh%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1743143318337!5m2!1sen!2sin"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* footer */}
        <section>
          <footer className="bg-gray-200 text-white py-4 px-3">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full md:w-1/2 md:text-center md:mb-4 mb-8">
                <p className="text-xs text-gray-400 md:text-sm">
                  Copyright 2024 © All Rights Reserved
                </p>
              </div>
              <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
                <ul className="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3">
                  <li>
                    <a href="#contactUs" className="text-gray-400 hover:text-white">
                      Contact
                    </a>
                  </li>
                  <li className="mx-4">
                    <a href="/privacy" className="text-gray-400 hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </section>
      </>

    </div>
  )
}

export default Home;