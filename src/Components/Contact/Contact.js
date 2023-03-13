import Loader from 'react-loaders'
import './Contact.scss'
import React, { useRef } from 'react'
import Animation from '../AnimatedLetters/Animation'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const ref = useRef()

    const sendEmail = (e) =>{
        e.preventDefault()

        emailjs.sendForm(
                "service_yps6qyf",
                "template_q6aw5yg",
                ref.current,
                '_D3Ybhi0xw7aekx93'
                )
                .then(
                    () =>{
                        alert('Mensaje enviado')
                        window.location.reload(false)
                    },
                    () =>{
                        alert('Mensaje no enviado')
                    }
                )
        }
            
  return (
    <>
    <div className='container contact-page'>
        <div className='text-zone'>
            <h1>
                <Animation strArray={['C','o','n','t','a','c','t','a',' ', 'C','o','n','m','i','g','o',]} index={15}/>
            </h1>
            <p>
            Mi principal interés está en proyectos de back-end, aunque tengo la capacidad de adaptarme sin problemas a proyectos de front-end.
            </p>
            <p>
            Me considero una persona proactiva y siempre dispuesta a trabajar en equipo.
            </p>
            <p>
            Me apasiona aprender cosas nuevas y crecer tanto a nivel profesional como personal. Estoy en busca de nuevas oportunidades para ampliar mis habilidades y conocimientos.
            </p>
            <div className='contact-form'>
                <form ref={ref} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type='text' name='name' placeholder='Nombre' required/>
                        </li>
                        <li className='half'>
                            <input type='text' name='email' placeholder='Email' required/>
                        </li>
                        <li>
                            <input type='text' name='subject' placeholder='Remitente' required />
                        </li>
                        <li>
                            <textarea placeholder='Mensaje' name='message' required/>
                        </li>
                        <li>
                            <input type='submit' placeholder='Enviar' name='send' className='flat-button'/>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    </div>
    <Loader type="line-scale"/>
    </>
  )
}

