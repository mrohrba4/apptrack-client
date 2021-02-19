import Carousel from 'react-bootstrap/Carousel'
import React, { Component } from 'react'

export class BsCarousel extends Component {
  render() {
    return (
      <div>
        <div className='container-fluid'>


          <Carousel>
          <Carousel.Item style={{'height':"600px"}}>
          <img style={{'height':"600px"}}
          className="csitem1 d-block w-100" src={'assets/img/csimg2.jpg'} alt="Job Search 1"
          />

          <Carousel.Caption className="csitem1">
            <h1>Welcome to AppTrack!</h1>
            <p>Keep track of all of your applications during your job search</p>
              </Carousel.Caption>
              </Carousel.Item>

          <Carousel.Item style={{'height':"600px"}}>
          <img style={{'height':"600px"}}
          className="d-block w-100" src={'assets/img/csimg1.jpg'} alt="Job Search 2"
          />

          <Carousel.Caption className="csitem2">
            <h3>Second Demo</h3>
              </Carousel.Caption>
              </Carousel.Item>

          <Carousel.Item style={{'height':"600px"}}>
          <img style={{'height':"600px"}}
          className="d-block w-100" src={'assets/img/csimg3.jpg'} alt="Job Search 3"
          />

          <Carousel.Caption className="csitem3">
            <h3>Third Demo</h3>
              </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
          </div>
        </div>


    )
  }
}

export default BsCarousel
