import './App.css';
import Layout_seat from './Components/Layout_seat';
import Layout_showseat from './Components/Layout_showseat';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
 
    <Routes>
    
    <Route path='/' element={<Layout_seat/>}/>
    <Route path='/showseat' element={<Layout_showseat/>}/>
 
    {/* <Route path='/api' element={<Api/>}/> */}


 
    </Routes>
    </Router>
  );
}

export default App;
