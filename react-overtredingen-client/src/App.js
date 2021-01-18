import logo from './logo.svg';
import './App.css';
import ListOvertredingen from './overtredingen/listovertredingen'

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import SearchOvertredingen from './overtredingen/Searchovertredingen';
function App() {
  return (
    
      <div className = 'container'>
            <BrowserRouter>

            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
              <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav'>
                  <li className='nav-item active'>
                    <Link to={ '/list' } className='nav-link'>List</Link>
                  </li>
                  <li className='nav-item active'>
                    <Link to={ '/search' } className='nav-link'>search</Link>
                  </li>
                  </ul>
                  </div>
              </nav>
        <Switch>
          <Route exact path='/list'><ListOvertredingen/></Route>
          <Route exact path='/search'><SearchOvertredingen/></Route>
          <Route path='*'><ListOvertredingen/></Route>
        </Switch>  
    </BrowserRouter>
    </div>

  )
}

export default App;
