// Footer.jsx
import React from 'react';
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center mb-6">
          <img src={logo} alt="Logo" className="h-12 mr-4" />
          <h1 className="text-2xl font-bold">NusantaraGrowth</h1>
        </div>
        
        <hr className="border-t border-gray-700 mb-6" />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-lg mb-4">Tentang Kami</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Visi dan Misi</a></li>
              <li><a href="#" className="hover:text-gray-400">Tim Kami</a></li>
              <li><a href="#" className="hover:text-gray-400">Kebijakan Privasi</a></li>
            </ul>
          </div> 
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Layanan</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Konsultasi Peternakan</a></li>
              <li><a href="#" className="hover:text-gray-400">Artikel & Berita</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Informasi</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Kontak Kami</a></li>
              <li><a href="#" className="hover:text-gray-400">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        
        <hr className="border-t border-gray-700 my-6" />
        
        <div className="mt-6 flex justify-between items-center">
          <p className="text-sm">NusantaraGrowth @ 2024. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;