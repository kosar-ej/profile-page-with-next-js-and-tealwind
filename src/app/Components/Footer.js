import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/Img/Logo.png'

const Footer = () => {
    return (
        <div className='container mx-auto'>
            <br />
            <div className='p-3 border-t-2 flex justify-between'>
                <div className='mx-a'>
                    <div class="flex gap-3 justify-center">
                        <Image alt='logo' width={46} height={61} src={Logo} />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-md text-success-200">PARDIS</span>
                    </div>
                    <div className='text-gray-100 text-md font-normal text-center w-96 mt-2'>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut eni
                    </div>
                </div>
                <div>
                    <ul class="list-none leading-10 ">
                        <li className='text-primary text-md font-semibold'>
                            USEFUL LINKS
                        </li>
                        <li className='text-gray-100 text-md font-normal'>
                            FAQs Page
                        </li>
                        <li className='text-gray-100 text-md font-normal'>
                            About Us
                        </li>
                        <li className='text-gray-100 text-md font-normal'>
                            Login
                        </li>
                    </ul>
                </div>
                <div>
                    <ul class="list-none leading-10 ">
                        <li className='text-primary text-md font-semibold'>
                            USEFUL LINKS
                        </li>
                        <li className='text-gray-100 text-md font-normal'>
                            FAQs Page
                        </li>
                        <li className='text-gray-100 text-md font-normal'>
                            About Us
                        </li>
                        <li className='text-gray-100 text-md font-normal'>
                            Login
                        </li>
                    </ul>
                </div>
                <div>
                    <ul class="list-none leading-10 ">
                        <li className='text-primary text-md font-semibold'>
                            USEFUL LINKS
                        </li>
                        <li className='text-gray-100 text-md font-normal'>
                            FAQs Page
                        </li>
                        <li className='text-gray-100 text-md font-normal'>
                            About Us
                        </li>
                        <li className='text-gray-100 text-md font-normal'>
                            Login
                        </li>
                    </ul>
                </div>
                <div>
                    <ul class="list-none leading-10 ">
                        <li className='text-primary text-md font-semibold'>
                            USEFUL LINKS
                        </li>
                        <li className='text-gray-100 text-md font-normal'>
                            FAQs Page
                        </li>
                        <li className='text-gray-100 text-md font-normal'>
                            About Us
                        </li>
                        <li className='text-gray-100 text-md font-normal'>
                            Login
                        </li>
                    </ul>
                </div>
                <div>
                    <ul class="list-none leading-10 ">
                        <li className='text-primary text-md font-semibold'>
                            USEFUL LINKS
                        </li>
                        <li className='text-gray-100 text-md font-normal'>
                            FAQs Page
                        </li>
                        <li className='text-gray-100 text-md font-normal'>
                            About Us
                        </li>
                        <li className='text-gray-100 text-md font-normal'>
                            Login
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer;