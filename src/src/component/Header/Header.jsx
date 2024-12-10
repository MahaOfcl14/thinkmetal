import React, { useState } from "react";

const Header = ()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    return (
        
        <div>

  
 <div class="2xl:container mx-auto py-5">
        
        <div class="hidden md:block">
            <div class="w-[90%] md:w-[80%] mx-auto grid grid-cols-2">
                <div class="bg-white">
                    <ul class="flex justify-around pt-2">
                        <img src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Type=Logo,%20Dark=Yes%20(1).png" alt="logo-img" className="pr-6" />
                        <li className="px-5 hover:text-[#FD4C27] flex items-center space-x-2">
  <a href="#">Product</a>
  {/* Down Arrow Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M12 14.293l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L12 14.293z"
      clipRule="evenodd"
    />
  </svg>
</li>
                        <li className="px-5 hover:text-[#FD4C27]"><a href="#">Home</a></li>
                        <li className="px-5 hover:text-[#FD4C27]"><a href="#">Shop</a></li>
                        <li className="px-5 hover:text-[#FD4C27]"><a href="#">Pages</a></li>
                        <li className="px-5 hover:text-[#FD4C27]"><a href="#">Integrations</a></li>
                        <li className="px-5 hover:text-[#FD4C27]"><a href="#">Developers</a></li>


                    </ul>
                </div>
                <div>
                    <ul class="flex justify-end ">
                <li className="px-6 pt-2 hover:text-[#FD4C27] "><a href="#">Login</a></li>
                <li><button className="bg-[#FD4C27] py-2 px-4 rounded-full text-white hover:bg-blue-500"><a href="#">Start for free</a></button></li>
                </ul>


                </div>
            </div>
            
        </div>


        
        <header className="sm:fixed md:hidden top-0 left-0 w-full bg-white z-50">
      <div className="flex justify-between items-center p-4">
      <img src="https://ik.imagekit.io/ajql7av7t/Thinkmetal/Type=Logo,%20Dark=Yes%20(1).png" className="md:hidden" alt="logo-img" />
      {/* Hamburger Icon */}
        <button
          className="text-2xl md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Menu Items */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        }  bg-white shadow-lg`}
      >
        <ul className="flex flex-col py-4">
          <li className="py-2 md:py-0">
            <a href="/index.html" className="block px-4 text-black hover:text-blue-600">
            Product
            </a>
          </li>
          <li className="py-2 md:py-0">
            <a href="/about.html" className="block px-4 text-black hover:text-blue-600">
              Home
            </a>
          </li>
          <li className="py-2 md:py-0">
            <a href="/project.html" className="block px-4 text-black hover:text-blue-600">
              Shop
            </a>
          </li>
          <li className="py-2 md:py-0">
            <a href="/resume.html" className="block px-4 text-black hover:text-blue-600">
              Pages
            </a>
          </li>
          <li className="py-2 md:py-0">
            <a href="/contactMe.html" className="block px-4 text-black hover:text-blue-600">
              Integrations
            </a>
          </li>
          <li className="py-2 md:py-0">
            <a href="/contactMe.html" className="block px-4 text-black hover:text-blue-600">
              Developers
            </a>
          </li>
        </ul>
      </nav>
    </header>



        </div>
        </div>
       

        
    )
};
export default Header;