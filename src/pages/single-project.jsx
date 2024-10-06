import React from 'react'
import PageHeading from '../components/sections/pageHeading'
import ProjectArticle from '../components/sections/projectArticle'
import { ScrollRestoration } from 'react-router-dom'

const SingleProject = () => {
    return (
        <>
        
            <ProjectArticle/>
            {/* <PageHeading
                heading={"A Branch with Flowers"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit utsadi sfejdis aliquam, purus sit amet luctus venenatis, lectus magna sansit trandis fringilla urna, porttitor rhoncus dolor purus non enim dollors praesent tabasi elementum facilisis leo."}
            /> */}
            <ScrollRestoration/>
        </>
    )
}

export default SingleProject