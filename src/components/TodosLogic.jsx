import InputTodo from "./InputTodo";
import TodoList from './TodoList';

import { useState } from "react";

const TodosLogic = () => {
	const [todos, setTodos] = useState([
		{
			id: 1,
			title: 'Setup development environment',
			completed: true,
		},
		{
			id: 2,
			title: 'Develop website and add content',
			completed: false,
		},
		{
			id: 3,
			title: 'Deploy to live server',
			completed: false,
		},
	])

	const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    )
  }

	const delTodo = (id) => {
		setTodos([
			...todos.filter((todo) => {
				return todo.id !== id;
			}),
		]);
	}

	const addTodoItem = (title) => {
		const newTodo = {
			id: todos.length+1,
			title: title,
			completed: false,
		}
		setTodos([...todos, newTodo]);
	};

	return (
		<>
			<InputTodo addTodoItem={addTodoItem} />
			<TodoList todoProps={todos} handleChangers={handleChange} delTodo={delTodo}/>
		</>
	)
}

export default TodosLogic;