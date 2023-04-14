const TodoItem = ({itemProp, handleChangers1, delTodo}) => {

  return (
    <li>
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChangers1(itemProp.id)}
      />
      <button onClick={() => delTodo(itemProp.id)}>delete</button>
      {itemProp.title}
    </li>
  )
}

export default TodoItem;