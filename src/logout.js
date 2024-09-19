import { supabase } from "./supabaseClient";

export const logout = async () => {
  await supabase.auth.signOut();
  window.location.reload(); // Refresh the page to clear user state
};

// export const logout = async (navigate) => {
//   try {
//     const { error } = await supabase.auth.signOut();
//     if (error) throw error;

//     navigate("/", { replace: true });
//   } catch (error) {
//     console.error("Error during logout:", error.message);
//   }
// };

