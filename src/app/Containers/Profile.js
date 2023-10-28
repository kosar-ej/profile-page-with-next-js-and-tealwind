import React from 'react'
import Navbar from '../Components/Navbar';
import ProfileInfoCard from '../Components/ProfileInfoCard';
import Services from '../Components/Services';
import Footer from '../Components/Footer';

const Profile = () =>{
    return(
        <div>
      {/* menue */}
      <Navbar></Navbar>
      <div className='container bg-white rounded-xl p-[20px] mx-auto'>
        {/* profile detail */}
        <ProfileInfoCard></ProfileInfoCard>
        <br/>
        {/* services */}
        <Services></Services>
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
    )
}
export default Profile;