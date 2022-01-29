import React from 'react'
import { Feature } from '../../components'
import './about.css'

const About = () => {

  const descAquaq = "I originally joined AquaQ as a kdb+ Graduate developer and in the first two months completed AquaQ’s in house training which consisted of kdb+, Linux and Financial training. I was then offered to move to work on a React.js based front-end project where my team is currently developing a web interface for a major global financial services client, where I actively contribute to the current sprint(s). In this time I have also studied and passed my AWS Certified Cloud Practitioner exam.";
  const descPolyloop = "Project lead designing and devloping a new software approach to strategically align policy and funding opportunities through developing actionable framework with powerful insights. (//stack js,d3,html,css,sql,php, replace with links)";
  const descUSI = "Project lead developing a behaviour recognition model to detect and prevent suicide in public space. (python, openCV) //Project lead developing a behaviour recognition model to detect and prevent suicide in public space. (python, openCV)Project lead developing a behaviour recognition model to detect and prevent suicide in public space. (python, openCV)Project lead developing a behaviour recognition model to detect and prevent suicide in public space. (python, openCV)Project lead developing a behaviour recognition model to detect and prevent suicide in public space. (python, openCV)";
  const descQub = "";
  const descLCC = "";
    return (
      <div className="ps__about section__margin" id='about'>
        
          <div className="ps__about-heading">
              <h1 className="gradient__text-light">About me...</h1>
          </div>
          <div id ="flex" className="ps__about-container-education">
            <Feature id="a" title ="Experience" subtitle="AquaQ Analytics" year="Sep '21 - Present" link="https://aquaq.co.uk/" text="Graduate Frontend Developer (React.js)" desc={descAquaq}/>
            <Feature id="b" title="Education"subtitle="Queen's University Belfast" year="2017 - 2021" link="https://www.qub.ac.uk/" text="BSci Mathematics with Computer Science (1st Degrees Honours)" desc={descQub}/>
            <Feature id="c" subtitle="PolyLoop" year="May '20 - Sep '21" link="https://www.polyloop.io/" text="Creating an mvp for ... just adding more real text here to test  that appears " desc={descPolyloop}/>
            <Feature id="d" subtitle="Lumen Christi College" year="2015 - 2017" text="A-Level Software Systems Development, Mathematics, Physics (A*A*A)" desc={descLCC}/>
            <Feature id="e" subtitle="Urban Scale Interventions" year="June '19 - Sep '19" link="https://urbanscaleinterventions.com/" text="Creating a proof of concept for ..." desc={descUSI}/>
          </div>
        
      </div>
    )
}

export default About
