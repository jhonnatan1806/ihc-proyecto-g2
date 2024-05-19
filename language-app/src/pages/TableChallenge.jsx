import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import UserTable from '../components/UserTable';
import FilterOptions from '../components/FilterOptions';
import Statistics from '../components/Statistics';
import TopFiveTable from '../components/TopFiveTable';

const TableChallenge = () => {
  const initialUsers = [
    { id: 1, name: 'Usuario 1', score: 80, status: 'Completado' },
    { id: 2, name: 'Usuario 2', score: 0, status: 'Pendiente' },
    { id: 3, name: 'Usuario 3', score: 45, status: 'Suspendido' },
    { id: 4, name: 'Usuario 4', score: 90, status: 'Completado' },
    { id: 5, name: 'Usuario 5', score: 0, status: 'Pendiente' },
    { id: 6, name: 'Usuario 6', score: 55, status: 'Suspendido' },
    { id: 7, name: 'Usuario 7', score: 85, status: 'Completado' },
    { id: 8, name: 'Usuario 8', score: 65, status: 'Pendiente' },
    { id: 9, name: 'Usuario 9', score: 30, status: 'Suspendido' },
    { id: 10, name: 'Usuario 10', score: 100, status: 'Completado' },
  ];

  const [users, setUsers] = useState([...initialUsers].sort((a, b) => b.score - a.score));

  const handleSearch = (searchTerm) => {
    const filteredUsers = initialUsers.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setUsers(filteredUsers.sort((a, b) => b.score - a.score));
  };

  const handleFilter = (score, status) => {
    let filteredUsers = initialUsers;

    if (score) {
      filteredUsers = filteredUsers.filter(user => user.score >= parseInt(score, 10));
    }

    if (status) {
      filteredUsers = filteredUsers.filter(user => user.status === status);
    }

    setUsers(filteredUsers.sort((a, b) => b.score - a.score));
  };

  const handleReset = () => {
    setUsers([...initialUsers].sort((a, b) => b.score - a.score));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-4"
    >
      <PageHeader />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="my-4"
      >
        <FilterOptions onSearch={handleSearch} onFilter={handleFilter} onReset={handleReset} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="w-full md:col-span-2">
          <UserTable users={users} />
          <Statistics users={users} />
        </div>
        <div className="w-full md:col-span-1">
          <TopFiveTable users={users} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TableChallenge;
