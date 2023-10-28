import Image from "next/image";
import React from "react";
import vector from '../../../public/Img/Vector.png'
const MyButton = ({ type, text, text1, text2}) => {
    //button success
    if (type == 'success') {
        return (
            <a href="" class="bg-success-100 py-2 px-5 rounded-lg text-white text-md">
                {text}
            </a>
        )
    }

    //button secondary
    if (type == 'secondary') {
        return (
            <a href="" class="bg-black py-2 px-8 rounded-sm text-white text-md">
                {text}
            </a>
        )
    }

    //button gray
    if (type == 'gray') {
        return (
            <a href="" class="bg-gray-300 py-2 px-8 rounded-sm flex text-md">
                <p className="text-gray-100 text-md">
                    {text1}
                </p>
                <p className="text-black text-md ml-3">
                    {text2}
                </p>
            </a>
        )
    }

    //button primary
    if (type == 'primary') {
        return (
            <a href="" class="py-2 px-4 rounded-sm flex gap-5 sm:w-full md:w-2/6 text-md border items-center border-primary-200">
                <Image src={vector} width={40} height={40}/>
                <p className="text-primary-200 text-md ">
                    {text}
                </p>
            </a>
        )
    }
}
export default MyButton