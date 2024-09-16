'use client';
import { TTodos } from '@/models/todo.model';
import React from 'react';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  todo: TTodos;
  updatedTodo: (updatedTodo: TTodos) => void;
}

function EditModal({ isOpen, onClose, todo, updatedTodo }: EditModalProps) {
  return (
    <>
      <div>EditModal</div>
    </>
  );
}

export default EditModal;
