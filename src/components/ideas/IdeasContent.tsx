import React, { useState } from 'react';
import { Plus, Edit2, Trash2, MessageCircle } from 'lucide-react';

const IdeasContent = () => {
  const [ideas, setIdeas] = useState([
    {
      id: 1,
      title: 'Implementar Ginástica Laboral',
      author: 'Maria Silva',
      department: 'RH',
      date: '10 de julho',
      status: 'implementada',
      votes: 145,
      description: 'Atividades físicas durante o expediente para melhorar saúde e bem-estar',
      comments: 23,
    },
    {
      id: 2,
      title: 'Criar Espaço de Relaxamento',
      author: 'João Santos',
      department: 'Financeiro',
      date: '08 de julho',
      status: 'aprovada',
      votes: 89,
      description: 'Sala dedicada para pausas, meditação e descanso mental',
      comments: 15,
    },
    {
      id: 3,
      title: 'Programa de Mentorias',
      author: 'Ana Costa',
      department: 'TI',
      date: '05 de julho',
      status: 'analise',
      votes: 67,
      description: 'Parcerias entre colaboradores para desenvolvimento profissional e pessoal',
      comments: 12,
    },
    {
      id: 4,
      title: 'Workshop de Gestão de Stress',
      author: 'Pedro Oliveira',
      department: 'Operações',
      date: '02 de julho',
      status: 'recebida',
      votes: 34,
      description: 'Treinamento com especialista em saúde mental para todos os colaboradores',
      comments: 8,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    department: '',
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'recebida':
        return 'bg-gray-100 text-gray-700';
      case 'analise':
        return 'bg-yellow-50 text-warning';
      case 'aprovada':
        return 'bg-blue-50 text-primary';
      case 'implementada':
        return 'bg-green-50 text-success';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'recebida':
        return 'Recebida';
      case 'analise':
        return 'Em Análise';
      case 'aprovada':
        return 'Aprovada';
      case 'implementada':
        return 'Implementada';
      default:
        return status;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.description) {
      const newIdea = {
        id: ideas.length + 1,
        title: formData.title,
        author: 'Você',
        department: formData.department,
        date: new Date().toLocaleDateString('pt-BR'),
        status: 'recebida',
        votes: 0,
        description: formData.description,
        comments: 0,
      };
      setIdeas([newIdea, ...ideas]);
      setFormData({ title: '', description: '', department: '' });
      setShowModal(false);
    }
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Banco de Ideias</h1>
          <p className="text-gray-600">Contribuições para melhorar o ambiente de trabalho</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="btn-primary flex items-center"
        >
          <Plus size={20} className="mr-2" />
          Nova Ideia
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Registrar Nova Ideia</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Título</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Sua ideia em uma frase"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Descrição</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Descreva sua ideia com detalhes"
                  rows={4}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Departamento</label>
                <select
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Selecionar departamento</option>
                  <option value="RH">RH</option>
                  <option value="TI">TI</option>
                  <option value="Financeiro">Financeiro</option>
                  <option value="Operações">Operações</option>
                </select>
              </div>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 btn-secondary"
                >
                  Cancelar
                </button>
                <button type="submit" className="flex-1 btn-primary">
                  Enviar Ideia
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Ideas List */}
      <div className="space-y-4">
        {ideas.map((idea) => (
          <div key={idea.id} className="card">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{idea.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>Por: <strong>{idea.author}</strong></span>
                  <span>•</span>
                  <span>{idea.department}</span>
                  <span>•</span>
                  <span>{idea.date}</span>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(idea.status)}`}>
                {getStatusLabel(idea.status)}
              </span>
            </div>

            <p className="text-gray-600 mb-4">{idea.description}</p>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-6">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-primary transition">
                  <span className="text-lg">👍</span>
                  <span className="text-sm font-semibold">{idea.votes}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-primary transition">
                  <MessageCircle size={18} />
                  <span className="text-sm font-semibold">{idea.comments}</span>
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                  <Edit2 size={18} className="text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                  <Trash2 size={18} className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IdeasContent;
