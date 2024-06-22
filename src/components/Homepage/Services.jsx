import React from 'react';
import ServiceCard from '../cards/ServiceCard';
import { getServices } from '@/services/getServices';

const Services = async () => {
   const { services } = await getServices();
   return (
      <div>
         <div className="container mx-auto">
            <div className='text-center'>
               <h3 className='text-2xl font-bold text-orange-600'>Our Services</h3>
               <h2 className='text-5xl '>Our Services Area</h2>
               <p>Progressively re-engineer reliable synergy rather than cross-media intellectual capital</p>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 my-8'>
               { services.length > 0 &&
                  services.map((service) => (
                     <ServiceCard key={service._id} service={service} />
                  ))
               }
            </div>
         </div>
      </div>
   );
};

export default Services;