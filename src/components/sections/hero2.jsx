import React,{useState, useEffect} from 'react'
import showReel from '../../assets/images/custom/hero.mp4'
import searchIconSVG from '../../assets/images/custom/searchii.svg'
import Portfolio from './portfolio'
import SlideUp from '../../utlits/animations/slideUp';
import jarvis from "../../assets/images/client-logos/download.png"
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom'
import {TypeAnimation} from 'react-type-animation'
import {ReactTyped} from 'react-typed'
import { projectsData } from '../../utlits/fackData/projectData'

const HeroShowReel=()=>{
    const companies = [
        { id: 'google', name: 'Google', logo: jarvis },
        { id: 'facebook', name: 'Facebook', logo: '../../assets/images/client-logos/download.png' },
        { id: 'amazon', name: 'Amazon', logo: '../../assets/images/client-logos/download.png' },
        // Add more companies as needed
      ];

      const placeholderTexts = "search my works..";
      const [placeholder, setPlaceholder] = useState()
      
      const [currentText, setCurrentText] = useState('');
      const placeholderText = "search my works.."; // Text to type
      const [displayedText, setDisplayedText] = useState("");
      const [index, setIndex] = useState(0);
      const [doSearch, setDoSearch] = useState('')
      const [gotSuggestion, setGotSuggestion] = useState([])

    
      useEffect(() => {
        const speed = 200; // Typing speed
        if (index < placeholderText.length) {
          const typingTimeout = setTimeout(() => {
            setDisplayedText((prev) => prev + placeholderText[index]);
            setIndex((prev) => prev + 1);
          }, speed);
          return () => clearTimeout(typingTimeout);
        } else {
          const resetTimeout = setTimeout(() => {
            setDisplayedText(""); // Clear the placeholder
            setIndex(0); // Reset typing
          }, 2000); // Delay before resetting
          return () => clearTimeout(resetTimeout);
        }
      }, [index, placeholderText]);
    

    //   let currentIndex = 0;
    
    //   useEffect(() => {
    //     const intervalId = setInterval(() => {
    //       currentIndex = (currentIndex + 1) % placeholderTexts.length;
    //       setPlaceholder(`Search ${placeholderTexts[currentIndex]}`);
    //     }, 2000);
    
        
    //     return () => clearInterval(intervalId);  // Clean up interval on component unmount
    //   }, []);
 
  
    const handleSearch = (event)=>{
      event.preventDefault()
      setDoSearch(event.target.value)
      const suggestions = projectsData.find(data=> data.title.startsWith(event.target.value))
      console.log(suggestions)
      setGotSuggestion(prev=> [...prev, suggestions.title])
     
    }
    return(
       <section className='hero-container'>
 
          
            <video  className='hero-video' autoPlay muted loop>
                <source src={showReel}/>
            </video>
    

         <div  className='content-hero'>
          <span className='hero-span'>Editor-Producer-Colorist </span>
          <h1 className='h1-hero'>Cinematic brand stories 
            <br />
            optimized to engage
          </h1>
          <div className='buttons-hero'>
            <div>
            <button className='theme-btns'>My Resume</button>
            </div>
          
         <div className='search-bar-container'>
         <div className="containers">
    <img src={searchIconSVG} alt="icon" class="icon" />
 

    <input type="text"  placeholder={displayedText} class="search" />
    </div>
    <div class="gradient"></div>
   
  
         </div> 
  
          
          </div>
       {/*  */}
          </div>
          
          
       </section>
    )
}

export default HeroShowReel