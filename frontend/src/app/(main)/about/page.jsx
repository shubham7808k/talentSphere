import React from 'react'

const about = () => {
  return (
    <div>
      <div className="sm:flex items-center max-w-screen-xl mx-auto">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img src="https://blog.flipbuilder.com/wp-content/uploads/2024/01/Photography-Portfolio-Template.png" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
              About us
            </span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
              About <span className="text-indigo-600">Our Website</span>
            </h2>
            <p className="text-gray-700">
              TalentSphere is an AI-powered portfolio builder designed to help professionals, students, freelancers, and job seekers create visually appealing and structured online portfolios without requiring coding or design skills. Our platform leverages automation, AI-driven content organization, and seamless integrations to simplify the portfolio-building process.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default about;