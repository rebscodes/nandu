import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Calculator, BookOpen, Home, AlertTriangle } from 'lucide-react';
import WushuNanduCalculator from './NanduCalculator.jsx';
import ChangquanPlanner from './ChangquanPlanner.jsx';
import Deductions from './Deductions.jsx';

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-white shadow-lg border-b border-orange-100 mb-6">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Home className="h-6 w-6 text-orange-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Wushu Taolu Builder
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
              Required Movements
            </Link>
            
            <Link
              to="/deductions"
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 ${
                location.pathname === '/deductions'
                  ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
              }`}
            >
              <AlertTriangle className="h-4 w-4" />
              Deductions
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  // Shared state for cross-page data
  const [nanduCombos, setNanduCombos] = useState([]);
  const [changquanSelections, setChangquanSelections] = useState({});

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <Navigation />
        <Routes>
          <Route 
            path="/" 
            element={
              <WushuNanduCalculator 
                sharedCombos={nanduCombos} 
                setSharedCombos={setNanduCombos} 
              />
            } 
          />
          <Route 
            path="/changquan" 
            element={
              <ChangquanPlanner 
                sharedSelections={changquanSelections} 
                setSharedSelections={setChangquanSelections} 
              />
            } 
          />
          <Route 
            path="/deductions" 
            element={
              <Deductions 
                selectedNanduMovements={nanduCombos} 
                selectedChangquanMovements={changquanSelections} 
              />
            } 
          />
        </Routes>
        
        {/* Footer */}
        <footer className="mt-12 py-8">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-gray-600">
              made with 💖 by{' '}
              <a 
                href="http://instagram.com/rebswushu" 
                className="text-orange-600 hover:text-orange-700 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                @rebswushu
              </a>
              .&nbsp;
              <a 
                href="https://www.admonymous.co/rebecca-chinn" 
                className="text-orange-600 hover:text-orange-700 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                got thoughts?💭
              </a>
              &nbsp;
              <a 
                href="https://coff.ee/rebscodes" 
                className="text-orange-600 hover:text-orange-700 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                say thanks!☕
              </a>
              &nbsp;
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;