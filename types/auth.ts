import type { User, Provider } from '@supabase/supabase-js'

export interface AuthError {
  message: string
  provider?: Provider
}

export interface AuthState {
  loading: boolean
  errors: {
    oauth?: AuthError
    email?: AuthError
    reset?: AuthError
  }
}