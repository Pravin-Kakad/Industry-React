import React from 'react'
import projectone from '../image/project-ones.jpg'
import projecttwo from '../image/project-2.jpg'
import projectthree from '../image/project-3.jpg'
import Projectcontact from './Projectcontact'
import Footer from './Footer'

function Project() {
  return (
    <div>

      <div className="about d-flex justify-content-center align-items-center">
        <div className="text-white">
          <h1>Project</h1>
          {/* <nav aria-label="breadcrumb ">
                     <ol class="breadcrumb">
                       <li class="breadcrumb-item">Home</li>
                       <li class="breadcrumb-item list-abt">About</li>
                        </ol>
                        </nav> */
          }
          <p className="text-center">Home<span className="list-abt"> / Project</span></p>
        </div>
      </div>

      <div className='container py-5'>
        <div>
          <div>
            <h3 className='headh3 fs-3'>Industrial Solution in Central City</h3>
            <div>
              <p>Fraud and financial crimes are a form of theft/larceny that occur when a person or entity takes money or property, or uses them in an illicit manner, with the intent.The analysis model employed in this study is multiple regression. The results indicate that variable namely, pressure, opportunity, rationalization, competence, and arrogance, simultaneously do not affect fraudulence financial statement. </p>
            </div>
            <div className='row py-5 container'>
              <div className='col-8 mt-5'>
                <img className='img-fluid' src={projectone} />
              </div>
              <div className='div-project col-4'>
                <div className='p-3'>
                <h4 className='head-pro fs-2 py-4'>Project Info</h4>
                <div className='d-flex justify-content-between projects mt-3'>
                  <b>Engineer:</b>
                  <p>James Cameron</p>
                </div>
                <div className='d-flex justify-content-between projects mt-3'>
                  <b>Category:</b>
                  <p>Construction</p>
                </div>
                <div className='d-flex justify-content-between projects mt-3'>
                  <b>Start Date:</b>
                  <p>30 April 2023</p>
                </div>
                <div className='d-flex justify-content-between projects mt-3'>
                  <b>End Date:</b>
                  <p>31 May 2024</p>
                </div>
                <div className='d-flex justify-content-between projects mt-3'>
                  <b>Address:</b>
                  <p>San Fransisco</p>
                </div>
                <div className='d-flex justify-content-between projects mt-3'>
                  <b>Tags:</b>
                  <p>civil, welding</p>
                </div>
                <div className='d-flex justify-content-center mt-4'>
                <a className='project-btn'>View Project</a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='container py-5'>
        <div>
          <h4 className='head-pro'>Project Overview</h4>
          <div className='col-8  py-4'>
            <p>Cases of fraud were found in Indonesia in 2017 involving PT Jatisari Sri Rejeki. The company is cheating by producing rice that is not suitable with standard quality stated in the packaging label. The correlation of the case against fraudulent financial statements is that there is a difference in the inventory account contained in the financial statements due to changes in the quality of products made by the company. </p>
          </div>
          <div className='row row-cols-2 py-3'>
            <div>
              <img className='img-fluid' src={projecttwo} />
            </div>
            <div>
              <img className='img-fluid' src={projectthree} />
            </div>
          </div>
        </div>
      </div>

      <div className='project-pro py-5'>
        <div className='container'>
          <h2 className='text-center headh2 fs-1'>Work</h2>
          <div>
          <Projectcontact/>
          </div>
        </div>
      </div>

      <div>
        <Footer/>
      </div>



    </div>
  )
}

export default Project