// App.js
import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import './App.css';

// App.js
const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [displayOption, setDisplayOption] = useState('status');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();

      setTickets(data.tickets);
      setUsers(data.users);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDisplayOptionChange = (option) => {
    setDisplayOption(option);
  };

  return (
    <div className="app">
      <div className="controls">
        <button onClick={() => handleDisplayOptionChange('status')}>By Status</button>
        <button onClick={() => handleDisplayOptionChange('user')}>By User</button>
        <button onClick={() => handleDisplayOptionChange('priority')}>By Priority</button>
      </div>
      <Board tickets={tickets} users={users} displayOption={displayOption} />
    </div>
  );
};


export default App;
