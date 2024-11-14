import {Link, Outlet} from 'react-router-dom'
import './App.css';

function App() {

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