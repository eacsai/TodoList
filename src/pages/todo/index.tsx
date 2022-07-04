import { memo, useState, ChangeEvent, FormEvent, FC } from 'react';
import { AiFillEdit, AiFillRest } from 'react-icons/ai';
import { TodoWrapper } from './style';

interface Props {
  todo: { id: string; task: string; completed: boolean };
  remove: any;
  update: any;
  finish: any;
  key: string;
}

const Todo: FC<Props> = memo(props => {
  const { todo, remove, update, finish } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);

  const handleClick = (e: any) => {
    remove(e.currentTarget.id);
  };
  const toggleFrom = () => {
    setIsEditing(!isEditing);
  };
  const handleUpdate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    update(todo.id, task);
    toggleFrom();
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };
  const toggleCompleted = (e: any) => {
    finish(e.target.id);
  };

  let result;
  if (isEditing) {
    result = (
      <TodoWrapper>
        <form className="Todo-edit-form" onSubmit={handleUpdate}>
          <input onChange={handleChange} value={task} type="text" />
          <button>Save</button>
        </form>
      </TodoWrapper>
    );
  } else {
    result = (
      <TodoWrapper>
        <li
          id={todo.id}
          onClick={toggleCompleted}
          className={todo.completed ? 'Todo-task completed' : 'Todo-task'}
        >
          {todo.task}
        </li>
        <div className="Todo-buttons">
          <button onClick={toggleFrom}>
            <AiFillEdit />
          </button>
          <button onClick={handleClick} id={todo.id}>
            <AiFillRest />
          </button>
        </div>
      </TodoWrapper>
    );
  }
  return result;
});
export default Todo;
