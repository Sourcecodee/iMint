import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { ProductProvider } from './context/ProductContext'
import Home from './pages/Home'
import Admin from './pages/Admin'
import ProductDetail from './pages/ProductDetail'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <ProductProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-[#fcfcf9] text-zinc-900">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </Router>
    </ProductProvider>
  )
}

export default App
