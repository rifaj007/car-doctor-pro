"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { signOut, useSession } from 'next-auth/react';

const NavBar = () => {
   const session = useSession()
   console.log(session);

   return (
      <div className='bg-base-100 text-slate-900'>
         <div className="navbar container mx-auto">
            <div className="navbar-start">
               <Link href={'/'}>
                  <Image alt='logo' src='/assets/logo.svg' height={60} width={100} />
               </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
               <div className='flex items-center space-x-6'>
                  {
                     navItems.map((item) => (
                        <Link className='font-semibold hover:text-primary duration-300' key={item.path} href={item.path}>{item.title}</Link>
                     ))
                  }
               </div>
            </div>
            <div className="navbar-end">
               <div className='flex items-center space-x-3'>
                  <HiOutlineShoppingBag className='text-xl' />
                  <CiSearch className='text-xl' />
                  <a className="btn btn-outline btn-primary px-8">Appointment</a>
                  {/* <div>
                     <Image alt={session?.data?.user?.name} src={session?.data?.user?.image} height={50} width={50} />
                  </div> */}
                  {session?.status === 'loading' && <h6>Loading...</h6>}
                  {session?.status === 'unauthenticated' && <Link href={"/login"} className="btn btn-primary px-8">Login</Link>}
                  {session?.status === 'authenticated' && <button onClick={() => signOut} className="btn btn-primary px-8">Log out</button>}
               </div>
            </div>
         </div>
      </div>
   );
};

const navItems = [
   {
      title: 'Home',
      path: '/'
   },
   {
      title: 'About',
      path: '/about'
   },
   {
      title: 'Services',
      path: '/services'
   },
   {
      title: 'Blog',
      path: '/blog'
   },
   {
      title: 'Contact',
      path: '/contact'
   },
   {
      title: 'My Bookings',
      path: '/my-bookings'
   },

]

export default NavBar;