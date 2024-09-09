'use client';
import React, { useEffect, useState } from 'react';
import { TTodos } from '@/models/todo.model';
import { fetchTodo } from '@/helpers/fetchTodo';
import TodoCard from './TodoCard';

function InProgress() {
  const [todos, setTodos] = useState<TTodos[]>([]);

  useEffect(() => {
    fetchTodo(setTodos);
  }, []);

  const filteredTodos = todos.filter(
    (todo) => todo && todo.status === 'inProgress',
  );

  return (
    <>
      <section className="border border-[#E5E5E5] bg-[#F9F9F9] p-4 shadow-xl mb-5 rounded-md">
        <h3 className="font-poppins font-medium mb-5">In Progress</h3>
        <div className="flex flex-col gap-5">
          {filteredTodos.map((todo) => {
            return <TodoCard key={todo.id} todo={todo} />;
          })}
        </div>
      </section>
    </>
  );
}

export default InProgress;
