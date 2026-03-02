import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Card from './Components/Card'
import './App.css'
import Login  from './Pages/Login'	

function App() {
	return (
		<div>
			<NavBar />
			<main className="Cards-container" style={{ marginTop: '80px', minHeight: 'calc(100vh - 80px)' }}>
				{/* Aquí van las páginas
					redes
					login
					certificado
					cursos
					contacto
				*/}

			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			</main>

			
			<Footer />

		</div>
	)
}

export default App;