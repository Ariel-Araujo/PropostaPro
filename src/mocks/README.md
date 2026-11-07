# Mocks - Dados de Exemplo

Esta pasta contém dados de exemplo (mocks) para facilitar o desenvolvimento e testes da aplicação PropostaPro.

## Estrutura

### 📁 professionals.ts

Contém 8 profissionais de exemplo com diferentes profissões:

- Arquiteto
- Designer de Interiores
- Engenheiro Civil
- Paisagista
- Consultor de TI
- Contadora
- Advogado
- Fotógrafa

**Exportações:**

- `mockProfessionals`: Array com todos os profissionais
- `defaultProfessional`: Profissional padrão (primeiro da lista)

### 📁 clients.ts

Contém 10 clientes de exemplo (pessoas físicas e jurídicas):

- Empresas (ABC Ltda, Construtora XYZ, Tech Solutions, etc.)
- Pessoas físicas (Pedro Henrique, Marina Santos, etc.)

**Exportações:**

- `mockClients`: Array com todos os clientes
- `defaultClient`: Cliente padrão (primeiro da lista)

### 📁 proposals.ts

Contém 3 propostas completas de exemplo:

1. Projeto Arquitetônico para Sede Corporativa
2. Sistema de Gestão Empresarial
3. Design de Interiores para Residência

**Exportações:**

- `mockProposals`: Array com todas as propostas
- `defaultProposal`: Proposta padrão (primeira da lista)
- `createEmptyProposal()`: Função para criar proposta vazia com valores padrão

### 📁 index.ts

Arquivo centralizador que exporta todos os mocks.

## Como Usar

### Importação Simples

```typescript
// Importar todos os mocks
import {
  mockProfessionals,
  mockClients,
  mockProposals,
  defaultProfessional,
  defaultClient,
  defaultProposal,
} from "@/mocks";

// Usar um profissional específico
const professional = mockProfessionals[0];

// Usar um cliente aleatório
const randomClient =
  mockClients[Math.floor(Math.random() * mockClients.length)];

// Criar proposta vazia
import { createEmptyProposal } from "@/mocks";
const newProposal = createEmptyProposal();
```

### Exemplo: Preencher Formulário com Dados Mock

```typescript
"use client";

import { useState } from "react";
import { defaultProfessional, defaultClient } from "@/mocks";
import { ProposalData } from "@/types/proposal";

export default function MyComponent() {
  const [formData, setFormData] = useState<ProposalData>({
    ...defaultProfessional,
    ...defaultClient,
    // ... resto dos campos
  });

  // ... resto do componente
}
```

### Exemplo: Testar com Múltiplos Clientes

```typescript
import { mockClients } from '@/mocks';

export default function ClientList() {
  return (
    <ul>
      {mockClients.map((client, index) => (
        <li key={index}>
          <h3>{client.clientName}</h3>
          <p>{client.clientEmail}</p>
          <p>{client.clientPhone}</p>
        </li>
      ))}
    </ul>
  );
}
```

### Exemplo: Usar Proposta Completa

```typescript
import { mockProposals } from "@/mocks";

// Pegar a primeira proposta
const proposal = mockProposals[0];

console.log(proposal.projectTitle);
// "Projeto Arquitetônico para Sede Corporativa"

console.log(proposal.services);
// Array com os serviços
```

## Dicas

1. **Durante o desenvolvimento**: Use `defaultProfessional` e `defaultClient` para preencher rapidamente formulários
2. **Para testes**: Use os arrays completos (`mockProfessionals`, `mockClients`) para testar com diferentes dados
3. **Para demos**: Use `mockProposals` para apresentar propostas completas
4. **Criando nova proposta**: Use `createEmptyProposal()` para garantir que todos os campos necessários estejam presentes

## Personalização

Sinta-se livre para adicionar mais mocks ou modificar os existentes conforme necessário para seus casos de teste específicos.
