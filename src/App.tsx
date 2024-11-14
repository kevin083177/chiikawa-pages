import {Link, Outlet} from 'react-router-dom'
import { useState } from 'react';
import './App.css';

function App() {

  const [score, setScore] = useState(0);


  return (
    <>
      <nav>
        <Link to="/chiikawa-pages/"></Link>
        <Link to="/chiikawa-pages/Quiz"></Link>
      </nav>
      
    <Outlet></Outlet>
    </>
  );
}


export default App;