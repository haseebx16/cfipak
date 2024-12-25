import React from 'react';

const ContactForm = () => {
  return (
    <section style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem", fontSize: "1.5rem", fontWeight: "bold" }}>GET IN TOUCH</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "2rem", // Added gap for spacing between columns
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {/* Left Column */}
        <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
          <input
            type="text"
            placeholder="Your Full Name."
            style={{
              width: "100%",
              padding: "0.8rem",
              marginBottom: "1rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
          <input
            type="email"
            placeholder="Your Email."
            style={{
              width: "100%",
              padding: "0.8rem",
              marginBottom: "1rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
          <input
            type="text"
            placeholder="Your Subjects."
            style={{
              width: "100%",
              padding: "0.8rem",
              marginBottom: "1rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
        </div>

        {/* Right Column */}
        <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
          <textarea
            placeholder="Your Message."
            style={{
              width: "100%",
              height: "120px",
              padding: "0.8rem",
              marginBottom: "1rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
              resize: "none",
            }}
          ></textarea>
          <button
            style={{
              width: "100%",
              padding: "0.8rem",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            SEND
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
