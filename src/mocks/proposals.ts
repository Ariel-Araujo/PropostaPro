import { ProposalData, ServiceItem } from "@/types/proposal";
import { mockProfessionals } from "./professionals";
import { mockClients } from "./clients";

// Serviços de exemplo
const architectureServices: ServiceItem[] = [
  {
    id: "1",
    description: "Projeto arquitetônico completo",
    quantity: 1,
    unit: "un",
    unitPrice: 15000,
    total: 15000,
  },
  {
    id: "2",
    description: "Projeto de interiores",
    quantity: 1,
    unit: "un",
    unitPrice: 8000,
    total: 8000,
  },
  {
    id: "3",
    description: "Acompanhamento de obra",
    quantity: 6,
    unit: "mês",
    unitPrice: 2500,
    total: 15000,
  },
];

const itServices: ServiceItem[] = [
  {
    id: "1",
    description: "Desenvolvimento de sistema web",
    quantity: 1,
    unit: "projeto",
    unitPrice: 45000,
    total: 45000,
  },
  {
    id: "2",
    description: "Consultoria técnica",
    quantity: 40,
    unit: "hora",
    unitPrice: 250,
    total: 10000,
  },
  {
    id: "3",
    description: "Treinamento da equipe",
    quantity: 2,
    unit: "dia",
    unitPrice: 3000,
    total: 6000,
  },
];

const designServices: ServiceItem[] = [
  {
    id: "1",
    description: "Design de interiores - Ambiente completo",
    quantity: 150,
    unit: "m²",
    unitPrice: 180,
    total: 27000,
  },
  {
    id: "2",
    description: "Projeto de iluminação",
    quantity: 1,
    unit: "un",
    unitPrice: 5000,
    total: 5000,
  },
  {
    id: "3",
    description: "Seleção de materiais e acabamentos",
    quantity: 1,
    unit: "un",
    unitPrice: 3500,
    total: 3500,
  },
];

// Propostas de exemplo completas
export const mockProposals: ProposalData[] = [
  {
    // Profissional
    ...mockProfessionals[0],
    // Cliente
    ...mockClients[0],
    // Proposta
    proposalDate: "2026-06-27",
    validUntil: "2026-07-27",
    projectTitle: "Projeto Arquitetônico para Sede Corporativa",
    projectDescription:
      "Desenvolvimento completo de projeto arquitetônico para nova sede da empresa, incluindo plantas, cortes, fachadas e detalhamento executivo. O projeto contempla área de 500m² distribuídos em dois pavimentos.",
    services: architectureServices,
    subtotal: 38000,
    discount: 1900,
    total: 36100,
    paymentTerms:
      "30% na assinatura do contrato, 40% na entrega do projeto preliminar e 30% na entrega do projeto executivo",
    warranty:
      "Garantia de 90 dias para revisões e ajustes do projeto após entrega final",
    observations:
      "Projeto sujeito a aprovação na prefeitura. Prazo de entrega: 60 dias após aprovação da proposta.",
  },
  {
    // Profissional
    ...mockProfessionals[4],
    // Cliente
    ...mockClients[2],
    // Proposta
    proposalDate: "2026-06-20",
    validUntil: "2026-07-20",
    projectTitle: "Desenvolvimento de Sistema de Gestão Empresarial",
    projectDescription:
      "Desenvolvimento de sistema web personalizado para gestão empresarial, incluindo módulos de vendas, estoque, financeiro e relatórios gerenciais. Sistema responsivo com acesso via web e mobile.",
    services: itServices,
    subtotal: 61000,
    discount: 3050,
    total: 57950,
    paymentTerms:
      "40% no início do projeto, 30% na entrega do MVP, 30% na entrega final",
    warranty: "Garantia de 12 meses para correção de bugs e suporte técnico",
    observations:
      "Prazo de entrega: 120 dias. Inclui documentação técnica completa e treinamento da equipe.",
  },
  {
    // Profissional
    ...mockProfessionals[1],
    // Cliente
    ...mockClients[3],
    // Proposta
    proposalDate: "2026-06-25",
    validUntil: "2026-07-25",
    projectTitle: "Design de Interiores - Residência de Alto Padrão",
    projectDescription:
      "Projeto completo de design de interiores para residência, incluindo ambientes sociais, íntimos e de serviço. Desenvolvimento de conceito, seleção de mobiliário, iluminação e acabamentos.",
    services: designServices,
    subtotal: 35500,
    discount: 0,
    total: 35500,
    paymentTerms: "50% na assinatura, 50% na entrega do projeto",
    warranty: "Acompanhamento de execução incluso no pacote",
    observations:
      "Prazo de entrega: 45 dias. Apresentação em 3D dos ambientes incluída.",
  },
];

// Função helper para gerar uma proposta vazia com dados padrão
export const createEmptyProposal = (): ProposalData => ({
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
      quantity: 1,
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
});

// Proposta padrão
export const defaultProposal: ProposalData = mockProposals[0];
