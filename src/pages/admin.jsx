import React, { useEffect, useState } from 'react'
import TagInput from '../components/ui/tags'
import axios from 'axios'
import { server } from '../main'

function Admin() {

  const [client, setClient] = useState('')
  const [clientIcon, setClientIcon] = useState('')
 
  

  const [company, setCompany] = useState(['artcell', 'warfaze'])
  const [isClientExists, setIsClientExists] = useState(true)

    
  const [clientDetails, setClientDetails] = useState([])
  const [loading, setLoading] = useState(false)
  console.log(loading ? 'data' : 'noData')


  const [formdata, setFormdata] = useState({
       client: '',
       icon : null,
       title : '',
       date : '',
       description: '',
       copy: '',
       brief : '',
       tools : [],
       keywords : [],
       thumbnail : null,
       video : null, 
       contentType : ''


  })
 console.log(formdata.keywords)
 console.log(formdata.tools)
  console.log({formdata})

  
  
  const handleOnChange = (event)=> {
    event.preventDefault()
    setFormdata({
      ...formdata,
      [event.target.name] : event.target.value
    })
  }

  const handleFiles = (event)=>{
    event.preventDefault()
    setFormdata({
      ...formdata,
      [event.target.name] : event.target.files[0]
    })
  }

 
 
  const formData = new FormData()
  formData.append('client', formdata.client)
  formData.append('icon', formdata.icon)
  formData.append('title', formdata.title)
  formData.append('description', formdata.description)
  formData.append('copy', formdata.copy)
  formData.append('brief', formdata.brief)
  formData.append('tools', formdata.tools)
  formData.append('keywords', formdata.keywords)
  formData.append('date',formdata.date)
  formData.append('video', formdata.video)
  formData.append('thumbnail', formdata.thumbnail)
  formData.append('contentType', formdata.contentType)

  const handleOnClick = ()=>{
    setIsClientExists(!isClientExists)
  } 

 const getClientDetails = async()=>{
   try {
    const {data} = await axios.get(`${server}/api/v1/company/getClientDetails`)
    // console.log(response.data.clients.map(client=> client.client))
    const clientName = data.clients.map(client=> client.client)
    setClientDetails(clientName)

    
   } catch (error) {
      console.log(error)
   }
 }
 useEffect(()=>{
  getClientDetails()
 },[])
//  console.log(Array.from(formdata.client).map((value)=> console.log(val)))

  const handleSubmit =async(e)=>{
    e.preventDefault()
     try {
      setLoading(true)
      const response = await axios.post(`${server}/api/v1/work/upload`, formData ,
       {
       headers: {
        'Content-Type': 'multipart/form-data',

      }})
      
      console.log(response.data)
      setLoading(false)
      console.log('data sent')
     } catch (error) {
      setLoading(false)
      console.log(error)
     }
    
    
    
    
  }
  return (
    <div className='admin-area'>
        <div className='container'>
            <div className='container-inner'>

            <h2 className='h2-admin'>Admin Panel</h2>
           <form onSubmit={handleSubmit}>
           <div className='input-group'>

{isClientExists ? 
<div className='input-box'>
<label for="client" onClick={()=> handleOnClick()}>client name or create new?</label>
<select id="client" className='admin-input' name='client' value={formdata.client} onChange={handleOnChange}> 
<option selected className='option-choose'>Choose a Company</option>
{

clientDetails.map(name=> (
<option className='option-choose' value={name}>
{name}
</option>
))
}
</select> 
</div>
:  <div className='input-box'>
<label htmlFor="client" onClick={()=> handleOnClick()}>Client</label>
<input type="text" id="client" name="client" value={formdata.client} onChange={handleOnChange} className="admin-input" defaultValue="" placeholder="aegon" required="" data-error="Please enter your Name" />
</div>
}


<div className='input-box'>
<label htmlFor="date">Date</label>
<input type="date"  id="date" name="date" value={formdata.date}  onChange={handleOnChange} className="admin-input"  />
</div>
</div>

<div className='input-box'>
<label htmlFor="title" className='label-class'>Title</label>
<textarea name='title' className='admin-input-textarea' value={formdata.title} onChange={handleOnChange} rows='1' ></textarea>
</div>

<div className='input-box'>
<label htmlFor="description" className='label-class'>Description</label>
<textarea name='description' value={formdata.description} onChange={handleOnChange} className='admin-input-textarea' rows='2' ></textarea>
</div>

<div className='input-box'>
<label htmlFor="brief" className='label-class'>Brief</label>
<textarea name='brief' value={formdata.brief} onChange={handleOnChange} className='admin-input-textarea' rows='2' cols='10'></textarea>
</div>

<div className='input-box'>
<label htmlFor="copy" className='label-class'>Copy</label>
<textarea name='copy' value={formdata.copy} onChange={handleOnChange} className='admin-input-textarea' rows='2' cols='10'></textarea>
</div>


<TagInput label='tools' name='tools' tags={formdata.tools} formdata={formdata} setTags={setFormdata} />
<TagInput label='keywords'  name ='keywords' tags={formdata.keywords} formdata={formdata} setTags={setFormdata} />
{/* <TagInput label='keywords' tags={formdata.keywords} setTags={setFormdata}/> */}






<div className='input-group'>




</div>

<div className='input-box'>
<label className='label-class' htmlFor="contentType">Content Type</label>
<input type="text" id="contentType" name="contentType" value={formdata.contentType}
 onChange={handleOnChange}         className="admin-input-contentype " defaultValue="" placeholder="aegon" required="" data-error="Please enter your Name" />
</div>


{/* file upload section */}

<div className='input-box-file'>
<label htmlFor="thumbnail" className='file-labels'>Thumbnail Upload</label>
<input type="file" id="thumbnail" name="thumbnail" onChange={handleFiles} className="file
"/>
</div>
<div className='input-box-file'>
<label htmlFor="video" className='file-labels'>Video Upload</label>
<input type="file" id="video" name="video"  onChange={handleFiles} className="file"/>
</div>

{
!isClientExists &&
<div className='input-box-file' >
<label htmlFor="icon" className='file-labels' >Client Icon</label>
<input type="file" id="icon" name="icon" onChange={handleFiles}  className="file"/>
</div>
}







<div className='btn'>
<button className='theme-btn'>{loading ? 'loading...' : 'Submit'}</button>
</div>



           </form>
          

   
            </div>
        
 
        
        </div>
     

    </div>
  )
}

export default Admin