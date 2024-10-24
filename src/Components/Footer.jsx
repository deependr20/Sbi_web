import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-[#003366] mt-8 text-white py-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('src/assets/home/homeBanner.webp')" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between lg:flex-row flex-col lg:items-start items-center    space-y-6 lg:space-y-0">
        {/* Logo  */}
        <div className="footer-section lg:w-[20%] flex flex-col items-center  space-y-4">
          <img
            src="src/assets/sbiFooterImg.webp"
            alt="SBIGFL Logo"
            className="w-40 rounded-lg"
          />
          <img
            src="src/assets/footer/FC_international.webp"
            alt="FCI Member"
            className="w-24 rounded-lg"
          />
        </div>

        {/*  Links */}
       <div className="flex justify-between lg:w-[48%] w-[90%]">
       <div className="footer-section ">
          <h4 className="text-lg font-bold mb-3">Quick Link</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Blogs</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/*  Products */}
          <div className="footer-section ">
          <h4 className="text-lg font-bold mb-3">Our Products</h4>
          <ul className="space-y-2">
            <li>Domestic Factoring</li>
            <li>Export Factoring</li>
            <li>Dealer Factoring</li>
            <li>Vendor Factoring</li>
            <li>Discounting Of Bills Under <br /> Letter Of Credit</li>
          </ul>
        </div>

        {/*  Services */}
        <div className="footer-section ">
          <h4 className="text-lg font-bold mb-3">Our Services</h4>
          <ul className="space-y-2">
            <li>Benefits To Sellers</li>
            <li>Benefits To Buyers</li>
            <li>Highlights Of <br /> SBIGFL Services</li>
          </ul>
        </div>

       </div>
        {/*  Presence */}
        <div className="footer-section lg:w-[28%] w-[60%]">
          <h4 className="text-lg font-bold mb-3">Our Presence</h4>
          <div className="p-3 bg-white text-black rounded-lg space-y-2">
            <p>Head Office</p>
            <p>
              6th Floor, The Metropolitan Building, Bandra-Kurla Complex,
              Bandra(East), Mumbai - 400051
            </p>
            <p>Tel: +91-22-4889 0300</p>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-white">
        <div className="flex md:flex-row font-semibold md:text-start flex-col justify-between items-center max-w-7xl mx-auto px-10">
          <p>Copyright © 2024 SBI Global Factors Ltd. All Rights Reserved.</p>
          <p>
            <a href="" className="hover:underline">
              Privacy Policy |
            </a>
            <a href=" "> </a>
            <a href="" className="hover:underline">
               Sitemap
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
