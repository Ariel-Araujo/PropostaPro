export interface Professional {
  professionalName: string;
  profession: string;
  phone: string;
  email: string;
  address: string;
}

export const mockProfessionals: Professional[] = [
  {
    professionalName: "João Silva Santos",
    profession: "Arquiteto(a)",
    phone: "(11) 98765-4321",
    email: "joao.silva@arquitetura.com.br",
    address: "Rua das Flores, 123 - São Paulo, SP - CEP 01234-567",
  },
  {
    professionalName: "Maria Oliveira Costa",
    profession: "Designer de Interiores",
    phone: "(21) 99876-5432",
    email: "maria.oliveira@design.com.br",
    address: "Av. Atlântica, 456 - Rio de Janeiro, RJ - CEP 22021-001",
  },
  {
    professionalName: "Carlos Eduardo Ferreira",
    profession: "Engenheiro(a) Civil",
    phone: "(31) 97654-3210",
    email: "carlos.ferreira@engenharia.com.br",
    address: "Rua dos Engenheiros, 789 - Belo Horizonte, MG - CEP 30130-100",
  },
  {
    professionalName: "Ana Paula Mendes",
    profession: "Paisagista",
    phone: "(41) 96543-2109",
    email: "ana.mendes@paisagismo.com.br",
    address: "Alameda das Árvores, 321 - Curitiba, PR - CEP 80420-200",
  },
  {
    professionalName: "Roberto Almeida Junior",
    profession: "Consultor(a) de TI",
    phone: "(51) 95432-1098",
    email: "roberto.almeida@consulti.com.br",
    address: "Rua da Tecnologia, 654 - Porto Alegre, RS - CEP 90010-300",
  },
  {
    professionalName: "Juliana Rocha Lima",
    profession: "Contador(a)",
    phone: "(85) 94321-0987",
    email: "juliana.rocha@contabilidade.com.br",
    address: "Av. dos Contadores, 987 - Fortaleza, CE - CEP 60060-440",
  },
  {
    professionalName: "Fernando Costa Pereira",
    profession: "Advogado(a)",
    phone: "(61) 93210-9876",
    email: "fernando.costa@advocacia.com.br",
    address: "SCS Quadra 1, Bloco A - Brasília, DF - CEP 70300-500",
  },
  {
    professionalName: "Patrícia Souza Martins",
    profession: "Fotógrafo(a)",
    phone: "(48) 92109-8765",
    email: "patricia.souza@fotografia.com.br",
    address: "Rua das Imagens, 159 - Florianópolis, SC - CEP 88015-100",
  },
];

// Mock de profissional padrão
export const defaultProfessional: Professional = mockProfessionals[0];
