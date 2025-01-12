import { Img } from "react-image";
import SearchBar from "./SearchBar";
import ProfileIcon from "./ProfileIcon";
import logo from "../assets/IMG_0685.png";
import Home from "../app_page";

export default function NavBar() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow z-10">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <Img
                src={logo}
                alt="Logo"
                width={40}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <div className="flex-1 flex justify-center px-2 lg:ml-6">
              <div className="max-w-xl w-full">
                <SearchBar />
              </div>
            </div>
            <div className="flex items-center lg:ml-6">
              <ProfileIcon />
            </div>
          </div>
        </div>
      </nav>
      <Home />
    </>
  );
}
