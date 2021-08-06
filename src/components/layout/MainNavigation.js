import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PrioritiesContext from "../../store/priorities-context";
import 'font-awesome/css/font-awesome.min.css';

export function MainNavigation({ fixed }) {
    const prioritiesCtx = useContext(PrioritiesContext)
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return(

        <>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 bg-darkblue">
          <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
            <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
              <div
                className="inline-block py-2 mr-4 text-sm font-bold leading-relaxed text-white uppercase whitespace-nowrap"
              >
                Sales Organizer
              </div>
              <button
                className="block px-3 py-1 text-xl leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i class="fa fa-bars" aria-hidden="true"></i>

              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
                <li className="px-6 nav-item">
                <Link to='/'>All sales</Link>
                </li>
                <li className="px-6 nav-item">
                <Link to='/add-sale'>Add sale</Link>
                </li>
                <li className="px-6 nav-item">
                <Link to='/priorities'>Priorities
                     (<span className="px-1">{prioritiesCtx.totalPriorities}</span>)
                </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>


        
        // <header className="flex py-5 bg-darkblue place-content-between">
        //     <div><h2 className="hidden text-3xl md:flex">Sales Organizer</h2></div>
        //     <nav className="hidden md:text-3xl">
        //         <l1 className="px-6"><Link to='/'>All sales</Link></l1>
        //         <l1 className="px-6"><Link to='/add-sale'>Add sale</Link></l1>
        //         <l1 className="px-6"><Link to='/priorities'>Priorities
        //             <span>{prioritiesCtx.totalPriorities}</span>
        //         </Link></l1>

        //     </nav>
        // </header>
    )
}