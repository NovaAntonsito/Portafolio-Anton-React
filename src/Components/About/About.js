import './About.scss'
import React from 'react'
import Animation from '../AnimatedLetters/Animation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact,faNodeJs,faAngular,faSass,faGitAlt, faJsSquare}from'@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

export default function About() {
  return (
    <>
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <Animation
            strArray={['S','o','b','r','e',' ','m','i']}
            index={15} 
          />
          </h1>
          <p>Soy un desarrollador web full-stack que se dedica a estar siempre en constante aprendizaje y trabajo en equipo.
          </p>
          <p> Busco estar actualizado constantemente en las últimas tecnologías, ya que soy naturalmente curioso y me gusta aplicar mis conocimientos en la práctica y expandirlos lo más posible. Además, me ayuda mucho la música para enfocarme. </p>
          <p>Mi especialidad se enfoca en el back-end, donde tengo experiencia en Node.JS y Spring Boot.</p>
      </div>
      <div className='stage-cube-cont'>
       <div className='cube-spinner'>
        <div className='face1'>
          <FontAwesomeIcon icon={faReact} color='#3060f0'/>
        </div>
        <div className='face2'>
          <FontAwesomeIcon icon={faJsSquare} color='#eaed2b'/>
        </div>
        <div className='face3'>
          <FontAwesomeIcon icon={faNodeJs} color='#78eb1a'/>
        </div>
        <div className='face4'>
          <FontAwesomeIcon icon={faAngular} color='#d40f12'/>
        </div>
        <div className='face5'>
          <FontAwesomeIcon icon={faGitAlt} color='#EFD81D'/>
        </div>
        <div className='face6'>
          <FontAwesomeIcon icon={faSass} color='#d40f9c'/>
        </div>
       </div>
      </div>
    </div>
    <Loader type="line-scale"/>
    </>
  )
}
