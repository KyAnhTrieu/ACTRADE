import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'
import HomePage from './pages/HomePage'
import Trading from './pages/Trading'
import Partner from './pages/Partner'
import Hdcb from './pages/Hdcb'
import SendEmail from './pages/SendEmail'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/trading' element={<Trading />} />
          <Route path='/partner' element={<Partner />} />
          <Route path='/hdcb' element={<Hdcb />} />
          <Route path='/sendEmail' element={<SendEmail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
