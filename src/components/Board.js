// Board.js
import React, { useState, useEffect } from 'react';
import Card from './Card';

const Board = ({ tickets,users, displayOption }) => {
  const getUserById = (userId, users) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : 'Unknown User';
  };
  const [sortedTickets, setSortedTickets] = useState([]);

  useEffect(() => {
    sortTickets('priority');
  }, [tickets]);

  const sortTickets = (sortOption) => {
    const sorted = [...tickets];

    sorted.sort((a, b) => {
      if (sortOption === 'priority') {
        return b.priority - a.priority;
      } else if (sortOption === 'title') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

    setSortedTickets(sorted);
  };

  useEffect(() => {
    sortTickets('priority');
  }, [tickets]);

  const groupByOptions = {
    status: 'status',
    user: 'assignee',
    priority: 'priority',
  };

  const groupedTickets = {};

  tickets.forEach((ticket) => {
    const groupKey = displayOption === 'user' ? getUserById(ticket.userId, users) : ticket[groupByOptions[displayOption]];
    
    if (!groupedTickets[groupKey]) {
      groupedTickets[groupKey] = [];
    }

    groupedTickets[groupKey].push(ticket);
  });
    return (
    <div className="board">
      {Object.keys(groupedTickets).map((groupKey) => (
        <div key={groupKey} className="group">
          <h2>{groupKey}</h2>
          {groupedTickets[groupKey].map((ticket) => (
            <Card key={ticket.id} ticket={ticket} users={users} displayOption={displayOption} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
