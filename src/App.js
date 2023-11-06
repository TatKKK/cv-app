import { BrowserRouter } from 'react-router-dom';
import Main from './routes/routes';
import './App.scss';


function App() {
  return (
   
    <BrowserRouter>         
     <Main />   
    </BrowserRouter>  

  );
}

export default App;

