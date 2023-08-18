import React from 'react'
import bloga from '../image/five-one.jpg'
import blogb from '../image/five-two.jpg'
import blogc from '../image/five-three.jpg'
function Blogsection() {
    return (
        <div className="container py-5">
            <div>
                <div className="">
                    <div className="position-relative div-twos">
                        <p className="ms-3">Blog</p>
                    </div>
                    <h2 className="div-fourh">What <span className="headh2">happen</span> inside our </h2>
                    <h2 className="div-fourh"><span className="headh2">company</span></h2>
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
        </div>


    )
}

export default Blogsection