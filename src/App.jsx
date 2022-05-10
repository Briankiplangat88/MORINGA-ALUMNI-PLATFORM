import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components'
import { Login, Signup, Home } from './routes'

function App() {
  return (
		<div>
			<Router>
        <Navbar />
				<Routes>
				  <Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
