import { useReducer, FC, memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoFormWrapper } from './style';

interface Props {
  createTodo: any;
}
const TodoForm: FC<Props> = memo(props => {
  const { createTodo } = props;
  const [userInput, setUserInput] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      task: '',
    },
  );

  const handleChange = (e: any) => {
    setUserInput({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newTodo = { id: uuidv4(), task: userInput.task, completed: false };
    createTodo(newTodo);
    setUserInput({ task: '' });
  };

  return (
    <TodoFormWrapper>
      <form className="NewTodoForm" onSubmit={handleSubmit}>
        <label htmlFor="task">New todo</label>
        <input
          value={userInput.task}
          onChange={handleChange}
          id="task"
          type="text"
          name="task"
          placeholder="New Todo"
        />
        <button>Add Todo</button>
      </form>
    </TodoFormWrapper>
  );
});

export default TodoForm;
