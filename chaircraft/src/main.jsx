import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { PartsContextProvider } from './contexts/partContext.jsx'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { isMobile } from 'react-device-detect';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <PartsContextProvider>
      <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
        <App />
      </DndProvider>
    </PartsContextProvider>
  </BrowserRouter>,
)
