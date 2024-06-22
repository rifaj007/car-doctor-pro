import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServiceCard = ({service}) => {
   const {title, img, price, _id} = service || {}

   return (
      <div className="card w-96 bg-base-100 shadow-xl ">
         <figure className='p-6 pb-0 rounded'>
            <Image src={img} height={205} width={315} alt={title}/>
         </figure>
         <div className="card-body justify-end">
            <h2 className="card-title text-[#444444] font-bold">{title}</h2>
            <div className="card-actions justify-between items-center">
               <h3 className='text-primary text-xl font-semibold'>Price : ${price}</h3>
               <Link href={`/services/${_id}`}><button className="btn btn-primary">View Details</button></Link>
            </div>
         </div>
      </div>
   );
};

export default ServiceCard;