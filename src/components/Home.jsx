import React from "react";
import Carousel from "react-bootstrap/Carousel";
import One from "../assest/img/1.jpeg";
import Three from "../assest/img/3.jpeg";
import Four from "../assest/img/4.jpeg";
import Five from "../assest/img/5.jpg";
const Home = () => {
  return (
    <>
    <div style={{display:'flex',justifyContent:'center',}}className="bg-dark">
    <Carousel>
      <Carousel.Item interval={1000} style={{height:'540px'}}>
        <img className="d-block w-100 " src={Four}alt="Second slide"
        />
        <Carousel.Caption className="fs-2 d-flex justify-content-center"style={{flexDirection:'column',alignItems:'center'}}>
          <h3 style={{background:'#040431', width:'150px'}}>Welcome</h3>
          <p style={{background:'#040431',}}> to cleaning comes first.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500} style={{height:'540px'}}>
        <img className="d-block w-100 " src={Three}alt="First slide"
        />
        <Carousel.Caption className="fs-2 d-flex justify-content-center" style={{flexDirection:'column',alignItems:'center'}}>
          <h3 style={{background:'#040431', width:'150px'}}>We do</h3>
          <p style={{background:'#040431',}}>Commercial Cleaning Services</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500} style={{height:'540px'}}>
        <img className="d-block w-100 " src={One}alt="First slide"
        />
        <Carousel.Caption className="fs-2 d-flex justify-content-center" style={{flexDirection:'column',alignItems:'center'}}>
          <h3  style={{background:'#040431', width:'150px'}}>We pride </h3>
          <p style={{background:'#040431',}}>ourselves on being courteous and professional in all we do.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000} style={{height:'540px'}}>
        <img className="d-block w-100 " src={Five}alt="Second slide"/>
        <Carousel.Caption className="fs-2 d-flex justify-content-center"style={{flexDirection:'column',alignItems:'center'}}>
          <h3 style={{background:'#040431', width:'250px'}}>Breath fresh air </h3>
          <p style={{background:'#040431',}}> in your office or workplace</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
    </>
  );
};
export default Home;
