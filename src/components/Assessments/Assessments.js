import React, { useContext, createRef, useEffect, useState }  from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './Assessments.scss';
import Button from "../Button/Button";
import ODAS from "../../api/odas";


const Assessments = () => {
  const ref = createRef();
  let [assessments, setAssesments] = useState([]);
  const buttonProperties={
    text: 'Get Started', additionalClasses:'btn-sm', styles:{type:'primary', width:'full', responsive:true, disabled:false},  type:'button', badge: ''
  };
  let onButtonClick= function(e){ alert(e)};

  useEffect(()=>{
    // fetch('../../api/odas/assessments.json').then((res)=>{
     ODAS.get().then((res)=>{
      console.log(res.assessments);
      setAssesments(res.assessments);
    })
  },[])

  return (
    <Container>
      <div style={{maxWidth:'750px', margin:'auto'}}>
      <h1 style={{fontSize:'15px', margin:'20px 0px'}}>AVAILABLE</h1>
      <div className="bg-white">
     { assessments && assessments.map((assessment, index)=>{
      return <Row key={index} className="align-items-center assessment">
        <Col md='9'>
          <div className="d-flex align-items-center">
            <div className={"chat-Icon "+assessment.tag.toLowerCase()}>
             <i className="fa fa-comment-o" style={{fontSize:'22px'}}>  </i>
            </div>
            <div className="chat-text">
              <h4>
                {assessment.title}
              </h4>
              <p>{assessment.author}</p>
            </div>

          </div>

        </Col>
        <Col md='3' style={{marginTop:'10px'}}><Button ref={ref} {...buttonProperties} onButtonClick={()=>onButtonClick(assessment.title)}>Get Started</Button></Col>
      </Row>
      
      
     })
      }


      </div>
      </div>
    </Container>
   )
};

export default Assessments;