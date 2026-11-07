# 🎨 Ícones de Profissões

Este documento descreve como funcionam os ícones associados a cada profissão no PropostaPro.

## 📦 Estrutura

### Arquivo Principal: `professions.ts`

O arquivo contém:

- **professionsWithIcons**: Array com todas as profissões, seus ícones e categorias
- **getProfessionIcon()**: Função helper para buscar ícone por nome
- **getProfessionCategory()**: Função helper para buscar categoria por nome
- **professions**: Array simples de nomes (mantém compatibilidade)

## 🎯 Mapeamento de Ícones

Cada profissão tem um ícone específico da biblioteca [Lucide React](https://lucide.dev/):

### 🏗️ Construção Civil

- **Arquiteto(a)** → `Ruler` (régua)
- **Engenheiro(a) Civil** → `HardHat` (capacete)
- **Pedreiro** → `Hammer` (martelo)
- **Eletricista** → `Zap` (raio/eletricidade)
- **Encanador** → `Droplet` (gota d'água)
- **Pintor** → `PaintBucket` (balde de tinta)
- **Marceneiro** → `Cuboid` (cubo/madeira)

### 🎨 Design e Interiores

- **Designer de Interiores** → `Home` (casa)
- **Decorador(a)** → `Sparkles` (brilhos)
- **Paisagista** → `Trees` (árvores)
- **Designer Gráfico** → `Palette` (paleta)

### 💻 Tecnologia

- **Desenvolvedor(a) de Software** → `Code` (código)
- **Programador(a)** → `Laptop` (laptop)
- **Analista de Dados** → `Database` (banco de dados)
- **Cientista de Dados** → `Brain` (cérebro)
- **DevOps** → `Workflow` (fluxo de trabalho)
- **UX/UI Designer** → `Monitor` (monitor)

### 💼 Serviços Profissionais

- **Advogado(a)** → `Scale` (balança)
- **Contador(a)** → `Calculator` (calculadora)
- **Consultor(a) Empresarial** → `Briefcase` (maleta)
- **Consultor(a) Financeiro(a)** → `DollarSign` (cifrão)
- **Corretor(a) de Imóveis** → `Building` (prédio)

### 🏥 Saúde e Bem-estar

- **Médico(a)** → `Stethoscope` (estetoscópio)
- **Dentista** → `Pill` (pílula)
- **Fisioterapeuta** → `Activity` (atividade)
- **Nutricionista** → `Apple` (maçã)
- **Personal Trainer** → `Dumbbell` (haltere)

### 💇 Beleza e Estética

- **Cabeleireiro(a)** → `Scissors` (tesoura)
- **Esteticista** → `Sparkle` (brilho)
- **Maquiador(a)** → `Sparkles` (brilhos)

### 📢 Marketing e Comunicação

- **Publicitário(a)** → `Megaphone` (megafone)
- **Social Media** → `Share2` (compartilhar)
- **Fotógrafo(a)** → `Camera` (câmera)
- **Videomaker** → `Video` (vídeo)

### 📚 Educação

- **Professor(a)** → `GraduationCap` (capelo)
- **Instrutor(a)** → `BookOpen` (livro)
- **Tutor(a)** → `Users` (usuários)

### 🔧 Serviços Gerais

- **Mecânico(a)** → `Settings` (engrenagem)
- **Jardineiro(a)** → `Leaf` (folha)
- **Chef de Cozinha** → `ChefHat` (chapéu de chef)
- **Músico(a)** → `Music` (música)

## 💡 Como Usar

### 1. Buscar Ícone por Nome

```typescript
import { getProfessionIcon } from '@/data/professions';

const profession = "Arquiteto(a)";
const Icon = getProfessionIcon(profession);

// Renderizar
<Icon className="w-5 h-5 text-blue-600" />
```

### 2. Buscar Categoria

```typescript
import { getProfessionCategory } from "@/data/professions";

const category = getProfessionCategory("Desenvolvedor(a) de Software");
console.log(category); // "Tecnologia"
```

### 3. Usar Lista Completa com Ícones

```typescript
import { professionsWithIcons } from '@/data/professions';

professionsWithIcons.map((prof) => {
  const Icon = prof.icon;

  return (
    <div key={prof.name}>
      <Icon className="w-4 h-4" />
      <span>{prof.name}</span>
      <small>{prof.category}</small>
    </div>
  );
});
```

### 4. Componente Personalizado

```typescript
import { getProfessionIcon } from '@/data/professions';

interface ProfessionBadgeProps {
  profession: string;
}

function ProfessionBadge({ profession }: ProfessionBadgeProps) {
  const Icon = getProfessionIcon(profession);

  return (
    <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full">
      <Icon className="w-4 h-4 text-blue-600" />
      <span className="text-sm text-blue-900">{profession}</span>
    </div>
  );
}
```

## 🎨 Componente ProfessionSelect

O componente `ProfessionSelect` já implementa a visualização dos ícones:

```typescript
<ProfessionSelect
  required
  value={formData.profession}
  onChange={(value) => updateField("profession", value)}
/>
```

**Funcionalidades:**

- ✅ Dropdown customizado com ícones
- ✅ Busca/filtro por nome
- ✅ Agrupamento por categorias
- ✅ Visual moderno e responsivo
- ✅ Indicador de seleção
- ✅ Compatível com validação de formulário

## ✏️ Adicionar Novo Ícone

1. Importe o ícone do lucide-react:

```typescript
import { NovoIcone } from "lucide-react";
```

2. Adicione na lista:

```typescript
{
  name: "Nova Profissão",
  icon: NovoIcone,
  category: "Categoria"
},
```

## 🔍 Recursos

- [Lucide Icons](https://lucide.dev/) - Biblioteca de ícones
- Todos os ícones são SVG e totalmente customizáveis
- Ícones responsivos e otimizados para performance

## 📊 Estatísticas

- **Total de Profissões**: ~90
- **Total de Ícones Únicos**: ~60
- **Categorias**: 9
- **Biblioteca**: Lucide React v0.x
