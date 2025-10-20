import './App.css'
import Header from './components/Header'
import Apresentacao_loja from './components/Apresentacao_loja'
import Lista_produtos from './components/Lista_produtos'
import Apresentacao_loja2 from './components/Apresentacao_loja2'
import Formulario_redes from './components/Formulario_redes'
import Footer from './components/Footer'

function App() {
  return (
    <main>
      <Header />
      <Apresentacao_loja />
      <Lista_produtos />
      <Apresentacao_loja2 />
      <Formulario_redes />
      <Footer />
    </main>
  )
}

export default App