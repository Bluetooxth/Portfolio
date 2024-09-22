"use client"
import React, {useEffect} from 'react'
import ProjectsPage from '@/components/ProjectsPage'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {

    useEffect(() => {
        AOS.init({
          duration: 500,
          once: false,
          easing: 'ease-in-out-back',
          mirror: false,
        });
      }, []);

  return (
    <React.Fragment>
        <ProjectsPage />
    </React.Fragment>
  )
}

export default Projects