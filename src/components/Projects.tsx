import React from 'react';
import { projects } from "../../data";
import SectionTitle from "@/components/SectionTitle";
import ProjectsCard, { IProject } from "@/components/ProjectsCard"; 

const Projects = () => {
  return (
    <section className='py-20 mx-auto max-w-7xl px-8' id='projects'>
      <SectionTitle text='web creation' />
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {projects.map((project:IProject) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
