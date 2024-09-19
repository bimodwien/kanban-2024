'use client';
import React, { useEffect, useState } from 'react';
import Finished from '@/components/Finished';
import InProgress from '@/components/InProgress';
import Review from '@/components/Review';
import Todo from '@/components/Todo';
import EditModal from '@/components/EditModal';
import { TTodos } from '@/models/todo.model';
import { fetchTodo } from '@/helpers/fetchTodo';

export default function Home() {
  const [todos, setTodos] = useState<TTodos[]>([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState<TTodos | null>(null);

  const openEditModal = (todo: TTodos) => {
    setTodoToEdit(todo);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setTodoToEdit(null);
  };

  const updatedTodo = (updatedTodo: TTodos) => {
    if (!updatedTodo) {
      console.log('updatedTodo is undefined');
      return;
    }
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo,
      ),
    );
  };

  useEffect(() => {
    fetchTodo(setTodos);
  }, []);

  return (
    <>
      <section className="pt-[100px] px-10 min-h-lvh">
        <div className="md:flex md:flex-col md:justify-center md:items-center lg:grid lg:grid-cols-4 lg:gap-5 lg:items-start">
          <Todo
            todos={todos}
            setTodos={setTodos}
            openEditModal={openEditModal}
          />
          <InProgress todos={todos} openEditModal={openEditModal} />
          <Review todos={todos} openEditModal={openEditModal} />
          <Finished todos={todos} openEditModal={openEditModal} />
        </div>
        {todoToEdit && (
          <EditModal
            isOpen={isEditModalOpen}
            onClose={closeEditModal}
            todo={todoToEdit}
            updatedTodo={updatedTodo}
          />
        )}
      </section>
    </>
  );
}
