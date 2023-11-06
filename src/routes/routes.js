import { Routes, Route } from 'react-router-dom';
import Welcome from '../pages/WelcomePage';
import CvPage from '../pages/CvPage';


export default function Main() {
   return(
    <Routes>
        <Route path="/" element={<Welcome />} />
        
        <Route path="/cvpage" element={<CvPage />} />
    </Routes>

   )
}


