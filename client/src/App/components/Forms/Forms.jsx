import React from 'react'
import {Row, Col, Card, Form, Button} from 'react-bootstrap'

const Forms = () => {
  return (
    <Row>
      <Col>
        <Card>
          <Card.Header>
            <Card.Title as='h5'>Basic Component</Card.Title>
          </Card.Header>
          <Card.Body>
            <h5>Form controls</h5>
            <hr/>
            <Row>
              <Col md={6}>
                <Form>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email'/>
                    <Form.Text className='text-muted'>
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Password'/>
                  </Form.Group>
                  <Form.Group controlId='formBasicChecbox'>
                    <Form.Check type='checkbox' label='Check me out'/>
                  </Form.Group>
                  <Button variant='primary'>
                    Submit
                  </Button>
                </Form>
              </Col>
              <Col md={6}>
                <Form.Group controlId='exampleForm.ControlInput1'>
                  <Form.Label>Text</Form.Label>
                  <Form.Control type='email' placeholder='Text'/>
                </Form.Group>
                <Form.Group controlId='exampleForm.ControlSelect1'>
                  <Form.Label>Example select</Form.Label>
                  <Form.Control as='select'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId='exampleForm.ControlTextarea1'>
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as='textarea' rows='3'/>
                </Form.Group>
              </Col>
            </Row>
            <h3 className='mt-5'>Checkboxes and Radios</h3>
            <Row>
              <Col md={12}>
                <h5 className='mt-5'>Checkboxes</h5>
                <hr/>
                <Form.Group>
                  <Form.Check
                    custom
                    type='checkbox'
                    id='checkbox1'
                    label='Check this custom checkbox'
                  />
                  <Form.Check
                    custom
                    type='checkbox'
                    id='checkbox2'
                    label='Check this custom checkbox'
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <h5 className='mt-3'>Inline</h5>
                <hr/>
                <Form.Group>
                  <Form.Check
                    inline
                    custom
                    type='radio'
                    label='Toggle this custom radio'
                    name='supportedRadio'
                    id='supportedRadio21'
                  />
                  <Form.Check
                    inline
                    custom
                    type='radio'
                    label='Or toggle this other custom radio'
                    name='supportedRadio'
                    id='supportedRadio22'
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <h5 className='mt-5'>Range</h5>
                <hr/>
                <Form.Label htmlFor='customRange1'>Example range</Form.Label>
                <input type='range' className='custom-range' defaultValue='22' id='customRange1'/>
                <Form.Label htmlFor='customRange2'>Example range</Form.Label>
                <input type='range' className='custom-range' min='0' defaultValue='3' max='5' id='customRange2'/>
                <Form.Label htmlFor='customRange3'>Example range</Form.Label>
                <input type='range' className='custom-range' min='0' defaultValue='1.5' max='5' step='0.5'
                       id='customRange3'/>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default Forms
