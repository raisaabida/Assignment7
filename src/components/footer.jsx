import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-6 px-10 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-white font-bold text-lg mb-3">CS — Ticket System</h2>
          <p className="text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Our Mission</a></li>
            <li><a href="#" className="hover:text-white">Contact Sales</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-3">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Products &amp; Services</a></li>
            <li><a href="#" className="hover:text-white">Customer Stories</a></li>
            <li><a href="#" className="hover:text-white">Download Apps</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Social Links</h3>
          <div className="flex flex-col space-y-4">
            {/* Facebook */}
            <a href="#" className="flex items-center gap-3 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-gray-300">
                <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073c0 6.038 4.388 11.038 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.019 1.791-4.687 4.532-4.687 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.492 0-1.953.93-1.953 1.884v2.26h3.328l-.532 3.49h-2.796v8.437C19.612 23.11 24 18.11 24 12.073z"/>
              </svg>
              <span>@CS — Ticket System</span>
            </a>

            {/* LinkedIn */}
            <a href="#" className="flex items-center gap-3 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-gray-300">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764c.967 0 1.75.79 1.75 1.764s-.783 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-3.368-4-3.111-4 0v5.604h-3v-10h3v1.399c1.396-2.586 7-2.777 7 2.476v6.125z"/>
              </svg>
              <span>@CS — Ticket System</span>
            </a>

            {/* Globe */}
            <a href="#" className="flex items-center gap-3 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-gray-300">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1 17.931c-3.949-.493-7-3.858-7-7.931 0-.337.022-.67.061-.998L11 13v6.931zM12 4c3.309 0 6 2.691 6 6 0 2.206-1.794 4-4 4H6.708l-2.09-2.09C5.447 6.26 8.419 4 12 4zm1 16.931V15h4c.85 0 1.667-.179 2.402-.5.38-.166.733-.37 1.056-.605-.731 3.438-3.72 6.08-7.458 6.036z"/>
              </svg>
              <span>@CS — Ticket System</span>
            </a>

            {/* Email */}
            <a href="mailto:support@cst.com" className="flex items-center gap-3 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-gray-300">
                <path d="M20 4H4c-1.104 0-2 .896-2 2v12c0 1.105.896 2 2 2h16c1.104 0 2-.895 2-2V6c0-1.104-.896-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>support@cst.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
}
