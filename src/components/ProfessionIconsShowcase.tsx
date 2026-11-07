"use client";

import { professionsWithIcons } from "@/data/professions";

/**
 * Componente de demonstração que exibe todas as profissões com seus ícones.
 * Útil para visualizar e testar o mapeamento de ícones.
 *
 * Para usar: importe este componente em qualquer página
 * import ProfessionIconsShowcase from '@/components/ProfessionIconsShowcase';
 */
export default function ProfessionIconsShowcase() {
  // Agrupa profissões por categoria
  const professionsByCategory = professionsWithIcons.reduce(
    (acc, prof) => {
      if (!acc[prof.category]) {
        acc[prof.category] = [];
      }
      acc[prof.category].push(prof);
      return acc;
    },
    {} as Record<string, typeof professionsWithIcons>,
  );

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Galeria de Ícones de Profissões
        </h1>
        <p className="text-gray-600">
          Visualize todas as {professionsWithIcons.length} profissões
          cadastradas com seus ícones correspondentes.
        </p>
      </div>

      <div className="space-y-8">
        {Object.entries(professionsByCategory).map(
          ([category, professions]) => (
            <div
              key={category}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              {/* Cabeçalho da categoria */}
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  {category}
                  <span className="text-sm font-normal text-blue-100">
                    ({professions.length} profissões)
                  </span>
                </h2>
              </div>

              {/* Grid de profissões */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {professions.map((prof) => {
                  const Icon = prof.icon;

                  return (
                    <div
                      key={prof.name}
                      className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
                    >
                      <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-sm text-gray-700 font-medium">
                        {prof.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ),
        )}
      </div>

      {/* Estatísticas */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-6 text-white">
          <div className="text-3xl font-bold mb-1">
            {professionsWithIcons.length}
          </div>
          <div className="text-blue-100 text-sm">Profissões Cadastradas</div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 text-white">
          <div className="text-3xl font-bold mb-1">
            {Object.keys(professionsByCategory).length}
          </div>
          <div className="text-purple-100 text-sm">Categorias</div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl p-6 text-white">
          <div className="text-3xl font-bold mb-1">
            {new Set(professionsWithIcons.map((p) => p.icon.name)).size}
          </div>
          <div className="text-green-100 text-sm">Ícones Únicos</div>
        </div>
      </div>
    </div>
  );
}
