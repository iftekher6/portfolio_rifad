import React, { useState } from 'react'
import workScribble from "../../assets/images/custom/work-scribble.svg"
import { projectsData } from '../../utlits/fackData/projectData'
import ImageSlider from '../ui/imageSlider';
import { Link } from 'react-router-dom';
import cat from '../../assets/images/custom/cat.png'

const Portfolio = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openSlider = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeSlider = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className="projects-area" id="portfolio">
                <div className="custom-icon">
                    <img src={workScribble} alt="custom" />
                </div>
                <div className="container-fluid">
                    <div className="row g-2 ">
                        {projectsData.map(({ category, id, size, src, title }, index) => {
                            return (
                                <div key={id} className={`${size && "col-md-4 col-xl-4"} `}>
                                    <div className="work-popup">
                                        <div onClick={() => openSlider(index)} className="portfolio-box">
                                            <img src={cat} alt="" data-rjs="2" />
                                            <span className="portfolio-category">{category}</span>
                                            <h1 className="portfolio-caption"><Link to={"/single-project"} >{title}</Link></h1>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <ImageSlider images={projectsData} isOpen={isOpen} onClose={closeSlider} currentIndex={currentIndex} />
        </>
    )
}

export default Portfolio

