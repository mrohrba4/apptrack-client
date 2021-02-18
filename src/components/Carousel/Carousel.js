import Carousel from 'react-bootstrap/Carousel'
import React, { Component } from 'react'

export class BsCarousel extends Component {
  render() {
    return (
      <div>
        <div class='container-fluid'>
          

          <Carousel>
          <Carousel.Item style={{'height':"300px"}}>
          <img style={{'height':"300px"}}
          className="d-block w-100" src={'assets/img/csimg1.jpg'} alt="Job Search 1"
          />

          <Carousel.Caption>
            <h3>First Demo</h3>
              </Carousel.Caption>
              </Carousel.Item>

          <Carousel.Item style={{'height':"300px"}}>
          <img style={{'height':"300px"}}
          className="d-block w-100" src={'assets/img/csimg2.jpg'} alt="Job Search 2"
          />

          <Carousel.Caption>
            <h3>Second Demo</h3>
              </Carousel.Caption>
              </Carousel.Item>

          <Carousel.Item style={{'height':"300px"}}>
          <img style={{'height':"300px"}}
          className="d-block w-100" src={'assets/img/csimg3.jpg'} alt="Job Search 3"
          />

          <Carousel.Caption>
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
