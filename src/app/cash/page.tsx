'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { BanknotesIcon, CreditCardIcon, ShieldCheckIcon, ClockIcon, CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function Cash() {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [transactionHistory, setTransactionHistory] = useState(true);

  useEffect(() => {
    // Smooth scroll to top when page loads
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const accountBalance = {
    available: 1250.00,
    pending: 150.00,
    total: 1400.00,
    currency: 'USD'
  };

  const cashPackages = [
    {
      id: 'basic',
      name: 'Basic Deposit',
      amount: 100,
      price: 100.00,
      bonus: 0,
      popular: false,
      description: 'Standard deposit with no fees'
    },
    {
      id: 'premium',
      name: 'Premium Deposit',
      amount: 500,
      price: 500.00,
      bonus: 25,
      popular: true,
      description: 'Most popular choice with 5% bonus'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Deposit',
      amount: 1000,
      price: 1000.00,
      bonus: 100,
      popular: false,
      description: 'Best value with 10% bonus'
    },
    {
      id: 'vip',
      name: 'VIP Deposit',
      amount: 2500,
      price: 2500.00,
      bonus: 500,
      popular: false,
      description: 'Maximum benefits with 20% bonus'
    }
  ];

  const recentTransactions = [
    {
      id: '1',
      type: 'Deposit',
      amount: 500.00,
      status: 'Completed',
      date: '2024-01-15',
      method: 'Bank Transfer'
    },
    {
      id: '2',
      type: 'Purchase',
      amount: -25.00,
      status: 'Completed',
      date: '2024-01-14',
      method: 'Content Purchase'
    },
    {
      id: '3',
      type: 'Deposit',
      amount: 100.00,
      status: 'Pending',
      date: '2024-01-13',
      method: 'Credit Card'
    }
  ];

  const handleDeposit = () => {
    if (selectedPackage) {
      alert(`Deposit initiated for ${selectedPackage} package!`);
    }
  };

  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar />
      <main className="flex-1 ml-64">
        <Header />
        <div className="pt-16">
          <div className="p-6">
            {/* Professional Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-600 rounded-full p-3">
                  <BanknotesIcon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white">Cash Management</h1>
                  <p className="text-gray-400">Secure financial transactions and account management</p>
                </div>
              </div>
            </div>

            {/* Account Balance Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-xl p-6 border border-green-500/30">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Available Balance</h3>
                  <CheckCircleIcon className="h-6 w-6 text-green-500" />
                </div>
                <div className="text-3xl font-bold text-green-400">
                  ${accountBalance.available.toLocaleString()}
                </div>
                <p className="text-green-300 text-sm mt-2">Ready for transactions</p>
              </div>

              <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-xl p-6 border border-yellow-500/30">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Pending</h3>
                  <ClockIcon className="h-6 w-6 text-yellow-500" />
                </div>
                <div className="text-3xl font-bold text-yellow-400">
                  ${accountBalance.pending.toLocaleString()}
                </div>
                <p className="text-yellow-300 text-sm mt-2">Processing transactions</p>
              </div>

              <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-xl p-6 border border-blue-500/30">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Total Balance</h3>
                  <BanknotesIcon className="h-6 w-6 text-blue-500" />
                </div>
                <div className="text-3xl font-bold text-blue-400">
                  ${accountBalance.total.toLocaleString()}
                </div>
                <p className="text-blue-300 text-sm mt-2">Including pending</p>
              </div>
            </div>

            {/* Deposit Packages */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Deposit Packages</h2>
                <div className="flex items-center space-x-2 text-green-400">
                  <ShieldCheckIcon className="h-5 w-5" />
                  <span className="text-sm">Bank-level security</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cashPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`relative bg-gray-900 rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 ${
                      selectedPackage === pkg.id
                        ? 'border-blue-500 bg-blue-500/10'
                        : 'border-gray-700 hover:border-gray-600'
                    } ${pkg.popular ? 'ring-2 ring-green-500/50' : ''}`}
                    onClick={() => setSelectedPackage(pkg.id)}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                          Recommended
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-4">
                        <BanknotesIcon className="h-8 w-8 text-blue-500 mr-2" />
                        <span className="text-2xl font-bold text-white">${pkg.amount.toLocaleString()}</span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-2">{pkg.name}</h3>
                      <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>
                      
                      {pkg.bonus > 0 && (
                        <div className="bg-green-500/20 text-green-400 text-sm px-3 py-1 rounded-full mb-4">
                          +${pkg.bonus} bonus
                        </div>
                      )}
                      
                      <div className="text-xl font-bold text-white mb-2">
                        ${pkg.price.toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Transaction History */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Recent Transactions</h2>
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-800">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Type</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Amount</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Date</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Method</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {recentTransactions.map((transaction) => (
                        <tr key={transaction.id} className="hover:bg-gray-800">
                          <td className="px-6 py-4 text-white font-medium">{transaction.type}</td>
                          <td className={`px-6 py-4 font-semibold ${
                            transaction.amount > 0 ? 'text-green-400' : 'text-red-400'
                          }`}>
                            {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              transaction.status === 'Completed' 
                                ? 'bg-green-500/20 text-green-400' 
                                : 'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {transaction.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-300">{transaction.date}</td>
                          <td className="px-6 py-4 text-gray-300">{transaction.method}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Security Features */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Security & Protection</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                  <ShieldCheckIcon className="h-8 w-8 text-green-500 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Bank-Level Security</h3>
                  <p className="text-gray-400 text-sm">256-bit SSL encryption and secure payment processing</p>
                </div>
                
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                  <ClockIcon className="h-8 w-8 text-blue-500 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Instant Processing</h3>
                  <p className="text-gray-400 text-sm">Most transactions are processed within seconds</p>
                </div>
                
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                  <ExclamationTriangleIcon className="h-8 w-8 text-yellow-500 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Fraud Protection</h3>
                  <p className="text-gray-400 text-sm">Advanced monitoring and fraud detection systems</p>
                </div>
              </div>
            </div>

            {/* Deposit Button */}
            <div className="text-center">
              <button
                onClick={handleDeposit}
                disabled={!selectedPackage}
                className={`px-8 py-4 rounded-xl text-lg font-bold transition-all duration-200 ${
                  selectedPackage
                    ? 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105'
                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
              >
                {selectedPackage ? 'Process Deposit' : 'Select a Package'}
              </button>
              
              <p className="text-gray-400 text-sm mt-4">
                Protected by bank-level security • Instant processing • 24/7 support
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
