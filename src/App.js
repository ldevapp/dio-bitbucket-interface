import './App.css';
import BitbuckerProvider from './Providers/Bitbucket-provider';
import { Container, Row, Col } from 'react-bootstrap';
import InputSearchUser from './Components/InputSearchUser';
import UserProfile from './Components/UserProfile';
import Menu from './Components/Menu';
import RepositoryList from './Components/RepositoryList';
import logotipo from './images/logo192.png';

function App() {
  return (
    <BitbuckerProvider>
      <Container fluid>
        <Row>
          <Col className="perfil-menu" xs={12} md={3}>
              <Row>
                <Col xs="2" className="logotipo" align="center">
                  <img src={logotipo} alt="Logotipo Bitbucket" width="46"/>
                </Col>
                <Col xs="10" className="search-user">
                  <InputSearchUser />
                </Col>
              </Row>
              <Row>
                <Col>
                  <UserProfile/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Menu />
                </Col>
              </Row>          
          </Col>
          <Col className="conteudo" xs={12} md={9}>
            <RepositoryList/>
          </Col>
        </Row>
      </Container>
    </BitbuckerProvider>
  );
}

export default App;
