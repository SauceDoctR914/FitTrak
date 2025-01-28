import {ref} from 'vue';
import { User, Provider } from '@supabase/supabase-js';
import type { AuthError, AuthState } from '~/types/auth';


export const useUseAuth = () => {
  const supabase = useSupabaseAuthClient();
  const user = useSupabaseUser();

  const state = ref<AuthState>({loading: false,
    errors: {}
  });

  const loginWithGh = async (provider: Provider) => {
    try {
      state.value.loading = true;
      state.value.errors.oauth = undefined;

      const { error } = await supabase.auth.signInWithOAuth({
      provider
    })
  
    if (error) {
      console.error(error);
      state.value.errors.oauth = {message: error.message, provider};
      return false;
    } 
  } catch (err) {
    console.error('unexpected error during Oauth:', err);
    state.value.errors.oauth = {message: 'unexpected error during Oauth:', provider};
    return false;
  } finally {
    state.value.loading = false;
  }
}
  
  const loginWithEmail = async (email: string, password: string) => {
    try {
      state.value.loading = true;
      state.value.errors.oauth = undefined;
      
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      if (error) { 
        state.value.errors.email = {message: error.message}
        return false;
      }
    } catch (err){
      console.error('Unexpected error during authentication:', err) 
      state.value.errors.email = {message: 'Unexpected error during authentication:'}
      return false;
    } finally {
      state.value.loading = false;
    }

  }
  return 
}