"use client";

import { useState } from "react";
import ProposalForm from "@/components/ProposalForm";
import ProposalPreview from "@/components/ProposalPreview";
import Header from "@/components/Header";
import { ProposalData } from "@/types/proposal";

export default function Home() {
  const [proposalData, setProposalData] = useState<ProposalData | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleFormSubmit = (data: ProposalData) => {
    setProposalData(data);
    setShowPreview(true);
  };

  const handleBack = () => {
    setShowPreview(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {!showPreview ? (
          <ProposalForm onSubmit={handleFormSubmit} initialData={proposalData} />
        ) : (
          <ProposalPreview data={proposalData!} onBack={handleBack} />
        )}
      </main>
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2026 PropostaPro. Profissionalize suas propostas comerciais.
          </p>
        </div>
      </footer>
    </div>
  );
}
