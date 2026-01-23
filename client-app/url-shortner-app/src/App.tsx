import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Container from "./components/Container/Container"

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-1">
        <Container/>
      </main>
      <Footer/>
    </div>
  )
}

export default App