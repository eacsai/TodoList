import styled from '@modern-js/runtime/styled';

export const TodoWrapper = styled.div`
  display: flex;
  margin: 0 -3rem 4px;
  padding: 1.1rem 3rem;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  .Todo-task {
    position: relative;
    transition: opacity 0.4s linear;
  }

  .Todo-task.completed {
    opacity: 0.6;
  }

  .Todo-task.completed:before {
    content: '';
    position: absolute;
    top: 50%;
    left: -0.5rem;
    display: block;
    width: 0%;
    height: 2px;
    background: #fff;
    animation: strikeitem 0.5s ease-out 0s forwards;
  }

  @keyframes strikeitem {
    to {
      width: calc(100% + 1rem);
    }
  }

  .Todo-buttons {
    flex-shrink: 0;
    padding-left: 0.7em;
  }

  .Todo-buttons button {
    border: none;
    font-size: 1em;
    margin: 0.4em;
    background: none;
    -webkit-appearance: none;
    cursor: pointer;
    color: #fff;
  }

  .Todo-edit-form {
    display: flex;
    flex-wrap: wrap;
  }

  .Todo-edit-form label {
    min-width: 100%;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }

  .Todo-edit-form input {
    flex-grow: 1;
    border: none;
    background: #f7f1f1;
    padding: 0 1.5em;
    font-size: initial;
  }

  .Todo-edit-form button {
    padding: 0 1.3rem;
    border: none;
    background: #ff6666;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    border: 1px solid rgba(255, 255, 255, 0.3);
    margin-left: 5px;
    cursor: pointer;
    transform: background 0.2s ease-out;
  }

  .Todo-edit-form button:hover {
    background: #ff5e5e;
  }

  .Todo-edit-form input,
  .Todo-edit-form button {
    font-family: 'Quicksand', sans-serif;
    height: 3rem;
  }
`;
