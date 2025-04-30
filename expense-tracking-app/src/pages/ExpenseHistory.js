import React from 'react';

function ExpenseHistory() {
  const transactions = [
    { date: '2025-04-01', amount: 50, category: 'Food', description: 'Lunch', paymentMethod: 'Credit Card' },
    { date: '2025-04-02', amount: 20, category: 'Transport', description: 'Bus Ticket', paymentMethod: 'Cash' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Expense History</h2>
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
            <th>Payment Method</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{transaction.description}</td>
              <td>{transaction.paymentMethod}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseHistory;
