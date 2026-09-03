import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">সহযোগী</h2>
          <p className="text-gray-400 mt-2">
            এআই ভিত্তিক আপনার পড়াশোনার সহায়ক এবং নোট সংরক্ষণকারী প্ল্যাটফর্ম।
          </p>
          <p className="text-gray-500 mt-4 text-sm">
            © {new Date().getFullYear()} সহযোগী — সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">দ্রুত লিংক</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-white transition">
                হোম
              </a>
            </li>
            <li>
              <a href="/notes" className="hover:text-white transition">
                আমার নোট
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                যোগাযোগ
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">
                আমাদের সম্পর্কে
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            সামাজিক যোগাযোগ
          </h3>
          <div className="flex space-x-5">
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-white transition"
            >
              <FaFacebook size={22} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="hover:text-white transition"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-white transition"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
