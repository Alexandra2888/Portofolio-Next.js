import React from 'react';
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

 const About = () => {
  return (
   <section className='bg-white py-20' id='about'>
    <div className='mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-16'>
        <Image src="../../about.svg" alt='about' width={16} height={16} className='w-full h-64'/>
        <article>
            <SectionTitle text='code and coffee'/>
            <p className='text-slate-600 mt-8 leading-loose'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam inventore, aut, repellendus, recusandae necessitatibus molestias sequi quos corrupti officia perferendis a et velit aperiam explicabo esse tempore non sapiente accusamus?
                Amet iure esse, sit reprehenderit eligendi voluptatum fugiat temporibus, minima itaque eius pariatur, doloribus alias molestiae rerum aliquam illum veniam inventore quidem cumque! </p>
        </article>
    </div>
   </section>
  )
}

export default About;