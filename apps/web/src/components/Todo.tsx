'use client';
import React, { useEffect, useState } from 'react';
import AddModal from './AddModal';
import { TTodos } from '@/models/todo.model';
import { fetchTodo } from '@/helpers/fetchTodo';
import dayjs from 'dayjs';

function Todo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todos, setTodos] = useState<TTodos[]>([]);

  useEffect(() => {
    fetchTodo(setTodos);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addTodo = (newTodo: TTodos) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const filteredTodos = todos.filter((todo) => todo && todo.status === 'todo');

  const priorityClass = (priority: string) => {
    switch (priority) {
      case 'low':
        return 'bg-[#B8EBB0]';
      case 'medium':
        return 'bg-[#F0CA81]';
      case 'high':
        return 'bg-[#DE1D3E] text-white';
      default:
        return '';
    }
  };

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
              <div
                key={todo.id}
                className="border border-[#666666] p-3 pb-16 rounded-md bg-white relative"
              >
                <div className="flex items-center gap-1">
                  <p
                    className={`font-poppins font-light text-[#221C1D] px-2 py-1 rounded-full mb-2 inline-block ${priorityClass(todo.order ?? 'low')}`}
                  >
                    {todo.order
                      ? todo.order.charAt(0).toUpperCase() + todo.order.slice(1)
                      : 'Low'}
                  </p>
                  <p className="font-poppins text-base font-semibold text-[#221C1D] py-1 px-2 mb-2">
                    {todo.title
                      ? todo.title.charAt(0).toUpperCase() +
                        todo.title?.slice(1)
                      : ''}
                  </p>
                </div>
                <p className="font-poppins text-base font-medium text-[#221C1D] py-1">
                  {todo.content
                    ? todo.content.charAt(0).toUpperCase() +
                      todo.content.slice(1)
                    : ''}
                </p>
                <div className="flex gap-3 py-1">
                  <button className="font-poppins text-left px-2 py-1 text-white text-opacity-90 bg-[#DE1D6E] rounded-md">
                    Delete
                  </button>
                  <button className="font-poppins text-left px-2 py-1 text-white text-opacity-90 bg-[#4F1DDE] rounded-md">
                    Edit
                  </button>
                </div>
                <p className="font-poppins font-light text-sm pt-2 text-[#666666]">
                  {dayjs(todo.createdAt).format('MMM D, YYYY')}
                </p>
                <div className="absolute bottom-0 right-0 mb-2 mr-3 inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-100 rounded-full">
                  <span className="font-medium text-gray-600">
                    {todo.user?.fullName ? todo.user.fullName.charAt(0) : ''}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <AddModal
          isOpen={isModalOpen}
          onClose={closeModal}
          addTodo={addTodo}
          setTodos={setTodos}
        />
      </section>
    </>
  );
}

export default Todo;
