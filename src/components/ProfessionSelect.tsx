"use client";

import { ChevronDown } from "lucide-react";
import { professionsWithIcons } from "@/data/professions";
import { useState, useRef, useEffect } from "react";

interface ProfessionSelectProps {
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export default function ProfessionSelect({
  value,
  onChange,
  required = false,
}: ProfessionSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filtra profissões baseado na busca
  const filteredProfessions = professionsWithIcons.filter((prof) =>
    prof.name.toLowerCase().includes(search.toLowerCase()),
  );

  // Agrupa profissões por categoria
  const professionsByCategory = filteredProfessions.reduce(
    (acc, prof) => {
      if (!acc[prof.category]) {
        acc[prof.category] = [];
      }
      acc[prof.category].push(prof);
      return acc;
    },
    {} as Record<string, typeof professionsWithIcons>,
  );

  const selectedProfession = professionsWithIcons.find((p) => p.name === value);

  const handleSelect = (professionName: string) => {
    onChange(professionName);
    setIsOpen(false);
    setSearch("");
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Botão principal */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-2 border rounded-lg text-left flex items-center justify-between focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
          value
            ? "border-gray-300 bg-white"
            : "border-gray-300 bg-white text-gray-400"
        }`}
      >
        <div className="flex items-center gap-2">
          {selectedProfession ? (
            <>
              <selectedProfession.icon className="w-4 h-4 text-blue-600" />
              <span className="text-gray-900">{selectedProfession.name}</span>
            </>
          ) : (
            <span>Selecione sua profissão...</span>
          )}
        </div>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-hidden">
          {/* Campo de busca */}
          <div className="p-3 border-b border-gray-100 sticky top-0 bg-white">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar profissão..."
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              autoFocus
            />
          </div>

          {/* Lista de profissões */}
          <div className="overflow-y-auto max-h-80">
            {Object.keys(professionsByCategory).length === 0 ? (
              <div className="px-4 py-6 text-center text-gray-500 text-sm">
                Nenhuma profissão encontrada
              </div>
            ) : (
              Object.entries(professionsByCategory).map(
                ([category, professions]) => (
                  <div key={category}>
                    {/* Cabeçalho da categoria */}
                    <div className="px-4 py-2 bg-gray-50 border-b border-gray-100">
                      <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                        {category}
                      </h3>
                    </div>

                    {/* Profissões da categoria */}
                    {professions.map((prof) => {
                      const Icon = prof.icon;
                      const isSelected = value === prof.name;

                      return (
                        <button
                          key={prof.name}
                          type="button"
                          onClick={() => handleSelect(prof.name)}
                          className={`w-full px-4 py-2.5 flex items-center gap-3 hover:bg-blue-50 transition ${
                            isSelected
                              ? "bg-blue-50 text-blue-700"
                              : "text-gray-700"
                          }`}
                        >
                          <Icon
                            className={`w-4 h-4 ${
                              isSelected ? "text-blue-600" : "text-gray-400"
                            }`}
                          />
                          <span className="text-sm">{prof.name}</span>
                          {isSelected && (
                            <span className="ml-auto text-blue-600">✓</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                ),
              )
            )}
          </div>
        </div>
      )}

      {/* Input hidden para validação do formulário */}
      {required && (
        <input
          type="text"
          value={value}
          onChange={() => {}}
          required
          className="sr-only"
          tabIndex={-1}
        />
      )}
    </div>
  );
}
