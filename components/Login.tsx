// components/Login.tsx
import React, { forwardRef, useImperativeHandle } from 'react';
import { supabase } from '../lib/supabaseClient';

interface LoginProps {
  email: string;
  password: string;
}

interface LoginActions {
  triggerLogin: () => Promise<void>;
}

const Login = forwardRef<LoginActions, LoginProps>(({ email, password }, ref) => {
  const handleLogin = async () => {
    try {
      console.log("Attempting to log in with:", { email, password });
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      console.log("Supabase login response:", { data, error });

      if (error) {
        console.error("Login error:", error.message);
      } else if (data?.user) {
        console.log("Login successful:", data.user);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  useImperativeHandle(ref, () => ({
    triggerLogin: handleLogin,
  }));

  return (
    <div style={{ background: 'transparent', width: '1px', height: '1px' }}>
      {/* This empty div has a 1px background and is invisible in UI */}
    </div>
  );
});

export default Login;
