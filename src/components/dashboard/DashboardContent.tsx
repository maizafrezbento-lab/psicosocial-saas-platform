import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertCircle, TrendingUp, Users, Heart } from 'lucide-react';

const DashboardContent = () => {
  const [timeRange, setTimeRange] = useState('month');

  const wellbeingData = [
    { name: 'Seg', value: 72 },
    { name: 'Ter', value: 74 },
    { name: 'Qua', value: 71 },
    { name: 'Qui', value: 75 },
    { name: 'Sex', value: 73 },
    { name: 'Sab', value: 76 },
    { name: 'Dom', value: 74 },
  ];

  const sectorData = [
    { name: 'Financeiro', value: 45, color: '#D32F2F' },
    { name: 'TI', value: 72, color: '#F9A825' },
    { name: 'RH', value: 85, color: '#43A047' },
    { name: 'Operações', value: 68, color: '#1F4E78' },
  ];

  const indicatorsTrend = [
    { month: 'Jan', stress: 65, motivation: 72, satisfaction: 70 },
    { month: 'Fev', stress: 62, motivation: 74, satisfaction: 72 },
    { month: 'Mar', stress: 58, motivation: 76, satisfaction: 74 },
    { month: 'Abr', stress: 55, motivation: 78, satisfaction: 76 },
    { month: 'Mai', stress: 52, motivation: 80, satisfaction: 78 },
  ];

  const kpis = [
    {
      label: 'Índice de Bem-estar',
      value: '74%',
      change: '+3%',
      isPositive: true,
      icon: Heart,
      color: 'bg-success',
    },
    {
      label: 'Engajamento',
      value: '81%',
      change: '+5%',
      isPositive: true,
      icon: Users,
      color: 'bg-primary',
    },
    {
      label: 'Stress Level',
      value: '52%',
      change: '-8%',
      isPositive: true,
      icon: TrendingUp,
      color: 'bg-warning',
    },
    {
      label: 'Satisfação',
      value: '78%',
      change: '+2%',
      isPositive: true,
      icon: AlertCircle,
      color: 'bg-success',
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Executivo</h1>
        <p className="text-gray-600">Visão geral da saúde psicossocial da organização</p>
      </div>

      {/* Time Range Selector */}
      <div className="flex items-center space-x-4 mb-8">
        {['week', 'month', 'quarter', 'year'].map((range) => (
          <button
            key={range}
            onClick={() => setTimeRange(range)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              timeRange === range
                ? 'bg-primary text-white'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-primary'
            }`}
          >
            {range === 'week' && 'Semana'}
            {range === 'month' && 'Mês'}
            {range === 'quarter' && 'Trimestre'}
            {range === 'year' && 'Ano'}
          </button>
        ))}
      </div>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {kpis.map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <div key={i} className="card">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${kpi.color} rounded-lg flex items-center justify-center`}>
                  <Icon size={24} className="text-white" />
                </div>
                <span className={`text-sm font-bold ${ kpi.isPositive ? 'text-success' : 'text-danger'}`}>
                  {kpi.change}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-2">{kpi.label}</p>
              <p className="text-3xl font-bold text-gray-900">{kpi.value}</p>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Wellbeing Trend */}
        <div className="card">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Índice de Bem-estar</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={wellbeingData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#1F4E78" strokeWidth={2} dot={{ fill: '#1F4E78', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Sector Traffic Light */}
        <div className="card">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Semáforo por Setor</h2>
          <div className="space-y-4">
            {sectorData.map((sector, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700">{sector.name}</span>
                  <span className="text-sm font-bold text-gray-900">{sector.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-300"
                    style={{ width: `${sector.value}%`, backgroundColor: sector.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Indicators Trend */}
      <div className="card mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Evolução dos Indicadores</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={indicatorsTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="stress" stroke="#D32F2F" strokeWidth={2} name="Stress" />
            <Line type="monotone" dataKey="motivation" stroke="#43A047" strokeWidth={2} name="Motivação" />
            <Line type="monotone" dataKey="satisfaction" stroke="#1F4E78" strokeWidth={2} name="Satisfação" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* AI Alerts */}
      <div className="card">
        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <AlertCircle size={20} className="mr-2 text-warning" />
          Alertas da Inteligência Artificial
        </h2>
        <div className="space-y-3">
          {[
            { level: 'danger', msg: 'Setor Financeiro: Stress crítico detectado' },
            { level: 'warning', msg: 'Tendência de aumento de absenteísmo em TI' },
            { level: 'success', msg: 'Melhoria significativa no RH nos últimos 30 dias' },
          ].map((alert, i) => (
            <div
              key={i}
              className={`p-4 rounded-lg flex items-center space-x-3 ${
                alert.level === 'danger'
                  ? 'bg-red-50'
                  : alert.level === 'warning'
                  ? 'bg-yellow-50'
                  : 'bg-green-50'
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full ${
                  alert.level === 'danger'
                    ? 'bg-danger'
                    : alert.level === 'warning'
                    ? 'bg-warning'
                    : 'bg-success'
                }`}
              />
              <p className="text-sm font-medium text-gray-900">{alert.msg}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
