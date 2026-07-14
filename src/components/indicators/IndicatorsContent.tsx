import React, { useState } from 'react';
import { TrendingUp, Download, Filter } from 'lucide-react';

const IndicatorsContent = () => {
  const indicators = [
    {
      id: 1,
      name: 'Nível de Stress',
      current: 52,
      previous: 58,
      target: 40,
      status: 'warning',
      trend: 'down',
    },
    {
      id: 2,
      name: 'Engajamento',
      current: 81,
      previous: 76,
      target: 85,
      status: 'success',
      trend: 'up',
    },
    {
      id: 3,
      name: 'Satisfação com Trabalho',
      current: 78,
      previous: 75,
      target: 80,
      status: 'success',
      trend: 'up',
    },
    {
      id: 4,
      name: 'Equilíbrio Vida-Trabalho',
      current: 65,
      previous: 62,
      target: 75,
      status: 'warning',
      trend: 'up',
    },
    {
      id: 5,
      name: 'Suporte da Liderança',
      current: 72,
      previous: 70,
      target: 80,
      status: 'warning',
      trend: 'up',
    },
    {
      id: 6,
      name: 'Oportunidades de Crescimento',
      current: 68,
      previous: 66,
      target: 75,
      status: 'warning',
      trend: 'up',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Indicadores</h1>
        <p className="text-gray-600">Acompanhe todos os indicadores de bem-estar psicossocial</p>
      </div>

      <div className="flex items-center justify-between mb-6">
        <button className="btn-secondary flex items-center">
          <Filter size={18} className="mr-2" />
          Filtrar
        </button>
        <button className="btn-secondary flex items-center">
          <Download size={18} className="mr-2" />
          Exportar
        </button>
      </div>

      <div className="grid gap-6">
        {indicators.map((indicator) => (
          <div key={indicator.id} className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">{indicator.name}</h3>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  indicator.status === 'success'
                    ? 'badge-success'
                    : indicator.status === 'warning'
                    ? 'badge-warning'
                    : 'badge-danger'
                }`}
              >
                {indicator.status === 'success' ? 'Bom' : indicator.status === 'warning' ? 'Atenção' : 'Crítico'}
              </span>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Valor Atual</p>
                <div className="flex items-baseline space-x-2">
                  <p className="text-3xl font-bold text-gray-900">{indicator.current}%</p>
                  <span className={`text-sm font-bold ${ indicator.trend === 'up' ? 'text-success' : 'text-success'}`}>
                    {indicator.trend === 'up' ? '↑' : '↓'} {Math.abs(indicator.current - indicator.previous)}%
                  </span>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Anterior</p>
                <p className="text-2xl font-bold text-gray-700">{indicator.previous}%</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Meta</p>
                <p className="text-2xl font-bold text-primary">{indicator.target}%</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Progresso</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-primary transition-all duration-300"
                    style={{ width: `${(indicator.current / indicator.target) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndicatorsContent;
