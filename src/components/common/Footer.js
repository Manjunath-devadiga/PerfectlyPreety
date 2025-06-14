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
          <h5 class="heading">Beauty Blossom</h5>
          <li class="footer-list">About us</li>
          <li class="footer-list">Careers</li>
          <li class="footer-list">Our Teams</li>
          <li class="footer-list">Sustainablity</li>
          <li class="footer-list">Our story</li>
        </ol>

        <ol style={{ listStyleType: "none", padding: "20px" }}>
          <h5 class="heading">Policies</h5>
          <li class="footer-list">Privacy and policy</li>
          <li class="footer-list">Terms and Conditions</li>
          <li class="footer-list">Cookie Policy</li>
        </ol>

        <ol style={{ listStyleType: "none", padding: "20px" }}>
          <h5 class="heading">Quick Link</h5>
          <li class="footer-list">Shop all products</li>
          <li class="footer-list">Bestseller</li>
          <li class="footer-list">New Arrival</li>
          <li class="footer-list">Gift Cards</li>
        </ol>

        <ol style={{ listStyleType: "none", padding: "20px" }}>
          <h5 class="heading">Help?</h5>
          <li class="footer-list">Contact us</li>
          <li class="footer-list">FAQs</li>
          <li class="footer-list">Shipping and Delivery</li>
        </ol>
      </div>
    </div>
  );
};

export default Footer;
