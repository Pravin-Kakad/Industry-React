import React from 'react'
import blogone from '../image/single-blog.jpg'
import blogtwo from '../image/blogone.jpg'
import blogthree from '../image/blogtwo.jpg'
import oneblog from '../image/blog-ones.jpg'
import twoblog from '../image/blog-two.jpg'
import three from '../image/blog-three.jpg'
import Blogsection from './Blogsection'
import Footer from './Footer'
import bloga from '../image/blog-for.jpg'
import blogb from '../image/blog-five.jpg'
import blogc from '../image/blog-six.jpg'

function Blogs() {
  return (
    <div>

      <div className="about d-flex justify-content-center align-items-center">
        <div className="text-white">
          <h1>Blogs</h1>
          {/* <nav aria-label="breadcrumb ">
                     <ol class="breadcrumb">
                       <li class="breadcrumb-item">Home</li>
                       <li class="breadcrumb-item list-abt">About</li>
                        </ol>
                        </nav> */
          }
          <p className="text-center">Home<span className="list-abt"> / Blogs</span></p>
        </div>
      </div>

      <div className='container py-5'>
        <div>
          <div className='row'>
            <div className='col-8'>
              <figure>
                <div>
                  <img className='img-fluid blog-img' src={blogone} />
                </div>
                <figcaption className='p-2'>
                  <ul className='d-flex ps-0 blog-list'>
                    <li className='me-3'><span><i class="fa-regular fa-user"></i> </span> Admin</li>
                    <li className='me-3'><span><i class="fa-solid fa-calendar-days"></i> </span> August 10, 2022</li>
                    <li className='me-3'><span><i class="fa-regular fa-comment"></i> </span> 2 Comments</li>
                  </ul>
                </figcaption>
              </figure>

              <h3>Building Mobilization can make you future leader in world</h3>
              <p> Encouraging kids to socialize has never been more important, but finding ways to do it safely right now can be tricky. Thankfully, you don’t have to put your child’s social life on pause. Instead, coordinate a time to do a virtual playdate on Zoom or Google Hangouts with one or a few of your child’s friends.

                Education.com has over 34,000 resources to choose from! Visit the Learning Library and use the search bar at the top of the page to find your topic. You can filter results by your learners’ grade level, subjects you’re interested in, type of resource, and more in the bars along the top and left-hand side of the page.

                Look through the resources on your topic, and select the one that seems most relevant to your lesson as well as most engaging for your learners. For example, our search for plants provided over 600 resources including activities, worksheets, and lesson plans. By filtering to show first grade science resources, and sorting by relevance, we narrowed down the search until we selected the Parts of a Plant workbook. </p>

              <h5 className='mt-3'>How to create a well-rounded learning routine</h5>
              <p>When children engage with the same concept in different ways, it strengthens their understanding of the topic. But as educators and caregivers, it can be difficult to find a range of high-quality content to share with your little learners. The good news is that both Education.com and IXL have extensive libraries of resources and skills that you can depend on for PK-5 and beyond. </p>

              <div className='d-flex justify-content-evenly gap-3 py-3'>
                <div>
                  <img className='img-fluid' src={blogtwo} />
                </div>
                <div>
                  <img className='img-fluid' src={blogthree} />
                </div>
              </div>
            </div>

            <div className='col-4'>
              <div className='blog-div p-3'>
                <input className='blog-in' type='search' placeholder='Search here' />
              </div>

              <div className='blog-div p-5 my-5'>
                <h5 className='headh fs-2'>Categories</h5>
                <ul className='ps-0 blog-anchor'>
                  <li className='mt-3 active'><a href='#'>Industrial Ecology (8)</a></li>
                  <li className='mt-3'><a href='#'>Civil Work (6)</a></li>
                  <li className='mt-3'><a href='#'>Construction (4)</a></li>
                  <li className='mt-3'><a href='#'>Mechanical (5)</a></li>
                  <li className='mt-3'><a href='#'>Oil And Gas refinery (2)</a></li>
                </ul>
              </div>

              <div className='blog-div p-5'>
                <div>
                  <h4 className='headh'>Recent Post</h4>
                  <div className='d-flex mt-4'>
                    <div>
                      <img className='img-fluid' src={oneblog} />
                    </div>
                    <div className='ms-3'>
                      <h6 className='mb-0'>Youth crime creativity with artistic activities!</h6>
                      <p><span><i class="fa-solid fa-calendar-days"></i> </span> April 10, 2023</p>
                    </div>
                  </div>
                  <div className='d-flex mt-3'>
                    <div>
                      <img className='img-fluid' src={twoblog} />
                    </div>
                    <div className='ms-3'>
                      <h6 className='mb-0'>Seven ways to support legal procedure</h6>
                      <p><span><i class="fa-solid fa-calendar-days"></i> </span> March 30, 2023</p>
                    </div>
                  </div>
                  <div className='d-flex mt-3'>
                    <div>
                      <img className='img-fluid' src={three} />
                    </div>
                    <div className='ms-3'>
                      <h6 className='mb-0'>How to Help Your suprior attorney</h6>
                      <p><span><i class="fa-solid fa-calendar-days"></i> </span> February 18, 2023</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='blog-div mt-5 p-5'>
                <div>
                  <h3 className='headh'>Archive</h3>
                  <ul className='ps-0 blog-anchor'>
                    <li className='mt-3'><a href='#'>Industry Renovation (25)</a></li>
                    <li className='mt-3'><a href='#'>Factory Build (18)</a></li>
                    <li className='mt-3'><a href='#'>Electrical (32)</a></li>
                    <li className='mt-3'><a href='#'> Interior (13)</a></li>
                    <li className='mt-3'><a href='#'> Petrolieum (04)</a></li>
                  </ul>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>

      <div>
        <Blogsection />

        <div>
          <div className="d-flex gap-4 mt-5">
            <figure className="five-fig">
              <div className='position-relative blog-aa'>
                <img className="img-fluid five-img" src={bloga} />
                <div className='d-flex justify-content-center align-items-center bolg-div'>
                  <div className='text-white'>
                    <span>25</span><br />
                    <span>Feb</span>
                  </div>
                </div>
              </div>
              <figcaption className="p-4">
                <p>Admin | 07 Comments </p>
                <a className="headh3">Wallwork brings aircraft technology to medical implants</a>
                <p className="mt-4">There are some reason Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, facilis perferendis ipsam.</p>
              </figcaption>
            </figure>
            <figure className="five-fig">
              <div className='position-relative blog-aa'>
                <img className="img-fluid five-img" src={blogb} />
                <div className='d-flex justify-content-center align-items-center bolg-div'>
                  <div className='text-white'>
                    <span>7</span><br />
                    <span>Mar</span>
                  </div>
                </div>
              </div>
              <figcaption className="p-4">
                <p>Admin | 07 Comments </p>
                <a className="headh3">Using automation to combat the impending labour shortage</a>
                <p className="mt-4">There are some reason Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, facilis perferendis ipsam.</p>
              </figcaption>
            </figure>
            <figure className="five-fig">
              <div className='position-relative blog-aa'>
                <img className="img-fluid five-img" src={blogc} />
                <div className='d-flex justify-content-center align-items-center bolg-div'>
                  <div className='text-white'>
                    <span>30</span><br />
                    <span>Apr</span>
                  </div>
                </div>
              </div>
              <figcaption className="p-4">
                <p>Admin | 07 Comments </p>
                <a className="headh3">Investment in manufacturing is essential in post-Brexit</a>
                <p className="mt-4">There are some reason Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, facilis perferendis ipsam.</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>

    </div>
  )
}

export default Blogs