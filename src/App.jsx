import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login, Signup } from './routes'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
