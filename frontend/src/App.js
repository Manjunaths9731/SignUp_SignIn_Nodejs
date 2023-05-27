import './App.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Successfull from './Successfull';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path='/' element={<SignUp />}/>
              <Route path='/signin' element={<SignIn />}/>
              <Route path='/success' element={<Successfull/>}/>
            </Route>
          </Routes>
          
        </BrowserRouter>  
    </div>
  );
}

export default App;
