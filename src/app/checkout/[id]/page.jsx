"use client"
import { getServiceDetails } from '@/services/getServices';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Checkout = ({ params }) => {
const {data} =useSession()
   const [service, setService] = useState({})
   const loadService = async () => {
      const details = await getServiceDetails(params.id)
      setService(details.service)
   }

   // const details = await getServiceDetails(params.id)
   const { _id, title, description, img, price, facility } = service || {}

   const handleBooking = async (event) => {
      event.preventDefault()
      const newBooking = {
         email: data?.user?.email,
         name: data?.user?.name,
         address: event.target.address.value,
         phone: event.target.phone.value,
         date: event.target.date.value,
         serviceTitle: title,
         serviceId: _id,
         price
      }

      const resp = await fetch('http://localhost:3000/checkout/api/new-booking', {
         method: "Post",
         body: JSON.stringify(newBooking),
         headers: {
            "conent-type": "application/json"
         }
      })

      const response = await resp?.json()
      toast.success(response?.message)
      event.target.reset()
   }

   useEffect(() => {
      loadService()
   }, [params.id])


   return (
      <div className='container mx-auto'>
         {/* banner part start */}
         <div style={{ backgroundImage: `linear-gradient(45deg, rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(${img})` }} className="bg-cover bg-no-repeat bg-top h-[300px] relative">
            <div className='flex justify-center items-center h-full'>
               <h2 className='text-5xl font-bold'>Checkout</h2>
            </div>

            <div className='bg-primary text-white py-1 px-7 absolute bottom-0'>
               <h3>Home/Checkout</h3>
            </div>
         </div>
         {/* banner part end */}

         <div className="my-12 p-12 bg-slate-300">
            <form onSubmit={handleBooking} className='grid grid-cols-2 gap-4 space-y-2'>
               {/* name */}
               <div>
                  <label htmlFor="name">Name</label>
                  <br />
                  <input defaultValue={data?.user?.name} type="text" name="name" id="name" placeholder="Your Name" className="input input-bordered w-full text-primary" />
               </div>

               {/* date */}
               <div>
                  <label htmlFor="date">Date</label>
                  <br />
                  <input defaultValue={new Date().getDate()} type="date" name="date" id="date" className="input input-bordered w-full text-primary" />
               </div>

               {/* email */}
               <div>
                  <label htmlFor="email">Email</label>
                  <br />
                  <input defaultValue={data?.user?.email} type="email" name="email" id="email" placeholder="Your Email" className="text-primary input input-bordered w-full" />
               </div>

               {/* due amount */}
               <div>
                  <label htmlFor="due_amount">Due amount</label>
                  <br />
                  <input readOnly defaultValue={price} type="number" name="due_amount" id="due_amount" placeholder="Due amount" className="input input-bordered w-full text-primary" />
               </div>

               {/* phone */}
               <div>
                  <label htmlFor="phone">Phone</label>
                  <br />
                  <input type="text" name="phone" id="phone" placeholder="Your Phone" className="input input-bordered w-full text-primary" />
               </div>

               {/*  present address */}
               <div>
                  <label htmlFor="address">Present address</label>
                  <br />
                  <input type="text" name="address" id="address" placeholder="Your address" className="input input-bordered w-full text-primary" />
               </div>

               <button className='btn btn-primary w-full col-span-2' type="submit">Confirm Order</button>
            </form>
         </div>
      </div>
   );
};

export default Checkout;