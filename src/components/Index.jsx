import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Index() {
  return (
    <div>

    <h1>Página principal</h1>
    <br></br>
    <br></br>
    <br></br>

    <Container>
      
      <Row>
        <Col></Col>



        <Col>

        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="text" placeholder="Ingrese Usuario" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingrese Contraseña" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
      </Form.Group>
      <Button variant="primary" type="submit">
        Ingresar
      </Button>
      <br></br>
      <br></br>
      
      <Button variant="success" type="submit">
        Registrarse
      </Button>
    </Form>
        
        
        </Col>





        <Col></Col>
      </Row>
    </Container>
    


    </div>
  )
}
