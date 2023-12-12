import React from 'react'
import Title from './Title'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

export default function Resume() {
    return (
        <>
            <Title titl="RESUME" desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." />
          
      <Container>
        <div className="resume-container">
          <div className="row title">
          
          </div>

          <Row>
            <Col lg={6}>
              <h3 className="Resume-title">Sumary</h3>
              <div style={{ height: "15px", width: "15px", border: "#34b7a7 solid 2px" }} className=' rounded-circle  '></div>
              <div className="resume-item ms-2" style={{ height: "200px", borderLeft: "#34b7a7 solid 2px", paddingLeft: "20px" }}><h4 style={{color:"#1d685f", fontSize:"18px", fontFamily:"sans-serif", fontWeight:"bolder"}}>ALICE BARKLEY</h4>
                <em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable</em>
                <div>
                  <ul style={{ transform: 'translate(-16px,0px' }}>
                    <li>Portland par 127,Orlando, FL</li>
                    <li>(123) 456-7891</li>
                    <li>alice.barkley@example.com</li>
                  </ul>
                </div>
              </div>


              <h3 className="Resume-title" style={{ margin: "20px 0" }}>Education</h3>
              <div style={{ height: "15px", width: "15px", border: "#34b7a7 solid 2px" }} className=' rounded-circle  '></div>
              <div className="resume-item ms-2" style={{ height: "200px", borderLeft: "#34b7a7 solid 2px", paddingLeft: "20px" }}>
                <h4 style={{color:"#1d685f", fontSize:"18px", fontFamily:"sans-serif", fontWeight:"bolder"}}>MASTER OF FINE ARTS & GRAPHIC DESIGN</h4>
                <h6 style={{color:"#34bec7"}}>
                  2015 - 2016
                </h6>
                <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>

              </div>


              <div style={{ height: "15px", width: "15px", border: "#34b7a7 solid 2px" }} className=' rounded-circle  '></div>
              <div className="resume-item ms-2" style={{ height: "200px", borderLeft: "#34b7a7 solid 2px", paddingLeft: "20px" }}>
                <h4 style={{color:"#1d685f", fontSize:"18px", fontFamily:"sans-serif", fontWeight:"bolder"}}>BACHELOR OF FINE ARTS & GRAPHIC DESIGN</h4>
                <h6 style={{color:"#34bec7"}}>
                  2010 - 2014
                </h6>
                <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>

              </div>

            </Col>

            {/* second part of column  */}

            <Col lg={6}>
              <h3 className="Resume-title">Professional Experience</h3>
              <div style={{ height: "15px", width: "15px", border: "#34b7a7 solid 2px" }} className=' rounded-circle'></div>
              <div className="resume-item ms-2" style={{ height: "350px", borderLeft: "#34b7a7 solid 2px", paddingLeft: "20px" }}>
                <h4 style={{color:"#1d685f", fontSize:"18px", fontFamily:"sans-serif", fontWeight:"bolder"}}>MASTER OF FINE ARTS & GRAPHIC DESIGN</h4>
                <h6 style={{color:"#34bec7"}}>
                  2019 - Present
                </h6>
                <p><em>Experion, New York, NY</em></p>

                <ul>
                  <li className="pb-2">Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                  <li className="pb-2">Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
                  <li className="pb-2">Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                  <li className="pb-2">Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                </ul>


              </div>
              <div style={{ height: "15px", width: "15px", border: "#34b7a7 solid 2px" }} className=' rounded-circle'></div>
              <div className="resume-item ms-2" style={{ height: "320px", borderLeft: "#34b7a7 solid 2px", paddingLeft: "20px" }}>
                <h4 style={{color:"#1d685f", fontSize:"18px", fontFamily:"sans-serif", fontWeight:"bolder"}}>GRAPHIC DESIGN SPECIALIST</h4>
                <h6 style={{color:"#34bec7"}}>
                  2017 - 2018
                </h6>
                <p><em>Experion, New York, NY</em></p>

                <ul>
                  <li className="pb-2">Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                  <li className="pb-2">Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
                  <li className="pb-2">Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                  <li className="pb-2">Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                </ul>
              </div>

            </Col>
          </Row>

        </div>

      </Container>
        </>
    )
}
