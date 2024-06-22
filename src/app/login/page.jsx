"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {signIn} from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation';
import SocialSignin from '@/components/shared/SocialSignin';

const page = () => {
   const router = useRouter()
   const searchParams = useSearchParams()
   const path = searchParams.get('redirect')

   const handleLogin = async(e) =>{
      e.preventDefault()
      const email = e.target.email.value
      const password = e.target.password.value

      const resp = await signIn('credentials', {
         email, password, redirect: true, callbackUrl: path? path : "/"
      })

     if(resp.status === 200) {
      router.push("/")
     }
   }

   return (
      <div className='container mx-auto px-14 py-12'>
         <div className='grid grid-cols-2 gap-6'>
            <div className='flex justify-center'><Image src="/assets/images/login/login.svg" width={460} height={500} alt='login image' /></div>
            <div className='border p-12'>
               <h3 className='text-4xl font-semibold text-primary text-center mb-12'>Login</h3>

               <form onSubmit={handleLogin}>
                  <label htmlFor="email">Email</label><br />
                  <input type="email" name="email" placeholder="Your email" className="input input-bordered w-full mt-3 mb-6 text-primary" />

                  <label htmlFor="password">Password</label><br />
                  <input type="password" name="password" placeholder="Your Password" className="input input-bordered w-full mt-3 mb-6 text-primary" />

                  <button type="submit" className='btn btn-primary w-full'>Sign In</button>
               </form>

               <div>
                  <h6 className='text-center py-4'>Or Sign In with</h6>
                  <SocialSignin/>
                  <p className='text-lg text-center py-4'>No Have an account? <Link className='text-primary font-semibold' href={"/signup"}>Sign Up</Link></p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default page;