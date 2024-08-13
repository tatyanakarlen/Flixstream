import { supabase } from "../../supabaseClient";

export const refreshAuthToken = async () => {
    const refreshToken = localStorage.getItem('refresh_token')
    if (!refreshToken) {
        return null; 
    }

    const { data, error } = await supabase.auth.refreshSession({ refresh_token:refreshToken})

    if (error) {
        console.error("Failed to refresh token", error.message)
        return null; 
    }

    localStorage.setItem('access_token', data.access_token); 
    localStorage.setItem('refresh_token', data.refresh_token)
    localStorage.setItem('expires_at', data.expires_at); 

    return data 
}