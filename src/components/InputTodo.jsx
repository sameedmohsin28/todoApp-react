import { useState } from "react"

const InputTodo = ({addTodoItem}) => {

  const [title, setTitle] = useState('')
  
  const handleChange = (abc) => {
    setTitle(abc.target.value);
  }

  const handleSubmit = (b) => {
    b.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('')
    } else {
      alert('Abay sahi se bhar na')
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} placeholder="Add todo" required onChange={handleChange}/>
      <button>Submit</button>
    </form>
  )
}

export default InputTodo