import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertCircle, TrendingDown } from 'lucide-react';

const SectorsContent = () => {
  const sectors = [
    {
      id: 1,
      name: 'Financeiro',
      employees: 45,
      wellbeing: 65,
      stress: 72,
      engagement: 58,
      status: 'danger',
    },
    {
      id: 2,
      name: 'Tecnologia',
      employees: 128,
      wellbeing: 72,
      stress: 68,
      engagement: 74,
      status: 'warning',
    },
    {
      id: 3,
      name: 'Recursos Humanos',
      employees: 18,
      wellbeing: 85,
      stress: 45,
      engagement: 88,
      status: 'success',
    },
    {
      id: 4,
      name: 'Operações',
      employees: 92,
      wellbeing: 68,
      stress: 62,
      engagement: 70,
      status: 'warning',
    },
  ];

  const sectorComparison = [
    { sector: 'Financeiro', wellbeing: 65, stress: 72 },
    { sector: 'TI', wellbeing: 72, stress: 68 },
    { sector: 'RH', wellbeing: 85, stress: 45 },
    { sector: 'Operações', wellbeing: 68, stress: 62 },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Setores</h1>
        <p className="text-gray-600">Análise de bem-estar psicossocial por departamento</p>
      </div>

      {/* Comparison Chart */}
      <div className="card mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Comparação entre Setores</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={sectorComparison}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis dataKey="sector" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="wellbeing" fill="#43A047" name="Bem-estar" />
            <Bar dataKey="stress" fill="#D32F2F" name="Stress" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Sectors Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {sectors.map((sector) => (
          <div key={sector.id} className="card">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{sector.name}</h3>
                <p className="text-sm text-gray-600">{sector.employees} colaboradores</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  sector.status === 'success'
                    ? 'badge-success'
                    : sector.status === 'warning'
                    ? 'badge-warning'
                    : 'badge-danger'
                }`}
              >
                {sector.status === 'success' ? 'Bom' : sector.status === 'warning' ? 'Atenção' : 'Crítico'}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700">Bem-estar</span>
                  <span className="text-sm font-bold text-gray-900">{sector.wellbeing}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-success transition-all duration-300"
                    style={{ width: `${sector.wellbeing}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700">Stress</span>
                  <span className="text-sm font-bold text-gray-900">{sector.stress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-danger transition-all duration-300"
                    style={{ width: `${sector.stress}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700">Engajamento</span>
                  <span className="text-sm font-bold text-gray-900">{sector.engagement}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-primary transition-all duration-300"
                    style={{ width: `${sector.engagement}%` }}
                  />
                </div>
              </div>
            </div>

            {sector.status !== 'success' && (
              <div className="mt-4 p-3 bg-red-50 rounded-lg flex items-start space-x-3">
                <AlertCircle size={18} className="text-danger flex-shrink-0 mt-0.5" />
                <p className="text-sm text-danger">Atenção requerida neste setor</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectorsContent;
