import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import Store from "./Store/store.jsx"

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <App />
  </Provider>,

)
