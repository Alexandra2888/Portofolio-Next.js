import React from 'react';
import SectionTitle from "@/components/SectionTitle";
import {skills} from "../../data";
import SkillCard, {ISkill} from '@/components/SkillCard';


 const Skill = () => {
  return (
    <section className='py-20 mx-auto max-w-7xl px-8 ' id='skills'>
    <SectionTitle text='tech stack' />
    <div className='py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
      {skills.map((skill:ISkill) => {
        return <SkillCard key={skill.id} {...skill} />;
      })}
    </div>
  </section>
  )
}

export default Skill;