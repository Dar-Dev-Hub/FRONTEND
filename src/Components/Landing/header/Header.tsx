import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="flex m-14 h-[50vh] overflow-hidden pb-3 bg-header-bg bg-no-repeat bg-right bg-size-cover bg-brightness-125 relative">
        <div className="flex gap-6 flex-col max-xl:w-[70%] t- ml-20 max-md:ml-0 px-2 lg:w-[40%] md:w-[90%] md:ml-5 md:pt-9 max-md:w-full justify-center max-md:items-center">
          <Link to="/landing/our-company" className="group zz w-fit relative bg-secondary overflow-hidden hover:border-primaryy px-10 py-4 rounded-[30px]">
            <span className="text-blue-500 uppercase w-fit h-fit text-[2rem] font-bold max-lg:text-[2rem] max-md:text-[1.1rem]">
              Bienvenue chez Netverse, une fusion entre
            </span>
            <span className="text-blue-500 uppercase w-fit h-fit text-[2rem] font-bold max-md:text-[1rem]">
              le monde du marketing de réseau et l'univers virtuel.
            </span>
          </Link>
        </div>
      </header>
    );
  };
export default Header
