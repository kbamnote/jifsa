import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error("Error caught by boundary:", error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Oops, something went wrong!</h2>
            <p className="text-gray-700 mb-6">
              We're sorry, but it seems there was an error loading this page. Please try refreshing the page or come back later.
            </p>
            <button 
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              onClick={() => window.location.reload()}
            >
              Reload Page
            </button>
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-4 text-left text-sm text-gray-500">
                <summary className="cursor-pointer font-medium">Error details</summary>
                <pre className="mt-2 p-2 bg-gray-100 rounded">
                  {this.state.error && this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;