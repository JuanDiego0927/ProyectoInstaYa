import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

export default function Ordenes() {
  return (
    <div>

    <h1>Ordenes (Crear/Actualizar)</h1>
    <br></br>
    <br></br>
    <h3>Información del Paquete</h3>
    <br></br>


<Container>
      
      <Row>
        <Col>
        <Form.Group className="mb-3" controlId="fechaOrden">
        <Form.Label>Fecha</Form.Label>
        <Form.Control type="text" placeholder="Digite la fecha" />
      </Form.Group>
        </Col>

        <Col>
        <Form.Group className="mb-3" controlId="horaOrden">
        <Form.Label>Hora</Form.Label>
        <Form.Control type="text" placeholder="Digite la hora" />
      </Form.Group>
        </Col>

        <Col>
        <Form.Group className="mb-3" controlId="idOrden">
        <Form.Label>ID</Form.Label>
        <Form.Control type="text" placeholder="Digite el ID" />
      </Form.Group>
        </Col>

        <Col>
        <Form.Group className="mb-3" controlId="altoOrden">
        <Form.Label>Alto</Form.Label>
        <Form.Control type="text" placeholder="Alto del paquete" />
      </Form.Group>
        </Col>

      </Row>
    </Container>



    <Container>
      
      <Row>
        <Col>
        <Form.Group className="mb-3" controlId="anchoOrden">
        <Form.Label>Ancho</Form.Label>
        <Form.Control type="text" placeholder="Ancho del paquete" />
      </Form.Group>
        </Col>

        <Col>
        <Form.Group className="mb-3" controlId="largoOrden">
        <Form.Label>Largo</Form.Label>
        <Form.Control type="text" placeholder="Largo del paquete" />
      </Form.Group>
        </Col>

        <Col>
        <Form.Group className="mb-3" controlId="pesoOrden">
        <Form.Label>Peso</Form.Label>
        <Form.Control type="text" placeholder="Peso del paquete" />
      </Form.Group>
        </Col>

        <Col>
        <Form.Group className="mb-3" controlId="cantidadOrden">
        <Form.Label>Cantidad</Form.Label>
        <Form.Control type="text" placeholder="Número de paquetes" />
      </Form.Group>
        </Col>
      </Row>
    </Container>

    <br></br>
    <br></br>
    <h3>Información del Usuario</h3>
    <br></br>

    <Container>
      
      <Row>
        <Col>
        <Form.Group className="mb-3" controlId="EmisorOrden">
        <Form.Label>Emisor</Form.Label>
        <Form.Control type="text" placeholder="Quien envía el paquete" />
      </Form.Group>
        </Col>

        <Col>
        <Form.Group className="mb-3" controlId="ciudadEmisorOrden">
        <Form.Label>Ciudad</Form.Label>
        <Form.Control type="text" placeholder="Ciudad origen" />
      </Form.Group>
        </Col>

        <Col>
        <Form.Group className="mb-3" controlId="emisorOrden">
        <Form.Label>Contacto emisor</Form.Label>
        <Form.Control type="text" placeholder="Celular de quien envía" />
      </Form.Group>
        </Col>

        <Col>
        <Form.Group className="mb-3" controlId="direccionEmisorOrden">
        <Form.Label>Dirección emisor</Form.Label>
        <Form.Control type="text" placeholder="Dirección del emisor" />
      </Form.Group>
        </Col>

      </Row>
    </Container>



    <Container>
      
      <Row>
        <Col>
        <Form.Group className="mb-3" controlId="receptorOrden">
        <Form.Label>Receptor</Form.Label>
        <Form.Control type="text" placeholder="Quien recibe el paquete" />
      </Form.Group>
        </Col>

        <Col>
        <Form.Group className="mb-3" controlId="ciudadReceptorOrden">
        <Form.Label>Ciudad</Form.Label>
        <Form.Control type="text" placeholder="Direccion de quien recibe" />
      </Form.Group>
        </Col>

        <Col>
        <Form.Group className="mb-3" controlId="contactoReceptorOrden">
        <Form.Label>Contacto recpetor</Form.Label>
        <Form.Control type="text" placeholder="Celular de quien recibe" />
      </Form.Group>
        </Col>

        <Col>
        <Form.Group className="mb-3" controlId="direcciónReceptorOrden">
        <Form.Label>Dirección</Form.Label>
        <Form.Control type="text" placeholder="Dirección final" />
      </Form.Group>
        </Col>
      </Row>
    </Container>


        
        
    <Button variant="primary" controlId="crearOrdenButton" type="submit">
        Crear orden
      </Button>


    <br></br>
    <br></br>


      <Button variant="success" controlId="actualizarOrdenButton " type="submit">
        Actualizar orden
      </Button>
    


    </div>
  )
}
