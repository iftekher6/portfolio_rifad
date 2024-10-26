import React,{useState, useEffect , useRef} from 'react'
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
import { server } from '../../main';
import ReactDOM from 'react-dom'
import moment from 'moment'

const HeroShowReel=()=>{
  
    
    
      const [selectedOption, setSelectedOption] = useState(['Motion Graphics'])
      const placeholderTexts = "search my works..";
      const [placeholder, setPlaceholder] = useState()
      const [currentText, setCurrentText] = useState('');
      const placeholderText = "search my works.."; // Text to type
      const [displayedText, setDisplayedText] = useState("");
      const [index, setIndex] = useState(0);
      const [doSearch, setDoSearch] = useState('')
      const [isFocused, setIsFocused] = useState(false);
      const [typeProject, setTypeProject] = useState(false)
      const [projectsData, setProjectsData] = useState([])
      const [isPortalReady, setIsPortalReady] = useState(false);
      const inputRef = useRef(null);
      
      useEffect(() => {
        console.log('fireddd')
        const dropdownRoot = document.getElementById('dropdown-root');
        const dropdownRoots = document.getElementById('root');
        console.log(dropdownRoot, 'lala')
        console.log(dropdownRoots, 'lalas')
        if (dropdownRoot) {
          setIsPortalReady(true);  // Set portal ready when dropdown-root exists in DOM
        }
      }, []);
    
   
   
    
   
      const calculatePosition = () => {
        if (inputRef.current) {
          const rect = inputRef.current.getBoundingClientRect();
          return {
            top: rect.bottom + window.scrollY,
            left: rect.left + window.scrollX,
            width: rect.width
          };
        }
        return { top: '10px', left: 0, width: '100%' };
      };
    

      const getProjects = async() =>{
          const response = await fetch(`${server}/api/v1/work/upload`)
          const data = await response.json()
          setProjectsData(data.companies)
          // console.log(data.companies)
       }
      
       useEffect(()=>{
           getProjects()
       },[])

    
      // Function to highlight the matching part of each suggestion
      const highlightText = (text, query) => {
        if (!query) return text;
        console.log(text)
        console.log(query)
        const regex = new RegExp(`(${query})`, 'gi');
        console.log(regex)
        const parts = text.split(regex);
        const partswithoutregex = text.split();
        console.log(parts)
        console.log(partswithoutregex)
        return parts.map((part, index) =>
          
          part.toLowerCase() === query.toLowerCase() ? (
            <span key={index} style={{ fontWeight: 'bold', color: 'rgb(196, 240, 0)' }}>
              {part}
            </span>
          ) : (
            part
          )
        );
      };


      // console.log(filter)
      // console.log(filter.map(data=> console.log(data)))
      
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
 
    const handleFocus = () => {
      setIsFocused(true);
    };
  
    const handleBlur = (e) => {
      // Check if the blur event is happening because of clicking on a suggestion
      if (!e.currentTarget.contains(e.relatedTarget)) {
        setIsFocused(false);
      }
    };
    const handleSearch = (event)=>{
      event.preventDefault()
      setDoSearch(event.target.value)
     
      // setGotuggestion(prev=> [...prev, suggestions.title])
     
    }

    const handleSelectedChange = (event)=>{
      event.preventDefault()
      setSelectedOption(event.target.value)
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
            <span>optimized to engage</span>
          </h1>
          <div className='buttons-hero'>
            <div>
            <button className='theme-btns'>My Resume</button>
            </div>
          {/*search bar  */}
         <div className='search-bar-container' ref={inputRef}>
          
       
             
         <div className="containers" >
 
    <img src={searchIconSVG} alt="icon" class="icon" />

    <input type="text"        
  value={doSearch} onBlur={()=> setIsFocused(false)} onFocus={()=> setIsFocused(true)} onChange={handleSearch} placeholder={displayedText}  class="search" />
   
      {/* <div className='project-chooseContainer'>
      <span className='Type-of-projects'>Filter by:</span>
      <span className='btn-search'>
        <button onClick={()=> setTypeProject(true)}>
         {filterText}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
</svg>
         
        </button></span>
      </div> */}
    </div>
    <div class="gradient">
      
    </div>
    {isFocused && isPortalReady && ReactDOM.createPortal(
                <div className="suggestions-container" style={calculatePosition()}>
              
                {projectsData
                  .filter((suggestion, i) =>
                    suggestion.contentType.toLowerCase().includes(doSearch.toLowerCase())
                    ||suggestion.client.client.toLowerCase().includes(doSearch.toLowerCase())
                    ||suggestion.title.toLowerCase().includes(doSearch.toLowerCase())
                    ||suggestion.tools.join('').toLowerCase().includes(doSearch.toLowerCase())
                    // ||suggestion.tools.includes(doSearch.toLowerCase())
                  )
                  .map((suggestions, index) => (
                    <div key={index} className="suggestion-item">
                     <Link to={`/single-project/${suggestions._id}`}>
                     <div className='suggestion-flex'>
                      <div className='suggestion-image'><img src={suggestions.thumbnail} alt="" srcset="" /></div>
                    {/* content area */}
                     <div className='suggestion-content'>
                    
                     <span className='suggestion-title'>{highlightText(suggestions.title, doSearch)}</span>
                      <div>
                        <ul className='suggestions-ul'>
                        <li>{highlightText(suggestions.client.client, doSearch)}</li> 
                          {/* <li>{highlightText(suggestions.contentType, doSearch)} · </li>  */}
                          <li>{highlightText(suggestions.contentType, doSearch)}</li> 
                          <li>{moment(suggestions.date).format("YYYY")}</li> 
                       
                          {/* <li></li>  */}
                         
                          </ul>
                          <div className='suggestion-tools'>
                            {suggestions.tools.map((tool)=>(
                              <li>{highlightText(tool, doSearch)}</li>
                            ))}
                          </div>
                        </div>    
                      </div>
                     </div>
                    
                
                     </Link>
                    </div>
                   
                  ))} 
                 
          </div>,
           document.getElementById('dropdown-root') // Target the specific DOM element   
       
                  
        )
        }

          </div>
      
      
 
          
     
             {typeProject &&(
            
            <div className="suggestions-container">
              
            <div key={index} className="suggestion-item">
              {arr.map((data,index)=> (
                <li style={{color: data === index?  'green' : '' }} onClick={()=> setFilterText(data)}>{data}</li>
              ))}
             <div className='searchResults-div'>
           
             </div>
          
             
            </div>
          
  </div>
        )}
          
                  

    
         </div> 
       {/*  */}
          </div>
          
          
       </section>
    )
}

export default HeroShowReel