import { getServiceDetails } from '@/services/getServices';
import Link from 'next/link';
import React from 'react';

export const metaData = {
   title: "Service Details",
   description: "Service Details page"
}

const page = async({params}) => {
   const details = await getServiceDetails(params.id)
   const {_id, title, description, img, price, facility } = details.service || {}
   return (
      <div className="container mx-auto">
         {/* banner part start */}
         <div style={{ backgroundImage: `linear-gradient(45deg, rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(${img})` }} className="bg-cover bg-no-repeat bg-top h-[300px] relative">
            <div className='flex justify-center items-center h-full'>
               <h2 className='text-5xl font-bold'>Service Details</h2>
            </div>

            <div className='bg-primary text-white py-1 px-7 absolute bottom-0'>
               <h3>Home/Service Details</h3>
            </div>
         </div>
         {/* banner part end */}

      <h3>Title: {title}</h3>
      <p>Description: {description}</p>
      <p>price: {price}</p>
      <div>Facility: {facility.map((item,index) => {
         <div key={index}>
            <h1>{item?.name}</h1>
            <p>{item?.details}</p>
         </div>
      })}</div>

      <div>
         <Link href={`/checkout/${_id}`} className='btn btn-primary'>Checkout</Link>
      </div>
      </div>
   );
};

export default page;