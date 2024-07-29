'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="bg-white shadow-md w-full py-2 flex justify-center items-center sticky top-0 z-10 rounded-b-full">
            <div className="logo px-10">
                <img src="./images/website/logovitablue.jpeg" alt="Logo" className="h-12 md:ml-20" />
            </div>
            <div >
                <div className=" items-center border border-gray-300 rounded-3xl p-1 hidden xl:flex">
                    <div className="flex items-center">
                        <span className="text-gray-500">
                            <HiSearch className="h-5 w-5" />
                        </span>
                    </div>
                    <input
                        type="text"
                        placeholder="Pesquisar..."
                        className="outline-none ml-2 flex-1"
                    />
                </div>
                <div className="hidden md:flex space-x-4 px-10"> 
                    <NavLink href="#" text="Loja" />
                    <NavLink href="#" text="Ganhe pontos" />
                    <NavLink href="#" text="Regulamento" />
                    <NavLink href="/login" text="Contato" />
                </div>
                {/* Botão hambúrguer para telas menores que md */}
                <div className="md:hidden">
                    <button
                        className="block text-gray-600 hover:text-blue-500 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <RxHamburgerMenu />

                    </button>
                </div>
                {/* Menu para telas menores que md */}
                {menuOpen && (
                    <div className="md:hidden  absolute h-screen w-[100%] left-0 top-16 pt-[10rem] bg-white border border-gray-200 rounded shadow-lg">
                        <div className='flex flex-col items-center justify-center gap-4'>
                            <NavLink href="#" text="Botão 1" />
                            <NavLink href="#" text="Botão 2" />
                            <NavLink href="#" text="Criar conta" />
                            <NavLink href="/login" text="Login" />
                        </div>
                    </div>

                )}
            </div>
            <div className='hidden xl:flex xl:flex-col'>
                <div className="flex items-center space-x-4 ml-7">
                    <img src="./images/website/user.png" alt="User Icon" className="h-5" />
                    <h5 className="">Lucas</h5>
                </div>
                <div className='flex'>
                    <img src="./images/website/incentivecoins-medium.png" alt="IncentiveCoins Icon" className="h-5 ml-4" />
                    <h5 className="ml-2">2000/5000</h5>
                </div>
                <h5 className="text-sm text-gray-600 ml-5">Nível 1</h5>

            </div>


            <img src="./images/website/shopping-cart.png" alt="Logo" className="h-5 ml-20" />
        </div>
    );
};

// Componente para links navegáveis com efeito de hover
const NavLink = ({ href, text } : { href: string, text: string }) => {
    return (
        <Link href={href} className="relative text-gray-600 hover:text-blue-500 focus:text-blue-500 focus:outline-none">

            {text}
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 opacity-0 transition-opacity duration-300"></span>

        </Link>
    );
};

export default Header;
