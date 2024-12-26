import React from 'react';
import Nav from '../Components/Sections/Nav';
import Footer from '../Components/Sections/Footer';
import { font2 } from '../Components/font/poppins';
import Consultation from '../Components/Sections/Consultation';
import ContactForm from '../Components/Sections/ContactForm';

const page = () => {
  return (
    <div className={`${font2.className}`}>
      <Nav />
      <div className="relative">
            <img
            src="/contact-banner.jpg"
            alt="Background"
            className="w-full object-cover h-[500px] md:h-[500px]"
            />
            <div className="absolute bg-black bg-opacity-70 inset-0 flex flex-col items-center justify-center">
                <div className="flex flex-col w-[70%]">
                    <h1 className="text-white md:mt-12 text-2xl md:text-4xl font-bold">CONTACT US FOR ANY QUERY</h1>
                    <p className="text-white max-w-xl text-sm md:text-xl mt-4">You can contact us via email or phone call for any queries. It will be a pleasure to assist you and resolve your queries for the concerned matter</p>
                </div>
            </div>
        </div>
      <section style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", gap: "2rem" }}>
          {/* Map Section */}
          <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.407815267477!2d67.0692395753214!3d24.866290779146756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e7e506ba1c9%3A0x7fd41e60ec4c2c63!2sCombined%20Freight%20International!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* Contact Details */}
          <div style={{ flex: "1 1 45%", minWidth: "300px", display: "flex", flexDirection: "column", gap: "2rem" }}>
            <h2 style={{ marginBottom: "1rem" }} className="text-2xl">
              Our Offices
            </h2>
            <p className="text-gray-500 text-sm">
              Please telephone or email us with any enquiries and we will be happy to help. Alternatively, please use the form below.
            </p>
            {/* Column 1 */}
            <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {/* Karachi Office */}
              <div>
                <h3 className="text-lg font-semibold">Karachi Office</h3>
                <p className="text-gray-500 text-sm">13-E Block-6, P.E.C.H.S., Shahrah-e-Faisal, Karachi.</p>
                <p className="text-gray-500 text-sm">Phone: +92-21-111-000-234</p>
                <p className="text-blue-500 text-sm">
                  Email: <a href="mailto:info@cfipak.com">info@cfipak.com</a>
                </p>
              </div>
              {/* Islamabad Office */}
              <div>
                <h3 className="text-lg font-semibold">Islamabad Office</h3>
                <p className="text-gray-500 text-sm">Office # 11, 3rd Floor, Aneeq Arcade, 1-8, Markaz Islamabad.</p>
                <p className="text-gray-500 text-sm">Phone: +92-51-4862617</p>
                <p className="text-blue-500 text-sm">
                  Email: <a href="mailto:info@cfipak.com">info@cfipak.com</a>
                </p>
              </div>
              {/* Faisalabad Office */}
              <div>
                <h3 className="text-lg font-semibold">Faisalabad Office</h3>
                <p className="text-gray-500 text-sm">Suite #85 & 84, LG Floor Regent Mall, Chen One Road, Faisalabad.</p>
                <p className="text-gray-500 text-sm">Phone: +92-41-8710470-1</p>
                <p className="text-blue-500 text-sm">
                  Email: <a href="mailto:info@cfipak.com">info@cfipak.com</a>
                </p>
              </div>
            </div>
            {/* Column 2 */}
            <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {/* Lahore Office */}
              <div>
                <h3 className="text-lg font-semibold">Lahore Office</h3>
                <p className="text-gray-500 text-sm">Room # 5, 4th Floor Al Hafeez Tower, M.M. Alam Road Gulberg 3, Lahore.</p>
                <p className="text-gray-500 text-sm">Phone: +92-42-35785648-9</p>
                <p className="text-blue-500 text-sm">
                  Email: <a href="mailto:info@cfipak.com">info@cfipak.com</a>
                </p>
              </div>
              {/* Sialkot Office */}
              <div>
                <h3 className="text-lg font-semibold">Sialkot Office</h3>
                <p className="text-gray-500 text-sm">Room # C4, 2nd Floor, Jawwad Centre, Defence Road, Sialkot.</p>
                <p className="text-gray-500 text-sm">Phone: +92-52-3258302</p>
                <p className="text-blue-500 text-sm">
                  Email: <a href="mailto:info@cfipak.com">info@cfipak.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactForm/>
      <Consultation/>
      <Footer />
    </div>
  );
};

export default page;
