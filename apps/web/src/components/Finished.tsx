'use client';
import React from 'react';
import { TTodos } from '@/models/todo.model';

import TodoCard from './TodoCard';

interface FinishedProps {
  todos: TTodos[];
}

const Finished = ({ todos }: FinishedProps) => {
  const filteredTodos = todos.filter(
    (todo) => todo && todo.status === 'finished',
  );

  return (
    <>
      <section className="border border-[#E5E5E5] bg-[#F9F9F9] p-4 shadow-xl mb-5 rounded-md">
        <h3 className="font-poppins font-medium mb-5">Finished</h3>
        <div className="flex flex-col gap-5">
          {filteredTodos.map((todo) => {
            return <TodoCard key={todo.id} todo={todo} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Finished;
