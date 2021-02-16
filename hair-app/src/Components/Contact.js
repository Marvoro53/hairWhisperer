import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


function Contact() {
    return (
        <div className="form">
    <Form>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleName" className="mr-sm-2">First Name:</Label>
        <Input type="text" name="name" id="exampleName" placeholder="First name" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleName" className="mr-sm-2">Last Name:</Label>
          <Input type="text" name="name" id="example name" placeholder="Last name" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">Email:</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
        </div>
    )
}

export default Contact;


