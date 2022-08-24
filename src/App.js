import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Home from './components/Home';
import Bookmarks from './components/Bookmarks';



function App() {
   return (
<Router>    
            <main className='py-3'>
            <Header/>
                <Container>
                  <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/Bookmarks' element={<Bookmarks/>} />
                  </Routes>
                </Container>
            </main> 
        
    </Router>
  );
}

export default App;
