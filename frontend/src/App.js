import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, CheckCircle, Eye, Users, Mail, MessageCircle, Video, FileText, Smartphone, Laptop, Shield, Zap, Gavel, DollarSign, TrendingUp, AlertCircle } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';


const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [botList, setBotList] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    // Fetch bot predictions from API
    fetchBotData();
  }, []);

  const fetchBotData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/predictions?limit=25');
      const data = await response.json();
      setBotList(data);
    } catch (error) {
      console.error('Error fetching bot data:', error);
      // Fallback mock data
      setBotList([
        { username: 'TerryDavis_lover', predicted_class: 'Human', confidence: 98.7 },
        { username: 'Lebron_lover32', predicted_class: 'Bot', confidence: 84.4 },
        { username: 'michael.ser4', predicted_class: 'Human', confidence: 89.2 },
        { username: 'jason.h1lton2', predicted_class: 'Bot', confidence: 95.2 },
        { username: '_spencerhurt_', predicted_class: 'Human', confidence: 92.2 },
        { username: 'parkerzth', predicted_class: 'Bot', confidence: 95.6 },
        { username: 'emilyy.zwerth', predicted_class: 'Human', confidence: 88.2 },
        { username: 'jhmcathy23', predicted_class: 'Human', confidence: 91.2 },
        { username: 'aiden_games', predicted_class: 'Human', confidence: 83.2 },
        { username: 'rbl_tv', predicted_class: 'Human', confidence: 93.2 },
        
      ]);
    }
  };

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Scrape",
      description: "Gork will scrape your thread whenever you want."
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Classify",
      description: "Gork segments groups based on their behavior."
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Detect",
      description: "Flag potential bots and store them inside a database."
    }
  ];

  const useCases = [
    { icon: <Eye className="w-8 h-8 text-teal-400" />, title: "Detect" },
    { icon: <Zap className="w-8 h-8 text-green-400" />, title: "Optimize" },
    { icon: <Users className="w-8 h-8 text-blue-400" />, title: "Real Users" },
    { icon: <Gavel className="w-8 h-8 text-cyan-400" />, title: "Compliant" }
  ];

  // Calculate statistics
  const totalCustomers = 100000;
  const botCount = 30000;
  const humanCount = totalCustomers - botCount;
  const potentialRevenue = 100000;
  const revenuePerCustomer = potentialRevenue / totalCustomers;
  const realisticRevenue = humanCount * revenuePerCustomer;
  const revenueLost = potentialRevenue - realisticRevenue;
  const lossPercentage = (revenueLost / potentialRevenue) * 100;

  // Pie chart data
  const pieData = [
    { name: 'Bots', value: botCount, percentage: 30 },
    { name: 'Humans', value: humanCount, percentage: 70 }
  ];

  const COLORS = {
    Bots: '#ef4444', // red
    Humans: '#22c55e' // green
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes pulseBlob {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in-scale {
          animation: fadeInScale 0.8s ease-out forwards;
        }
        
        .animate-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animate-delay-600 {
          animation-delay: 0.6s;
        }
        
        .blob {
          animation: pulseBlob 4s ease-in-out infinite;
        }
        
        .blob-2 {
          animation: pulseBlob 4s ease-in-out infinite 2s;
        }
        
        .blob-3 {
          animation: pulseBlob 4s ease-in-out infinite 4s;
        }
        
        .hover-scale {
          transition: transform 0.3s ease;
        }
        
        .hover-scale:hover {
          transform: scale(1.05);
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-teal-900/20 to-blue-900/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl blob-2"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl blob-3"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className={`mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
              BotHunter
              <br />
              <span className="text-white">Classify. Segment. Flag.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              X is full of AMA's which are not easily identifiable
            </p>
          </div>

          <div className={`relative mb-12 opacity-0 ${isVisible ? 'animate-fade-in-scale animate-delay-300' : ''}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
              <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 p-4 flex items-center">
                <div className="flex items-center space-x-2 text-gray-400 text-sm ml-2.5">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-4 hover-scale cursor-pointer">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <p className="text-gray-400">Gork in action</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`opacity-0 ${isVisible ? 'animate-fade-in-up animate-delay-600' : ''}`}>
            <p className="text-2xl md:text-3xl font-light mb-12">
              Map behavior in real time
              <br />
              <span className="font-semibold">Let US do it for you</span>
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-teal-500/30 transition-all duration-300 hover-scale"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Understand your analytics like never before
            </h2>
            <p className="text-2xl text-gray-400">Birds eye view.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-teal-500/30 transition-all duration-300 hover-scale"
              >
                {useCase.icon}
                <span className="mt-4 text-lg font-medium">{useCase.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How Does It Work Section - UPDATED */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-teal-900/10 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How does it work?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Grid: Pie Chart + Bot List */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Pie Chart */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold mb-6 text-center">Bot vs Human Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percentage }) => `${name}: ${percentage}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span className="text-sm text-gray-400">Bots: {botCount.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-sm text-gray-400">Humans: {humanCount.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Bot List */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold mb-6">Segmentation List</h3>
              <div className="max-h-[350px] overflow-y-auto custom-scrollbar">
                <table className="w-full">
                  <thead className="sticky top-0 bg-gray-900 z-10">
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-2 px-2 text-sm font-medium text-gray-400">User</th>
                      <th className="text-center py-2 px-2 text-sm font-medium text-gray-400">Type</th>
                      <th className="text-right py-2 px-2 text-sm font-medium text-gray-400">Confidence</th>
                    </tr>
                  </thead>
                  <tbody>
                    {botList.slice(0, 25).map((user, index) => (
                      <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                        <td className="py-2 px-2 text-sm font-mono text-gray-300">{user.username}</td>
                        <td className="py-2 px-2 text-center">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                            user.predicted_class === 'Bot' 
                              ? 'bg-red-500/20 text-red-400' 
                              : 'bg-green-500/20 text-green-400'
                          }`}>
                            {user.predicted_class}
                          </span>
                        </td>
                        <td className="py-2 px-2 text-right text-sm font-semibold text-teal-400">
                          {user.confidence.toFixed(1)}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Revenue Impact Section */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2">
                <DollarSign className="w-8 h-8 text-green-400" />
                Revenue Impact Analysis
              </h3>
              <p className="text-gray-400">Understanding the financial cost of bot traffic</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Potential Revenue */}
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 text-center">
                <TrendingUp className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-gray-300 mb-2">Potential Revenue</h4>
                <p className="text-3xl font-bold text-blue-400 mb-1">
                  ${potentialRevenue.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">
                  If all {totalCustomers.toLocaleString()} customers were real
                </p>
                <div className="mt-3 text-xs text-gray-500 bg-gray-800/50 rounded p-2">
                  100% ROI Achievement
                </div>
              </div>

              {/* Realistic Revenue */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center">
                <CheckCircle className="w-10 h-10 text-green-400 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-gray-300 mb-2">Realistic Revenue</h4>
                <p className="text-3xl font-bold text-green-400 mb-1">
                  ${realisticRevenue.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">
                  From {humanCount.toLocaleString()} real customers (70%)
                </p>
                <div className="mt-3 text-xs text-gray-500 bg-gray-800/50 rounded p-2">
                  Actual Customer Base
                </div>
              </div>

              {/* Revenue Lost */}
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 text-center">
                <AlertCircle className="w-10 h-10 text-red-400 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-gray-300 mb-2">Revenue Lost to Bots</h4>
                <p className="text-3xl font-bold text-red-400 mb-1">
                  ${revenueLost.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">
                  {botCount.toLocaleString()} bot accounts ({lossPercentage.toFixed(0)}% loss)
                </p>
                <div className="mt-3 text-xs text-gray-500 bg-gray-800/50 rounded p-2">
                  Wasted Resources
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-teal-400" />
                The Bottom Line
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-300 mb-3">
                    Out of <span className="font-bold text-white">{totalCustomers.toLocaleString()} customers</span>, 
                    <span className="font-bold text-red-400"> {botCount.toLocaleString()} are bots</span> (30%).
                  </p>
                  <p className="text-gray-300">
                    This results in a <span className="font-bold text-red-400">${revenueLost.toLocaleString()} revenue loss</span>, 
                    representing <span className="font-bold text-red-400">{lossPercentage.toFixed(0)}%</span> of potential revenue.
                  </p>
                </div>
                <div className="bg-teal-500/10 border border-teal-500/30 rounded-lg p-4">
                  <p className="text-teal-400 font-semibold mb-2">💡 With BotHunter:</p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>✓ Deferentiate between bots and humans</li>
                    <li>✓ Actionable insights for decision making</li>
                    <li>✓ Visualize your true revenue</li>
                    <li>✓ Improve engagement metrics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop losing revenue to bot traffic
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Try BotHunter and protect your revenue today.
          </p>
          <button
            className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300 shadow-lg shadow-teal-500/25 hover-scale cursor-pointer"
          >
            Get Started Free
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>&copy; 2025 BotHunters. Who you gonna call?</p>
        </div>
      </footer>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #14b8a6;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #0d9488;
        }
      `}</style>
    </div>
  );
};

export default App;