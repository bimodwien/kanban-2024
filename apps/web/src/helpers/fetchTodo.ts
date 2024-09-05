import { axiosInstance } from '@/lib/axios';
import { TTodos } from '@/models/todo.model';
import React from 'react';

export async function fetchTodo(
  setTodos: (value: React.SetStateAction<TTodos[]>) => void,
) {
  const axios = axiosInstance();

  try {
    const response = await axios.get('/todos');
    const dataTodo = response.data;
    setTodos(dataTodo.data);
  } catch (error) {
    console.log(error);
  }
}
