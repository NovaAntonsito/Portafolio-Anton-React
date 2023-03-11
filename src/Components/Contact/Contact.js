import Loader from 'react-loaders'
import './Contact.scss'
import React from 'react'
import Animation from '../AnimatedLetters/Animation'

export default function Contact() {
  return (
    <>
    <div className='container contact-page'>
        <div className='text-zone'>
            <h1>
                <Animation strArray={['C','o','n','t','a','c','a',' ', 'C','o','n','m','i','g','o']} index={15}/>
            </h1>
            <p>
                Estoy interesado en proyectos en back-end, sin embargo puedo adaptarme a front-end sin ningun problema
            </p>
            <p>
                Con ganas de trabajar en equipo y poder ampliarme como persona 
            </p>
        </div>
    </div>
    <Loader type="line-scale"/>
    </>
  )
}

