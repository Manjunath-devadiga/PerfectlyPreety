import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#f5f0e6", margin: "50px 0 0 0" }}>
      {/* <h1 style={{color:"#3e3e3e"}}>This is footer</h1> */}
      <div style={{ display: "flex", gap: "5rem", padding: "20px" }}>
        <ol
          style={{
            listStyleType: "none",
            padding: "20px",
            marginLeft: "160px",
          }}
        >
          <h5 className="heading">Beauty Blossom</h5>
          <li className="footer-list">About us</li>
          <li className="footer-list">Careers</li>
          <li className="footer-list">Our Teams</li>
          <li className="footer-list">Sustainablity</li>
          <li className="footer-list">Our story</li>
        </ol>

        <ol style={{ listStyleType: "none", padding: "20px" }}>
          <h5 className="heading">Policies</h5>
          <li className="footer-list">Privacy and policy</li>
          <li className="footer-list">Terms and Conditions</li>
          <li className="footer-list">Cookie Policy</li>
        </ol>

        <ol style={{ listStyleType: "none", padding: "20px" }}>
          <h5 className="heading">Quick Link</h5>
          <li className="footer-list">Shop all products</li>
          <li className="footer-list">Bestseller</li>
          <li className="footer-list">New Arrival</li>
          <li className="footer-list">Gift Cards</li>
        </ol>

        <ol style={{ listStyleType: "none", padding: "20px" }}>
          <h5 className="heading">Help?</h5>
          <li className="footer-list">Contact us</li>
          <li className="footer-list">FAQs</li>
          <li className="footer-list">Shipping and Delivery</li>
        </ol>
      </div>
    </div>
  );
};

export default Footer;
