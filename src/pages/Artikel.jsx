import React, { useEffect, useState } from 'react';
import header from "../assets/artikel-header-1.jpeg";
import artc1 from "../assets/artikel-card-1.jpeg";
import artc2 from "../assets/artikel-card-2.jpeg";
import artc3 from "../assets/artikel-card-3.jpg";
import artc4 from "../assets/artikel-card-4.jpeg";

const categoriesData = {
  kesehatan: [
    { title: "Penyakit Umum", image: artc1 }, // Directly use the imported image
    { title: "Pencegahan dan Vaksinasi", image: artc2 },
  ],
  pakan: [
    { title: "Pakan", image: artc3 },
  ],
  nutrisi: [
    { title: "Nutrisi Unggas", image: artc4 },
  ],
  lingkungan: [
    { title: "Lingkungan", image: artc4 },
  ],
};

const Artikel = () => {
  const [currentCategory, setCurrentCategory] = useState('kesehatan');
  const [cards, setCards] = useState(categoriesData[currentCategory]);

  // Tracker for current category
  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setCards(categoriesData[category]);
  };

  useEffect(() => {
    setCards(categoriesData[currentCategory]); // Set initial cards based on current category
  }, [currentCategory]);

  return (
    <div>
      {/* Jumbotron */}
      <section id="jumbotron" className="flex flex-col md:flex-row items-center justify-between bg-primary text-white py-20 px-10">
        <div className="flex justify-center md:w-1/2">
          <img className="w-full max-w-xs md:max-w-md" src={header} alt="Artikel Image" />
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
          <h2 className="text-5xl font-bold text-secondary py-4">Baca Artikel <br /> Terbaru</h2>
          <p className="text-2xl font-light pb-10">Temukan informasi terkini seputar kesehatan unggas, tips perawatan, dan teknik beternak yang efisien untuk mendukung peternakan Anda.</p>
          <a className="bg-secondary text-black font-bold py-2 px-4 rounded-2xl" href="#search">Baca Selengkapnya</a>
        </div>
      </section>
      {/* Jumbotron */}

      {/* Search */}
      <section id="search" className="bg-secondary items-center justify-center pt-20 pb-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Temukan Artikel Terbaru Terkait Unggas</h2>
          <h1 className="text-5xl font-bold pt-4">Unggasku.id</h1>
          <div className="flex items-center justify-center pt-8">
            <div className="relative w-full max-w-2xl">
              <input 
                type="text" 
                placeholder="Cari artikel..." 
                className="w-full py-3 px-4 pr-12 bg-gray-100 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.22 12A6.72 6.72 0 1112 5.78 6.72 6.72 0 0116.22 12z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Search */}

      {/* Kategori */}
      <section id="kategori" className="bg-white py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">Kategori</h2>
          <p className="text-gray-500 mt-2">Jelajahi berbagai kategori artikel yang mencakup kesehatan unggas, Pakan, Nutrisi, serta Lingkungan terkait peternakan unggas.</p>
          <div className="flex justify-center mt-8">
            {/* Add an onClick handler for buttons */}
            {Object.keys(categoriesData).map((category) => (
              <button
                key={category}
                id={category}
                className={`category-button px-4 py-2 font-semibold ${currentCategory === category ? 'text-black font-bold' : 'text-gray-400'}`} // Highlight active category
                onClick={() => handleCategoryChange(category)} // Change category on click
              >
                {category.charAt(0).toUpperCase() + category.slice(1)} {/* Capitalize first letter */}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            {cards.map((card, index) => (
              <div className="relative" key={index}>
                <img src={card.image} alt={card.title} className="w-full h-56 object-cover rounded-lg" />
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                <div className="absolute top-2 left-2">
                  <h3 className="text-white font-bold">{card.title}</h3>
                </div>
                <div className="absolute bottom-2 right-2">
                  <button className="px-4 py-2 bg-white text-black rounded hover:bg-black hover:text-white transform ease-in-out duration-300">Baca</button>
                </div>
                <div className="absolute top-2 right-2">
                  <button className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Kategori */}
    </div>
  );
};

export default Artikel;