
const Card = ({ ticket, users, displayOption }) => {
  const getUserById = (userId, users) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : 'Unknown User';
  };
  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 4:
        return 'Urgent';
      case 3:
        return 'High';
      case 2:
        return 'Medium';
      case 1:
        return 'Low';
      case 0:
        return 'No Priority';
      default:
        return 'Unknown Priority';
    }
  };

  const priorityLabel = getPriorityLabel(ticket.priority);

  return (
    <div className="card">
      <div className="priority-container">
        <div className={`priority priority-${ticket.priority}`}>{priorityLabel}</div>
      </div>
      <div className="ticket-id">{ticket.id}</div>
      <div className="title">{ticket.title}</div>
      <div className="status">{ticket.status}</div>
      <div className="tag">{ticket.tag}</div>
    </div>
  );
};

export default Card;
