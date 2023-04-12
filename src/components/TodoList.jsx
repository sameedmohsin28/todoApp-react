import TodoItem from "./TodoItem"

const TodoList = ({todoProps, handleChangers, delTodo}) => {
  return (
    <ul>
      {todoProps.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} handleChangers1={handleChangers} delTodo={delTodo}/>
      ))}
    </ul>
  )
}

export default TodoList