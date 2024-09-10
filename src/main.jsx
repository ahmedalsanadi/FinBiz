import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'; // Import Tailwind CSS
import App from './App.jsx'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import '../node_modules/swiper/swiper.min.css';



AOS.init({
  duration: 800, 
  once: false,
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
