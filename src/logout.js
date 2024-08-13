import { supabase } from "./supabaseClient";

export const logout = async () => {
  await supabase.auth.signOut();
  window.location.reload(); // Refresh the page to clear user state
};
