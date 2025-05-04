import { useState, useEffect } from 'react'
import {LoadingScreen} from './LoadingScreen'
import './index.css'
import './App.css'
import { About } from './About'
import { AboutMobile } from './AboutMobile'

const projectsData = [
  {
    name: "Whoizit?",
    imageUrl: "/whoizit.png", 
    caption: "Web version of the board game “Guess Who?” with custom sets. Built with react and supabase.",
    webUrl: "https://whoizit.netlify.app/",
    github: "https://github.com/mynavu/Whoizit"
  },
  {
    name: "RedTakes",
    imageUrl: "/redtakes.png", 
    caption: "Analyzes the sentiment of Reddit users using the Reddit and Hugging Face API. Built with react.",
    webUrl: "https://redtakes.netlify.app/",
    github: "https://github.com/mynavu/RedTakes"
  },
  {
    name: "Globit",
    imageUrl: "/globit.png", 
    caption: "Full stack app for users to geotag images onto a personal globe. Built with vanilla JS and Supabase.",
    webUrl: "https://globit.netlify.app/",
    github: "https://github.com/mynavu/Globit-V2"
  },
  {
    name: "Vocabular",
    imageUrl: "/vocabular.png", 
    caption: "Wordle clone for English learners to learn new vocabularies. Built with vanilla JS and D3.",
    webUrl: "https://mynavu.github.io/Vocabular/",
    github: "https://github.com/mynavu/Vocabular"
  },
  {
    name: "Word Cloud for Messages",
    imageUrl: "/wordcloud.png", 
    caption: "Visualizing user's word frequencies from messages. Built with vanilla JS.",
    webUrl: "https://mynavu.github.io/Word-Cloud-for-Messages/",
    github: "https://github.com/mynavu/Word-Cloud-for-Messages"
  },
  {
    name: "Art Portfolio",
    imageUrl: "/art.png", 
    caption: "Includes all my best work across various mediums. Built with vanilla JS.",
    webUrl: "https://mynavu.github.io/art-portfolio/index.html",
    github: "https://github.com/mynavu/art-portfolio"
  }
]


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 3500);
  }, []);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      {isLoaded && (
        <div className={`${isLoaded ? 'unhidden' : 'hidden'}`}>
          {screenWidth > 800 ? (
            <>
              <About currentData={projectsData} onFinishLoading={isVisible} />
            </>
          ) : (
            <>
              <AboutMobile currentData={projectsData} onFinishLoading={isVisible}/>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default App