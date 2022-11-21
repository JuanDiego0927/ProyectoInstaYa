import React from 'react'  //rfc
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Registro() {
  return (
    <div>
        <h1>Registro</h1>
        <br></br>

        <Container>
      
      <Row>
        <Col></Col>


        <Col>
        <Form>

      <Form.Group className="mb-3" controlId="registroNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su nombre" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="registroUsuario">
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su usuario" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="registroEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su correo elctrónico" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="registroContraseña">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingrese Contraseña" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="registroContraseñaConfirm">
        <Form.Label>Confirme contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingrese Contraseña" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicCheckbox"> 
      </Form.Group>
      
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
