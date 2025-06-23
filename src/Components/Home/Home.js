import { Link } from 'react-router-dom'
import './Home.scss'
import React, { useEffect, useState } from 'react'
import Animation from '../AnimatedLetters/Animation'
import LogoDev from '../../Assets/images/LogoDev.png'
import Loader from 'react-loaders'

export default function Home() {
    const [letterClass, setLetterClass] = useState('Animation')
    const nameArray = [' ','M','a','r','c','o','s',' ','A','n','t','o','n']
    const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r']
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('Animation-hover')
        }, 4000)
        
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <div className='container home-page'>
                <div className='cyber-float'></div>
                <div className='cyber-float'></div>
                <div className='cyber-float'></div>
                
                <div className='text-zone'>
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>o</span>
                        <span className={`${letterClass} _13`}>l</span>
                        <span className={`${letterClass} _14`}>a</span>
                        <span className={`${letterClass} _15`}>,</span>
                        <br/>
                        <span className={`${letterClass} _16`}>s</span>
                        <span className={`${letterClass} _17`}>o</span>
                        <span className={`${letterClass} _18`}>y</span>
                        <div className="glitch-text">
                            <Animation letterClass={letterClass} strArray={nameArray} index={19} />
                        </div>
                        <br/>
                        <Animation letterClass={letterClass} strArray={jobArray} index={22} />
                    </h1>
                    <h2>Desarrollador Web Full Stack</h2>
                    <h2>Especialista en Back-End / Experto en JS y Java</h2>
                    <Link to="/contactme" className='flat-botton'>Contacta conmigo!</Link>
                </div>
                
                <img src={LogoDev} alt='developer' className='dev'/>
            </div>
            <Loader type="line-scale"/>
        </>
    )
}