const Todo = (props) => {

	const handleChange = (event) => {
		props.updateTodo(props.id, !props.done);
	};

	return (
		<tr key={props.index}>
			<td><input type="checkbox" checked={props.done} onChange={handleChange} /></td>
			{ props.done && <td><span>done</span></td> }
			{ !props.done && <td><span>todo</span></td> }
			<td>{props.task}</td>
		</tr>
	);
};

export default Todo;