
import style from './App.module.css'
import { Menu } from './components/menu'

function App() {
  
  return (
    <>
   <Menu option01='Sessão01' option02='Sessão02' option03='Sessão03'option04='Sessão04'></Menu>
   <main>
    <section id='s1'>
      <h2>sessao 1</h2>
    </section>
    <section id='s2'>
      <h2>sessao 2</h2>
    </section>
    <section id='s3'>
      <h2>sessao 3</h2>
    </section>
    <section id='s4'>
      <h2>sessao 4</h2>
    </section>
   </main>
    </>
  )
}

export default App
