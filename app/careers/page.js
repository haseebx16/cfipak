import React from 'react';
import Nav from '../Components/Sections/Nav';
import Footer from '../Components/Sections/Footer';

const Page = () => {
  return (
    <div className="w-full">
      <Nav />
      <section className="px-4 py-10 bg-gray-100">
        <h2 className="text-center text-2xl md:text-5xl font-bold mb-6">APPLY NOW</h2>
        <form className="w-full bg-white p-8 rounded-lg shadow-md">
          {/* Personal Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "First Name",
              "Last Name",
              "Mobile Number",
              "Email",
              "City",
              "Department",
              "Gender",
              "Marital Status",
              "Date of Birth",
              "NIC Number",
              "Position Applied For",
              "Expected Salary",
              "How did you hear about this job?",
              "Address",
              "Previous Salary",
            ].map((placeholder, index) => (
              <div key={index}>
                <label className="block text-sm font-medium mb-2">{placeholder}:</label>
                <input
                  type="text"
                  placeholder={placeholder}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
            ))}
          </div>

          {/* Qualification Section */}
          <h3 className="bg-blue-900 text-white px-4 py-2 rounded mt-6">Qualification</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {["Level of Education", "School/Institute", "Passed Year", "Grade/GPA", "Description"].map((placeholder, index) => (
              <div key={index}>
                <label className="block text-sm font-medium mb-2">{placeholder}:</label>
                <input
                  type="text"
                  placeholder={placeholder}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
            ))}
          </div>

          {/* Previous Experience */}
          <h3 className="bg-blue-900 text-white px-4 py-2 rounded mt-6">Previous Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {["From", "To", "Duration", "Position", "Company"].map((placeholder, index) => (
              <div key={index}>
                <label className="block text-sm font-medium mb-2">{placeholder}:</label>
                <input
                  type="text"
                  placeholder={placeholder}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
            ))}
          </div>

          {/* Reference Section */}
          <h3 className="bg-blue-900 text-white px-4 py-2 rounded mt-6">Reference</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {["Name", "Son/Daughter of", "Relation", "Mobile No"].map((placeholder, index) => (
              <div key={index}>
                <label className="block text-sm font-medium mb-2">{placeholder}:</label>
                <input
                  type="text"
                  placeholder={placeholder}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
            ))}
          </div>

          {/* Privacy Policy */}
          <div className="flex items-start mt-6">
            <input type="checkbox" id="privacy-policy" className="mr-3 mt-1" />
            <label htmlFor="privacy-policy" className="text-sm">
              I hereby certify that the information provided above is true to the best of my knowledge. I understand
              that I am liable to be terminated from the services of the organization if any information is found to be
              false or suppressed at any stage.
            </label>
          </div>

          {/* Captcha */}
          <div className="flex items-center gap-6 mt-6">
            <input
              type="text"
              placeholder="Enter Captcha"
              className="w-1/3 p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
            <div className="bg-yellow-300 text-black font-bold py-2 px-4 rounded">79F4B6</div>
          </div>

          {/* Save Button */}
          <div className="mt-6 text-right">
            <button
              type="submit"
              className="bg-blue-900 text-white py-2 px-8 rounded hover:bg-blue-700 transition-all"
            >
              Save
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Page;
