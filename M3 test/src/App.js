import { Container } from '@material-ui/core';
import Postapi from './component/postapi.js';
import Getapi from './component/getapi.js';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Appbar from './component/appbar.js';
import Routes from './component/Route.js';
function App() {
  return (
    <BrowserRouter>
    <div>
    <Container>
    <Appbar/>
    <Routes/>
    </Container>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
