import React from 'react'
import Image from 'next/image'


const Footer = () => {

    return (
        <div className='w-full pt-[32px] pb-[24px] px-[8px] bg-light-800 lg:pt-[80px] lg:pb-[24px] lg:px-[64px]'>
            <div className='flex flex-col justify-between gap-[32px]  lg:flex-row lg:items-center'>
                <div className='flex flex-col gap-4 font-normal text-black-600 leading-5 text-[14px] max-w-sm h-[234px] lg:gap-6 lg:w-[354px] lg:h-[272px] lg:text-[15px]'>
                    <Image src={"/logo.png"} alt='MPI Logo' width={50} height={50} />
                    <p>Join our newsletter to stay up to date on features and releases.</p>
                    <div className='flex gap-[8px]'>
                        <input type="text" name="email" id="email" className='h-[48px] bg-inherit rounded border-2 px-[12px] border-black-600 text-black-600' placeholder='Enter your email' />
                        <button className='h-[48px] text-black-800 border-2 text-center border-black-600 rounded px-2'>Subscribe</button>
                    </div>
                    <p>By subscribing you agree with our Privacy Policy and provide consent to recieve updates from our company</p>
                </div>
                <div className='flex flex-col gap-[24px] font-normal text-black-600 text-[14px] leading-[16px] lg:flex-row'>
                    <div className='flex flex-col gap-[16px]'>
                        <p className='font-bold text-black-800'>Navigate</p>
                        <p>Home</p>
                        <p>Asphalt</p>
                        <p>Consulting</p>
                        <p>Lab</p>
                    </div>
                    <div className='flex flex-col gap-[16px]'>
                        <p className='font-bold text-black-800'>About us</p>
                        <p>Project Details</p>
                        <p>Go Green</p>
                        <p>About MPI</p>
                        <p>Contact Us</p>
                    </div>
                    <div className='flex flex-col gap-[8px]'>
                        <p className='font-bold text-[15px]/[15px] text-black-800'>Contact</p>
                        <p className='font-semibold'>Natalia Mendez</p>
                        <p>Business Development MPI AC</p>
                        <p>+1 310 7953694</p>
                        <p>natalia@mpi-ac.com</p>
                        <p className='font-semibold mt-2'>Ricardo Carreno</p>
                        <p>Gerente General MPI AC</p>
                        <p>+57 320 3760947</p>
                        <p>ricardo@mpi-ac.com</p>
                    </div>
                    <div className='flex flex-col gap-[8px]'>
                        <p className='font-bold text-black-800'>Address</p>
                        <p>8958 W State Rd</p>
                        <p>84Davie, FL 33324</p>
                        <div className='flex flex-row mt-2'>
                            <Image src={"/icon_linkedin.svg"} alt='LinkedIn' width={24} height={24}/>
                            <Image src={"/icon_facebook.svg"} alt='Facebook' width={24} height={24}/>
                            <Image src={"/icon_instagram.svg"} alt='Instagram' width={24} height={24}/>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='text-black-800 h-[20px] mt-4'/>
            <div className='flex flex-row justify-between text-black-600 text-[12px]/[18px] font-normal'>
                <p>© Copyright 2024, MPI. All rights reserved. Designed & Developed By Dino Code LA</p>
                <div className='flex flex-row gap-2'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies Settings</p>
                </div>
            </div>
        </div>

    )
}

export default Footer