import React from 'react'
import ProjectInfo from '../component/projectInfo'
import { Data } from '../data'

function Projects() {
  return (
    <div id='project' className='flex flex-col bg-cover project-section items-center min-h-screen bg-img-3 '>
        <h1 className='p-4 pt-25 text-5xl text-center text-white font-ubuntu'>My Projects</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 card gap-10">
            {
              Data.map((data, index) => 
                <ProjectInfo name={data.projectName} key={index} 
                  description={data.projectInfo} challenges={data.challenges} 
                  image={data.projectImage} tech={data.projectStack()} 
                  features={data.features()} github={data.githubLink} website={data.websiteLink}/>
              )
            }
        </div>
    </div>
  )
}
               
export default Projects
