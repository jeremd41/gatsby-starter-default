import React from "react"
import makeCarousel from "react-reveal/makeCarousel"
import Slide from "react-reveal/Slide"
import styled from "styled-components"

import buffet from "../images/buffetmentone.jpg"
import face from "../images/facementone.jpg"
import room from "../images/mentonesecond.jpg"
import roomtwo from "../images/mentonethird.jpg"

const Container = styled.div`
  position: relative;
  z-index: -3;
  overflow: hidden;
  width: 100%;
  height: 580px;

  @media screen and (max-width: 762px) {
    height: 300px;
  }
`
const CarouselUI = ({ children }) => <Container>{children}</Container>
const Carousel = makeCarousel(CarouselUI)

const Indexcarousel = () => (
  <Carousel
    className="carousel"
    defaultWait={3000} /*wait for 1000 milliseconds*/
  >
    <Slide left>
      <div>
        <img src={face} alt="hotel" className="responsive" />
      </div>
    </Slide>
    <Slide left>
      <div>
        <img src={room} alt="chambre" className="responsive" />
      </div>
    </Slide>
    <Slide left>
      <div>
        <img src={roomtwo} alt="chambre" className="responsive" />
      </div>
    </Slide>
    <Slide left>
      <div>
        <img src={buffet} alt="petit dejeuner" className="responsive" />
      </div>
    </Slide>
  </Carousel>
)

export default Indexcarousel
