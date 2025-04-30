import React from 'react';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Dashboard() {
  const data = [
    { name: 'Rent', value: 400 },
    { name: 'Food', value: 300 },
    { name: 'Entertainment', value: 200 },
  ];

  const barData = [
    { month: 'January', expense: 300 },
    { month: 'February', expense: 500 },
    { month: 'March', expense: 700 },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <div className="flex gap-6 mt-4">
        <div>
          <h3>Total Balance</h3>
          <p>$1000</p>
        </div>
        <div>
          <h3>Total Income</h3>
          <p>$1500</p>
        </div>
        <div>
          <h3>Total Expenses</h3>
          <p>$500</p>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="font-medium">Category-wise Expenses</h3>
        <PieChart width={400} height={400}>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" />
          <Tooltip />
        </PieChart>
      </div>

      <div className="mt-6">
        <h3 className="font-medium">Monthly Expense Trends</h3>
        <BarChart width={500} height={300} data={barData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="expense" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
}

export default Dashboard;
