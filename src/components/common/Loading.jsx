import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="relative">
        {/* Main spinning circle */}
        <div className="w-20 h-20 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        
        {/* Inner pulsing dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
        
        {/* Outer rotating ring */}
        <div className="absolute -top-2 -left-2 w-24 h-24 border-2 border-transparent border-l-blue-400 border-t-blue-400 rounded-full animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }}></div>
        
        {/* Orbiting dots */}
        <div className="absolute -top-4 -left-4 w-28 h-28">
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-500 rounded-full animate-spin origin-center" style={{ transformOrigin: '0 56px', animationDuration: '2s' }}></div>
          <div className="absolute top-1/2 right-0 w-1.5 h-1.5 bg-blue-400 rounded-full animate-spin origin-center" style={{ transformOrigin: '-56px 0', animationDuration: '2.5s' }}></div>
          <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-300 rounded-full animate-spin origin-center" style={{ transformOrigin: '0 -56px', animationDuration: '1.8s' }}></div>
        </div>
        
      
        
       
      </div>
      
      <style jsx>{`
        @keyframes progress {
          0% { width: 20%; }
          50% { width: 70%; }
          100% { width: 90%; }
        }
      `}</style>
    </div>
  );
};

export default Loading;