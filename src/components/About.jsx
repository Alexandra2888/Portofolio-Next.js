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
            <p className='text-slate-600 mt-8 leading-loose'> I am passionate about building software that improves the lives of those around me.</p>
        </article>
    </div>
   </section>
  )
}

export default About;