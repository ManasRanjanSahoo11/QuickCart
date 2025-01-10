import { Routes, Route, Link, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Details from "./pages/Details"
import Create from "./components/Create"

function App() {

  const { search, pathname } = useLocation()
  // console.log(search, pathname);

  return (
    <>
      {
        (pathname != '/' || search.length > 0) && <Link to='/' className='block absolute top-2 left-80 font-semibold px-5 py-1 hover:text-gray-400 transition-all ease-in-out'>Home</Link>
      }

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:productId" element={<Details />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  )
}

export default App
