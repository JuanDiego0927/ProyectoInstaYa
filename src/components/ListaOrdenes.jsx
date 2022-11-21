import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export default function ListaOrdenes() {
  return (
    <div>
        
        <h1>Lista de Ordenes</h1>

        <br></br>
        <br></br>
        <br></br>



        <Row>
        <Col>
        <Button variant="danger">Salir</Button>
        
        </Col>


        <Col xs={6}>   
        
        <Button variant="primary">Listar todas las órdenes</Button>
        
        </Col>



        <Col>
        <Button variant="success">Crear orden</Button>
        
        </Col>
      </Row>


      <br></br>
        <br></br>

      

        
{/*      
          <th>#</th>
          <th>ID Orden</th>
          <th>Remitente</th>
          <th>Contacto</th>
          <th>Ciudad Origen</th>
          <th>Receptor</th>
          <th>Contacto</th>
          <th>Ciudad destino</th> */}


<Container fluid="md">
      <Row>
        <Col>
        <Table striped bordered hover>
      <thead>
        <tr>
        <th># Orden</th>
          <th>ID Orden</th>
          <th>Remitente</th>
          <th>Contacto</th>
          <th>Ciudad Origen</th>
          <th>Receptor</th>
          <th>Contacto</th>
          <th>Ciudad destino</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>1001</td>
          <td>Josue Vital</td>
          <td>6846543513</td>
          <td>Cartagena</td>
          <td>Mark</td>
          <td>646535454</td>
          <td>Bogotá</td>
        </tr>
        <tr>
        <td>2</td>
          <td>1002</td>
          <td>Camilo</td>
          <td>6465453</td>
          <td>Bogotá</td>
          <td>Lucas</td>
          <td>985656523</td>
          <td>Madrid</td>
        </tr>
        <tr>
        <td>3</td>
          <td>1003</td>
          <td>Juan Diego</td>
          <td>6546354365</td>
          <td>Bogotá</td>
          <td>Pedro</td>
          <td>989665641</td>
          <td>Miami</td>
        </tr>
      </tbody>
    </Table>
        
        
        
        
        </Col>
      </Row>
    </Container>
        
    
        
        
        
        
    </div>
  )
}
