"use client";
import { useState } from 'react'
import Image from 'next/image';
import BasePic from '../../../public/Img/base.png'
import MyButton from './MyButton';

const Services = () => {
    const [collapsed1, setCollapsed1] = useState(true)
    const [collapsed2, setCollapsed2] = useState(false)
    const [collapsed3, setCollapsed3] = useState(false)
    const [collapsed4, setCollapsed4] = useState(false)
    console.log(collapsed1)

    const HandelChangeCollapse = (type) => {
        if (type == '1') {
            setCollapsed1(true)
            setCollapsed2(false)
            setCollapsed3(false)
            setCollapsed4(false)
        }
        if (type == '2') {
            setCollapsed1(false)
            setCollapsed2(true)
            setCollapsed3(false)
            setCollapsed4(false)
        }
        if (type == '3') {
            setCollapsed1(false)
            setCollapsed2(false)
            setCollapsed3(true)
            setCollapsed4(false)
        }
        if (type == '4') {
            setCollapsed1(false)
            setCollapsed2(false)
            setCollapsed3(false)
            setCollapsed4(true)
        }
    }
    return (
        <div className='flex gap-5'>
            <div>
                <div onClick={() => { HandelChangeCollapse('1') }} className='p-3 flex  items-center rounded-2sm bg-gray-300 mb-2'>
                    <p>
                        Hand Massage
                    </p>
                    <svg class="h-5 w-5 text-black ml-9"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="9 18 15 12 9 6" /></svg>
                </div>
                <div onClick={() => { HandelChangeCollapse('2') }} className='p-3 flex justify-between items-center rounded-2sm bg-gray-300 mb-2'>
                    <p>
                        Hand Massage
                    </p>
                    <svg class="h-5 w-5 text-black ml-9"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="9 18 15 12 9 6" /></svg>
                </div>
                <div onClick={() => { HandelChangeCollapse('3') }} className='p-3 flex justify-between items-center rounded-2sm bg-gray-300 mb-2'>
                    <p>
                        Hand Massage
                    </p>
                    <svg class="h-5 w-5 text-black ml-9"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="9 18 15 12 9 6" /></svg>
                </div>
                <div onClick={() => { HandelChangeCollapse('4') }} className='p-3 flex justify-between items-center rounded-2sm bg-gray-300 mb-2'>
                    <p>
                        Hand Massage
                    </p>
                    <svg class="h-5 w-5 text-black ml-9"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="9 18 15 12 9 6" /></svg>
                </div>
            </div>
            {/* collapsed1 */}
            {collapsed1 &&
                <div className='p-7 rounded-2sm bg-gray-300 w-4/5'>
                    <p className='text-gray-400 text-lg font-medium mb-2'>
                        Portfolio
                    </p>
                    <div className='flex gap-3'>
                        <Image src={BasePic} width={142} height={142} className='rounded-2sm' />
                        <Image src={BasePic} width={142} height={142} className='rounded-2sm' />
                        <Image src={BasePic} width={142} height={142} className='rounded-2sm' />
                    </div>
                    <br />
                    <p className='text-gray-400 text-lg font-medium mb-2'>
                        Certifications
                    </p>
                    <div className='flex gap-3'>
                        <Image src={BasePic} width={142} height={142} className='rounded-2sm' />
                        <Image src={BasePic} width={142} height={142} className='rounded-2sm' />
                    </div>
                    <br />
                    <p className='text-gray-400 text-lg font-medium mb-2'>
                        Location
                    </p>
                    <MyButton type='primary' text='Via Cassia Via mompeo 54'></MyButton>
                    <br />
                    <MyButton type='primary' text='Via Cassia Via mompeo 54'></MyButton>
                </div>
            }
            {/* collapsed2 */}
            {collapsed2 &&
                <div className='p-7 rounded-2sm bg-gray-300 w-4/5'>
                    <p className='text-gray-400 text-lg font-medium mb-2'>
                        Portfolio2
                    </p>
                    <div className='flex gap-3'>
                        <Image src={BasePic} width={142} height={145} className='rounded-2sm' />
                        <Image src={BasePic} width={142} height={145} className='rounded-2sm' />
                        <Image src={BasePic} width={142} height={145} className='rounded-2sm' />
                    </div>
                    <br />
                    <p className='text-gray-400 text-lg font-medium mb-2'>
                        Certifications2
                    </p>
                    <div className='flex gap-3'>
                        <Image src={BasePic} width={142} height={142} className='rounded-2sm' />
                        <Image src={BasePic} width={142} height={142} className='rounded-2sm' />
                    </div>
                    <br />
                    <p className='text-gray-400 text-lg font-medium mb-2'>
                        Location2
                    </p>
                    <MyButton type='primary' text='Via Cassia Via mompeo 54'></MyButton>
                    <br />
                    <MyButton type='primary' text='Via Cassia Via mompeo 54'></MyButton>
                </div>
            }
        </div>
    )
}
export default Services;