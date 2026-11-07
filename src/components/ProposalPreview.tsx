"use client";

import { ProposalData } from "@/types/proposal";
import {
  Download,
  ArrowLeft,
  Calendar,
  User,
  Building2,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { useRef } from "react";

interface ProposalPreviewProps {
  data: ProposalData;
  onBack: () => void;
}

export default function ProposalPreview({
  data,
  onBack,
}: ProposalPreviewProps) {
  const proposalRef = useRef<HTMLDivElement>(null);

  // Sistema de cores temáticas por profissão
  const getThemeColors = (profession: string) => {
    // Mapeamento de categorias para temas visuais
    const categoryThemes: Record<
      string,
      {
        gradient: string;
        primary: string;
        secondary: string;
        accent: string;
        light: string;
        icon: string;
        backgroundImage: string;
      }
    > = {
      // Construção Civil
      construcao: {
        gradient: "from-orange-600 via-red-600 to-orange-700",
        primary: "orange-600",
        secondary: "red-600",
        accent: "amber-500",
        light: "orange-50",
        icon: "🏗️",
        backgroundImage:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
      },
      // Design e Interiores
      design: {
        gradient: "from-pink-600 via-rose-600 to-pink-700",
        primary: "pink-600",
        secondary: "rose-600",
        accent: "pink-400",
        light: "pink-50",
        icon: "🎨",
        backgroundImage:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
      },
      // Tecnologia
      tecnologia: {
        gradient: "from-blue-600 via-indigo-600 to-blue-700",
        primary: "blue-600",
        secondary: "indigo-600",
        accent: "blue-400",
        light: "blue-50",
        icon: "💻",
        backgroundImage:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
      },
      // Serviços Profissionais
      profissional: {
        gradient: "from-slate-700 via-gray-700 to-slate-800",
        primary: "slate-700",
        secondary: "gray-700",
        accent: "slate-500",
        light: "slate-50",
        icon: "💼",
        backgroundImage:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
      },
      // Saúde e Bem-estar
      saude: {
        gradient: "from-green-600 via-emerald-600 to-green-700",
        primary: "green-600",
        secondary: "emerald-600",
        accent: "green-400",
        light: "green-50",
        icon: "🏥",
        backgroundImage:
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
      },
      // Beleza e Estética
      beleza: {
        gradient: "from-purple-600 via-fuchsia-600 to-purple-700",
        primary: "purple-600",
        secondary: "fuchsia-600",
        accent: "purple-400",
        light: "purple-50",
        icon: "💅",
        backgroundImage:
          "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
      },
      // Marketing e Comunicação
      marketing: {
        gradient: "from-cyan-600 via-teal-600 to-cyan-700",
        primary: "cyan-600",
        secondary: "teal-600",
        accent: "cyan-400",
        light: "cyan-50",
        icon: "📢",
        backgroundImage:
          "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80",
      },
      // Educação
      educacao: {
        gradient: "from-amber-600 via-yellow-600 to-amber-700",
        primary: "amber-600",
        secondary: "yellow-600",
        accent: "amber-400",
        light: "amber-50",
        icon: "📚",
        backgroundImage:
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
      },
      // Serviços Gerais (inclui eventos, música, gastronomia, etc)
      servicos: {
        gradient: "from-indigo-600 via-violet-600 to-indigo-700",
        primary: "indigo-600",
        secondary: "violet-600",
        accent: "indigo-400",
        light: "indigo-50",
        icon: "🎉",
        backgroundImage:
          "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80",
      },
      // Default
      default: {
        gradient: "from-indigo-600 via-blue-600 to-indigo-700",
        primary: "indigo-600",
        secondary: "blue-600",
        accent: "indigo-400",
        light: "indigo-50",
        icon: "🔨",
        backgroundImage:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      },
    };

    // Determina a categoria baseada na profissão
    // Remove caracteres especiais como (a) para melhor matching
    const professionClean = profession
      .toLowerCase()
      .replace(/\(a\)/g, "")
      .replace(/\s+/g, " ")
      .trim();

    // Construção Civil
    if (
      professionClean.includes("arquiteto") ||
      professionClean.includes("engenheiro") ||
      professionClean.includes("pedreiro") ||
      professionClean.includes("eletricista") ||
      professionClean.includes("encanador") ||
      professionClean.includes("pintor") ||
      professionClean.includes("serralheiro") ||
      professionClean.includes("marceneiro") ||
      professionClean.includes("gesseiro") ||
      professionClean.includes("azulejista") ||
      professionClean.includes("carpinteiro") ||
      professionClean.includes("vidraceiro") ||
      professionClean.includes("soldador") ||
      professionClean.includes("armador") ||
      professionClean.includes("ladrilheiro")
    ) {
      return categoryThemes.construcao;
    }

    // Design e Interiores
    if (
      professionClean.includes("designer") ||
      professionClean.includes("decorador") ||
      professionClean.includes("paisagista") ||
      professionClean.includes("cenógrafo") ||
      professionClean.includes("ilustrador")
    ) {
      return categoryThemes.design;
    }

    // Tecnologia
    if (
      professionClean.includes("desenvolvedor") ||
      professionClean.includes("programador") ||
      professionClean.includes("analista") ||
      professionClean.includes("cientista de dados") ||
      professionClean.includes("devops") ||
      professionClean.includes("administrador de sistemas") ||
      professionClean.includes("segurança da informação") ||
      professionClean.includes("suporte técnico") ||
      professionClean.includes("especialista em ti") ||
      professionClean.includes("engenheiro de software")
    ) {
      return categoryThemes.tecnologia;
    }

    // Serviços Profissionais
    if (
      professionClean.includes("advogado") ||
      professionClean.includes("contador") ||
      professionClean.includes("consultor") ||
      professionClean.includes("corretor") ||
      professionClean.includes("administrador") ||
      professionClean.includes("auditor") ||
      professionClean.includes("despachante") ||
      professionClean.includes("economista") ||
      professionClean.includes("gestor")
    ) {
      return categoryThemes.profissional;
    }

    // Saúde e Bem-estar
    if (
      professionClean.includes("médico") ||
      professionClean.includes("enfermeiro") ||
      professionClean.includes("fisioterapeuta") ||
      professionClean.includes("nutricionista") ||
      professionClean.includes("psicólogo") ||
      professionClean.includes("dentista") ||
      professionClean.includes("personal trainer") ||
      professionClean.includes("farmacêutico") ||
      professionClean.includes("terapeuta") ||
      professionClean.includes("biomédico")
    ) {
      return categoryThemes.saude;
    }

    // Beleza e Estética
    if (
      professionClean.includes("cabeleireiro") ||
      professionClean.includes("barbeiro") ||
      professionClean.includes("esteticista") ||
      professionClean.includes("maquiador") ||
      professionClean.includes("manicure") ||
      professionClean.includes("massoterapeuta") ||
      professionClean.includes("depilador") ||
      professionClean.includes("visagista")
    ) {
      return categoryThemes.beleza;
    }

    // Marketing e Comunicação
    if (
      professionClean.includes("marketing") ||
      professionClean.includes("publicitário") ||
      professionClean.includes("jornalista") ||
      professionClean.includes("redator") ||
      professionClean.includes("social media") ||
      professionClean.includes("fotógrafo") ||
      professionClean.includes("videomaker") ||
      professionClean.includes("editor de vídeo") ||
      professionClean.includes("cinegrafista") ||
      professionClean.includes("produtor audiovisual")
    ) {
      return categoryThemes.marketing;
    }

    // Educação
    if (
      professionClean.includes("professor") ||
      professionClean.includes("instrutor") ||
      professionClean.includes("pedagogo") ||
      professionClean.includes("tutor") ||
      professionClean.includes("educador") ||
      professionClean.includes("coordenador pedagógico")
    ) {
      return categoryThemes.educacao;
    }

    // Serviços Gerais (eventos, gastronomia, música, etc)
    if (
      professionClean.includes("organizador") ||
      professionClean.includes("evento") ||
      professionClean.includes("dj") ||
      professionClean.includes("músico") ||
      professionClean.includes("chef") ||
      professionClean.includes("confeiteiro") ||
      professionClean.includes("costureiro") ||
      professionClean.includes("sapateiro") ||
      professionClean.includes("mecânico") ||
      professionClean.includes("motorista") ||
      professionClean.includes("jardineiro") ||
      professionClean.includes("cozinheiro") ||
      professionClean.includes("garçom") ||
      professionClean.includes("bartender")
    ) {
      return categoryThemes.servicos;
    }

    return categoryThemes.default;
  };

  const theme = getThemeColors(data.profession);

  const generatePDF = async () => {
    if (!proposalRef.current) return;

    try {
      const html2canvas = (await import("html2canvas")).default;
      const jsPDF = (await import("jspdf")).default;

      const element = proposalRef.current;
      await document.fonts.ready;

      // Configurações para melhor qualidade
      const canvas = await html2canvas(element, {
        scale: 3, // Maior qualidade
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      });

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true,
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const pageHeight = (canvas.width * pdfHeight) / pdfWidth;
      const elementRect = element.getBoundingClientRect();
      const scale = canvas.width / elementRect.width;
      const pageBreakSafetyMargin = 4 * scale;
      const keepTogetherElements = Array.from(
        element.querySelectorAll<HTMLElement>("[data-pdf-keep-together]"),
      ).map((item) => {
        const rect = item.getBoundingClientRect();

        return {
          top: (rect.top - elementRect.top) * scale,
          bottom: (rect.bottom - elementRect.top) * scale,
        };
      });

      let pageStart = 0;
      let pageNumber = 0;

      while (pageStart < canvas.height) {
        let pageEnd = Math.min(pageStart + pageHeight, canvas.height);

        if (pageEnd < canvas.height) {
          const sectionStart = keepTogetherElements
            .filter(
              (section) =>
                section.top < pageEnd &&
                section.bottom > pageEnd &&
                section.bottom - section.top <= pageHeight,
            )
            .reduce<number | null>(
              (start, section) =>
                start === null ? section.top : Math.min(start, section.top),
              null,
            );

          if (
            sectionStart !== null &&
            sectionStart > pageStart + pageBreakSafetyMargin
          ) {
            pageEnd = sectionStart - pageBreakSafetyMargin;
          }
        }

        const pageCanvas = document.createElement("canvas");
        pageCanvas.width = canvas.width;
        pageCanvas.height = Math.ceil(pageEnd - pageStart);
        const context = pageCanvas.getContext("2d");

        if (!context) {
          throw new Error("Não foi possível preparar uma página do PDF.");
        }

        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
        context.drawImage(
          canvas,
          0,
          pageStart,
          canvas.width,
          pageEnd - pageStart,
          0,
          0,
          canvas.width,
          pageEnd - pageStart,
        );

        if (pageNumber > 0) {
          pdf.addPage();
        }

        pdf.addImage(
          pageCanvas.toDataURL("image/jpeg", 1.0),
          "JPEG",
          0,
          0,
          pdfWidth,
          (pageCanvas.height * pdfWidth) / canvas.width,
          undefined,
          "FAST",
        );

        pageStart = pageEnd;
        pageNumber += 1;
      }

      pdf.save(
        `Proposta_${data.clientName.replace(/\s+/g, "_")}_${new Date().toISOString().split("T")[0]}.pdf`,
      );
    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
      alert("Erro ao gerar PDF. Por favor, tente novamente.");
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-0">
      {/* Botões de Ação */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <button
          onClick={onBack}
          className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300 border-2 border-gray-300 hover:border-gray-400 shadow-lg hover:shadow-xl font-bold transform hover:scale-[1.02]"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span>Voltar e Editar</span>
        </button>
        <button
          onClick={generatePDF}
          className="group flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-white rounded-xl hover:from-blue-700 hover:via-indigo-700 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] font-bold text-lg relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <Download className="w-6 h-6 transition-transform group-hover:translate-y-0.5 relative z-10" />
          <span className="relative z-10">Baixar Proposta em PDF</span>
        </button>
      </div>

      {/* Proposta */}
      <div
        ref={proposalRef}
        className="bg-white shadow-2xl overflow-hidden"
        style={{ minHeight: "1000px" }}
      >
        {/* Cabeçalho Visual Temático com Imagem de Fundo */}
        <div
          className="relative text-white overflow-hidden"
          style={{
            backgroundImage: `url(${theme.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "500px",
          }}
        >
          {/* Overlay escuro com gradiente para legibilidade */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-85`}
          ></div>

          {/* Overlay adicional para profundidade */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Padrão decorativo de fundo */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Efeitos de luz coloridos */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/50 rounded-full blur-[120px]"></div>
          </div>

          <div className="relative px-12 py-14 min-h-[500px] flex items-center justify-center">
            {/* Losango Central Estilo Premium */}
            <div className="relative flex items-center justify-center w-full">
              {/* Losango rotacionado 45 graus */}
              <div className="relative">
                <div className="w-[400px] h-[400px] transform rotate-45 bg-white/10 backdrop-blur-2xl border-4 border-white/40 shadow-2xl flex items-center justify-center">
                  <div className="transform -rotate-45 text-center px-12">
                    {/* Título Principal */}
                    <h1 className="text-5xl font-black mb-3 tracking-tight leading-none drop-shadow-2xl">
                      PROPOSTA
                    </h1>
                    <div className="h-1 w-32 bg-white rounded-full mb-4 mx-auto shadow-lg"></div>
                    <p className="text-lg font-bold text-white/90 tracking-wider uppercase">
                      {data.profession}
                    </p>
                    <p className="text-sm font-light text-white/80 tracking-wide mt-2">
                      Orçamento Profissional
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Barra de informações de data */}
          <div className="relative bg-black/20 backdrop-blur-sm">
            <div className="px-12 py-6">
              {/* Informações de Data em Cards Modernos */}
              <div className="grid grid-cols-2 gap-6">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-white/20 rounded-2xl blur-xl group-hover:bg-white/30 transition"></div>
                  <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/20 hover:border-white/40 transition-all shadow-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-xs text-white/70 uppercase tracking-widest font-bold">
                        Data de Emissão
                      </p>
                    </div>
                    <p className="text-2xl font-black pl-11 drop-shadow">
                      {formatDate(data.proposalDate)}
                    </p>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute -inset-1 bg-white/20 rounded-2xl blur-xl group-hover:bg-white/30 transition"></div>
                  <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/20 hover:border-white/40 transition-all shadow-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-xs text-white/70 uppercase tracking-widest font-bold">
                        Válido Até
                      </p>
                    </div>
                    <p className="text-2xl font-black text-white pl-11 drop-shadow">
                      {formatDate(data.validUntil)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-12 space-y-12">
          {/* Dados do Profissional e Cliente */}
          <div
            className="grid md:grid-cols-2 gap-8"
            data-pdf-keep-together
          >
            {/* Profissional */}
            <div className="relative group">
              <div
                className={`absolute -inset-1 bg-gradient-to-r from-${theme.primary} to-${theme.secondary} rounded-2xl opacity-0 group-hover:opacity-10 transition duration-500 blur-sm`}
              ></div>
              <div className="relative bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-transparent">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3.5 bg-gradient-to-br from-${theme.primary} to-${theme.secondary} rounded-xl shadow-lg`}
                    >
                      <User className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">
                        Prestador
                      </p>
                      <h2 className="text-lg font-black text-gray-900 uppercase">
                        De
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="pb-4 border-b-2 border-gray-100">
                    <p className="text-2xl font-black text-gray-900 mb-1">
                      {data.professionalName}
                    </p>
                    <div
                      className={`inline-block px-3 py-1 bg-${theme.light} rounded-lg mt-2`}
                    >
                      <p
                        className={`text-${theme.primary} font-bold text-sm uppercase tracking-wider`}
                      >
                        {data.profession}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-3 group/item">
                      <div
                        className={`p-2 bg-${theme.light} rounded-lg group-hover/item:bg-${theme.light} transition-colors`}
                      >
                        <Phone className={`w-4 h-4 text-${theme.primary}`} />
                      </div>
                      <span className="text-gray-700 font-semibold text-sm">
                        {data.phone}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div
                        className={`p-2 bg-${theme.light} rounded-lg group-hover/item:bg-${theme.light} transition-colors`}
                      >
                        <Mail className={`w-4 h-4 text-${theme.primary}`} />
                      </div>
                      <span className="text-gray-700 font-semibold text-sm">
                        {data.email}
                      </span>
                    </div>
                    {data.address && (
                      <div className="flex items-start gap-3 group/item">
                        <div
                          className={`p-2 bg-${theme.light} rounded-lg group-hover/item:bg-${theme.light} transition-colors`}
                        >
                          <MapPin
                            className={`w-4 h-4 text-${theme.primary} mt-0.5`}
                          />
                        </div>
                        <span className="text-gray-700 font-semibold text-sm flex-1">
                          {data.address}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Cliente */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-500 blur-sm"></div>
              <div className="relative bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow-lg">
                      <Building2 className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">
                        Cliente
                      </p>
                      <h2 className="text-lg font-black text-gray-900 uppercase">
                        Para
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="pb-4 border-b-2 border-gray-100">
                    <p className="text-2xl font-black text-gray-900">
                      {data.clientName}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-3 group/item">
                      <div className="p-2 bg-indigo-50 rounded-lg group-hover/item:bg-indigo-100 transition-colors">
                        <Phone className="w-4 h-4 text-indigo-600" />
                      </div>
                      <span className="text-gray-700 font-semibold text-sm">
                        {data.clientPhone}
                      </span>
                    </div>
                    {data.clientEmail && (
                      <div className="flex items-center gap-3 group/item">
                        <div className="p-2 bg-indigo-50 rounded-lg group-hover/item:bg-indigo-100 transition-colors">
                          <Mail className="w-4 h-4 text-indigo-600" />
                        </div>
                        <span className="text-gray-700 font-semibold text-sm">
                          {data.clientEmail}
                        </span>
                      </div>
                    )}
                    <div className="flex items-start gap-3 group/item">
                      <div className="p-2 bg-indigo-50 rounded-lg group-hover/item:bg-indigo-100 transition-colors">
                        <MapPin className="w-4 h-4 text-indigo-600 mt-0.5" />
                      </div>
                      <span className="text-gray-700 font-semibold text-sm flex-1">
                        {data.clientAddress}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Descrição do Projeto */}
          <div
            className={`relative bg-gradient-to-br from-${theme.light} to-white rounded-2xl p-10 border-2 border-${theme.primary}/20`}
            data-pdf-keep-together
          >
            <div
              className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-${theme.primary} via-${theme.secondary} to-${theme.primary} rounded-l-2xl`}
            ></div>

            <div className="relative">
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-${theme.primary} to-${theme.secondary} rounded-xl mb-6 shadow-md`}
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs font-black text-white uppercase tracking-widest">
                  Escopo do Projeto
                </span>
              </div>

              <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
                {data.projectTitle}
              </h2>

              <div
                className={`h-1 w-24 bg-gradient-to-r from-${theme.primary} to-${theme.secondary} rounded-full mb-6`}
              ></div>

              <p className="text-gray-700 whitespace-pre-line leading-relaxed text-lg font-medium">
                {data.projectDescription}
              </p>
            </div>
          </div>

          {/* Serviços */}
          <div className="space-y-6">
            {/* Título da seção */}
            <div className="text-center" data-pdf-keep-together>
              <div
                className="inline-block px-6 py-2 bg-slate-900 rounded-xl mb-4"
                style={{ color: "#ffffff" }}
              >
                <h2
                  className="text-xl font-black uppercase tracking-widest"
                  style={{
                    color: "#ffffff",
                    WebkitTextFillColor: "#ffffff",
                    fontSize: "1.25rem",
                    fontWeight: 900,
                    letterSpacing: "0.1em",
                    lineHeight: 1.25,
                  }}
                >
                  Discriminação de Serviços
                </h2>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>

            {/* Tabela moderna */}
            <div className="overflow-hidden rounded-2xl border-2 border-gray-200 shadow-xl">
              <table className="w-full">
                <thead>
                  <tr
                    className={`bg-gradient-to-r from-${theme.primary} via-${theme.secondary} to-${theme.primary}`}
                    data-pdf-keep-together
                  >
                    <th className="px-8 py-5 text-left text-xs font-black uppercase tracking-widest text-white border-r border-white/10">
                      Descrição do Serviço
                    </th>
                    <th className="px-6 py-5 text-center text-xs font-black uppercase tracking-widest text-white border-r border-white/10">
                      Qtd
                    </th>
                    <th className="px-6 py-5 text-center text-xs font-black uppercase tracking-widest text-white border-r border-white/10">
                      Unidade
                    </th>
                    <th className="px-8 py-5 text-right text-xs font-black uppercase tracking-widest text-white border-r border-white/10">
                      Valor Unitário
                    </th>
                    <th className="px-8 py-5 text-right text-xs font-black uppercase tracking-widest text-white">
                      Valor Total
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-gray-100">
                  {data.services.map((service, index) => (
                    <tr
                      key={service.id}
                      className={`${
                        index % 2 === 0 ? "bg-white" : `bg-${theme.light}`
                      } hover:bg-${theme.light}/80 transition-colors duration-150`}
                      data-pdf-keep-together
                    >
                      <td className="px-8 py-5 text-sm text-gray-800 font-semibold border-r border-gray-100">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-1.5 h-1.5 bg-${theme.primary} rounded-full`}
                          ></div>
                          {service.description}
                        </div>
                      </td>
                      <td className="px-6 py-5 text-center text-base text-gray-900 font-bold border-r border-gray-100">
                        {service.quantity}
                      </td>
                      <td className="px-6 py-5 text-center text-xs text-gray-600 uppercase font-bold border-r border-gray-100">
                        {service.unit}
                      </td>
                      <td className="px-8 py-5 text-right text-sm text-gray-700 font-semibold border-r border-gray-100">
                        {service.unitPrice.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </td>
                      <td className="px-8 py-5 text-right text-base font-black text-gray-900">
                        {service.total.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>

                {/* Resumo financeiro */}
                <tfoot data-pdf-keep-together>
                  <tr
                    className={`bg-gradient-to-r from-${theme.light} to-white`}
                  >
                    <td
                      colSpan={4}
                      className="px-8 py-5 text-right text-sm font-black text-gray-600 uppercase tracking-wider"
                    >
                      Subtotal dos Serviços:
                    </td>
                    <td className="px-8 py-5 text-right font-black text-gray-900 text-xl">
                      {data.subtotal.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                  </tr>
                  {data.discount > 0 && (
                    <tr className="bg-gradient-to-r from-green-50 to-emerald-50">
                      <td
                        colSpan={4}
                        className="px-8 py-5 text-right text-sm font-black text-green-700 uppercase tracking-wider"
                      >
                        <span className="inline-flex items-center gap-2">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Desconto Aplicado:
                        </span>
                      </td>
                      <td className="px-8 py-5 text-right font-black text-green-700 text-xl">
                        -
                        {data.discount.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </td>
                    </tr>
                  )}
                  <tr
                    className={`bg-gradient-to-r from-${theme.primary} via-${theme.secondary} to-${theme.primary} text-white`}
                  >
                    <td
                      colSpan={4}
                      className="px-8 py-7 text-right text-base font-black uppercase tracking-widest"
                    >
                      <span className="inline-flex items-center gap-3">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Valor Total do Investimento:
                      </span>
                    </td>
                    <td className="px-8 py-7 text-right text-4xl font-black drop-shadow-lg">
                      {data.total.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Condições */}
          <div className="space-y-6">
            {/* Pagamento */}
            <div className="relative group" data-pdf-keep-together>
              <div
                className={`absolute -inset-1 bg-gradient-to-r from-${theme.primary} to-${theme.secondary} rounded-2xl opacity-0 group-hover:opacity-5 transition duration-500 blur-sm`}
              ></div>
              <div
                className={`relative bg-gradient-to-br from-${theme.light} via-white to-${theme.light} rounded-2xl p-8 border-2 border-${theme.primary}/30`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 bg-gradient-to-br from-${theme.primary} to-${theme.secondary} rounded-xl shadow-lg`}
                  >
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 uppercase tracking-wide">
                      Condições de Pagamento
                    </h3>
                    <div
                      className={`h-1 w-16 bg-gradient-to-r from-${theme.primary} to-${theme.secondary} rounded-full mt-2`}
                    ></div>
                  </div>
                </div>
                <p className="text-gray-800 whitespace-pre-line leading-relaxed text-base font-medium pl-16">
                  {data.paymentTerms}
                </p>
              </div>
            </div>

            {data.warranty && (
              <div className="relative group" data-pdf-keep-together>
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-5 transition duration-500 blur-sm"></div>
                <div className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 rounded-2xl p-8 border-2 border-green-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-green-600 rounded-xl shadow-lg">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 uppercase tracking-wide">
                        Garantia e Qualidade
                      </h3>
                      <div className="h-1 w-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mt-2"></div>
                    </div>
                  </div>
                  <p className="text-gray-800 whitespace-pre-line leading-relaxed text-base font-medium pl-16">
                    {data.warranty}
                  </p>
                </div>
              </div>
            )}

            {data.observations && (
              <div className="relative group" data-pdf-keep-together>
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-5 transition duration-500 blur-sm"></div>
                <div className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 rounded-2xl p-8 border-2 border-amber-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-amber-600 rounded-xl shadow-lg">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 uppercase tracking-wide">
                        Observações Importantes
                      </h3>
                      <div className="h-1 w-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full mt-2"></div>
                    </div>
                  </div>
                  <p className="text-gray-800 whitespace-pre-line leading-relaxed text-base font-medium pl-16">
                    {data.observations}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Área de Assinatura */}
          <div
            className="mt-16 pt-12 border-t-2 border-gray-200"
            data-pdf-keep-together
          >
            <div className="grid md:grid-cols-2 gap-12">
              {/* Prestador */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className="border-t-2 border-gray-900 pt-4">
                    <p className="text-lg font-black text-gray-900 uppercase">
                      {data.professionalName}
                    </p>
                    <p className="text-sm text-gray-600 font-semibold mt-1">
                      Prestador de Serviço
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {data.profession}
                    </p>
                  </div>
                </div>
              </div>

              {/* Cliente */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className="border-t-2 border-gray-900 pt-4">
                    <p className="text-lg font-black text-gray-900 uppercase">
                      {data.clientName}
                    </p>
                    <p className="text-sm text-gray-600 font-semibold mt-1">
                      Cliente / Contratante
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Data: _____ / _____ / _____
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rodapé */}
          <div className="mt-12 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-2xl px-10 py-8 border-2 border-slate-800">
            <div className="flex items-center justify-between">
              <div className="text-white/70 text-xs space-y-1">
                <p className="font-semibold">
                  Proposta comercial gerada em{" "}
                  {new Date().toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <p className="text-white/50">
                  Orçamento estimativo sujeito a alterações
                </p>
              </div>
              <div className="text-right">
                <p className="text-white font-black text-2xl tracking-tight">
                  PropostaPro
                </p>
                <p className="text-blue-400 text-xs font-semibold tracking-wider mt-1">
                  PROPOSTAS PROFISSIONAIS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
