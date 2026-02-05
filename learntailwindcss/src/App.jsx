import Navbar from "./components/Navbar"
import Header from "./components/Header"
import MainContainer from "./components/MainContainer"

function App() {
  return (
    <div className="grid md:grid-cols-3 min-h-screen bg-gray-50">

      {/* LEFT SIDEBAR */}
      <Navbar />

      {/* RIGHT CONTENT */}
      <main className="md:col-span-2 p-10">

        <Header />

        <MainContainer />

      </main>

    </div>
  )
}

export default App
