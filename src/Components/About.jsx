import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaChevronRight } from "react-icons/fa";
import Title from './Title';
import profile from '../img/about.jpg';
import CountUp from 'react-countup';
import { FaRegFaceSmile } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";
import { LuClock } from "react-icons/lu";
import { BsAward } from "react-icons/bs";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import testi from '../img/testimonials/testimonials-1.jpg'
import testi1 from'../img/testimonials/testimonials-2.jpg'
import testi2 from'../img/testimonials/testimonials-3.jpg'
import testi3 from'../img/testimonials/testimonials-4.jpg'
import testi4 from'../img/testimonials/testimonials-5.jpg'
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

export default function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const myslider = [
    {
      img1: testi,
      mhead: "Saul Goodman",
      subhead: "Ceo & Founder",
      mpara: " Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper. "

    },

    {
      img1: testi1,
      mhead: "Sara Wilsson",
      subhead: "Designer",
      mpara: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."

    },
    {
      img1: testi2,
      mhead: "Jena Karlis",
      subhead: "Store Owner",
      mpara: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim."

    },
    {
      img1: testi3,
      mhead: "Matt Brandon",
      subhead: "Freelancer",
      mpara: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam."

    },
    {
      img1: testi4,
      mhead: "John Larson",
      subhead: "Entrepreneur",
      mpara: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid."

    }

  ]
const counters = [
  {
    id: 1,
    title: <span> Clients</span>,

    start: 0,
    end: 232

  },
  {
    id: 1,
    title: <span>Projects</span>,
    start: 0,
    end: 521

  },
  {
    id: 1,
    title: <span>Hours Of Support</span>,
    start: 0,
    end: 18

  },
  {
    id: 1,
    title: <span>Hard Workers</span>,
    start: 0,
    end: 16

  }
]
  return (
    <>
      <Title titl="ABOUT" desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." />
      <Container >
        <Row style={{ paddingLeft: "0px" }}>
          <Col md={4}>
            <img src={profile} alt="" height={"300px"} width={"350px"} />
          </Col>
          <Col md={8} >
            <h3>UI/UX Designer & Web Developer.</h3>
            <p  className=' fst-italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Container>
              <Row>
                <Col md={6}><ul className='list'>
                  <li> <FaChevronRight style={{color:"blue"}}/><strong>Birthday :</strong> 1 May 1995</li>
                  <li><FaChevronRight style={{color:"blue"}} /><strong>Website :</strong> www.example.com</li>
                  <li><FaChevronRight style={{color:"blue"}} /><strong>Phone :</strong> +123 456 7890</li>
                  <li><FaChevronRight style={{color:"blue"}}/><strong>City :</strong>New York, USA</li>
                </ul></Col>
                <Col md={6}><ul className='list'>
                  <li> <FaChevronRight style={{color:"blue"}} /><strong>Age:</strong> 30</li>
                  <li><FaChevronRight style={{color:"blue"}}/><strong>Degree :</strong> Master</li>
                  <li><FaChevronRight style={{color:"blue"}}/><strong>PhEmailone:</strong> email@example.com</li>
                  <li><FaChevronRight style={{color:"blue"}} /><strong>Freelance :</strong>Available</li>
                </ul></Col>
              </Row>
            </Container>
            <p>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p>



          </Col>
        </Row>
      </Container>
      <Container>
      <div className='row'>
      <div className="  col-12 skills">
      <Title titl="SKILLS" desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." />
          </div>
          <div className="col-6">
            <p>HTML
              <div class="progress">
                <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
              </div>
            </p>
          </div>

          <div className="col-6">
            <p>PHP
              <div class="progress">
                <div className="progress-bar" role="progressbar" style={{ width: "35%" }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">35%</div>
              </div>
            </p>
          </div><div className="col-6">
            <p>CSS
              <div class="progress">
                <div className="progress-bar" role="progressbar" style={{ width: "65%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
              </div>
            </p>
          </div><div className="col-6">
            <p>WORDPRESS/CMS
              <div class="progress">
                <div className="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
              </div>
            </p>
          </div><div className="col-6">
            <p>JAVASCRIPT
              <div class="progress">
                <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
              </div>
            </p>
          </div><div className="col-6">
            <p>PHOTOSHOP
              <div class="progress">
                <div className="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
              </div>
            </p>
          </div>
          </div>
          </Container>
          <Title titl="FACTS" desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." />
       <Container>
       <Row >
                    {
                      counters.map((a) => {
                        return (
                          <>
                            <Col className=" col-lg-3  ">
                            
                              
                                <h1 style={{color:"#34b7a7"}}>
                                  <CountUp
                                    start={a.start}
                                    end={a.end}
                                    duration={1}>ok</CountUp>
                                </h1>
                                <p>{a.title}</p>

                             
                            </Col>
                          </>
                        )
                      })
                    }

                  </Row>
                  </Container>
        
         <Title titl="TESTIMONIALS" desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." />
        <Container>
         <Row>
          <Slider {...settings}>
            {
              myslider.map((a) => {
                return (
                  <Col lg={12}>
                    <div className='d-grid justify-content-center text-center'>
                      <div className='mx-auto' style={{ height: 100, width: 100 }} >
                        <img src={a.img1} className='img-fluid rounded-circle p-2' /></div>
                      <h4 style={{ marginBottom: '0' }}>{a.mhead}</h4>
                      <p style={{ color: '#999' }}>{a.subhead}</p>
                      <div className=' mx-5 lh-base fst-italic'style={{ color: '#45474B',}} >
                        <ImQuotesLeft  className='imain'/>
                        {a.mpara}
                        <ImQuotesRight  className='imain' />
                      </div>
                    </div>

                  </Col>

                )
              }
              )
            }


          </Slider>
        </Row>
      </Container>
      </>
  )
}