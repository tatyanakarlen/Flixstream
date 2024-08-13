import React, { createContext, useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import { logout as logoutUser } from './logout';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        console.log('Fetching session...');
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) throw error;
        setUser(session?.user ?? null);
        console.log('UserProvider - Session fetched:', session);
      } catch (error) {
        console.error('Error fetching session:', error);
      } finally {
        setLoading(false); // Ensure this is called
        console.log('UserProvider - Loading set to false');
      }
    };
  
    fetchSession();
  
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('Auth state changed:', event, session);
        setUser(session?.user ?? null);
        setLoading(false); // Ensure this is called
        console.log('UserProvider - Auth state changed, loading set to false');
      }
    );
  
    return () => {
      authListener.unsubscribe();
    };
  }, []);

  const logout = async () => {
    await logoutUser();
    setUser(null); // Update the user state
    console.log('UserProvider - Logged out');
  };

  console.log('UserProvider - Current user:', user); // Log user state in provider

  return (
    <UserContext.Provider value={{ user, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};