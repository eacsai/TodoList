import { useState, FC, useEffect, useCallback, memo, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from '../todo';
import TodoForm from '../todoForm';
import { TodoListWrapper } from './style';
import useSize from '@/hooks/useSize';

interface NewTodo {
  id: string;
  task: string;
  completed: boolean;
}

const TodoList: FC = memo(() => {
  const { height, width } = useSize();
  const [todos, setTodos] = useState([
    { id: uuidv4(), task: 'task 1', completed: false },
    { id: uuidv4(), task: 'task 2', completed: true },
  ]);
  const todosRef = useRef(todos);
  useEffect(() => {
    const getTodos: NewTodo[] = JSON.parse(
      localStorage.getItem('todos') || '[]',
    );
    setTodos(getTodos);
  }, []);

  useEffect(() => {
    todosRef.current = todos;
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const create = useCallback((newTodo: NewTodo) => {
    setTodos([...todosRef.current, newTodo]);
  }, []);

  const remove = useCallback((id: string) => {
    setTodos(todosRef.current.filter(todo => todo.id !== id));
  }, []);

  const update = useCallback((id: string, updtedTask: string) => {
    const updatedTodos = todosRef.current.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updtedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }, []);

  const finish = useCallback((id: string) => {
    const updatedTodos = todosRef.current.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }, []);

  const todosList = todos.map(todo => (
    <Todo
      finish={finish}
      update={update}
      remove={remove}
      key={todo.id}
      todo={todo}
    />
  ));

  return (
    <div
      style={{
        background: `url("https://w.wallhaven.cc/full/l3/wallhaven-l3xk6q.jpg")`,
        width: `${width}px`,
        minHeight: `${height}px`,
        backgroundSize: 'cover',
        overflow: 'hidden',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        margin: '-8px',
      }}
    >
      <TodoListWrapper>
        <h1>
          Todo List <span>A simple React Todo List App</span>
        </h1>
        <ul>{todosList}</ul>
        <TodoForm createTodo={create} />
      </TodoListWrapper>
    </div>
  );
});

export default TodoList;
