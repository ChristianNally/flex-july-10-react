import Todo from './Todo';

const TodoList = (props) => {

	console.log('props', props);
	console.log('typeof props', typeof props);

	return (
		<>
		<table>
			<tbody>
		{ props.todolist.map((item, index) => {
			return ( <Todo key={index} id={item.id} task={item.task} done={item.done} updateTodo={props.updateTodo}/> )
			}) 
		}
		</tbody>
		</table>
		</>

	);
};

export default TodoList;
