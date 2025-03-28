import Image from "next/image"
import logo from "@/assets/images/logo2.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-white pr-8">
      <div>
        <Image src={logo} height={80} width={200} alt="logo file"/>
      </div>
      <nav>
        <ul className="flex space-x-8 cursor-pointer">
          <li>Home</li>
          <li>About</li>
          <li>Courses</li>
          <li>Testimonials</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar