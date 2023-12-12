import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Title from '../Components/Title'
import { Card } from 'react-bootstrap';
import { CiBasketball } from "react-icons/ci";
import { FaRegFileAlt } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { FiLayers } from "react-icons/fi";
import { RiSlideshow3Line } from "react-icons/ri";
import { FaArchway } from "react-icons/fa";

export default function Services() {
  
  const servicesm = [
    {
      image: <CiBasketball  size={30} color='#5FBDFF'/>,
      maininfo: "Lorem Ipsum",
      para: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
    },
    {
      image: <FaRegFileAlt  size={30} color='#F05941' className=''/>,
      maininfo: "Sed Perspiciatis",
      para: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
    },
    {
      image: <IoTimeOutline  size={30} color='#ED5AB3'/>,
      maininfo: "Magni Dolores",
      para: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"

    },
    {
      image:<FiLayers  size={30} color='#E48F45'/>,
      maininfo:"Nemo Enim",
      para:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"
    },
    {
      image:<RiSlideshow3Line  size={30} color='#BE3144'/>,
      maininfo:"Dele Cardo",
      para:"Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur"
    },
    {
      image:<FaArchway  size={30} color='#39A7FF'/>,
      maininfo:"Divera Don",
      para:"Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur"
    }
  ]
  return (
    <>
     
      <Title titl="SERVICES" desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."></Title>

      <Container >

        <Row>
          {
            servicesm.map((a, i) => {
              return (
                <>
                  <Col lg={4} className=' d-grid justify-content-center text-center '>
                    <Card className='m-2 p-4 border-0'>
                      <div className='maini mx-auto d-flex  justify-content-center align-items-center'>{a.image}</div>
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                      <Card.Body>
                        <Card.Title>{a.maininfo}</Card.Title>
                        <Card.Text>
                          {a.para}
                        </Card.Text>

                      </Card.Body>
                    </Card>
                  </Col>
                </>
              )
            })
          }
        </Row>
      </Container>
      
      
    </>
  )
}