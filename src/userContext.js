import React, { createContext, useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { logout as logoutUser } from "./logout";


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();
        if (error) throw error;
        setUser(session?.user ?? null);
      } catch (error) {
        console.error("Error fetching session:", error);
      } finally {
        setLoading(false); // Ensure this is called
      }
    };

    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false); // Ensure this is called
      }
    );

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  const logout = async () => {
    await logoutUser();
    setUser(null); 
  };

  return (
    <UserContext.Provider value={{ user, logout, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};
