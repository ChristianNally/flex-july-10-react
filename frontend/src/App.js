import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';

function App() {

	const [todoList, setTodoList] = useState([]);
	const [showDetail, setShowDetail] = useState(false);

	console.log('todoList', todoList);
	console.log('typeof todoList', typeof todoList);

	useEffect(() => {
		fetch('http://127.0.0.1:8080/todos')
		.then((response) => response.json()) // response.json() returns a new promise, so it gets its own .then clause
		.then((data) => {
			setTodoList(data);
		})
		.catch((error) => {
			console.log('error', error); // this is important to include so that you can see when errors occur
		});
	}, []);

	const totalTodos = () => {
		return todoList.length;
	};

	const finishedTodosCount = () => {
		let count = 0;
		for (let todo of todoList) {
			if (todo.done) {
				count++;
			}
		}
		return count;
	};

	const updateTodo = (id, done) => {
		console.log('updateTodo called', id, done);
		// update our todoList state, such that the todo with the given id has the given done value
		// it is important to use map here, because we want to return a new array, not modify the existing array
		const newTodoList = todoList.map((todo) => {
			if (todo.id === id) {
				todo.done = done;
			}
			return todo;
		});
		setTodoList(newTodoList);
	};

  return (
    <div className="App">
			<h1>ToDo List App</h1>
			<p>{ finishedTodosCount() } complete out of { totalTodos() }</p>
			<div>Show Detail: <input type="checkbox"  onChange={() => { setShowDetail(!showDetail) }}/></div>
			{ showDetail && <TodoList todolist={todoList} updateTodo={updateTodo}/> }
    </div>
  );
}

export default App;
