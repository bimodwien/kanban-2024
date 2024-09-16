'use client';
import React, { useEffect, useState } from 'react';
import AddModal from './AddModal';
import TodoCard from './TodoCard';
import EditModal from './EditModal';
import { TTodos } from '@/models/todo.model';

interface TodoProps {
  todos: TTodos[];
  setTodos: React.Dispatch<React.SetStateAction<TTodos[]>>;
}

function Todo({ todos, setTodos }: TodoProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [todoToEdit, setTodoToEdit] = useState<TTodos | null>(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openEditModal = (todo: TTodos) => {
    setTodoToEdit(todo);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setTodoToEdit(null);
  };

  const addTodo = (newTodo: TTodos) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const updateTodo = (updatedTodo: TTodos) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo,
      ),
    );
  };

  const filteredTodos = todos.filter((todo) => todo && todo.status === 'todo');

  return (
    <>
      <section className="border border-[#E5E5E5] bg-[#F9F9F9] p-4 shadow-xl mb-5 rounded-md">
        <div className="flex justify-between items-center">
          <h3 className="font-poppins font-medium mb-5">Todo</h3>
          <button
            onClick={openModal}
            className="font-poppins font-medium mb-5 underline underline-offset-4"
          >
            Add Todo
          </button>
        </div>
        <div className="flex flex-col gap-5">
          {filteredTodos.map((todo) => {
            return (
              <TodoCard
                key={todo.id}
                todo={todo}
                onEdit={() => openEditModal(todo)}
              />
            );
          })}
        </div>
        <AddModal
          isOpen={isModalOpen}
          onClose={closeModal}
          addTodo={addTodo}
          setTodos={setTodos}
        />
        {todoToEdit && (
          <EditModal
            isOpen={isEditModalOpen}
            onClose={closeEditModal}
            todo={todoToEdit}
            updatedTodo={updateTodo}
          />
        )}
      </section>
    </>
  );
}

export default Todo;
