export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-4 relative">
            <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20"></div>
            <div className="relative w-full h-full bg-primary rounded-full flex items-center justify-center">
              <span className="text-2xl text-white font-bold">B</span>
            </div>
          </div>
        </div>
        
        {/* Loading Text */}
        <h2 className="text-3xl font-playfair font-bold text-primary mb-4">
          Bohemia München
        </h2>
        <p className="text-gray-600 mb-8">
          Authentische tschechische Küche wird geladen...
        </p>
        
        {/* Loading Animation */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-8 w-64 mx-auto">
          <div className="bg-gray-200 rounded-full h-2">
            <div className="bg-primary h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
