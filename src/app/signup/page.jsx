"use client"
import SocialSignin from '@/components/shared/SocialSignin';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {

   const handleSignup = async(e) =>{
      e.preventDefault()  
      const newUser = {
         name: e.target.name.value,
         email: e.target.email.value,
         password: e.target.password.value,
      }
      const resp = await fetch("http://localhost:3000/signup/api", {
         method: "POST",
         body: JSON.stringify(newUser),
         headers: {
            "content-type" : "application/json"
         }
      })
      console.log(resp);
      if(resp.status === 200) {
         e.target.reset()
      }
   }
 
   return (
      <div className='container mx-auto px-14 py-12'>
      <div className='grid grid-cols-2 gap-6'>
         <div className='flex justify-center'><Image src="/assets/images/login/login.svg" width={460} height={500} alt='login image' /></div>
         <div className='border p-12'>
            <h3 className='text-4xl font-semibold text-primary text-center mb-12'>Sign Up</h3>

            <form onSubmit={handleSignup}>
               <label htmlFor="name">Name</label><br />
               <input type="text" name="name" id='name' placeholder="Your name" className="input input-bordered w-full mt-3 mb-6 text-primary" />

               <label htmlFor="email">Email</label><br />
               <input type="email" name="email" id='email' placeholder="Your email" className="input input-bordered w-full mt-3 mb-6 text-primary" />

               <label htmlFor="password">Password</label><br />
               <input type="password" name="password" id='password' placeholder="Your Password" className="input input-bordered w-full mt-3 mb-6 text-primary" />

               <button type="submit" className='btn btn-primary w-full'>Sign Up</button>
            </form>

            <div>
               <h6 className='text-center py-4'>Or Sign In with</h6>
               <SocialSignin/>
               <p className='text-lg text-center py-4'>Already Have an account? <Link className='text-primary font-semibold' href={"/login"}>Login</Link></p>
            </div>
         </div>
      </div>
   </div>
   );
};

export default page;