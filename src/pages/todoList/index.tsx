import { useState, FC, useEffect, useCallback, memo, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from '../todo';
import TodoForm from '../todoForm';
import { TodoListWrapper } from './style';

interface NewTodo {
  id: string;
  task: string;
  completed: boolean;
}

const TodoList: FC = memo(() => {
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

  const remove = useCallback(
    (id: string) => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  const update = useCallback(
    (id: string, updtedTask: string) => {
      const updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, task: updtedTask };
        }
        return todo;
      });
      setTodos(updatedTodos);
    },
    [todos],
  );

  const finish = useCallback(
    (id: string) => {
      const updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      setTodos(updatedTodos);
    },
    [todos],
  );

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
    <TodoListWrapper>
      <h1>
        Todo List <span>A simple React Todo List App</span>
      </h1>
      <ul>{todosList}</ul>
      <TodoForm createTodo={create} />
    </TodoListWrapper>
  );
});

export default TodoList;
