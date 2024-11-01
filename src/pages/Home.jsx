import React from 'react'
import backgroundImage from "../assets/home.jpg"
import logo from "../assets/logo.png"

const Home = () => {
  return (
    <div>
            <section
                id="jumbotron"
                className="relative items-center justify-center text-white w-full h-full"
                style={{ backgroundColor: '#1A2930' }}
            >
                <div className="absolute inset-0">
                    <div
                        className="bg-cover bg-center h-full"
                        style={{
                            backgroundImage: `url(${backgroundImage})`,
                            opacity: 0.3,
                        }}
                    ></div>
                </div>
                <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center py-40 relative">
                        <h1 className="text-5xl font-bold pb-20 relative">Unggasku.id</h1>
                        <h2 className="text-3xl font-bold pb-4 relative">
                            Belajar cara memelihara unggas yang sehat
                        </h2>
                        <h3 className="text-lg font-semibold pb-4 relative">
                            Dapatkan saran ahli dari tim unggasku dan dokter hewan kami
                        </h3>
                        <div className="flex items-center px-4 space-x-6 justify-center relative">
                            <a
                                href="/masuk"
                                className="bg-secondary text-black font-bold py-4 px-16 rounded-3xl transform ease-in-out duration-300 hover:bg-black hover:text-secondary"
                            >
                                Masuk
                            </a>
                            <a
                                href="/daftar"
                                className="bg-secondary text-black font-bold py-4 px-16 rounded-3xl transform ease-in-out duration-300 hover:bg-black hover:text-secondary"
                            >
                                Daftar
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="unggasku"
                className="flex flex-col items-center justify-evenly pt-20 pb-20 bg-primary text-secondary"
            >
                <h1 className="text-center font-bold text-5xl mb-6">Unggasku.id</h1>
                <div className="flex flex-col items-center justify-center text-center pt-6">
                    <img
                        src={logo}
                        alt="logo"
                        width="200"
                        className="mb-4 rounded-full shadow-lg"
                    />
                    <h2 className="text-lg font-semibold max-w-xl px-4">
                        Unggasku.id, solusi cerdas untuk peternak unggas! Konsultasikan ternak Anda
                        langsung dengan dokter ahli dan tingkatkan produktivitas, kualitas, serta
                        kesejahteraan ternak secara optimal.
                    </h2>
                </div>
            </section>

            <section className="flex flex-col items-center py-20">
                <h1 className="text-center font-bold text-5xl text-primary pb-20">
                    Mengapa Unggasku.id?
                </h1>
                <p className="text-center text-2xl font-semibold py-4 relative inline-flex items-center">
                    <span className="bg-secondary text-primary font-semibold py-2 px-8 rounded-3xl">
                        Sumber Informasi Kesehatan Unggas Terpercaya
                    </span>
                </p>
                <p className="text-center text-2xl font-semibold py-4 relative inline-flex items-center">
                    <span className="bg-secondary text-primary font-semibold py-2 px-8 rounded-3xl">
                        Konsultasi Kesehatan dengan Ahli Tenaga
                    </span>
                </p>
                <p className="text-center text-2xl font-semibold py-4 relative inline-flex items-center">
                    <span className="bg-secondary text-primary font-semibold py-2 px-8 rounded-3xl">
                        Panduan Pencegahan Penyakit yang Komprehensif
                    </span>
                </p>
                <p className="text-center text-2xl font-semibold py-4 relative inline-flex items-center">
                    <span className="bg-secondary text-primary font-semibold py-2 px-8 rounded-3xl">
                        Pemantauan Kesehatan yang Optimal
                    </span>
                </p>
            </section>
        </div>
  )
}

export default Home