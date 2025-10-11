import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const TestChart = () => {
  const data = [
    { name: 'Bots', value: 30000 },
    { name: 'Humans', value: 70000 }
  ];

  const COLORS = {
    Bots: '#ef4444',
    Humans: '#22c55e'
  };

  return (
    <div style={{ width: '100%', height: '400px', background: '#1a1a1a', padding: '20px' }}>
      <h2 style={{ color: 'white', textAlign: 'center' }}>Test Pie Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ${value}`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TestChart;