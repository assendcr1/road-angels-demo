import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { ShieldAlert, Lock, ArrowRight, Loader2 } from 'lucide-react';

export default function AdminLogin({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAdminAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) throw authError;

      // Crucial Step: Verify the 'role' is admin
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', data.user.id)
        .single();

      if (profile?.role !== 'admin') {
        await supabase.auth.signOut();
        throw new Error("Access Denied: Administrative Clearance Required.");
      }

      onLoginSuccess();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020202] flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-md">
        
        {/* Security Branding */}
        <div className="text-center mb-12">
          <div className="inline-flex p-3 bg-white/5 border border-white/10 mb-6">
            <ShieldAlert size={24} className="text-[var(--color-halo-silver)]" />
          </div>
          <h1 className="text-2xl font-black italic uppercase tracking-tighter text-white">
            Internal <span className="text-[var(--color-halo-silver)]">Gateway</span>
          </h1>
          <p className="text-[9px] text-gray-600 uppercase tracking-[0.4em] font-bold mt-2">
            Authorized Personnel Only // AES-256
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white/[0.02] border border-white/5 p-8 rounded-sm">
          <form onSubmit={handleAdminAuth} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[9px] uppercase text-gray-500 font-black tracking-widest">Admin Identifier</label>
              <input 
                type="email"
                required
                className="w-full bg-black border border-white/10 p-4 text-sm text-white focus:border-[var(--color-halo-silver)] outline-none transition-all placeholder:text-gray-800"
                placeholder="EMAIL ADDRESS"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[9px] uppercase text-gray-500 font-black tracking-widest">Access Key</label>
              <div className="relative">
                <input 
                  type="password"
                  required
                  className="w-full bg-black border border-white/10 p-4 text-sm text-white focus:border-[var(--color-halo-silver)] outline-none transition-all"
                  placeholder="••••••••"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-800" size={16} />
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 text-[10px] text-red-500 uppercase font-bold tracking-tight">
                {error}
              </div>
            )}

            <button 
              disabled={loading}
              className="w-full py-4 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[var(--color-halo-silver)] hover:text-white transition-all flex items-center justify-center gap-2 group"
            >
              {loading ? <Loader2 className="animate-spin" size={16} /> : (
                <>
                  Establish Session <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>

        <div className="mt-8 text-center">
          <p className="text-[8px] text-gray-800 uppercase tracking-[0.5em]">
            System: Road Angels RSA // V2.0.4-Stable
          </p>
        </div>
      </div>
    </div>
  );
}