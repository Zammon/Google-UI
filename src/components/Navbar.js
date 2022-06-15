import React from 'react';
import iconMenu from './imgsss/dots-menu.png';
import profileUser from './imgsss/Profile_Github.png'
import './../css/Navbar.css';

function Navbar(){
    return(
        <div className='index'>
            <table>
                <div className='contaner'>
                    <div className='cursor contan'>Gmail</div>
                    <div className='cursor contan'>ค้นรูป</div>
                    <div className='cursor contanMenu'><img className='icon' src={iconMenu} /></div>
                    <div className='cursor contanProfile'><img className='profile' src={profileUser} /></div>
                </div>
            </table>
        </div>
    )
}

export default Navbar;