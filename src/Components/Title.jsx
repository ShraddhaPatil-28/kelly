import React from 'react'

const Title = (props) => {
  return (
    <div className='container text-center'>
        <h2>{props.titl}</h2>
        <center>
        <hr style={{border:"2px blue solid",width:"100px"}}/>

        </center>
        <p>{props.desc}</p>
    </div>
  )
}

export default Title