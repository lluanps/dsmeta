import Header from "./componentes/Header"
import SalesCard from "./componentes/SalesCard"


function App() {
  return(
    <>
    <Header/>
    <main>
        <section id="vendas">
             <div className="vendas-container">

                <SalesCard />
             </div>
        </section>
      </main>
    </>
  )
}

export default App
