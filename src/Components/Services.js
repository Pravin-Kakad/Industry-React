import React from 'react';
import serone from "../image/service-one.jpg"
import sertwo from '../image/service-two.jpg'
import serthree from '../image/service-three.jpg'
import serfour from '../image/service-four.jpg'
import serfive from '../image/service-five.jpg'
import sersix from '../image/service-six.jpg'
import Projectcount from './Projectcount';
import Clientsay from './Clientsay';
import Footer from './Footer';

function Services() {


  return (
    <div>

      <div className="about d-flex justify-content-center align-items-center">
        <div className="text-white">
          <h1>Services</h1>
          {/* <nav aria-label="breadcrumb ">
                     <ol class="breadcrumb">
                       <li class="breadcrumb-item">Home</li>
                       <li class="breadcrumb-item list-abt">About</li>
                        </ol>
                        </nav> */
          }
          <p className="text-center">Home<span className="list-abt"> / Services</span></p>
        </div>
      </div>

      <div className='services-div py-5 container'>
        <div className='container'>
          <div className='row row-cols-3 gap-3'>
            <figure className='service-fig'>
              <div className='position-relative service-figure'>
                <img className="img-fluid about-imgs" src={serone}/>
                <div className='service-icon'>
                  <span><i class="fa-solid fa-gas-pump"></i></span>
                </div>
              </div>
              <figcaption className='p-4'>
                <h4>Petrolieum Refinery</h4>
                <p className='py-3'>There are some reason build erit a augue insuned image pellen simply freede in the site lorem ipsum dolor</p>
              </figcaption>
            </figure>

            <figure className='service-fig'>
              <div className='position-relative service-figure'>
                <img className="img-fluid about-imgs" src={sertwo}/>
                <div className='service-icon'>
                  <span><i class="fa-solid fa-flask"></i></span>
                </div>
              </div>
              <figcaption className='p-4'>
                <h4>Chemical Research</h4>
                <p className='py-3'>There are some reason build erit a augue insuned image pellen simply freede in the site lorem ipsum dolor</p>
              </figcaption>
            </figure>

            <figure className='service-fig'>
              <div className='position-relative service-figure'>
                <img className="img-fluid about-imgs" src={serthree}/>
                <div className='service-icon'>
                  <span><i class="fa-solid fa-industry"></i></span>
                </div>
              </div>
              <figcaption className='p-4'>
                <h4>Industrial Ecology</h4>
                <p className='py-3'>There are some reason build erit a augue insuned image pellen simply freede in the site lorem ipsum dolor</p>
              </figcaption>
            </figure>

            <figure className='service-fig'>
              <div className='position-relative service-figure'>
                <img className="img-fluid about-imgs" src={serfour}/>
                <div className='service-icon'>
                  <span><i class="fa-solid fa-brush"></i></span>
                </div>
              </div>
              <figcaption className='p-4'>
                <h4>Construction Industry</h4>
                <p className='py-3'>There are some reason build erit a augue insuned image pellen simply freede in the site lorem ipsum dolor</p>
              </figcaption>
            </figure>

            <figure className='service-fig'>
              <div className='position-relative service-figure'>
                <img className="img-fluid about-imgs" src={serfive}/>
                <div className='service-icon'>
                  <span><i class="fa-solid fa-helmet-safety"></i></span>
                </div>
              </div>
              <figcaption className='p-4'>
                <h4>Civil Engineering  </h4>
                <p className='py-3'>There are some reason build erit a augue insuned image pellen simply freede in the site lorem ipsum dolor</p>
              </figcaption>
            </figure>

            <figure className='service-fig'>
              <div className='position-relative service-figure'>
                <img className="img-fluid about-imgs" src={sersix}/>
                <div className='service-icon'>
                  <span><i class="fa-regular fa-compass"></i></span>
                </div>
              </div>
              <figcaption className='p-4'>
                <h4>Mechanical Engineering</h4>
                <p className='py-3'>There are some reason build erit a augue insuned image pellen simply freede in the site lorem ipsum dolor</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div>
        <Projectcount/>
      </div>

      <div>
        <Clientsay/>
      </div>

      <Footer/>




    </div>
  )
}

export default Services