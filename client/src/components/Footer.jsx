import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-20  flex justify-center flex-col">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 lg:pl-24 ">
        <div>
          <h4 className="text-lg font-bold mb-4">About Us</h4>
          <p className="text-sm max-w-48">
            We are committed to providing the best online bookstore experience
            with a wide selection of books across various genres.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link to="/aboutUs" className="hover:underline">About</Link></li>
            <li><Link href="/courses" className="hover:underline">Courses</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4">Contact Us</h4>
          <p className="text-sm">
            Email: contact@bookstore.com
            <br />
            Phone: +123-456-7890
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H7v4h2v12h4V12h3.2l.8-4H13V6.8c0-.8.4-1.6 1.6-1.6H17V1.2C16.3 1.1 15 1 13.6 1c-3.2 0-5.4 2-5.4 5.6V8z"/></svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.633 7.597c.014.198.014.397.014.595 0 6.08-4.626 13.079-13.08 13.079-2.594 0-5.013-.758-7.047-2.073.367.043.734.072 1.117.072 2.155 0 4.142-.735 5.718-1.964-2.019-.037-3.72-1.372-4.304-3.2.28.048.57.075.87.075.42 0 .83-.056 1.222-.16-2.106-.42-3.692-2.285-3.692-4.516v-.057c.617.345 1.33.55 2.087.573-1.234-.82-2.047-2.233-2.047-3.829 0-.842.224-1.63.617-2.308 2.24 2.747 5.588 4.552 9.36 4.744-.078-.337-.12-.688-.12-1.048 0-2.545 2.064-4.612 4.611-4.612 1.325 0 2.523.56 3.366 1.46 1.044-.204 2.025-.586 2.91-1.1-.34 1.067-1.064 1.962-2.008 2.525.926-.104 1.81-.357 2.63-.722-.61.918-1.383 1.723-2.27 2.366z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.309-3.608.975-.975 2.242-1.247 3.608-1.309 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.332.013 7.052.072 5.771.131 4.623.418 3.69 1.352c-.933.933-1.22 2.081-1.28 3.362C2.013 5.921 2 6.33 2 9.587v4.826c0 3.257.013 3.666.072 4.947.059 1.281.347 2.429 1.28 3.362.933.933 2.081 1.22 3.362 1.28 1.281.059 1.69.072 4.947.072s3.666-.013 4.947-.072c1.281-.059 2.429-.347 3.362-1.28.933-.933 1.22-2.081 1.28-3.362.059-1.281.072-1.69.072-4.947V9.587c0-3.257-.013-3.666-.072-4.947-.059-1.281-.347-2.429-1.28-3.362-.933-.933-2.081-1.22-3.362-1.28C15.666.013 15.257 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center pt-10 ">
        <p className="text-sm">&copy; 2024 BookStore. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
