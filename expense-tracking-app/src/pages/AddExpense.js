import React from 'react';
import { useForm } from 'react-hook-form';

function AddExpense() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Add/Edit Expense</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label>Amount</label>
          <input type="number" {...register('amount', { required: true })} className="input" />
          {errors.amount && <span>This field is required</span>}
        </div>

        <div>
          <label>Date</label>
          <input type="date" {...register('date', { required: true })} className="input" />
        </div>

        <div>
          <label>Category</label>
          <input {...register('category', { required: true })} className="input" />
        </div>

        <div>
          <label>Description</label>
          <input {...register('description')} className="input" />
        </div>

        <div>
          <label>Payment Method</label>
          <input {...register('paymentMethod', { required: true })} className="input" />
        </div>

        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
}

export default AddExpense;
