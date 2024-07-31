// Import React from the react library
import React from 'react';

// Define a function component named TaskList that takes 'tasks' as a prop
function TaskList({ tasks }) {
  return (
    <div>
      {/* Display a heading */}
      <h2>Task List</h2>
      {/* Create an unordered list */}
      <ul>
        {/* Map over the tasks array and display each task as a list item */}
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

// Export the TaskList component so it can be used in other parts of the application
export default TaskList;
