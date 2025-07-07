import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Calculator, BookOpen, Home } from 'lucide-react';
import WushuNanduCalculator from './app.jsx';
import ChangquanPlanner from './ChangquanPlanner.jsx';

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-white shadow-lg border-b border-orange-100 mb-6">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Home className="h-6 w-6 text-orange-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Wushu Training Hub
            </span>
          </div>
          
          <div className="flex gap-4">
            <Link
              to="/"
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 ${
                location.pathname === '/'
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
              }`}
            >
              <Calculator className="h-4 w-4" />
              Nandu Calculator
            </Link>
            
            <Link
              to="/changquan"
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 ${
                location.pathname === '/changquan'
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
              }`}
            >
              <BookOpen className="h-4 w-4" />
              Changquan Planner
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<WushuNanduCalculator />} />
          <Route path="/changquan" element={<ChangquanPlanner />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;