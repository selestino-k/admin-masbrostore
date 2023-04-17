import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navigationbar(){
return (
    <Container>
    <Navbar bg="dark">
            <Container>
            <Navbar.Brand>
                Masbro.Store
            </Navbar.Brand>
            </Container>
        </Navbar>
        </Container>
    );
}
export default Navigationbar;