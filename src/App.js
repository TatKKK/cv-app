import { HashRouter } from 'react-router-dom';
import Main from './routes/routes';
import './App.scss';


function App() {
  return (   
    <HashRouter>         
     <Main />   
    </HashRouter>  

  );
}

export default App;

