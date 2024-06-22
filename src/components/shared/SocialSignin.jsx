"use client"
import { signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialSignin = () => {
   const router = useRouter()
   const session = useSession()
   const searchParams = useSearchParams()
   const path = searchParams.get('redirect')

   const handleSocialLogin = (provider) => {
      const resp =  signIn(provider, {redirect: true, callbackUrl: path ? path : "/"})
   }
   
   if(session.status === 'authenticated') {
      router.push('/')
   }

   return (
      <div className='flex gap-6 justify-center'>
         <button onClick={()=> handleSocialLogin('google')} className='btn py-3 px-6 flex justify-center items-center text-primary'><FaGoogle /></button>

         <button onClick={()=> handleSocialLogin('github')} className='btn py-3 px-6 flex justify-center items-center text-primary'><FaGithub /></button>
      </div>
   );
};

export default SocialSignin;