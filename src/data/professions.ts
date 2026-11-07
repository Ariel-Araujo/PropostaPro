import {
  Hammer,
  HardHat,
  Wrench,
  Zap,
  Droplet,
  PaintBucket,
  Cuboid,
  Boxes,
  Frame,
  Layers,
  Ruler,
  Home,
  Sparkles,
  Trees,
  Palette,
  Package,
  Code,
  Laptop,
  Database,
  Network,
  TrendingUp,
  Brain,
  Workflow,
  Monitor,
  Scale,
  Calculator,
  Briefcase,
  DollarSign,
  Building,
  Shield,
  FileText,
  Clipboard,
  Stethoscope,
  Pill,
  Activity,
  Apple,
  HeartPulse,
  Dumbbell,
  Heart,
  Scissors,
  Sparkle,
  Star,
  HandMetal,
  Megaphone,
  Newspaper,
  PenTool,
  Share2,
  MousePointer,
  Camera,
  Video,
  Film,
  GraduationCap,
  BookOpen,
  Users,
  UserCheck,
  Car,
  Settings,
  Leaf,
  Calendar,
  PartyPopper,
  Music,
  ChefHat,
  Cake,
  Shirt,
  Footprints,
  User,
  Briefcase as BriefcaseIcon,
  type LucideIcon,
} from "lucide-react";

export interface ProfessionWithIcon {
  name: string;
  icon: LucideIcon;
  category: string;
}

export const professionsWithIcons: ProfessionWithIcon[] = [
  // Profissional de Construção Civil
  { name: "Arquiteto(a)", icon: Ruler, category: "Construção Civil" },
  { name: "Engenheiro(a) Civil", icon: HardHat, category: "Construção Civil" },
  { name: "Pedreiro", icon: Hammer, category: "Construção Civil" },
  { name: "Mestre de Obras", icon: Clipboard, category: "Construção Civil" },
  { name: "Eletricista", icon: Zap, category: "Construção Civil" },
  { name: "Encanador", icon: Droplet, category: "Construção Civil" },
  { name: "Pintor", icon: PaintBucket, category: "Construção Civil" },
  { name: "Marceneiro", icon: Cuboid, category: "Construção Civil" },
  { name: "Serralheiro", icon: Boxes, category: "Construção Civil" },
  { name: "Vidraceiro", icon: Frame, category: "Construção Civil" },
  { name: "Gesseiro", icon: Layers, category: "Construção Civil" },
  { name: "Azulejista", icon: Boxes, category: "Construção Civil" },
  { name: "Soldador", icon: Wrench, category: "Construção Civil" },

  // Profissional de Design e Interiores
  {
    name: "Designer de Interiores",
    icon: Home,
    category: "Design e Interiores",
  },
  { name: "Decorador(a)", icon: Sparkles, category: "Design e Interiores" },
  { name: "Paisagista", icon: Trees, category: "Design e Interiores" },
  { name: "Designer Gráfico", icon: Palette, category: "Design e Interiores" },
  {
    name: "Designer de Produtos",
    icon: Package,
    category: "Design e Interiores",
  },

  // Profissional de Tecnologia da Informação
  { name: "Desenvolvedor(a) de Software", icon: Code, category: "Tecnologia" },
  { name: "Programador(a)", icon: Laptop, category: "Tecnologia" },
  { name: "Analista de Sistemas", icon: Monitor, category: "Tecnologia" },
  { name: "Engenheiro(a) de Software", icon: Code, category: "Tecnologia" },
  { name: "Consultor(a) de TI", icon: Briefcase, category: "Tecnologia" },
  { name: "Administrador(a) de Redes", icon: Network, category: "Tecnologia" },
  { name: "Analista de Dados", icon: Database, category: "Tecnologia" },
  { name: "Cientista de Dados", icon: Brain, category: "Tecnologia" },
  { name: "DevOps", icon: Workflow, category: "Tecnologia" },
  { name: "UX/UI Designer", icon: Monitor, category: "Tecnologia" },

  // Serviços Profissionais
  { name: "Advogado(a)", icon: Scale, category: "Serviços Profissionais" },
  { name: "Contador(a)", icon: Calculator, category: "Serviços Profissionais" },
  {
    name: "Consultor(a) Empresarial",
    icon: Briefcase,
    category: "Serviços Profissionais",
  },
  {
    name: "Consultor(a) Financeiro(a)",
    icon: DollarSign,
    category: "Serviços Profissionais",
  },
  {
    name: "Corretor(a) de Imóveis",
    icon: Building,
    category: "Serviços Profissionais",
  },
  {
    name: "Corretor(a) de Seguros",
    icon: Shield,
    category: "Serviços Profissionais",
  },
  { name: "Despachante", icon: FileText, category: "Serviços Profissionais" },
  { name: "Coach", icon: TrendingUp, category: "Serviços Profissionais" },

  // Profissional da Saúde e Bem-estar
  { name: "Médico(a)", icon: Stethoscope, category: "Saúde e Bem-estar" },
  { name: "Dentista", icon: Pill, category: "Saúde e Bem-estar" },
  { name: "Fisioterapeuta", icon: Activity, category: "Saúde e Bem-estar" },
  { name: "Nutricionista", icon: Apple, category: "Saúde e Bem-estar" },
  { name: "Psicólogo(a)", icon: Brain, category: "Saúde e Bem-estar" },
  { name: "Personal Trainer", icon: Dumbbell, category: "Saúde e Bem-estar" },
  { name: "Terapeuta", icon: Heart, category: "Saúde e Bem-estar" },
  { name: "Nutrólogo(a)", icon: Heart, category: "Saúde e Bem-estar" },
  { name: "Fonoaudiologo", icon: Heart, category: "Saúde e Bem-estar" },
  { name: "Oftalmologista", icon: Heart, category: "Saúde e Bem-estar" },

  // profissional da Beleza e Estética
  { name: "Cabeleireiro(a)", icon: Scissors, category: "Beleza e Estética" },
  { name: "Barbeiro(a)", icon: Scissors, category: "Beleza e Estética" },
  { name: "Esteticista", icon: Sparkle, category: "Beleza e Estética" },
  { name: "Manicure/Pedicure", icon: HandMetal, category: "Beleza e Estética" },
  { name: "Maquiador(a)", icon: Sparkles, category: "Beleza e Estética" },
  { name: "Podólogo(a)", icon: Sparkles, category: "Beleza e Estética" },
  { name: "Depidor(a)", icon: Sparkles, category: "Beleza e Estética" },
  {
    name: "Designer de Sobrancelhas",
    icon: Star,
    category: "Beleza e Estética",
  },

  // Profissonal de Marketing e Comunicação
  {
    name: "Publicitário(a)",
    icon: Megaphone,
    category: "Marketing e Comunicação",
  },
  { name: "Jornalista", icon: Newspaper, category: "Marketing e Comunicação" },
  { name: "Redator(a)", icon: PenTool, category: "Marketing e Comunicação" },
  { name: "Social Media", icon: Share2, category: "Marketing e Comunicação" },
  {
    name: "Gestor de Tráfego",
    icon: Share2,
    category: "Marketing e Comunicação",
  },
  { name: "Fotógrafo(a)", icon: Camera, category: "Marketing e Comunicação" },
  { name: "Videomaker", icon: Video, category: "Marketing e Comunicação" },
  {
    name: "Editor(a) de Vídeo",
    icon: Film,
    category: "Marketing e Comunicação",
  },

  // profissional de Educação
  { name: "Professor(a)", icon: GraduationCap, category: "Educação" },
  { name: "Instrutor(a)", icon: BookOpen, category: "Educação" },
  { name: "Tutor(a)", icon: Users, category: "Educação" },
  { name: "Pedagogo(a)", icon: UserCheck, category: "Educação" },

  // Profissional de Alimentação
  { name: "Doceiro(a)", icon: Cake, category: "Alimentação" },
  { name: "Chef de Cozinha", icon: ChefHat, category: "Serviços Gerais" },
  { name: "Confeiteiro(a)", icon: Cake, category: "Serviços Gerais" },

  // Profissional de Serviços Gerais
  { name: "Eletricista de Automóveis", icon: Car, category: "Serviços Gerais" },
  { name: "Mecânico(a)", icon: Settings, category: "Serviços Gerais" },
  { name: "Jardineiro(a)", icon: Leaf, category: "Serviços Gerais" },
  {
    name: "Organizador(a) de Eventos",
    icon: PartyPopper,
    category: "Serviços Gerais",
  },
  { name: "DJ", icon: Music, category: "Serviços Gerais" },
  { name: "Músico(a)", icon: Music, category: "Serviços Gerais" },
  { name: "Costureiro(a)", icon: Shirt, category: "Serviços Gerais" },
  { name: "Sapateiro", icon: Footprints, category: "Serviços Gerais" },

  // Outros áreas de atuação
  { name: "Autônomo(a)", icon: User, category: "Outros" },
  { name: "Prestador(a) de Serviços", icon: BriefcaseIcon, category: "Outros" },
  { name: "Outros", icon: User, category: "Outros" },
];

// Função helper para buscar ícone por nome de profissão
export const getProfessionIcon = (professionName: string): LucideIcon => {
  const profession = professionsWithIcons.find(
    (p) => p.name === professionName,
  );
  return profession?.icon || User;
};

// Função helper para buscar categoria por nome de profissão
export const getProfessionCategory = (professionName: string): string => {
  const profession = professionsWithIcons.find(
    (p) => p.name === professionName,
  );
  return profession?.category || "Outros";
};

// Exportar apenas os nomes para manter compatibilidade
export const professions = professionsWithIcons.map((p) => p.name);

export default professions;
