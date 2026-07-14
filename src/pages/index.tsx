import React from 'react';
import { ArrowRight, CheckCircle, BarChart3, Users, TrendingUp, Shield } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-light">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Shield className="text-primary" size={32} />
              <span className="text-xl font-bold text-primary">RiscoZero</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#solucao" className="text-gray-600 hover:text-primary">Solução</a>
              <a href="#como-funciona" className="text-gray-600 hover:text-primary">Como Funciona</a>
              <a href="#beneficios" className="text-gray-600 hover:text-primary">Benefícios</a>
              <a href="#recursos" className="text-gray-600 hover:text-primary">Recursos</a>
            </div>
            <button className="btn-primary">Acessar Demo</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Gestão Preventiva de <span className="text-primary">Riscos Psicossociais</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Plataforma inteligente alinhada à NR1 para proteger o bem-estar organizacional e criar ambientes de trabalho mais saudáveis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary flex items-center justify-center">
                  Começar Agora <ArrowRight size={20} className="ml-2" />
                </button>
                <button className="btn-outline flex items-center justify-center">
                  Agendar Demonstração
                </button>
              </div>
              <div className="flex items-center space-x-4 mt-8 pt-8 border-t border-gray-200">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-primary opacity-80" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">+500 empresas confiam em nós</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 shadow-xl h-96 flex items-center justify-center">
              <div className="text-white text-center">
                <BarChart3 size={64} className="mx-auto mb-4 opacity-80" />
                <p className="text-lg font-semibold">Dashboard Executivo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solucao" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Por que RiscoZero?</h2>
            <p className="section-subtitle">Solução completa para gestão de riscos psicossociais nas empresas</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Conformidade NR1', desc: 'Totalmente alinhada com as normas regulatórias' },
              { icon: TrendingUp, title: 'Análise Inteligente', desc: 'IA que identifica riscos antes que se tornem problemas' },
              { icon: Users, title: 'Engajamento', desc: 'Ferramentas para envolver toda a organização' }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="card">
                  <Icon className="text-primary mb-4" size={40} />
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="como-funciona" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Como Funciona</h2>
            <p className="section-subtitle">4 passos simples para transformar sua organização</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: '1', title: 'Diagnóstico', desc: 'Análise profunda dos riscos psicossociais' },
              { num: '2', title: 'Monitoramento', desc: 'Acompanhamento contínuo dos indicadores' },
              { num: '3', title: 'Inteligência', desc: 'Recomendações automáticas baseadas em IA' },
              { num: '4', title: 'Ação', desc: 'Implementação e resultado mensurável' }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="card text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 text-primary text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="beneficios" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Benefícios Comprovados</h2>
            <p className="section-subtitle">Resultados que as empresas conseguem com RiscoZero</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Redução de 45% em afastamentos por saúde mental',
              'Aumento de 60% no engajamento dos colaboradores',
              'Economia de até 30% em custos com rotatividade',
              'Conformidade garantida com NR1 e legislação',
              'Melhoria de 50% na produtividade geral',
              'Ambiente de trabalho mais saudável e seguro'
            ].map((benefit, i) => (
              <div key={i} className="flex items-start space-x-4">
                <CheckCircle className="text-success flex-shrink-0 mt-1" size={24} />
                <p className="text-lg text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="recursos" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Recursos Principais</h2>
            <p className="section-subtitle">Tudo que você precisa para gerenciar riscos psicossociais</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Dashboard em Tempo Real',
              'Relatórios Inteligentes',
              'Banco de Ideias',
              'Programa de Reconhecimento',
              'Semáforo Organizacional',
              'Análise por Setor',
              'Sugestões de IA',
              'Integração com Sistemas'
            ].map((feature, i) => (
              <div key={i} className="card text-center">
                <CheckCircle className="text-success mx-auto mb-3" size={32} />
                <h3 className="font-semibold text-gray-900">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para Transformar Sua Organização?</h2>
          <p className="text-xl mb-8 text-blue-100">Comece sua avaliação gratuita hoje e veja como RiscoZero pode proteger seu maior ativo: suas pessoas.</p>
          <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all">
            Agendar Demonstração Gratuita
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="text-primary" size={24} />
                <span className="font-bold text-white">RiscoZero</span>
              </div>
              <p className="text-sm">Gestão preventiva de riscos psicossociais</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary">Features</a></li>
                <li><a href="#" className="hover:text-primary">Preços</a></li>
                <li><a href="#" className="hover:text-primary">Segurança</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary">Sobre</a></li>
                <li><a href="#" className="hover:text-primary">Blog</a></li>
                <li><a href="#" className="hover:text-primary">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary">Privacidade</a></li>
                <li><a href="#" className="hover:text-primary">Termos</a></li>
                <li><a href="#" className="hover:text-primary">LGPD</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 RiscoZero. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
