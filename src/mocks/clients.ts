export interface Client {
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  clientAddress: string;
}

export const mockClients: Client[] = [
  {
    clientName: "Empresa ABC Ltda",
    clientPhone: "(11) 3456-7890",
    clientEmail: "contato@empresaabc.com.br",
    clientAddress: "Av. Paulista, 1000 - São Paulo, SP - CEP 01310-100",
  },
  {
    clientName: "Construtora XYZ S.A.",
    clientPhone: "(21) 2345-6789",
    clientEmail: "projetos@construtoraXYZ.com.br",
    clientAddress: "Rua do Comércio, 500 - Rio de Janeiro, RJ - CEP 20040-020",
  },
  {
    clientName: "Tech Solutions Brasil",
    clientPhone: "(11) 4567-8901",
    clientEmail: "comercial@techsolutions.com.br",
    clientAddress: "Rua da Inovação, 250 - São Paulo, SP - CEP 04543-010",
  },
  {
    clientName: "Pedro Henrique Alves",
    clientPhone: "(31) 98765-4321",
    clientEmail: "pedro.alves@email.com",
    clientAddress: "Rua das Acácias, 45 - Belo Horizonte, MG - CEP 30190-060",
  },
  {
    clientName: "Marina Santos Rodrigues",
    clientPhone: "(41) 99876-5432",
    clientEmail: "marina.santos@email.com",
    clientAddress: "Av. das Américas, 1200 - Curitiba, PR - CEP 80050-000",
  },
  {
    clientName: "Restaurante Sabor & Arte",
    clientPhone: "(51) 3234-5678",
    clientEmail: "gerencia@saborarte.com.br",
    clientAddress: "Rua Gastronômica, 78 - Porto Alegre, RS - CEP 90020-140",
  },
  {
    clientName: "Clínica Saúde Total",
    clientPhone: "(85) 3345-6789",
    clientEmail: "recepcao@clinicasaudetotal.com.br",
    clientAddress: "Av. da Saúde, 890 - Fortaleza, CE - CEP 60125-100",
  },
  {
    clientName: "Lucas Ferreira Costa",
    clientPhone: "(61) 98765-1234",
    clientEmail: "lucas.ferreira@email.com",
    clientAddress: "SQSW 101, Bloco C - Brasília, DF - CEP 70670-300",
  },
  {
    clientName: "Camila Oliveira Mendes",
    clientPhone: "(48) 99123-4567",
    clientEmail: "camila.oliveira@email.com",
    clientAddress: "Rua dos Corais, 234 - Florianópolis, SC - CEP 88062-100",
  },
  {
    clientName: "Imobiliária Prime Negócios",
    clientPhone: "(11) 2876-5432",
    clientEmail: "vendas@primenegocios.com.br",
    clientAddress: "Rua dos Imóveis, 567 - São Paulo, SP - CEP 01452-000",
  },
];

// Mock de cliente padrão
export const defaultClient: Client = mockClients[0];
