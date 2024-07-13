import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import NoPage from './pages/NoPage'
import Redirect from './components/Redirect'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/join" element={<Redirect url="https://discord.com/invite/DVvGFXqpqH" />} />
          <Route path="/jointheaether" element={<Redirect url="https://discord.com/invite/SPXeXhRHs5" />} />
          /* Everything must precede NoPage Element! */
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
