'use client';
import React, { useEffect, useState } from 'react';
import Finished from '@/components/Finished';
import InProgress from '@/components/InProgress';
import Review from '@/components/Review';
import Todo from '@/components/Todo';
import { TTodos } from '@/models/todo.model';
import { fetchTodo } from '@/helpers/fetchTodo';

export default function Home() {
  const [todos, setTodos] = useState<TTodos[]>([]);

  useEffect(() => {
    fetchTodo(setTodos);
  }, []);

  return (
    <>
      <section className="pt-10 px-10 bg-[#FAF9F6] h-lvh">
        <div className="md:flex md:flex-col md:justify-center md:items-center lg:grid lg:grid-cols-4 lg:gap-5 lg:items-start">
          <Todo todos={todos} setTodos={setTodos} />
          <InProgress todos={todos} />
          <Review todos={todos} />
          <Finished todos={todos} />
        </div>
      </section>
    </>
  );
}
