import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from './ToastContext';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { addToast } = useToast();
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('arola_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('arola_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('arola_user');
    }
  }, [user]);

  const login = (email, name = 'Conscious Patron') => {
    const newUser = {
      email,
      name,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      memberSince: '2025',
      ordersCount: 3,
      treesPlanted: 14
    };
    setUser(newUser);
    addToast(`Welcome back, ${name}!`);
    return true;
  };

  const register = (name, email) => {
    const newUser = {
      email,
      name,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      memberSince: '2026',
      ordersCount: 0,
      treesPlanted: 1
    };
    setUser(newUser);
    addToast(`Account created! Welcome to the Arola circle, ${name}.`);
    return true;
  };

  const logout = () => {
    setUser(null);
    addToast('You have been logged out successfully.', 'info');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
