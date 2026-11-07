export interface ServiceItem {
  id: string;
  description: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  total: number;
}

export interface ProposalData {
  // Dados do Profissional
  professionalName: string;
  profession: string;
  phone: string;
  email: string;
  address: string;

  // Dados do Cliente
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  clientAddress: string;

  // Dados da Proposta
  proposalDate: string;
  validUntil: string;
  projectTitle: string;
  projectDescription: string;

  // Serviços
  services: ServiceItem[];

  // Valores
  subtotal: number;
  discount: number;
  total: number;

  // Condições
  paymentTerms: string;
  warranty: string;
  observations: string;
}
