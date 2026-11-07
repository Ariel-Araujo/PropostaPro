# 🚀 PropostaPro - Gerador de Propostas Comerciais

**PropostaPro** é uma plataforma moderna e profissional para criação de propostas comerciais voltada para profissionais autônomos como pedreiros, marceneiros, eletricistas, encanadores e outros prestadores de serviços.

## ✨ Funcionalidades

- 📝 **Formulário Intuitivo**: Interface amigável para inserir dados do profissional, cliente e serviços
- 💰 **Cálculo Automático**: Cálculo automático de subtotais, descontos e valores totais
- 🎨 **Visualização Moderna**: Preview profissional da proposta antes de gerar o PDF
- 📄 **Exportação em PDF**: Geração de propostas em PDF com design profissional
- 📱 **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- 🎯 **Específico para Autônomos**: Campos e opções pensados para profissionais da construção civil e serviços

## 🛠️ Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática para maior segurança
- **Tailwind CSS** - Estilização moderna e responsiva
- **jsPDF** - Geração de PDFs
- **html2canvas** - Conversão de HTML para imagem
- **Lucide React** - Ícones modernos e escaláveis

## 📋 Pré-requisitos

- Node.js 18.x ou superior
- npm ou yarn

## 🚀 Como Executar o Projeto

### 1. Instalar Dependências

```bash
npm install
```

### 2. Executar em Modo Desenvolvimento

```bash
npm run dev
```

O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000)

### 3. Build para Produção

```bash
npm run build
npm start
```

## 📖 Como Usar

### Passo 1: Preencher Dados do Profissional
- Nome completo
- Profissão (selecione ou especifique)
- Telefone e e-mail de contato
- Endereço (opcional)

### Passo 2: Inserir Dados do Cliente
- Nome do cliente
- Telefone e e-mail
- Endereço onde será executado o serviço

### Passo 3: Detalhar o Projeto
- Título do projeto
- Descrição detalhada do que será realizado
- Datas (geradas automaticamente, mas editáveis)

### Passo 4: Adicionar Serviços
- Descrição do serviço
- Quantidade
- Unidade (un, m², m, hora, dia)
- Valor unitário
- Total calculado automaticamente

Você pode adicionar quantos serviços forem necessários usando o botão "Adicionar Serviço".

### Passo 5: Definir Condições
- Forma de pagamento (parcelamento, entrada, etc.)
- Garantia oferecida
- Observações adicionais

### Passo 6: Gerar e Baixar
- Clique em "Gerar Proposta" para visualizar
- Revise todas as informações
- Clique em "Baixar PDF" para salvar a proposta

## 📁 Estrutura do Projeto

```
PropostaPro/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx             # Página inicial
│   │   └── globals.css          # Estilos globais
│   ├── components/
│   │   ├── Header.tsx           # Cabeçalho da aplicação
│   │   ├── ProposalForm.tsx     # Formulário de proposta
│   │   └── ProposalPreview.tsx  # Visualização e PDF
│   └── types/
│       └── proposal.ts          # Tipos TypeScript
├── public/                      # Arquivos estáticos
├── package.json                 # Dependências
├── tsconfig.json                # Configuração TypeScript
├── tailwind.config.ts           # Configuração Tailwind
└── next.config.ts               # Configuração Next.js
```

## 🎨 Personalização

### Cores
As cores principais podem ser alteradas no arquivo `tailwind.config.ts`:

```typescript
primary: {
  500: '#3b82f6',  // Azul principal
  600: '#2563eb',  // Azul escuro
  // ...
}
```

### Logo
Para adicionar sua logo, coloque a imagem em `public/` e importe no componente `Header.tsx`.

## 🚀 Deploy

### Vercel (Recomendado)

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub
3. A Vercel detectará automaticamente Next.js
4. Clique em "Deploy"

### Outras Opções
- **Netlify**: Suporta Next.js com configuração automática
- **AWS Amplify**: Deploy automático via Git
- **Railway**: Deploy simples com CLI

## 🔒 Segurança e Privacidade

- Todos os dados são processados no navegador do usuário
- Nenhuma informação é enviada para servidores externos
- Os PDFs são gerados localmente no dispositivo do usuário

## 📝 Funcionalidades Futuras

- [ ] Salvar propostas no navegador (LocalStorage)
- [ ] Templates customizáveis
- [ ] Múltiplos idiomas
- [ ] Envio de proposta por e-mail
- [ ] Histórico de propostas
- [ ] Integração com assinatura digital

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 🆘 Suporte

Para dúvidas ou problemas:
- Abra uma issue no GitHub
- Entre em contato via e-mail

---

**Desenvolvido com ❤️ para profissionais autônomos**

🔧 Profissionalize suas propostas e conquiste mais clientes!
