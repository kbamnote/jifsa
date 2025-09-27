import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Loading from './components/common/Loading'
import ErrorBoundary from './components/common/ErrorBoundary'

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
