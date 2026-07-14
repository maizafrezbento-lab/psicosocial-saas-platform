import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulação de login
    setTimeout(() => {
      if (email && password) {
        localStorage.setItem('user', JSON.stringify({ email }));
        router.push('/dashboard');
      } else {
        setError('Por favor, preencha todos os campos');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-light flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl font-bold">RZ</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">RiscoZero</h1>
            <p className="text-gray-600 mt-2">Faça login em sua conta</p>
          </div>

          {error && (
            <div className="mb-6 flex items-center space-x-3 bg-red-50 p-4 rounded-lg">
              <AlertCircle className="text-danger" size={20} />
              <p className="text-danger text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Senha</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 text-primary rounded" />
                <span className="ml-2 text-gray-600">Lembrar de mim</span>
              </label>
              <a href="#" className="text-primary hover:underline">Esqueceu a senha?</a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary flex items-center justify-center disabled:opacity-50"
            >
              {loading ? 'Entrando...' : 'Entrar'}
              <ArrowRight size={20} className="ml-2" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">Não tem conta? <a href="#" className="text-primary font-semibold hover:underline">Criar conta</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
