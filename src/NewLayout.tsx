// import Link from 'next/link'
// import { Button } from "@/components/ui/button"
// import NavBar from "./components/NavBar";
import { Img } from "react-image";
import SearchBar from "./components/SearchBar";
import ProfileIcon from "./components/ProfileIcon";
import logo from "./assets/IMG_0685.png";

export default function NewLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-background border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 bg-white">
          {/* <nav className="flex items-center justify-between h-16"> */}
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
          {/* </nav> */}
        </div>
        {/* <NavBar /> */}
      </header>
      <main className="flex-grow h-32">{children}</main>
    </div>
  );
}
