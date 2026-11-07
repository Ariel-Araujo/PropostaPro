"use client";

import { useState, FormEvent } from "react";
import { ProposalData, ServiceItem } from "@/types/proposal";
import ProfessionSelect from "./ProfessionSelect";
import DatePicker, { registerLocale } from "react-datepicker";
import { ptBR } from "date-fns/locale/pt-BR";
import {
  Plus,
  Trash2,
  User,
  Building2,
  FileText,
  DollarSign,
  CalendarDays,
} from "lucide-react";

registerLocale("pt-BR", ptBR);

interface ProposalFormProps {
  onSubmit: (data: ProposalData) => void;
  initialData: ProposalData | null;
}

export default function ProposalForm({
  onSubmit,
  initialData,
}: ProposalFormProps) {
  const [formData, setFormData] = useState<ProposalData>(
    initialData || {
      professionalName: "",
      profession: "",
      phone: "",
      email: "",
      address: "",
      clientName: "",
      clientPhone: "",
      clientEmail: "",
      clientAddress: "",
      proposalDate: new Date().toISOString().split("T")[0],
      validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
      projectTitle: "",
      projectDescription: "",
      services: [
        {
          id: "1",
          description: "",
          quantity: 0,
          unit: "un",
          unitPrice: 0,
          total: 0,
        },
      ],
      subtotal: 0,
      discount: 0,
      total: 0,
      paymentTerms: "",
      warranty: "",
      observations: "",
    },
  );

  const updateField = (field: keyof ProposalData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Função para formatar telefone: (ddd) 99999-9999
  const formatPhone = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, "");

    // Aplica a máscara
    if (numbers.length <= 2) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 11) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
    // Limita a 11 dígitos
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handlePhoneChange = (field: "phone" | "clientPhone", value: string) => {
    const formatted = formatPhone(value);
    updateField(field, formatted);
  };

  const addService = () => {
    const newService: ServiceItem = {
      id: Date.now().toString(),
      description: "",
      quantity: 0,
      unit: "un",
      unitPrice: 0,
      total: 0,
    };
    setFormData((prev) => ({
      ...prev,
      services: [...prev.services, newService],
    }));
  };

  const removeService = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.filter((s) => s.id !== id),
    }));
    calculateTotals();
  };

  const updateService = (id: string, field: keyof ServiceItem, value: any) => {
    setFormData((prev) => {
      const updatedServices = prev.services.map((service) => {
        if (service.id === id) {
          const updated = { ...service, [field]: value };
          updated.total = updated.quantity * updated.unitPrice;
          return updated;
        }
        return service;
      });

      const subtotal = updatedServices.reduce((sum, s) => sum + s.total, 0);
      const total = subtotal - prev.discount;

      return {
        ...prev,
        services: updatedServices,
        subtotal,
        total,
      };
    });
  };

  const calculateTotals = () => {
    const subtotal = formData.services.reduce((sum, s) => sum + s.total, 0);
    const total = subtotal - formData.discount;
    setFormData((prev) => ({ ...prev, subtotal, total }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto px-4 sm:px-0">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Banner superior */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 p-4 sm:p-6">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Nova Proposta Comercial
            </h2>
            <p className="text-blue-100 text-xs sm:text-sm">
              Preencha os dados abaixo para gerar uma proposta profissional
            </p>
          </div>
        </div>

        <div className="p-4 sm:p-6 md:p-8 space-y-8 sm:space-y-10">
          {/* Seção: Dados do Profissional */}
          <section>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 pb-3 border-b-2 border-gray-100">
              <div className="p-2 sm:p-2.5 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg shadow-md">
                <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Seus Dados
                </h2>
                <p className="text-xs sm:text-sm text-gray-500">
                  Informações do prestador de serviço
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.professionalName}
                  onChange={(e) =>
                    updateField("professionalName", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="João da Silva"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Profissão *
                </label>
                <ProfessionSelect
                  required
                  value={formData.profession}
                  onChange={(value) => updateField("profession", value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handlePhoneChange("phone", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="(11) 99999-9999"
                  maxLength={15}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="joao@email.com"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Endereço *
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => updateField("address", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Rua, número, bairro, cidade - UF"
                />
              </div>
            </div>
          </section>

          {/* Seção: Dados do Cliente */}
          <section>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 pb-3 border-b-2 border-gray-100">
              <div className="p-2 sm:p-2.5 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg shadow-md">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Dados do Cliente
                </h2>
                <p className="text-xs sm:text-sm text-gray-500">
                  Informações do contratante
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome do Cliente *
                </label>
                <input
                  type="text"
                  required
                  value={formData.clientName}
                  onChange={(e) => updateField("clientName", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Maria Santos"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone do Cliente *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.clientPhone}
                  onChange={(e) =>
                    handlePhoneChange("clientPhone", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="(11) 98888-8888"
                  maxLength={15}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail do Cliente
                </label>
                <input
                  type="email"
                  value={formData.clientEmail}
                  onChange={(e) => updateField("clientEmail", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="maria@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Endereço *
                </label>
                <input
                  type="text"
                  required
                  value={formData.clientAddress}
                  onChange={(e) => updateField("clientAddress", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Local onde será executado o serviço"
                />
              </div>
            </div>
          </section>

          {/* Seção: Dados da Proposta */}
          <section>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 pb-3 border-b-2 border-gray-100">
              <div className="p-2 sm:p-2.5 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg shadow-md">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Detalhes da Proposta
                </h2>
                <p className="text-xs sm:text-sm text-gray-500">
                  Informações sobre o projeto
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Data da Proposta
                </label>
                <div className="relative">
                  <DatePicker
                    selected={new Date(formData.proposalDate)}
                    onChange={(date: Date | null) =>
                      updateField(
                        "proposalDate",
                        date?.toISOString().split("T")[0] || "",
                      )
                    }
                    dateFormat="dd/MM/yyyy"
                    locale="pt-BR"
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholderText="Selecione a data"
                  />
                  <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Válido Até
                </label>
                <div className="relative">
                  <DatePicker
                    selected={new Date(formData.validUntil)}
                    onChange={(date: Date | null) =>
                      updateField(
                        "validUntil",
                        date?.toISOString().split("T")[0] || "",
                      )
                    }
                    dateFormat="dd/MM/yyyy"
                    locale="pt-BR"
                    minDate={new Date(formData.proposalDate)}
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholderText="Selecione a validade"
                  />
                  <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Título do Projeto *
              </label>
              <input
                type="text"
                required
                value={formData.projectTitle}
                onChange={(e) => updateField("projectTitle", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ex: Reforma de Banheiro Completo"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Descrição do Projeto *
              </label>
              <textarea
                required
                value={formData.projectDescription}
                onChange={(e) =>
                  updateField("projectDescription", e.target.value)
                }
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Descreva em detalhes o que será realizado..."
              />
            </div>
          </section>

          {/* Seção: Serviços */}
          <section>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6 pb-3 border-b-2 border-gray-100">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-2 sm:p-2.5 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg shadow-md">
                  <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Serviços e Valores
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Discriminação de itens e preços
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={addService}
                className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg transform hover:scale-105 text-xs sm:text-sm font-semibold whitespace-nowrap"
              >
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                Adicionar Serviço
              </button>
            </div>

            <div className="space-y-4">
              {formData.services.map((service, index) => (
                <div
                  key={service.id}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-end p-3 sm:p-4 bg-gray-50 rounded-lg"
                >
                  <div className="sm:col-span-2 lg:col-span-4">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Descrição do Serviço
                    </label>
                    <input
                      type="text"
                      required
                      value={service.description}
                      onChange={(e) =>
                        updateService(service.id, "description", e.target.value)
                      }
                      className="w-full h-10 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ex: Instalação de piso cerâmico"
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Qtd.
                    </label>
                    <input
                      type="number"
                      required
                      min="0"
                      step="0.01"
                      value={service.quantity}
                      onChange={(e) =>
                        updateService(
                          service.id,
                          "quantity",
                          parseFloat(e.target.value) || 0,
                        )
                      }
                      className="w-full h-10 px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center"
                      placeholder="1"
                    />
                  </div>
                  <div className="lg:col-span-1">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Unid.
                    </label>
                    <select
                      value={service.unit}
                      onChange={(e) =>
                        updateService(service.id, "unit", e.target.value)
                      }
                      className="w-full h-10 px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center"
                    >
                      <option value="un">Un</option>
                      <option value="m²">m²</option>
                      <option value="m">m</option>
                      <option value="h">Hora</option>
                      <option value="dia">Dia</option>
                      <option value="mês">Mês</option>
                      <option value="projeto">Projeto</option>
                    </select>
                  </div>
                  <div className="lg:col-span-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Valor Unit. (R$)
                    </label>
                    <input
                      type="number"
                      required
                      min="0"
                      step="0.01"
                      value={service.unitPrice}
                      onChange={(e) =>
                        updateService(
                          service.id,
                          "unitPrice",
                          parseFloat(e.target.value) || 0,
                        )
                      }
                      className="w-full h-10 px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                      placeholder="0,00"
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Total
                    </label>
                    <div className="h-10 px-2 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 text-sm flex items-center justify-end">
                      {service.total.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </div>
                  </div>
                  <div className="lg:col-span-1">
                    {formData.services.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeService(service.id)}
                        className="w-full px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                        title="Remover serviço"
                      >
                        <Trash2 className="w-4 h-4 sm:w-5 sm:h-5 mx-auto" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Totais */}
            <div className="mt-6 bg-gradient-to-br from-slate-50 to-blue-50 p-4 sm:p-6 md:p-8 rounded-xl border-2 border-blue-100 shadow-inner">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm sm:text-base lg:text-lg">
                  <span className="text-gray-700 font-semibold">Subtotal:</span>
                  <span className="text-xl sm:text-2xl font-bold text-gray-900">
                    {formData.subtotal.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                  <label className="text-sm sm:text-base text-gray-700 font-medium">
                    Desconto (R$):
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.discount}
                    onChange={(e) => {
                      const discount = parseFloat(e.target.value) || 0;
                      updateField("discount", discount);
                      setFormData((prev) => ({
                        ...prev,
                        discount,
                        total: prev.subtotal - discount,
                      }));
                    }}
                    className="w-full sm:w-40 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                  />
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 pt-4 border-t-2 border-blue-200">
                  <span className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 uppercase tracking-wide">
                    VALOR TOTAL:
                  </span>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {formData.total.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Seção: Condições */}
          <section>
            <div className="mb-4 sm:mb-6 pb-3 border-b-2 border-gray-100">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Condições e Observações
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Termos adicionais da proposta
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Forma de Pagamento *
                </label>
                <textarea
                  required
                  value={formData.paymentTerms}
                  onChange={(e) => updateField("paymentTerms", e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ex: 30% de entrada, 40% na metade da obra e 30% na conclusão"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Garantia
                </label>
                <textarea
                  value={formData.warranty}
                  onChange={(e) => updateField("warranty", e.target.value)}
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ex: 90 dias de garantia contra defeitos de execução"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Observações Adicionais
                </label>
                <textarea
                  value={formData.observations}
                  onChange={(e) => updateField("observations", e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Informações complementares, prazos, materiais inclusos, etc."
                />
              </div>
            </div>
          </section>

          {/* Botão de Submit */}
          <div className="flex justify-center pt-6 sm:pt-8 pb-4">
            <button
              type="submit"
              className="group w-full sm:w-auto px-8 sm:px-12 lg:px-16 py-4 sm:py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-white text-base sm:text-lg lg:text-xl font-bold rounded-2xl hover:from-blue-700 hover:via-indigo-700 hover:to-blue-700 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                <span className="hidden sm:inline">
                  Gerar Proposta Profissional
                </span>
                <span className="sm:hidden">Gerar Proposta</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
