import React from 'react';
import ProfilePicture from '../../../public/Img/profile.png';
import MyButton from './MyButton';
import Rating from './Rating';
import Image from 'next/image';

const ProfileInfoCard = () => {
    return (
        <div>
            {/* profile detail */}
            <div className='flex justify-between'>
                <div className='flex gap-5'>
                    <Image className='rounded-sm' alt='profile_picture' width={240} height={250} src={ProfilePicture} />
                    <div className='leading-12'>
                        <p className='text-black text-xl font-medium'>
                            Amin hayaii
                        </p>
                        <p className='text-gray-100 text-lg font-normal'>
                            Hand Massage master
                        </p>
                        <p className='text-gray-100 font-normal text-md'>
                            Profile Verification
                        </p>
                        
                        <MyButton type='secondary' text='Book Now'></MyButton>
                    </div>
                </div>
                <div>
                    <div className='flex justify-end'>
                        <Rating></Rating>
                    </div>
                    <br />
                    <MyButton type='gray' text1='Started on' text2='21.06.2022'></MyButton>
                </div>
            </div>
            <br />
            {/* about */}
            <div>
                <p className='text-black text-g font-medium'>
                    About me
                </p>
                <div className='text-black text-lg font-light leading-7'>
                    sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut eniLorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut eniLorem ipsum dolor
                    sit amet, consectetur adipiscing elit, sesmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut eni
                </div>
            </div>
        </div>
    )
}
export default ProfileInfoCard;