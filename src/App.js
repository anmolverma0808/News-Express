import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import News from './components/News';
import { BrowserRouter as Router,Routes,Route, } from 'react-router-dom';
import React from 'react';

function App() {

  // const key = ee9f5d7a11374429b2e50ae1b7b154dd;
  // const [searchQuery,setSearchQuery] = React.useState("");

  // function query(q){
  //   setSearchQuery(q);
  // }
  
  return (
    <div className="App">
      <Router>
        {/* <Navbar query={query}/> */}
        <Navbar />
        <div>
          <Routes>
            <Route exact path='/home' element={<News key="general" country="in" category="general"/>}></Route>
            <Route exact path='/science' element={<News key="science" country="in" category="science"/>}></Route>
            <Route exact path='/sports' element={<News key="sports" country="in" category="sports"/>}></Route>
            <Route exact path='/entertainment' element={<News key="entertainment" country="in" category="entertainment"/>}></Route>
            <Route exact path='/health' element={<News key="health" country="in" category="health"/>}></Route>
            <Route exact path='/technology' element={<News key="technology" country="in" category="technology"/>}></Route>
            <Route exact path='/business' element={<News key="business" country="in" category="business"/>}></Route>
            {/* <Route exact path='/search' element={<News key="search" search={searchQuery}/>}></Route> */}
          </Routes>
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
