import { useState, useEffect } from 'react'
import './index.css'
import './App.css'
import { About } from './About'
import { AboutMobile } from './AboutMobile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Projects } from './Projects'

const projectsData = [
  {
    name: "Summarizzler",
    imageUrl: "/summarizzler.png", 
    videoUrl: "/summarizzlerVideo1.gif",
    caption: "AI powered web extension that give text summaries using Gen Alpha dialect.",
    webUrl: "https://github.com/mynavu/Summarizzler",
    github: "https://github.com/mynavu/Summarizzler",
    underConstruction: false,
    tags: ["Gemini API", "Web Extension", "JavaScript"]
  },
  {
    name: "Whoizit?",
    imageUrl: "/whoizit.png", 
    videoUrl: "/whoizitVideo.gif",
    caption: "Web version of the board game “Guess Who?” with customizable sets and realtime connection.",
    webUrl: "https://whoizit.netlify.app/",
    github: "https://github.com/mynavu/Whoizit",
    underConstruction: false,
    tags: ["React", "Supabase", "PostgreSQL", "TailwindCSS", "Realtime"]
  },
  {
    name: "RedTakes",
    imageUrl: "/redtakes.png", 
    videoUrl: "/vocabularVideo.gif",
    caption: "Tool that takes inputs (keyword, subreddit, flare) and analyzes the sentiment of Reddit users, then visualizes it with a pie chart.",
    webUrl: "https://redtakes.netlify.app/",
    github: "https://github.com/mynavu/RedTakes",
    underConstruction: true,
    tags: ["React", "TailwindCSS", "HuggingFace API", "Reddit API"]
  },
  {
    name: "Globit",
    imageUrl: "/globit.png", 
    videoUrl: "/globitVideo.gif",
    caption: "Full stack CRUD app for users to geotag images onto a personal globe + collectable digital stamps for each post on a siginificant region.",
    webUrl: "https://globit.netlify.app/",
    github: "https://github.com/mynavu/Globit-V2",
    underConstruction: false,
    tags: ["Supabase", "PostgreSQL", "JavaScript", "MapBox API"]
  },
  {
    name: "Vocabular",
    imageUrl: "/vocabular.png", 
    videoUrl: "/vocabularVideo.gif",
    caption: "Wordle clone for English learners to learn new vocabularies + store them for review.",
    webUrl: "https://mynavu.github.io/Vocabular/",
    github: "https://github.com/mynavu/Vocabular",
    underConstruction: false,
    tags: ["JavaScript","Dictionary API", "Unsplash API"]
  },
  {
    name: "Word Cloud for Messages",
    imageUrl: "/wordcloud.png", 
    videoUrl: "/wordCloudVideo.gif",
    caption: "Visualizing user's word frequencies from their Instagram or Facebook messages with a word cloud.",
    webUrl: "https://mynavu.github.io/Word-Cloud-for-Messages/",
    github: "https://github.com/mynavu/Word-Cloud-for-Messages",
    underConstruction: false,
    tags: ["JavaScript","D3.js"]
  }
]


function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route index element={
            screenWidth > 800 ? (
            <About currentData={projectsData} />
            ) : (
            <AboutMobile currentData={projectsData} />
            )}
          />
          <Route path="/Projects" element={<Projects currentData={projectsData}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App