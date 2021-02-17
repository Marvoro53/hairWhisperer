import React from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, 
  } from 'reactstrap';
import Reviews from '../Pages/Reviews';


function Images() {
    return (
      <>
     <div className="body">
       <h2>Here you will find some of my work!</h2>
       <h3>Feel free to leave some feedback in the Commments!</h3>
     <div className="one">
      <Card>
        <img width="300" height="300" src="/Images/image1.jpeg" alt="Card image cap" />
        <CardTitle tag="h5"></CardTitle>
        <CardBody>
          <CardText></CardText>
        </CardBody>
      </Card>
     </div>

      <div className="two">
      <Card>
        <img width="300" height="300" src="/Images/image2.jpeg" alt="Card image cap" />
        <CardTitle tag="h5"></CardTitle>
        <CardBody>
          <CardText></CardText>
        </CardBody>
      </Card> 
     </div>

     <div className="one">
     <Card>
        <img width="300" height="300" src="/Images/image3.jpeg" alt="Card image cap" />
        <CardTitle tag="h5"></CardTitle>
        <CardBody>
          <CardText></CardText>
        </CardBody>
      </Card>
     </div>

      <div className="two">
      <Card>
        <img width="300" height="300" src="/Images/image4.jpeg" alt="Card image cap" />
        <CardTitle tag="h5"></CardTitle>
        <CardBody>
          <CardText></CardText>
        </CardBody>
      </Card>
      </div>
      
      <div className="one">
      <Card>
        <img width="300" height="300" src="/Images/image5.jpeg" alt="Card image cap" />
        <CardTitle tag="h5"></CardTitle>
        <CardBody>
          <CardText></CardText>
        </CardBody>
      </Card>
      </div>

      <div className="two">
      <Card>
        <img width="300" height="300" src="/Images/image6.jpeg" alt="Card image cap" />
        <CardTitle tag="h5"></CardTitle>
        <CardBody>
          <CardText></CardText>
        </CardBody>
      </Card>
      </div>

      <div className="one">
      <Card>
        <img width="300" height="300" src="/Images/image7.jpeg" alt="Card image cap" />
        <CardBody>
        <CardTitle tag="h5"></CardTitle>
          <CardText></CardText>
        </CardBody>
      </Card>
      </div>

      <div className="two">
      <Card>
        <img width="300" height="300" src="/Images/image8.jpeg" alt="Card image cap" />
        <CardTitle tag="h5"></CardTitle>
        <CardBody>
          <CardText></CardText>
        </CardBody>
      </Card>
      </div>
     </div>
     <div className="Reviews">
        <Reviews />
      </div>
     </>
    )
}

export default Images;
