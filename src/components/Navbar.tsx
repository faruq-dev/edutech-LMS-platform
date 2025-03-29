import Image from "next/image"
import logo from "@/assets/images/logo2.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-white pr-8 shadow-sm">
      <div>
        <Image src={logo} height={80} width={200} alt="logo file"/>
      </div>
      <nav>
        <ul className="flex space-x-8 cursor-pointer">
          <li>Features</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>Documentation</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar