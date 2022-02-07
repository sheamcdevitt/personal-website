import React from 'react'
import { Feature } from '../../components'
import './about.css'
import {
  linkedin,
  twitter,
  computer,
  github,
  kx,
  html,
  js,
  css,
  linux,
  react,
  csharp,
  cplusplus,
  sql,
  java,
  python,
  opencv,
  d3,
} from './import'


const About = () => {

  const descAquaq = "I originally joined AquaQ as a kdb+ Graduate developer and in the first two months completed AquaQ’s in house training which consisted of kdb+, Linux and Financial training. I was then offered to move to work on a React.js based front-end project where my team is currently developing a web interface for a major global financial services client, where I actively contribute to the current sprint(s). In this time I have also studied and passed my AWS Certified Cloud Practitioner exam.";
  const descPolyloop = "Project lead designing and developing a new SaaS approach to strategically align policy and funding opportunities through developing an actionable framework with powerful insights. The project required self-learning d3.js, a data visualisation library to display complex and interactive models. The project was supported by a SQL database.";
  const descUSI = "Project lead developing and training a behaviour recognition model to detect custom behaviours in public space. The project required learning the YOLO (you only look once) computer vision library and training it with a custom dataset. The project was developed in Python.";
  const descQub = "Bachelor of Science degree in Mathematics and Computer Science. The degree covered mathematical modules such as Stochastic Calculus, Binomial Modules as well as Financial mathematics (Black-Scholes, Financial basics.) Over the years I also completed a Java group project (managed by GitLab) where we developed a card game, a MatLab computer vision group project where we trained a machine-learning algorithm. Other modules included C++ and a Python deep learning module. ";
  const descLCC = "During my A-Levels I took Mathematics, Physics and Software Systems Development. Over the two years, I developed a C# and SQL database application where users could create, update, read and delete their own data. I also developed a C# clone of Connect Four. Both projects had extensive testing and documentation and was approached with Agile methodology. These years were foundational to my coding understanding, especially object orientated programming.";

  const stackListAquaq = [react, js, html, css, linux, kx]
  const stackListQub = [java, python, cplusplus];
  const stackListPolyLoop = [js,  html, css, d3,sql];
  const stackListLCC = [csharp, sql];
  const stackListUSI = [python, opencv];

    return (
      <div className="ps__about section__margin" id='about'>
        
          <div className="ps__about-heading">
              <h1 className="gradient__text-light">About me...</h1>
          </div>
          <div id ="flex" className="ps__about-container-education">
            <Feature id="a" title ="Experience" subtitle="AquaQ Analytics" year="Sep '21 - Present" link="https://aquaq.co.uk/" text="Graduate Frontend Developer (React.js)" desc={descAquaq} stackList={stackListAquaq}/>
            <Feature id="b" title="Education"subtitle="Queen's University Belfast" year="2017 - 2021" link="https://www.qub.ac.uk/" text="BSci Mathematics with Computer Science (1st Degrees Honours)" desc={descQub} stackList={stackListQub}/>
            <Feature id="c" subtitle="PolyLoop" year="May '20 - Sep '21" link="https://www.polyloop.io/" text="Project lead developing MVP for Saas Platform" desc={descPolyloop} stackList={stackListPolyLoop}/>
            <Feature id="d" subtitle="Lumen Christi College" year="2015 - 2017" text="A-Level Software Systems Development, Mathematics, Physics (A*A*A)" desc={descLCC} stackList={stackListLCC}/>
            <Feature id="e" subtitle="Urban Scale Interventions" year="June '19 - Sep '19" link="https://urbanscaleinterventions.com/" text="Project lead developing behavioural recognition application" desc={descUSI} stackList={stackListUSI}/>
          </div>
        
      </div>
    )
}

export default About
