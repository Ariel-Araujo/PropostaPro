# Lista de Profissões

Este arquivo contém a lista completa de profissões disponíveis no sistema PropostaPro.

## 📋 Categorias

A lista está organizada nas seguintes categorias:

### 🏗️ Construção Civil

Arquitetos, Engenheiros, Pedreiros, Eletricistas, Encanadores, Pintores, Marceneiros, e outros profissionais da construção.

### 🎨 Design e Interiores

Designers de interiores, Decoradores, Paisagistas, Designers Gráficos, etc.

### 💻 Tecnologia

Desenvolvedores, Programadores, Analistas, Consultores de TI, UX/UI Designers, etc.

### 💼 Serviços Profissionais

Advogados, Contadores, Consultores, Corretores, Coaches, etc.

### 🏥 Saúde e Bem-estar

Médicos, Dentistas, Fisioterapeutas, Nutricionistas, Personal Trainers, etc.

### 💇 Beleza e Estética

Cabeleireiros, Barbeiros, Esteticistas, Manicures, Maquiadores, etc.

### 📢 Marketing e Comunicação

Publicitários, Jornalistas, Social Media, Fotógrafos, Videomakers, etc.

### 📚 Educação

Professores, Instrutores, Tutores, Pedagogos.

### 🔧 Serviços Gerais

Mecânicos, Jardineiros, Organizadores de Eventos, Chefs, Costureiros, etc.

### 🌟 Outros

Autônomos, Prestadores de Serviços, e outras categorias.

## 🎯 Como Usar

A lista é automaticamente importada e usada no componente `ProposalForm` para gerar as opções do campo de profissão:

```typescript
import professions from '@/data/professions';

// As profissões aparecem em um select dropdown
<select>
  {professions.map((profession) => (
    <option key={profession} value={profession}>
      {profession}
    </option>
  ))}
</select>
```

## ✏️ Como Adicionar ou Editar Profissões

### Adicionar uma nova profissão

1. Abra o arquivo `/src/data/professions.ts`
2. Localize a categoria apropriada
3. Adicione a nova profissão à lista:

```typescript
// Tecnologia
"Desenvolvedor(a) de Software",
"Nova Profissão Aqui", // ← adicione aqui
"Programador(a)",
```

### Criar uma nova categoria

```typescript
// Nova Categoria
"Profissão 1",
"Profissão 2",
"Profissão 3",
```

### Remover uma profissão

Simplesmente delete a linha correspondente da lista.

## 💡 Boas Práticas

1. **Linguagem Inclusiva**: Use `(a)` para tornar as profissões inclusivas
   - ❌ "Arquiteto"
   - ✅ "Arquiteto(a)"

2. **Ordenação**: Mantenha as profissões organizadas por categoria

3. **Nomes Claros**: Use nomes que sejam facilmente reconhecíveis
   - ✅ "Designer de Interiores"
   - ❌ "DI" ou "Design Int"

4. **Opção Genérica**: Sempre mantenha opções genéricas no final:
   - "Autônomo(a)"
   - "Prestador(a) de Serviços"
   - "Outros"

## 🔄 Sincronização com Mocks

Ao adicionar novas profissões, considere atualizar também os dados de mock em:

- `/src/mocks/professionals.ts`

Isso garante que os exemplos usem profissões válidas da lista.

## 📊 Total de Profissões

Atualmente temos **~90 profissões** cadastradas na lista.
