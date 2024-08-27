'use client';

import React, { useEffect } from 'react';
import { useAppDispatch } from '@/lib/redux/hooks';
import { keepLogin } from '@/lib/redux/middleware/auth.middleware';

type Props = { children: React.ReactNode };

const AuthProvider = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  async function handleKeepLogin() {
    await dispatch(keepLogin());
  }
  useEffect(() => {
    handleKeepLogin();
  }, []);
  return children;
};

export default AuthProvider;
