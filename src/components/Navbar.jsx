import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header
            id="navbar"
            className="flex items-center justify-between pt-4 pb-4 px-8 text-white fixed top-0 left-0 w-full z-10 lg:w-full md:w-3/4 sm:w-1/2 sm:text-lg"
            style={{ backgroundColor: '#1A2930' }}
        >
            <div className="flex text-lg font-bold px-4">
                <img className="object-contain" width="25" src={logo} alt="logo" />
                <a className="text-xl px-2" href="/">Unggasku.id</a>
            </div>
            <nav className="text-lg font-semibold space-x-6">
            <nav className="text-lg font-semibold space-x-6">
                <Link to="/artikel" className="hover:text-secondary transform ease-in-out duration-300">Artikel</Link>
                <Link to="/layanan" className="hover:text-secondary transform ease-in-out duration-300">Layanan</Link>
                <Link to="/tentang-kami" className="hover:text-secondary transform ease-in-out duration-300">Tentang Kami</Link>
                <Link to="/kontak-kami" className="hover:text-secondary transform ease-in-out duration-300">Kontak Kami</Link>
            </nav>
            </nav>
    </header>
  )
}

export default Navbar