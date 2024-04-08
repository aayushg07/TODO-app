import { useEffect, useState } from 'react';
import './App.css';

const App = () =>{
  const [AGtodos, setAGTodos] = useState([]);
  const [AGuserId, setAGUserId] = useState('1');
  const [AGloading, setAGLoading] = useState(false); 

  useEffect(() => {
    setAGLoading(true);
    fetch(`https://dummyjson.com/todos/user/${AGuserId}`) 
      .then((res) => res.json())
      .then((data) => {
        setAGTodos(data.todos);
        setAGLoading(false);
    
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setAGLoading(false); 
      });
  }, [AGuserId]);

  const AGhandleChange = (event) => {
    setAGUserId(event.target.value);
  };

  return (
    <section class="section">
    <header>
      <h2>Aayush Gautam | 101497054</h2>
      <h3>Todo's</h3>
    </header>
    <div class="dropdown-container">
      <label for="user" class="label"> Please select a user: </label>
      <select id="user" onChange={AGhandleChange} class='dropdown'>
        <option value="1">Arthur</option>
        <option value="2">Lily</option>
        <option value="3">George</option>
      </select>
    </div>
    <main>
      {AGloading ? (
        <p class="loading-text">Data is loading</p>
      ) : (
        <ul class="todo-list">
          {AGtodos.map((item) => {
            return <li key={item.id}>{item.todo}</li>;
          })}
        </ul>
      )}
    </main>
  </section>
  
  );
}

export default App;
