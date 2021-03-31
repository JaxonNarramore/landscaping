import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Header.css'

export default function Header() {
    return (
        <div>
            <div className='txt-div'>
                <p className='header-txt'>A-Z LANDSCAPE</p>
                <p className='header-txt'></p>
                <p className='header-txt'>& MAINTENENCE</p>
                <p className='sub-header'>AUSTIN AREA COMMERCIAL AND RESIDENTIAL LANDSCAPING</p>
                <div className='header-buttons'>
                    <button type="button" class="btn btn-outline-light">Get A Quote</button>
                    <button type="button" class="btn btn-outline-light">Our Services</button>
                </div>
            </div>
            <Carousel controls={false} fade={true} className='carousel' indicators={false}>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100 carousel-image"
                        src="Images/hardscape6.jpeg"
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100 carousel-image"
                        src="Images/masonry12.JPG"
                        alt="Second slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100 carousel-image"
                        src="Images/masonry24.JPG"
                        alt="Third slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100 carousel-image"
                        src="Images/masonry25.JPG"
                        alt="Fourth slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100 carousel-image"
                        src="Images/hardscape2.jpeg"
                        alt="Fifth slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100 carousel-image"
                        src="Images/lawncare.jpeg"
                        alt="Sixth slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
