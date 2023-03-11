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
          <p>Soy un desarrollador web full-stack que necesita estar constantemente aprendiendo y
          trabajando en equipo. Siempre buscando estar actualizando mis conocimientos en la Tecnologia
          </p>
          <p>Naturalmente curioso, buscando aplicar mis conocimientos en practicas y 
            expanderme en todo lo posible, siempre acompañado de musica para enfocarme</p>
          <p>Mi especialidad es el back-end tanto como en Node.JS, Spring Boot</p>
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
