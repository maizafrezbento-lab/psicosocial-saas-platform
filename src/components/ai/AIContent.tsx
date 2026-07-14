import React, { useState } from 'react';
import { Zap, CheckCircle, TrendingUp } from 'lucide-react';

const AIContent = () => {
  const [activeTab, setActiveTab] = useState('alerts');

  const alerts = [
    {
      id: 1,
      type: 'danger',
      title: 'Nível Crítico de Stress no Setor Financeiro',
      description: 'A IA detectou um aumento de 28% no stress nos últimos 15 dias',
      date: '14 de julho',
      action: 'Ver Detalhes',
    },
    {
      id: 2,
      type: 'warning',
      title: 'Tendência de Afastamentos em TI',
      description: 'Padrão identificado: 3 afastamentos em 7 dias. Recomenda-se ação preventiva',
      date: '12 de julho',
      action: 'Ver Recomendações',
    },
    {
      id: 3,
      type: 'success',
      title: 'Melhoria Significativa no RH',
      description: 'Bem-estar aumentou 12% após implementação do programa de reconhecimento',
      date: '10 de julho',
      action: 'Replicar Sucesso',
    },
  ];

  const suggestions = [
    {
      id: 1,
      priority: 'alta',
      title: 'Implementar Programa de Bem-estar Mental',
      description: 'Sesões de meditação guiada e apoio psicológico para o setor Financeiro',
      impact: 'Redução estimada de 25% no stress',
      deadline: '30 de julho',
    },
    {
      id: 2,
      priority: 'media',
      title: 'Aumentar Horários de Trabalho Flexível',
      description: 'Permitir trabalho remoto 2 dias por semana para TI',
      impact: 'Aumento estimado de 15% no equilíbrio vida-trabalho',
      deadline: '31 de julho',
    },
    {
      id: 3,
      priority: 'baixa',
      title: 'Workshop de Liderança Compassiva',
      description: 'Treinamento para gestores sobre liderança orientada ao bem-estar',
      impact: 'Melhoria de 18% no suporte da liderança',
      deadline: '15 de agosto',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Inteligência Artificial</h1>
        <p className="text-gray-600">Insights inteligentes e recomendações automáticas baseadas em IA</p>
      </div>

      {/* Tabs */}
      <div className="flex items-center space-x-4 mb-6 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('alerts')}
          className={`px-4 py-3 font-semibold border-b-2 transition-all ${
            activeTab === 'alerts'
              ? 'border-primary text-primary'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          <Zap size={18} className="inline mr-2" />
          Alertas
        </button>
        <button
          onClick={() => setActiveTab('suggestions')}
          className={`px-4 py-3 font-semibold border-b-2 transition-all ${
            activeTab === 'suggestions'
              ? 'border-primary text-primary'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          <TrendingUp size={18} className="inline mr-2" />
          Sugestões
        </button>
      </div>

      {/* Alerts Tab */}
      {activeTab === 'alerts' && (
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="card border-l-4" style={{
              borderLeftColor: alert.type === 'danger' ? '#D32F2F' : alert.type === 'warning' ? '#F9A825' : '#43A047'
            }}>
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900">{alert.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  alert.type === 'danger'
                    ? 'badge-danger'
                    : alert.type === 'warning'
                    ? 'badge-warning'
                    : 'badge-success'
                }`}>
                  {alert.type === 'danger' ? 'Crítico' : alert.type === 'warning' ? 'Atenção' : 'Sucesso'}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{alert.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{alert.date}</span>
                <button className="text-primary font-semibold hover:underline text-sm">{alert.action}</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Suggestions Tab */}
      {activeTab === 'suggestions' && (
        <div className="space-y-4">
          {suggestions.map((suggestion) => (
            <div key={suggestion.id} className="card">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900">{suggestion.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  suggestion.priority === 'alta'
                    ? 'badge-danger'
                    : suggestion.priority === 'media'
                    ? 'badge-warning'
                    : 'badge-success'
                }`}>
                  {suggestion.priority === 'alta' ? 'Alta' : suggestion.priority === 'media' ? 'Média' : 'Baixa'}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{suggestion.description}</p>
              <div className="bg-green-50 p-3 rounded-lg mb-4">
                <p className="text-sm font-semibold text-success">💡 {suggestion.impact}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Prazo: {suggestion.deadline}</span>
                <button className="btn-primary text-sm">Implementar</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AIContent;
