import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Title from '../Components/Title';
import { useState } from 'react';
import pf1 from '../img/portfolio/portfolio-1.jpg'
import pf2 from '../img/portfolio/portfolio-2.jpg'
import pf3 from '../img/portfolio/portfolio-3.jpg'
import pf4 from '../img/portfolio/portfolio-4.jpg'
import pf5 from '../img/portfolio/portfolio-5.jpg'
import pf6 from '../img/portfolio/portfolio-6.jpg'
import pf7 from '../img/portfolio/portfolio-7.jpg'
import pf8 from '../img/portfolio/portfolio-8.jpg'
import pf9 from '../img/portfolio/portfolio-9.jpg'

export default function Portfolio() {
  const myStyle = {
    letterSpacing: '2px', };
    
     const [filter, setFilter] = useState('*');

  const portfolioItems = [
    { id: 1, image: pf1, category: 'app' },
    { id: 2, image: pf2, category: 'web'  },
    { id: 3, image: pf3, category: 'app'  },
    { id: 6, image: pf6, category: 'app' },
    { id: 5, image: pf5, category: 'web'  },
    { id: 4, image: pf4, category: 'card' },
    { id: 7, image: pf7, category: 'card'  },
    { id: 8, image: pf8, category: 'card'  },
    { id: 9, image: pf9, category: 'web' },
    
  ];

  const handleFilter = (category) => {
    setFilter(category);
  };

  return (
    <>
      

      <Title titl="PORTFOLIO" desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."></Title>
      <Container>
        <Row>
        <section id="portfolio" className="portfolio section-bg">
          <div className=' col-lg-12 m-4'>
            <div className='d-flex list-unstyled justify-content-center'>
              <div className=' mx-3  bradius  'onClick={()=> handleFilter('*')}>ALL</div>
              <div className=' mx-3  bradius  'onClick={()=> handleFilter('app')}>APP</div>
              <div className=' mx-3  bradius  'onClick={()=> handleFilter('card')}>CARD</div>
              <div className=' mx-3  bradius  'onClick={()=> handleFilter('web')}>WEB</div>
            </div>
          </div>

          <div className="row " >
          {portfolioItems.map((item) => {
            if (filter === '*' || item.category === filter) {
              return (
                <div key={item.id} className="col-lg-4 col-md-6">
                  <div >
                    <img src={item.image} className="img-fluid" alt={item.title} />
                   
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
        </section>
        </Row>
      </Container>
    
     
      


    </>
  )
}
