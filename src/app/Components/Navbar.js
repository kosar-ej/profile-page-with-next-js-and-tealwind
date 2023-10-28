import React from 'react'
import '../Styles/Components.scss'
import Image from 'next/image'
import Logo from '../../../public/Img/Logo.png'
import MyButton from './MyButton'

const Navbar = () => {
    return (
        <nav class="w-full">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="" class="flex gap-3 items-center">
                    <Image alt='logo' width={46} height={61} src={Logo} />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap text-md text-success-200">PARDIS</span>
                </a>
                <div class="flex md:order-2">
                    <MyButton type='success' text='Login / SignUp'></MyButton>
                </div>
                <div class="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
                        <li>
                            <a href="#" class="block py-2 pl-4 pr-5 text-success-200 text-md" aria-current="page">Services</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-4 pr-5 text-success-200 text-md">About Us</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-4 pr-5 text-success-200 text-md">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;