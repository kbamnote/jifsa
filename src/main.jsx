import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Loading from './components/common/Loading'
import ErrorBoundary from './components/common/ErrorBoundary'
import { addResourceHints } from './utils/resourcePreloader'
import { initPerformanceMonitoring } from './utils/analytics'

// Initialize performance monitoring
initPerformanceMonitoring();

// Add resource hints for better performance
addResourceHints();

// Register service worker for caching
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/src/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Create a loading fallback component
const LoadingFallback = () => (
  <div className="flex justify-center items-center h-screen">
    <Loading />
  </div>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  </StrictMode>,
)