import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { PartsContextProvider } from './contexts/partContext.jsx'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <PartsContextProvider>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </PartsContextProvider>
  </BrowserRouter>,
)
