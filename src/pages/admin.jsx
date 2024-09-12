import React from 'react'
import TagInput from '../components/ui/tags'

function Admin() {
  return (
    <div className='admin-area'>
        <div className='container'>
            <div className='container-inner'>

            <h2 className='h2-admin'>Admin Panel</h2>
            <div className='input-group'>
            <div className='input-box'>
            <label htmlFor="name">Title</label>
            <input type="text" id="name" name="name" className="admin-input" defaultValue="" placeholder="aegon" required="" data-error="Please enter your Name" />
            </div>

           
            <div className='input-box'>
            <label htmlFor="name">Content Type</label>
            <input type="text" id="name" name="name" className="admin-input" defaultValue="" placeholder="aegon" required="" data-error="Please enter your Name" />
            </div>
            </div>

            <TagInput label='Keyword'/>
            <TagInput label='Tools'/>

            <div className='input-group'>
            <div className='input-box'>
            <label htmlFor="name">Title</label>
            <input type="text" id="name" name="name" className="admin-input" defaultValue="" placeholder="aegon" required="" data-error="Please enter your Name" />
            </div>

           
            <div className='input-box'>
            <label htmlFor="name">Content Type</label>
            <input type="text" id="name" name="name" className="admin-input" defaultValue="" placeholder="" required="" data-error="Please enter your Name" />
            </div>
            </div>

            <div className='input-group'>
            <div className='input-box'>
            <label htmlFor="name">Title</label>
            <input type="text" id="name" name="name" className="admin-input" defaultValue="" placeholder="aegon" required="" data-error="Please enter your Name" />
            </div>

           
            <div className='input-box'>
            <label htmlFor="name">Content Type</label>
            <input type="text" id="name" name="name" className="admin-input" defaultValue="" placeholder="aegon" required="" data-error="Please enter your Name" />
            </div>
            </div>

            {/* file upload section */}
            <div className='file-upload-section'>
            <div className='input-box-file'>
            <label htmlFor="name">Thumbnail Upload</label>
            <input type="file" id="name" name="thumbnail" className="admin-input-file"/>
            </div>
            <div className='input-box-file'>
            <label htmlFor="video">Video Upload</label>
            <input type="file" id="video" name="video" className="admin-input-file"/>
            </div>
            </div>
            <div className='file-upload-section'>
            <div className='input-box-file'>
            <label htmlFor="name">Client Icon</label>
            <input type="file" id="name" name="thumbnail" className="admin-input-file"/>
            </div>
           
            <div className='input-box-file'>
            <label htmlFor="name">Thumbnail Upload</label>
            <input type="file" id="name" name="thumbnail" className="admin-input-file"/>
            </div>
           
            </div> 
            
 
           
            <div className='btn'>
            <button className='theme-btn'>Submit</button>
            </div>
          
           

   
            </div>
        
 
        
        </div>
     

    </div>
  )
}

export default Admin