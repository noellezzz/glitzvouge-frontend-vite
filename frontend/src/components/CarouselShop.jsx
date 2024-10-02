import React from 'react'
import { IoBag } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const CarouselShop = () => {
  return (
    <div class="container-fluid fruite py-5">
        <div class="container py-5">
            <div class="tab-class text-center">
                <div class="row g-4">
                    <div class="col-lg-4 text-start">
                        <h1>Our Organic Products</h1>
                    </div>
                    <div class="col-lg-8 text-end">
                        <ul class="nav nav-pills d-inline-flex text-center mb-5">
                            <li class="nav-item">
                                <a class="d-flex m-2 py-2 rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                                    <span class="text-light"><MdKeyboardArrowLeft /></span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="d-flex py-2 m-2 rounded-pill active" data-bs-toggle="pill" href="#tab-2">
                                    <span class="text-light"><MdKeyboardArrowRight /></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="tab-content">
                    <div id="tab-1" class="tab-pane fade show p-0 active">
                        <div class="col-lg-12 sliding-deck">
                            <div class="col-md-6 col-lg-4 col-xl-3">
                                <div class="rounded position-relative fruite-item">
                                    <div class="fruite-img">
                                        <img src="https://placehold.co/600x400" class="img-fluid w-100 rounded-top" alt="" />
                                    </div>
                                    <div class="text-white px-3 py-1 rounded position-absolute card-tag" >Fruits</div>
                                    <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                        <h4>Grapes</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                        <div class="d-flex justify-content-between flex-lg-wrap">
                                            <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                            <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 col-xl-3">
                                <div class="rounded position-relative fruite-item">
                                    <div class="fruite-img">
                                        <img src="https://placehold.co/600x400" class="img-fluid w-100 rounded-top" alt="" />
                                    </div>
                                    <div class="text-white px-3 py-1 rounded position-absolute card-tag">Fruits</div>
                                    <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                        <h4>Grapes</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                        <div class="d-flex justify-content-between flex-lg-wrap">
                                            <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                            <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><IoBag /> Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 col-xl-3">
                                <div class="rounded position-relative fruite-item">
                                    <div class="fruite-img">
                                        <img src="https://placehold.co/600x400" class="img-fluid w-100 rounded-top" alt="" />
                                    </div>
                                    <div class="text-white px-3 py-1 rounded position-absolute card-tag">Fruits</div>
                                    <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                        <h4>Raspberries</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                        <div class="d-flex justify-content-between flex-lg-wrap">
                                            <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                            <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><IoBag /> Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 col-xl-3">
                                <div class="rounded position-relative fruite-item">
                                    <div class="fruite-img">
                                        <img src="https://placehold.co/600x400" class="img-fluid w-100 rounded-top" alt="" />
                                    </div>
                                    <div class="text-white px-3 py-1 rounded position-absolute card-tag">Fruits</div>
                                    <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                        <h4>Apricots</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                        <div class="d-flex justify-content-between flex-lg-wrap">
                                            <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                            <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><IoBag /> Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 col-xl-3">
                                <div class="rounded position-relative fruite-item">
                                    <div class="fruite-img">
                                        <img src="https://placehold.co/600x400" class="img-fluid w-100 rounded-top" alt="" />
                                    </div>
                                    <div class="text-white px-3 py-1 rounded position-absolute card-tag">Fruits</div>
                                    <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                        <h4>Banana</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                        <div class="d-flex justify-content-between flex-lg-wrap">
                                            <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                            <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><IoBag /> Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 col-xl-3">
                                <div class="rounded position-relative fruite-item">
                                    <div class="fruite-img">
                                        <img src="https://placehold.co/600x400" class="img-fluid w-100 rounded-top" alt="" />
                                    </div>
                                    <div class="text-white px-3 py-1 rounded position-absolute card-tag">Fruits</div>
                                    <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                        <h4>Oranges</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                        <div class="d-flex justify-content-between flex-lg-wrap">
                                            <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                            <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><IoBag /> Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 col-xl-3">
                                <div class="rounded position-relative fruite-item">
                                    <div class="fruite-img">
                                        <img src="https://placehold.co/600x400" class="img-fluid w-100 rounded-top" alt="" />
                                    </div>
                                    <div class="text-white px-3 py-1 rounded position-absolute card-tag">Fruits</div>
                                    <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                        <h4>Raspberries</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                        <div class="d-flex justify-content-between flex-lg-wrap">
                                            <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                            <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><IoBag /> Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 col-xl-3">
                                <div class="rounded position-relative fruite-item">
                                    <div class="fruite-img">
                                        <img src="https://placehold.co/600x400" class="img-fluid w-100 rounded-top" alt="" />
                                    </div>
                                    <div class="text-white px-3 py-1 rounded position-absolute card-tag">Fruits</div>
                                    <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                        <h4>Grapes</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                        <div class="d-flex justify-content-between flex-lg-wrap">
                                            <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                            <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><IoBag /> Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CarouselShop