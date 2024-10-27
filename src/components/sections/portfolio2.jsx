import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RiArrowRightUpLine } from '@remixicon/react'
// import { projectsData } from '../../utlits/fackData/projectData'
import SlideUp from '../../utlits/animations/slideUp';
import { server } from '../../main';
import moment from 'moment';

const animations = ['slideIn', 'fadeIn', 'scaleUp'];

const getRandomAnimation = () => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
};

const Portfolio2 = ({ className }) => {
    const [category, setCategory] = useState('All');
    const [animationClass, setAnimationClass] = useState('');


    const [projectsData, setProjectsData] = useState([])
    const [page, setPage] = useState(2)

    const getProjects = async() =>{
        const response = await fetch(`${server}/api/v1/work/upload?page=${page}`)
        const data = await response.json()
        setProjectsData(prev=> [...prev, ...data.companies])
        console.log(data.companies)
     }
    
     useEffect(()=>{
         getProjects()
     },[page])
     const handleCategoryClick = (item) => {
     setCategory(item)
        const randomAnimation = getRandomAnimation();
        setAnimationClass(randomAnimation);
    }


    const handlePagination = ()=>{
        setPage(prev=> prev + 1)
    }
 

    return (
        <section id="portfolio" className={`projects-area ${className}`}>
            <div className="container">
                <div className="container-innerPortfolio">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <h2>Works & Projects</h2>
                                    <p>Check out some of my design projects, meticulously crafted with love and dedication,
                                        each one reflecting the passion and soul I poured into every detail.</p>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
             
                    <div className="row project-masonry-active overflow-hidden">
                        {projectsData.map((project,id) => <Card key={id} _id={project._id} id={id} category={project.contentType} src={project.thumbnail} title={project.title}  client={project.client.client} tools={project.tools}   animationClass={animationClass} date={project.date} />)}

                    </div>
                    <button onClick={handlePagination} className='pagination-btn'>Show more</button>
                </div>
            </div>
        </section>
    )
}

export default Portfolio2


const Card = ({ category, title, src, animationClass, _id , id, date ,tools}) => {
    return (
        <div className={`col-lg-4 col-md-6 item branding game ${animationClass}`}>
            <SlideUp delay={id}>
                <div className="project-item">
                    <div className="project-image">
                        <img src={src} alt="Project" className='project-img' />
                        <Link to={`/single-project/${_id}`} className="details-btn"><RiArrowRightUpLine /> </Link>
                    </div>
                    <div className="project-content">
                        <span className="sub-title">{category}</span>
                        <h3 title={title}>{title}</h3>
                        <div className="suggestion-tools">
                            {tools.map(tool=> (
                                <li>{tool}</li>
                            ))}
                          </div>
                          <span className='project-date'>{moment(date).year()}</span>
                    </div>
                </div>
            </SlideUp>
         </div>
    )
}

