import React from 'react';

const Banner = () => {
   return (
      <div className='container mx-auto'>
         <div className="carousel w-full h-[600px] mt-12">
            {
               banners.map((banner, index) => (
                  <div key={index} style={{ backgroundImage: `linear-gradient(45deg, rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${index + 1}.jpg)` }} id={`slide${index + 1}`} className="carousel-item relative w-full bg-cover bg-no-repeat bg-top rounded-xl ">
                     <div className='h-full w-full flex items-center pl-36 '>
                        <div className='space-y-6'>
                           <h2 className='text-5xl font-bold '>{banner.title}</h2>
                           <p>{banner.description}</p>
                           <button className='btn btn-primary mr-3'>Discover More</button>
                           <button className='btn btn-primary btn-outline text-white'>Latest Project</button>
                        </div>
                     </div>
                     <div className="absolute flex justify-between bottom-12 right-12">
                        <a href={banner.prev} className="btn btn-circle mr-4">❮</a>
                        <a href={banner.next} className="btn btn-circle">❯</a>
                     </div>
                  </div>
               ))
            }
         </div>
      </div>
   );
};

const banners = [
   {
      title: "Affordable Price For Car Servicing",
      description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide2",
      prev: "#slide4",
   },
   {
      title: "Affordable Price For Car Servicing",
      description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide3",
      prev: "#slide1",
   },
   {
      title: "Affordable Price For Car Servicing",
      description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide4",
      prev: "#slide2",
   },
   {
      title: "Affordable Price For Car Servicing",
      description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide1",
      prev: "#slide3",
   },
]

export default Banner;