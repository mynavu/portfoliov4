import { Github, ExternalLink } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import MagnetLines from './MagnetLines';

import { useState, useEffect } from 'react';

export const Projects = ({ currentData }) => {
    return (
        <div>
            <MagnetLines
            rows={20}
            columns={20}
            containerSize="10vmin"
            lineColor="black"
            lineWidth="0.2vw"
            lineHeight="3vh"
            baseAngle={0}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                margin: 0,
                zIndex: 1, // Behind content
                pointerEvents: "none", // Allow clicks to pass through
            }}
            />
                    <nav className='nav'>
                        <div className='logo'>
                            <a className='specialFont' href='/'>M</a>
                        </div>
                        <div className='flex flex-row items-center gap-30 navSec'>
                            <a className='about' href='/'>about</a>
                            <a className='projects' href="/Projects">projects</a>
                        </div>
                    </nav>
                    <div className="projectsContainer">
                            {currentData.map(data => (
                                <SpotlightCard className="custom-spotlight-card card">
                                    <div className="img-wrapper">
                                        {data.underConstruction ? 
                                        <>
                                            <img className='img underConstruction' src="underConstruction.png"/>
                                            <img className='img' src={data.imageUrl}/>
                                        </>
                                        :
                                        <>
                                            <img className='img normal' id={data.name} src={data.imageUrl}></img>
                                            <img className='img hover' src={data.videoUrl}></img>
                                        </>
                                        }
                                    </div>
                                    <div className='projectTitle'>
                                        <h4 className='titleFont center white'>{data.name}</h4>
                                        {data.underConstruction ? 
                                        <>
                                            <div className='projectLinks'>
                                                <a className='invalidLink'><ExternalLink className="bi bi-box-arrow-up-right"/></a>
                                                <a className='invalidLink'><Github className="bi bi-github" /></a>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className='projectLinks'>
                                            <a href={data.webUrl} target="_blank"><ExternalLink className="bi bi-box-arrow-up-right"/></a>
                                            <a href={data.github} target="_blank"><Github className="bi bi-github" /></a>
                                            </div>
                                        </>
                                        }
                                    </div>
                                    <p className='small thin padding'>{data.caption}</p>
                                    <div className="tagList padding">
                                    {data.tags.map(tag => (
                                        <p className='tag'>{tag}</p>
                                    ))}
                                    </div>
                                </SpotlightCard>
                            ))}
                </div>
                <div className='footer'>
                    <p className='credits'>made with <i className="bi bi-heart-fill pink"></i> and <i className="fa-brands fa-react cyan"></i></p>
                    <h5 className=''>2025 © myna vu</h5>
                </div>
        </div>
    )
}