import Loader from 'react-loaders'
import './Contact.scss'
import React, { useRef, useState, useEffect } from 'react'
import Animation from '../AnimatedLetters/Animation'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faPlay, faPause, faVolumeUp, faHeart, faShuffle, faRepeat } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
    const ref = useRef()
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration] = useState(180) // 3 minutes
    const [volume, setVolume] = useState(75)
    const [isLiked, setIsLiked] = useState(false)

    // Simulate music progress
    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setCurrentTime(prev => {
                    if (prev >= duration) {
                        setIsPlaying(false)
                        return 0
                    }
                    return prev + 1
                })
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [isPlaying, duration])

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
                "service_yps6qyf",
                "template_q6aw5yg",
                ref.current,
                '_D3Ybhi0xw7aekx93'
                )
                .then(
                    () => {
                        alert('Mensaje enviado')
                        window.location.reload(false)
                    },
                    () => {
                        alert('Mensaje no enviado')
                    }
                )
    }

    return (
        <>
        <div className='container contact-page'>
            <div className='spotify-player'>
                <div className='player-header'>
                    <FontAwesomeIcon icon={faSpotify} className='spotify-icon'/>
                    <span className='player-title'>Contact Playlist</span>
                </div>
                
                <div className='now-playing'>
                    <div className='album-art'>
                        <div className='vinyl-record'>
                            <div className='vinyl-center'></div>
                        </div>
                    </div>
                    
                    <div className='track-info'>
                        <h3 className='track-title'>Let's Connect</h3>
                        <p className='artist-name'>Marcos Anton</p>
                        <p className='album-name'>Professional Opportunities</p>
                    </div>
                </div>

                <div className='player-controls'>
                    <div className='control-buttons'>
                        <button className='control-btn'>
                            <FontAwesomeIcon icon={faShuffle} />
                        </button>
                        <button 
                            className='play-btn'
                            onClick={() => setIsPlaying(!isPlaying)}
                        >
                            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                        </button>
                        <button className='control-btn'>
                            <FontAwesomeIcon icon={faRepeat} />
                        </button>
                        <button 
                            className={`like-btn ${isLiked ? 'liked' : ''}`}
                            onClick={() => setIsLiked(!isLiked)}
                        >
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                    </div>

                    <div className='progress-section'>
                        <span className='time-current'>{formatTime(currentTime)}</span>
                        <div className='progress-bar'>
                            <div 
                                className='progress-fill'
                                style={{ width: `${(currentTime / duration) * 100}%` }}
                            ></div>
                        </div>
                        <span className='time-total'>{formatTime(duration)}</span>
                    </div>

                    <div className='volume-section'>
                        <FontAwesomeIcon icon={faVolumeUp} />
                        <div className='volume-bar'>
                            <div 
                                className='volume-fill'
                                style={{ width: `${volume}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='contact-content'>
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
                </div>

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