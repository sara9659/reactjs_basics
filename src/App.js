
import Navbar from './components/Navbar'
import Home from './components/Home'
import NoPage from './components/No_Page'
import NewBlog from './components/NewBlog';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import BlogDetails from './components/BlogDetails';

function App() {


  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <div className='content'>
          <Routes>
            <Route path='/' element={< Home />}/>
            <Route path='/create' element={<NewBlog />}/>
            <Route path='/blogdetails/:id' element={<BlogDetails />}/>
            <Route path='*' element={<NoPage /> }/>
          </Routes>
        </div>
        <Footer />
        </div>
    </Router>    
  );
}

export default App;
