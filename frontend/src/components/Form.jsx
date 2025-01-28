import React from "react";

const Form = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-4xl">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <span className="text-white">🎓 EduPath</span>
          </h1>
          <div className="flex gap-4">
            <button className="text-gray-400 hover:text-white">Home</button>
            <button className="text-gray-400 hover:text-white">Back</button>
          </div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Form */}
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white placeholder-gray-400"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white placeholder-gray-400"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Phone number</label>
              <input
                type="text"
                placeholder="+(XX) xxxxxxxxxx"
                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white placeholder-gray-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Date of birth</label>
              <input
                type="text"
                placeholder="DD/MM/YYYY"
                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white placeholder-gray-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Country of origin</label>
              <input
                type="text"
                placeholder="Country"
                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white placeholder-gray-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Preferred Gender</label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-1">
                  <input type="radio" name="gender" className="text-blue-500" />
                  <span>Male</span>
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio" name="gender" className="text-pink-500" />
                  <span>Female</span>
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio" name="gender" className="text-gray-500" />
                  <span>Prefer not to say</span>
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Current Status</label>
              <input
                type="text"
                placeholder="Student"
                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white placeholder-gray-400"
              />
            </div>
            <button className="w-full py-2 bg-blue-600 rounded hover:bg-blue-700 text-white font-semibold">
              Submit
            </button>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center justify-center text-center">
            <img
              src="https://via.placeholder.com/200"
              alt="Why Personalise?"
              className="mb-6 rounded"
            />
            <h2 className="text-xl font-bold mb-4">Why Personalise?</h2>
            <p className="text-gray-400 leading-relaxed">
              Personalizing your learning experience helps us tailor content and recommendations
              that best suit your interests and educational background. Join a community of
              learners and reach your full potential with EduHub.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
