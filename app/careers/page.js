import React from 'react';
import Nav from '../Components/Sections/Nav';
import Footer from '../Components/Sections/Footer';

const page = () => {
  return (
    <div>
      <Nav />
      <section style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem", fontSize: "1.8rem", fontWeight: "bold" }}>APPLY NOW</h2>
        <form style={{ maxWidth: "1200px", margin: "0 auto", backgroundColor: "#fff", padding: "2rem", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
          {/* Personal Details */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {["First Name", "Last Name", "Mobile Number", "Email", "City", "Department", "Gender", "Marital Status", "Date of Birth", "NIC Number", "Position Applied For", "Expected Salary", "How did you hear about this job?", "Address", "Previous Salary"].map((placeholder, index) => (
              <div key={index} style={{ flex: "1 1 30%", minWidth: "280px" }}>
                <label style={{ fontWeight: "bold", display: "block", marginBottom: "0.5rem" }}>
                  {placeholder}:
                </label>
                <input
                  type="text"
                  placeholder={placeholder}
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Qualification Section */}
          <h3 style={{ backgroundColor: "#003d99", color: "#fff", padding: "0.5rem", borderRadius: "4px", marginTop: "2rem" }}>
            Qualification
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {["Level of Education", "School/Institute", "Passed Year", "Grade/GPA", "Description"].map((placeholder, index) => (
              <div key={index} style={{ flex: "1 1 30%", minWidth: "280px" }}>
                <label style={{ fontWeight: "bold", display: "block", marginBottom: "0.5rem" }}>
                  {placeholder}:
                </label>
                <input
                  type="text"
                  placeholder={placeholder}
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Previous Experience */}
          <h3 style={{ backgroundColor: "#003d99", color: "#fff", padding: "0.5rem", borderRadius: "4px", marginTop: "2rem" }}>
            Previous Experience
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {["From", "To", "Duration", "Position", "Company"].map((placeholder, index) => (
              <div key={index} style={{ flex: "1 1 30%", minWidth: "280px" }}>
                <label style={{ fontWeight: "bold", display: "block", marginBottom: "0.5rem" }}>
                  {placeholder}:
                </label>
                <input
                  type="text"
                  placeholder={placeholder}
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Reference Section */}
          <h3 style={{ backgroundColor: "#003d99", color: "#fff", padding: "0.5rem", borderRadius: "4px", marginTop: "2rem" }}>
            Reference
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {["Name", "Son/Daughter of", "Relation", "Mobile No"].map((placeholder, index) => (
              <div key={index} style={{ flex: "1 1 30%", minWidth: "280px" }}>
                <label style={{ fontWeight: "bold", display: "block", marginBottom: "0.5rem" }}>
                  {placeholder}:
                </label>
                <input
                  type="text"
                  placeholder={placeholder}
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Privacy Policy */}
          <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <input type="checkbox" id="privacy-policy" />
            <label htmlFor="privacy-policy" style={{ fontWeight: "bold" }}>
              Privacy Policy Acknowledgment
            </label>
          </div>

          {/* Captcha */}
          <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <input type="text" placeholder="Enter Captcha" style={{ padding: "0.8rem", border: "1px solid #ddd", borderRadius: "4px" }} />
            <div style={{ backgroundColor: "#ffcc66", padding: "0.8rem", fontWeight: "bold" }}>
              79F4B6
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              marginTop: "2rem",
              width: "100%",
              padding: "1rem",
              backgroundColor: "#003d99",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              fontWeight: "bold",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            Save
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default page;
