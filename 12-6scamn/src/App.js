import logo from './logo.svg';
import './App.css';
import { createBrowserHistory } from "history";
import Header from './Layouts/Topbaar';

import Header2 from './Layouts/AppBar';
import { Router } from 'react-router';
import HorizontalLinearStepper from './component/Stepper';
import { Grid } from '@material-ui/core';
const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
<Grid container direction='column'>
<Router history={history}>
     <Header/>
   <div><Header2/></div>
     </Router>
    
     <HorizontalLinearStepper/>
</Grid>
 
    </div>
  );
}

export default App;
