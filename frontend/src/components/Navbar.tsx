import lohchab from "../assets/lohchab.png"
import { Button } from "@/components/ui/button"

export default function Navbar() {
    return (
        <nav className="frostedGlass sticky w-full z-20 top-0 start-0 border-b border-gray-200 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-20">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={lohchab} className="h-8" alt="lohchab Logo" />

                </div>
                <div className="flex gap-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <Button className='rounded-lg border-b-2' variant="outline">Log in</Button>
                    <Button className='rounded-lg border-b-2' variant="outline">Contact Us</Button>


                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
                        <li>
                            <a href="#" className="text-sm block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Mahindra</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Honda</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Renault</a>
                        </li>

                        <li>
                            <a href="#" className="text-sm block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">MG Motor</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Services</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
