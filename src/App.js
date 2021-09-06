import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import InputSearchUser from './Components/InputSearchUser';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col className="perfil-menu" xs={12} md={3}>
            <Row>
              <Col xs="auto" className="search-user">
                <InputSearchUser />
              </Col>
            </Row>
            <Row>
              <Col>
                Perfil
              </Col>
            </Row>
            <Row>
              <Col>
                Menu
              </Col>
            </Row>          
        </Col>
        <Col className="conteudo" xs={12} md={9}>
          Lista Repositório
        </Col>
      </Row>
    </Container>
  );
}

export default App;
