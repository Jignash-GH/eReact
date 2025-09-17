import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import A from './A.jsx'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <A/>
     </BrowserRouter>
  </StrictMode>,
)
