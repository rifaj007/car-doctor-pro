"use client"
import { useSession } from 'next-auth/react';
import React, {useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const page = ({params}) => {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const { data } = useSession();
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const [booking, setBooking] = useState([]);
   
   const handleBooking = async () => {
const bookingDetail = await fetch(`http://localhost:3000/my-bookings/api/booking/${params.id}`)
const data = await bookingDetail.json()
setBooking(data.data)
   };

   // eslint-disable-next-line react-hooks/rules-of-hooks
   useEffect(()=>{
      handleBooking()
   }, [params])

   const handleUpdateBooking = async (event) => {
      event.preventDefault()
      const updateBooking = {
         date: event.target.date.value,
         phone: event.target.phone.value,
         address: event.target.address.value
      }
      const resp = await fetch(`http://localhost:3000/my-bookings/api/booking/${params.id}`, {
         method: "PATCH",
         body: JSON.stringify(updateBooking),
         headers: {
            "content-type": "application/json"
         }
      });
      if(resp.status === 200) {
         toast.success("Updated successfully")
      }
   }
   
   return (
      <div className='container mx-auto'>
      {/* banner part start */}
      <div style={{ backgroundImage: `linear-gradient(45deg, rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(${"/assets/images/about_us/parts.jpg"})` }} className="bg-cover bg-no-repeat bg-top h-[300px] relative">
         <div className='flex justify-center items-center h-full'>
            <h2 className='text-5xl font-bold'>Update</h2>
         </div>

         <div className='bg-primary text-white py-1 px-7 absolute bottom-0'>
            <h3>Home/Checkout</h3>
         </div>
      </div>
      {/* banner part end */}

      <div className="my-12 p-12 bg-slate-300">
         <form onSubmit={handleUpdateBooking} className='grid grid-cols-2 gap-4 space-y-2'>
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
               <input defaultValue={booking.date} type="date" name="date" id="date" className="input input-bordered w-full text-primary" />
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
               <input readOnly defaultValue={booking.price} type="number" name="due_amount" id="due_amount" placeholder="Due amount" className="input input-bordered w-full text-primary" />
            </div>

            {/* phone */}
            <div>
               <label htmlFor="phone">Phone</label>
               <br />
               <input defaultValue={booking.phone} type="text" name="phone" id="phone" placeholder="Your Phone" className="input input-bordered w-full text-primary" />
            </div>

            {/*  present address */}
            <div>
               <label htmlFor="address">Present address</label>
               <br />
               <input defaultValue={booking.address} type="text" name="address" id="address" placeholder="Your address" className="input input-bordered w-full text-primary" />
            </div>

            <button className='btn btn-primary w-full col-span-2' type="submit">Update Order</button>
         </form>
      </div>
   </div>
   );
};

export default page;