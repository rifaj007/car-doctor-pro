"use client"
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Page = () => {
   const { data: session, status } = useSession();
   const [bookings, setBookings] = useState([]);

   const loadData = async () => {
      if (session?.user?.email) {
         try {
            const resp = await fetch(`http://localhost:3000/my-bookings/api/${session.user.email}`);
            const data = await resp.json();

            setBookings(data?.booking);
         } catch (error) {
            console.error("Failed to load bookings:", error);
         }
      }
   };

   useEffect(() => {
      if (status === 'authenticated') {
         loadData();
      }
   }, [session, status]);

   const handleDelete = async (id) => {
     const deleted = await fetch(`http://localhost:3000/my-bookings/api/booking/${id}`,{
      method: "DELETE"
     });
     const resp = await deleted.json()
     if(resp?.response?.deletedCount > 0) {
      loadData();
     }
   };

   return (
      <div className='container mx-auto'>
         {/* banner part start */}
         <div
            style={{ backgroundImage: `linear-gradient(45deg, rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(${"/assets/images/about_us/parts.jpg"})` }}
            className="bg-cover bg-no-repeat bg-top h-[300px] relative"
         >
            <div className='flex justify-center items-center h-full'>
               <h2 className='text-5xl font-bold'>Bookings</h2>
            </div>

            <div className='bg-primary text-white py-1 px-7 absolute bottom-0'>
               <h3>Home/My Bookings</h3>
            </div>
         </div>
         {/* banner part end */}

         <div className='my-12 p-12'>
            <div className="overflow-x-auto">
               <table className="table ">
                  {/* head */}
                  <thead className=''>
                     <tr>
                        <th></th>
                        <th>Service Name</th>
                        <th>Price</th>
                        <th>Booking Date</th>
                        <th>Actions</th>
                     </tr>
                  </thead>
                  <tbody className='text-primary'>
                     {bookings?.map((booking, index) => (
                        <tr key={index}>
                           <td>{index + 1}</td>
                           <td>{booking?.serviceTitle}</td>
                           <td>{booking?.price}</td>
                           <td>{booking?.date}</td>
                           <td>
                              <Link href={`/my-bookings/update/${booking?._id}`} className='btn btn-ghost'>Edit</Link>
                              <button onClick={() => handleDelete(booking?._id)} className='btn btn-warning'>Delete</button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default Page;
