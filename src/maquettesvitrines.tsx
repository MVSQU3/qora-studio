import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { 
  ArrowUpRight, ArrowRight, Check, X, 
  MessageCircle, Phone, Mail, MapPin, 
  ArrowDown
} from 'lucide-react';

// ============================================================================
// COMPOSANT MODAL : SAISINE FORMELLE & ALLOCATION DE PRODUCTION
// ============================================================================
type Direction = 'corporate' | 'modern';
type Notify = (msg: string) => void;

const DossierModal = ({ isOpen, onClose, direction = 'corporate', onNotify }: { isOpen: boolean; onClose: () => void; direction?: Direction; onNotify: Notify }) => {
  const [formData, setFormData] = useState({
    nom: '',
    structure: '',
    email: '',
    telephone: '',
    typeMission: direction === 'corporate' ? 'Audit & Fiscalité OHADA' : 'Architecture & Développement Web',
    budgetEstime: '5 000 000 à 15 000 000 FCFA',
    ndaRequis: true,
    description: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onNotify(
      direction === 'corporate'
        ? "Requête transmise au cabinet. Un associé référent prendra attache sous 24h ouvrées."
        : "Cahier des charges réceptionné. Notre direction technique analyse vos spécifications."
    );
    onClose();
  };

  const isCorp = direction === 'corporate';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
      <div 
        className={`relative w-full max-w-2xl max-h-[92vh] overflow-y-auto p-6 sm:p-10 transition-all ${
          isCorp 
            ? 'bg-[#FBF9F4] text-[#161719] border border-[#161719] shadow-2xl' 
            : 'bg-[#0E1015] text-[#ECEEF2] border border-neutral-800 shadow-2xl'
        }`}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-current transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="border-b pb-6 mb-8 border-current/15">
          <div className="text-[11px] font-mono tracking-widest uppercase opacity-60 mb-2">
            {isCorp ? 'Cabinet Touré, Koffi & Associés — Abidjan Plateau' : 'Atelier Numérique 225 — Cocody Danga'}
          </div>
          <h3 className={`text-2xl sm:text-3xl tracking-tight ${isCorp ? 'font-serif font-normal' : 'font-sans font-bold'}`}>
            {isCorp ? 'Ouverture d’une Consultation Préalable' : 'Réservation de Capacité Technique'}
          </h3>
          <p className="text-xs sm:text-sm mt-2 opacity-75 leading-relaxed">
            {isCorp 
              ? 'Toute information transmise est protégée par le secret professionnel de l’Ordre des Avocats.' 
              : 'Échange direct avec nos ingénieurs concepteurs. Aucun intermédiaire commercial.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider mb-1.5 opacity-70">
                Nom & Prénom *
              </label>
              <input 
                required
                type="text" 
                placeholder="Ex. Roland Koffi" 
                value={formData.nom}
                onChange={(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setFormData({...formData, nom: e.target.value})}
                className={`w-full px-3.5 py-2.5 text-xs sm:text-sm border transition-colors outline-none ${
                  isCorp 
                    ? 'bg-white border-[#D2CCBE] focus:border-black text-black' 
                    : 'bg-[#151820] border-neutral-800 focus:border-[#E84A27] text-white'
                }`}
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider mb-1.5 opacity-70">
                Entreprise ou Institution *
              </label>
              <input 
                required
                type="text" 
                placeholder="Ex. Société Ivoirienne d’Agro-industrie" 
                value={formData.structure}
                onChange={(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setFormData({...formData, structure: e.target.value})}
                className={`w-full px-3.5 py-2.5 text-xs sm:text-sm border transition-colors outline-none ${
                  isCorp 
                    ? 'bg-white border-[#D2CCBE] focus:border-black text-black' 
                    : 'bg-[#151820] border-neutral-800 focus:border-[#E84A27] text-white'
                }`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider mb-1.5 opacity-70">
                Numéro de téléphone direct *
              </label>
              <input 
                required
                type="tel" 
                placeholder="+225 07 00 00 00 00" 
                value={formData.telephone}
                onChange={(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setFormData({...formData, telephone: e.target.value})}
                className={`w-full px-3.5 py-2.5 text-xs sm:text-sm border transition-colors outline-none ${
                  isCorp 
                    ? 'bg-white border-[#D2CCBE] focus:border-black text-black' 
                    : 'bg-[#151820] border-neutral-800 focus:border-[#E84A27] text-white'
                }`}
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider mb-1.5 opacity-70">
                Adresse email professionnelle *
              </label>
              <input 
                required
                type="email" 
                placeholder="direction@entreprise.ci" 
                value={formData.email}
                onChange={(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setFormData({...formData, email: e.target.value})}
                className={`w-full px-3.5 py-2.5 text-xs sm:text-sm border transition-colors outline-none ${
                  isCorp 
                    ? 'bg-white border-[#D2CCBE] focus:border-black text-black' 
                    : 'bg-[#151820] border-neutral-800 focus:border-[#E84A27] text-white'
                }`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider mb-1.5 opacity-70">
                Objet de la démarche
              </label>
              <select 
                value={formData.typeMission}
                onChange={(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setFormData({...formData, typeMission: e.target.value})}
                className={`w-full px-3.5 py-2.5 text-xs sm:text-sm border transition-colors outline-none ${
                  isCorp 
                    ? 'bg-white border-[#D2CCBE] focus:border-black text-black' 
                    : 'bg-[#151820] border-neutral-800 focus:border-[#E84A27] text-white'
                }`}
              >
                {isCorp ? (
                  <>
                    <option value="Audit Fiscal & Contrôle DGI">Audit Fiscal & Contrôle DGI</option>
                    <option value="Fusions, Acquisitions & Restructurations">Fusions, Acquisitions & Cessions</option>
                    <option value="Arbitrage & Contentieux CCJA">Arbitrage & Contentieux CCJA</option>
                    <option value="Infrastructures & Partenariats Public-Privé">Financement de Projets & Concessions</option>
                  </>
                ) : (
                  <>
                    <option value="Architecture & Développement Web">Architecture & Développement Web</option>
                    <option value="Systèmes de Paiement Mobile Money">Intégration Paiements Wave & Orange Money</option>
                    <option value="Application Métier Mobile">Application Mobile Déconnectée (Offline-first)</option>
                    <option value="Refonte Ergonomique & Performance">Audit & Refonte UX / Performance</option>
                  </>
                )}
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider mb-1.5 opacity-70">
                Cadre budgétaire estimé
              </label>
              <select 
                value={formData.budgetEstime}
                onChange={(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setFormData({...formData, budgetEstime: e.target.value})}
                className={`w-full px-3.5 py-2.5 text-xs sm:text-sm border transition-colors outline-none ${
                  isCorp 
                    ? 'bg-white border-[#D2CCBE] focus:border-black text-black' 
                    : 'bg-[#151820] border-neutral-800 focus:border-[#E84A27] text-white'
                }`}
              >
                <option value="3M à 7M FCFA">3 000 000 — 7 000 000 FCFA</option>
                <option value="7M à 15M FCFA">7 000 000 — 15 000 000 FCFA</option>
                <option value="15M à 35M FCFA">15 000 000 — 35 000 000 FCFA</option>
                <option value="Au-delà de 35M FCFA">Opération d’envergure (&gt; 35 000 000 FCFA)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider mb-1.5 opacity-70">
              Contexte et enjeux prioritaires
            </label>
            <textarea 
              rows={3} 
              placeholder="Décrivez les objectifs clés, les délais d'exécution ou les contraintes réglementaires..."
              value={formData.description}
              onChange={(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setFormData({...formData, description: e.target.value})}
              className={`w-full px-3.5 py-2.5 text-xs sm:text-sm border transition-colors outline-none resize-none ${
                isCorp 
                  ? 'bg-white border-[#D2CCBE] focus:border-black text-black' 
                  : 'bg-[#151820] border-neutral-800 focus:border-[#E84A27] text-white'
              }`}
            ></textarea>
          </div>

          <div className="flex items-center gap-3 pt-1">
            <input 
              type="checkbox" 
              id="modal-nda"
              checked={formData.ndaRequis}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({...formData, ndaRequis: e.target.checked})}
              className="w-4 h-4 rounded-none accent-[#161719]"
            />
            <label htmlFor="modal-nda" className="text-xs opacity-80 cursor-pointer">
              Signature préalable d'un accord de confidentialité bilatéral (NDA).
            </label>
          </div>

          <div className="pt-4 border-t border-current/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[11px] font-mono opacity-60">
              Dossier instruit sous 24 heures — Abidjan, Côte d'Ivoire
            </span>
            <button 
              type="submit"
              className={`w-full sm:w-auto px-7 py-3 text-xs font-mono uppercase tracking-wider font-bold transition-all cursor-pointer ${
                isCorp 
                  ? 'bg-[#161719] text-[#FBF9F4] hover:bg-black' 
                  : 'bg-[#E84A27] text-white hover:bg-[#d43d1c]'
              }`}
            >
              Transmettre la demande
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


// ============================================================================
// DIRECTION 01 : CABINET TOURÉ, KOFFI & ASSOCIÉS (PLATEAU, ABIDJAN)
// ============================================================================
const CabinetEditorial = ({ onOpenDevis, onNotify }: { onOpenDevis: (d: Direction) => void; onNotify: Notify }) => {
  const [formDone, setFormDone] = useState(false);

  const dossiersMajeurs = [
    {
      titre: 'Restructuration d’un groupe agro-industriel de transformation cacaoyère',
      valeur: '41,5 Mds FCFA',
      juridiction: 'San Pedro / Abidjan',
      date: 'Janvier 2026',
      domaine: 'Droit des Entreprises en Difficulté & Fiscalité Douanière',
      details: 'Représentation exclusive du débiteur dans le cadre d’un concordat préventif homologué par le Tribunal de Commerce. Négociation d’un moratoire bancaire syndiqué sur 8 exercices et révision des conventions de stockage portuaire.'
    },
    {
      titre: 'Acquisition majoritaire d’un réseau de microfinance régionale',
      valeur: '18,2 Mds FCFA',
      juridiction: 'Abidjan — Siège UEMOA',
      date: 'Septembre 2025',
      domaine: 'Fusions-Acquisitions & Régulation Bancaire',
      details: 'Audit d’acquisition de 42 agences en Côte d’Ivoire et au Burkina Faso. Instruction du dossier d’autorisation de changement de contrôle auprès de la Commission Bancaire de l’UMOA et négociation du protocole d’accord d’actionnaires.'
    },
    {
      titre: 'Financement structuré d’une centrale thermique à cycle combiné',
      valeur: '65,0 Mds FCFA',
      juridiction: 'Zone Industrielle de Vridi',
      date: 'Mai 2025',
      domaine: 'Infrastructures Publiques & Énergie',
      details: 'Conseil des bailleurs institutionnels multilatéraux. Rédaction de la convention d’achat d’énergie (PPA) sur 20 ans avec l’État de Côte d’Ivoire et structuration des garanties de souveraineté contre le risque d’interruption réseau.'
    }
  ];

  const handleQuickContact = (e: FormEvent) => {
    e.preventDefault();
    setFormDone(true);
    onNotify('Votre consultation a été enregistrée. Un associé prendra contact sous 24h ouvrées.');
  };

  return (
    <div className="bg-[#F8F6F0] text-[#191A1D] font-sans antialiased selection:bg-[#966738] selection:text-white min-h-screen">
      
      {/* BANDEAU INSTITUTIONNEL HAUT */}
      <div className="border-b border-[#DCD6C8] bg-[#F1EDE3] px-4 sm:px-10 py-2.5 text-[11px] font-mono">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3 text-neutral-600">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-neutral-900 tracking-wide">Barreau de Côte d'Ivoire</span>
            <span className="text-neutral-400">/</span>
            <span>Cabinet d’Avocats d’Affaires au Plateau</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Avenue Delafosse, Plateau — Abidjan</span>
            <span className="text-[#966738] font-bold">Standard : +225 27 20 25 30 00</span>
          </div>
        </div>
      </div>

      {/* EN-TÊTE ÉDITORIAL DE GRANDE MAISON */}
      <header className="border-b-2 border-[#191A1D] px-4 sm:px-10 py-8 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#DCD6C8]">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#966738] font-semibold mb-2">
              Société Civile Professionnelle d’Avocats
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-[#191A1D] leading-none">
              Touré, Koffi & Associés
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 font-mono text-xs">
            <nav className="flex items-center gap-6 text-[12px] uppercase tracking-wider text-neutral-700">
              <a href="#dossiers" className="hover:text-[#966738] transition-colors">Actes Récents</a>
              <a href="#expertises" className="hover:text-[#966738] transition-colors">Expertises</a>
              <a href="#cabinet" className="hover:text-[#966738] transition-colors">Gouvernance</a>
              <a href="#contact" className="hover:text-[#966738] transition-colors">Contact</a>
            </nav>
            <button 
              onClick={() => onOpenDevis('corporate')}
              className="px-5 py-2.5 bg-[#191A1D] text-[#F8F6F0] hover:bg-black transition-colors uppercase tracking-wider text-[11px] font-bold cursor-pointer"
            >
              Demander une consultation
            </button>
          </div>
        </div>

        <div className="pt-3 flex flex-wrap justify-between items-center text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
          <span>Conseil aux Entreprises — Contentieux des Affaires — Droit OHADA</span>
          <span>Inscrit au Tableau de l’Ordre depuis 2004</span>
        </div>
      </header>

      {/* HERO SECTION : COMPOSITION ÉDITORIALE ÉQUILIBRÉE */}
      <section className="px-4 sm:px-10 py-16 lg:py-24 border-b border-[#DCD6C8]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-block border-l-2 border-[#966738] pl-3 font-mono text-xs text-[#966738] uppercase tracking-wider font-semibold">
              Note d'orientation stratégique
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] text-[#191A1D]">
              Sécuriser les opérations à fort enjeu dans l'espace économique ouest-africain.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm sm:text-base leading-relaxed text-neutral-700 pt-6 border-t border-[#DCD6C8]">
              <p>
                Dans un environnement économique où le cadre fiscal de la DGI s’intensifie et où les contentieux commerciaux devant la CCJA exigent une rigueur sans faille, notre cabinet apporte des solutions concrètes et juridiquement éprouvées aux directions générales et aux investisseurs.
              </p>
              <div className="space-y-4">
                <p>
                  Nous privilégions une approche pragmatique : chaque dossier est piloté par un associé référent disposant d’une expérience directe des juridictions de l’UEMOA et de l'arbitrage international.
                </p>
                <div className="pt-2">
                  <a 
                    href="#dossiers"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold text-neutral-900 border-b border-neutral-900 pb-1 hover:text-[#966738] hover:border-[#966738] transition-colors"
                  >
                    Consulter nos interventions récentes <ArrowDown className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* COLONNE D'ARCHIVE ET DE PRÉSENCE AU BARREAU */}
          <div className="lg:col-span-4 bg-[#F1EDE3] border border-[#DCD6C8] p-8 space-y-6">
            <div className="border-b border-[#DCD6C8] pb-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#966738] font-bold">
                Le Cabinet au Plateau
              </div>
              <h3 className="font-serif text-xl text-neutral-900 mt-1">
                20 ans de pratique juridique en Côte d'Ivoire
              </h3>
            </div>

            <p className="text-xs text-neutral-700 leading-relaxed font-sans">
              Installé au cœur du quartier des affaires d'Abidjan, le cabinet conseille des groupes industriels ivoiriens, des banques régionales et des multinationales opérant en Afrique de l'Ouest.
            </p>

            <div className="space-y-3 pt-2 border-t border-[#DCD6C8] font-mono text-xs">
              <div className="flex justify-between py-1 border-b border-[#E4DECFA]">
                <span className="text-neutral-500">Associés gérants</span>
                <span className="font-semibold text-neutral-900">4 Avocats</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E4DECFA]">
                <span className="text-neutral-500">Dossiers traités en 2025</span>
                <span className="font-semibold text-neutral-900">142 mandats</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E4DECFA]">
                <span className="text-neutral-500">Rayonnement</span>
                <span className="font-semibold text-neutral-900">Zone OHADA</span>
              </div>
            </div>

            <div className="pt-2">
              <button 
                onClick={() => onOpenDevis('corporate')}
                className="w-full py-3 bg-[#191A1D] hover:bg-black text-white font-mono text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
              >
                Planifier un entretien au cabinet
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* DOSSIERS MAJEURS : COMPOSITION ÉDITORIALE TYPE REVUE JURIDIQUE */}
      <section id="dossiers" className="px-4 sm:px-10 py-20 border-b border-[#DCD6C8] bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-12 border-b-2 border-[#191A1D] gap-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#966738] font-bold mb-1">
                Annales des opérations
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#191A1D]">
                Interventions & Décisions Récentes
              </h2>
            </div>
            <div className="font-mono text-xs text-neutral-500">
              Transactions et contentieux instruits dans le respect du secret professionnel
            </div>
          </div>

          <div className="space-y-12">
            {dossiersMajeurs.map((dossier, idx) => (
              <div 
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pb-10 border-b border-[#DCD6C8] last:border-b-0 items-start"
              >
                <div className="lg:col-span-3 font-mono text-xs space-y-2">
                  <div className="text-[#966738] font-bold text-sm">
                    {dossier.valeur}
                  </div>
                  <div className="text-neutral-500">
                    {dossier.juridiction}
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    {dossier.date}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-2">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#966738]">
                    {dossier.domaine}
                  </div>
                  <h3 className="font-serif text-2xl text-neutral-900 leading-snug">
                    {dossier.titre}
                  </h3>
                </div>

                <div className="lg:col-span-4 text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                  {dossier.details}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LES 4 PÔLES D'EXPERTISE DU CABINET */}
      <section id="expertises" className="px-4 sm:px-10 py-20 border-b border-[#DCD6C8] bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-2xl mb-12">
            <div className="font-mono text-xs uppercase tracking-widest text-[#966738] font-bold mb-1">
              Champs de compétence
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#191A1D]">
              Une pratique concentrée sur les enjeux du haut de bilan.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              {
                titre: 'Fiscalité d’Entreprise & Prix de Transfert',
                cadre: 'Livre des Procédures Fiscales de Côte d’Ivoire',
                texte: 'Assistance lors des vérifications approfondies de comptabilité par la DGI. Négociation des règlements transactionnels et élaboration des politiques de prix de transfert au sein de l’espace UEMOA.',
                points: ['Vérifications et redressements fiscaux', 'Contentieux devant la Commission Mixte', 'Fiscalité des flux intragroupes']
              },
              {
                titre: 'Fusions, Acquisitions & Restructurations',
                cadre: 'Acte Uniforme OHADA relatif aux Sociétés Commerciales',
                texte: 'Structuration des prises de participation, audits d’acquisition (due diligence) et rédaction de pactes d’actionnaires sur-mesure pour prévenir les situations de blocage décisionnel.',
                points: ['Protocole de cession et garanties d’actif-passif', 'Transmission d’entreprises familiales', 'Autorisations de concentration économique']
              },
              {
                titre: 'Infrastructures & Partenariats Public-Privé',
                cadre: 'Code des Marchés Publics & Régime des PPP',
                texte: 'Conseil aux consortiums industriels et aux bailleurs dans les concessions portuaires, les centrales énergétiques et les projets d’adduction d’eau sur le territoire national.',
                points: ['Conventions d’établissement sectorielles', 'Sûretés réelles et nantissements de flux', 'Régimes d’exonération du Code des Investissements']
              },
              {
                titre: 'Arbitrage Régional & Recouvrement Forcé',
                cadre: 'Cour Commune de Justice et d’Arbitrage (CCJA)',
                texte: 'Représentation devant les formations arbitrales de la CCJA et la Cour d’Arbitrage de Côte d’Ivoire (CACI). Exécution de sentences arbitrales et levée de saisies abusives.',
                points: ['Référés d’urgence et mesures conservatoires', 'Recours en annulation et procédures d’exequatur', 'Médiation commerciale institutionnelle']
              }
            ].map((exp, i) => (
              <div key={i} className="border-t border-[#191A1D] pt-6 space-y-4">
                <div className="font-mono text-[11px] text-[#966738] uppercase tracking-wider">
                  {exp.cadre}
                </div>
                <h3 className="font-serif text-2xl text-neutral-900">
                  {exp.titre}
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed font-sans">
                  {exp.texte}
                </p>
                <div className="space-y-1.5 pt-2 border-t border-[#DCD6C8]">
                  {exp.points.map((p, idx) => (
                    <div key={idx} className="text-xs font-mono text-neutral-600 flex items-center gap-2">
                      <span className="text-[#966738]">•</span>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION CABINET & DÉONTOLOGIE */}
      <section id="cabinet" className="px-4 sm:px-10 py-20 border-b border-[#DCD6C8] bg-[#F1EDE3]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline">
          
          <div className="lg:col-span-4 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#966738] font-bold block">
              Gouvernance du Cabinet
            </span>
            <h2 className="font-serif text-3xl text-neutral-900 leading-tight">
              Trois règles déontologiques strictes appliquées à chaque mandat.
            </h2>
          </div>

          <div className="lg:col-span-8 divide-y divide-[#DCD6C8]">
            <div className="py-6 space-y-2">
              <div className="font-mono text-xs font-bold text-[#966738]">01. Détection stricte des conflits d'intérêts</div>
              <h4 className="font-serif text-xl text-neutral-900">Vérification préalable obligatoire</h4>
              <p className="text-sm text-neutral-700 leading-relaxed font-sans">
                Avant d’accepter toute nouvelle mission, le cabinet opère un contrôle croisé sur l'ensemble de ses dossiers actifs pour certifier l’indépendance totale de son conseil face aux parties adverses.
              </p>
            </div>

            <div className="py-6 space-y-2">
              <div className="font-mono text-xs font-bold text-[#966738]">02. Transparence absolue des honoraires</div>
              <h4 className="font-serif text-xl text-neutral-900">Convention forfaitaire préétablie</h4>
              <p className="text-sm text-neutral-700 leading-relaxed font-sans">
                Chaque mandat fait l’objet d’une convention d’honoraires détaillée. Aucun acte n’est engagé sans validation préalable de son coût et de son périmètre juridique.
              </p>
            </div>

            <div className="py-6 space-y-2">
              <div className="font-mono text-xs font-bold text-[#966738]">03. Secret professionnel absolu</div>
              <h4 className="font-serif text-xl text-neutral-900">Protection des correspondances</h4>
              <p className="text-sm text-neutral-700 leading-relaxed font-sans">
                L’ensemble des communications et pièces communiquées bénéficie de l’immunité légale accordée aux correspondances d’avocats par la loi ivoirienne régissant le Barreau.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* PRISE DE CONTACT ÉDITORIALE */}
      <section id="contact" className="px-4 sm:px-10 py-20 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="font-mono text-xs uppercase tracking-widest text-[#966738] font-bold">
              Coordonnées du Cabinet
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900 leading-tight">
              Prendre rendez-vous avec un associé au Plateau.
            </h2>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Pour soumettre un dossier contentieux ou organiser une consultation d'affaires, nos bureaux vous accueillent du lundi au vendredi sur rendez-vous.
            </p>

            <div className="border-t border-[#DCD6C8] pt-6 space-y-4 font-mono text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#966738] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-neutral-900">Immeuble Delafosse, 6e étage</div>
                  <div className="text-neutral-600">Avenue Delafosse, Plateau — Abidjan</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#966738] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-neutral-900">Ligne directe du secrétariat</div>
                  <div className="text-neutral-600">+225 27 20 25 30 00 / +225 07 08 09 10 11</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#966738] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-neutral-900">Courriel officiel</div>
                  <div className="text-neutral-600">secretariat@toure-koffi.ci</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-[#DCD6C8] p-8 sm:p-10">
            {formDone ? (
              <div className="py-12 text-center space-y-4">
                <div className="font-serif text-2xl text-neutral-900">Votre message a été transmis.</div>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto">
                  Le secrétariat général du cabinet vous confirmera la disponibilité d’un associé référent dans un délai de 24h ouvrées.
                </p>
                <button
                  onClick={() => setFormDone(false)}
                  className="px-6 py-2.5 bg-[#191A1D] text-white font-mono text-xs uppercase tracking-wider cursor-pointer"
                >
                  Rédiger un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuickContact} className="space-y-4">
                <div className="font-mono text-xs uppercase tracking-wider text-neutral-500 pb-2 border-b border-[#DCD6C8]">
                  Formulaire de prise de contact préalable
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-600 mb-1">
                      Nom complet *
                    </label>
                    <input 
                      required 
                      type="text" 
                      placeholder="Me / M. Idriss Traoré"
                      className="w-full px-3.5 py-2.5 text-xs border border-[#DCD6C8] focus:border-black outline-none bg-[#F8F6F0]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-600 mb-1">
                      Société requérante *
                    </label>
                    <input 
                      required 
                      type="text" 
                      placeholder="Société ou Holding"
                      className="w-full px-3.5 py-2.5 text-xs border border-[#DCD6C8] focus:border-black outline-none bg-[#F8F6F0]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-600 mb-1">
                      Téléphone professionnel *
                    </label>
                    <input 
                      required 
                      type="tel" 
                      placeholder="+225 07 ..."
                      className="w-full px-3.5 py-2.5 text-xs border border-[#DCD6C8] focus:border-black outline-none bg-[#F8F6F0]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-600 mb-1">
                      Courriel *
                    </label>
                    <input 
                      required 
                      type="email" 
                      placeholder="direction@groupe.ci"
                      className="w-full px-3.5 py-2.5 text-xs border border-[#DCD6C8] focus:border-black outline-none bg-[#F8F6F0]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-600 mb-1">
                    Résumé de la situation ou de la consultation demandée
                  </label>
                  <textarea 
                    required
                    rows={3}
                    placeholder="Précisez la nature de l’opération, la date d'échéance ou le litige concerné..."
                    className="w-full px-3.5 py-2.5 text-xs border border-[#DCD6C8] focus:border-black outline-none bg-[#F8F6F0] resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3.5 bg-[#191A1D] text-[#F8F6F0] hover:bg-black font-mono text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer"
                >
                  Transmettre la demande de consultation
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* PIED DE PAGE INSTITUTIONNEL */}
      <footer className="border-t border-[#191A1D] bg-[#191A1D] text-[#B0ABA0] px-4 sm:px-10 py-10 text-xs font-mono">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-baseline gap-6">
          <div>
            <span className="text-white font-bold">TOURÉ, KOFFI & ASSOCIÉS</span> — Avocats au Barreau de Côte d'Ivoire
            <div className="text-[10px] text-neutral-400 mt-1">Immeuble Delafosse, Plateau — BP 1845 Abidjan 01</div>
          </div>
          <div className="flex flex-wrap gap-6 text-[11px]">
            <a href="#" className="hover:text-white">Règlement Ordinal</a>
            <a href="#" className="hover:text-white">Protection des Données Personnelles</a>
            <a href="#" className="hover:text-white">Mentions Légales</a>
          </div>
        </div>
      </footer>

    </div>
  );
};


// ============================================================================
// DIRECTION 02 : ATELIER NUMÉRIQUE 225 (COCODY DANGA, ABIDJAN)
// ============================================================================
const AtelierNumerique = ({ onOpenDevis }: { onOpenDevis: (d: Direction) => void; onNotify?: Notify }) => {
  const [filter, setFilter] = useState('all');

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Bonjour l'Atelier 225. Je souhaite échanger avec vous sur un projet d'application web / mobile pour une entreprise basée en Côte d'Ivoire."
    );
    window.open(`https://wa.me/2250700000000?text=${text}`, '_blank');
  };

  const projets = [
    {
      id: 'p1',
      cat: 'fintech',
      client: 'Nissa Mobile',
      titre: 'Infrastructure de versement de paie automatisé pour exploitants agricoles',
      enjeu: 'Les coopératives cacaoyères de Daloa perdaient jusqu’à 5 jours par mois à distribuer des salaires en espèces avec des risques importants de sécurité.',
      solution: 'Déploiement d’un système web connecté directement aux passerelles Wave et Orange Money avec génération de quittances numériques horodatées.',
      resultat: '180 000 transactions traitées sans incident',
      technologies: ['Next.js 15', 'Node.js', 'API Wave Business', 'PostgreSQL'],
      annee: '2025'
    },
    {
      id: 'p2',
      cat: 'commerce',
      client: 'Koffi & Frères Terroirs',
      titre: 'Boutique d’export direct et traçabilité pour les cafés fins des Monts de Man',
      enjeu: 'Dépendance totale vis-à-vis des courtiers intermédiaires pour l’exportation de fèves de café vers l’Europe.',
      solution: 'Plateforme e-commerce multidevise à très faible empreinte carbone, interfaçant Stripe pour l’international et CinetPay pour la Côte d’Ivoire.',
      resultat: '+210% de chiffre d’affaires direct producteur',
      technologies: ['Shopify Headless', 'Tailwind CSS', 'Cloudflare CDN'],
      annee: '2025'
    },
    {
      id: 'p3',
      cat: 'logistique',
      client: 'TransBabi Express',
      titre: 'Application mobile de routage par repères visuels pour coursiers d’Abidjan',
      enjeu: 'L’adressage informel à Yopougon, Cocody et Koumassi provoquait 30% d’échecs de livraison au premier passage.',
      solution: 'Application mobile hors-ligne permettant d’enregistrer des points de repère réels (pharmacies, carrefours connus) et de recalculer les trajets sans connexion permanente.',
      resultat: 'Temps moyen de livraison réduit de 35 minutes',
      technologies: ['React Native', 'Leaflet Offline', 'Go Engine'],
      annee: '2026'
    }
  ];

  const filteredProjets = filter === 'all' 
    ? projets 
    : projets.filter(p => p.cat === filter);

  return (
    <div className="bg-[#0B0D11] text-[#ECEEF2] font-sans antialiased selection:bg-[#E84A27] selection:text-white min-h-screen">
      
      {/* BANDEAU SUPÉRIEUR TECHNIQUE */}
      <div className="border-b border-[#1A1D24] bg-[#07080A] px-4 sm:px-8 py-2.5 font-mono text-xs text-neutral-400">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-white font-bold tracking-wider">ATELIER NUMÉRIQUE 225</span>
            <span className="text-neutral-600">/</span>
            <span>COCODY DANGA, ABIDJAN</span>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <span>INFRASTRUCTURE SERVIE EN CÔTE D'IVOIRE</span>
            <span className="text-[#E84A27] font-semibold">DISPONIBILITÉ : 2 SQUADS DE DÉVELOPPEMENT</span>
          </div>
        </div>
      </div>

      {/* HEADER DU STUDIO */}
      <header className="border-b border-[#1A1D24] px-4 sm:px-8 py-5 sticky top-0 bg-[#0B0D11]/95 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#E84A27] text-white flex items-center justify-center font-mono font-black text-sm">
              225
            </div>
            <div>
              <span className="font-bold text-lg text-white block leading-none">
                Atelier Numérique
              </span>
              <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                Ingénierie Web & Conception Produit
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider text-neutral-400">
            <a href="#vision" className="hover:text-white transition-colors">Approche</a>
            <a href="#projets" className="hover:text-white transition-colors">Réalisations</a>
            <a href="#methodologie" className="hover:text-white transition-colors">Phasage</a>
            <a href="#principes" className="hover:text-white transition-colors">Engagements</a>
          </nav>

          <div className="flex items-center gap-3 font-mono text-xs">
            <button
              onClick={handleWhatsApp}
              className="hidden sm:flex items-center gap-2 border border-neutral-700 hover:border-white px-3.5 py-2 text-white transition-colors cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" /> WhatsApp
            </button>
            <button
              onClick={() => onOpenDevis('modern')}
              className="bg-[#E84A27] hover:bg-[#d43d1c] text-white px-4 py-2 uppercase font-bold tracking-wider cursor-pointer"
            >
              Lancer un projet
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION DE L'ATELIER : COMPOSITION TYPOGRAPHIQUE DIRECTE */}
      <section id="vision" className="border-b border-[#1A1D24] px-4 sm:px-8 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          
          <div className="font-mono text-xs text-[#E84A27] uppercase tracking-wider mb-6 font-semibold">
            Développement d'applications pour le marché ivoirien
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.02] max-w-4xl">
            Des interfaces rapides, fiables et adaptées aux réalités de connexion d’Abidjan.
          </h1>

          <div className="mt-12 pt-8 border-t border-[#1A1D24] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-sans">
                Nous concevons des plateformes web et mobiles sur-mesure pour les entreprises ivoiriennes. Nous refusons les modèles préfabriqués et les CMS surchargés qui ralentissent la navigation sur mobile et consomment inutilement les forfaits data de vos clients.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 font-mono text-xs">
                <a
                  href="#projets"
                  className="px-6 py-3 bg-[#E84A27] text-white hover:bg-[#d43d1c] transition-colors uppercase font-bold tracking-wider flex items-center gap-2"
                >
                  Voir les projets livrés <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#12151C] border border-[#1A1D24] p-6 space-y-4 font-mono text-xs">
              <div className="text-[11px] text-neutral-400 uppercase tracking-wider font-semibold">
                Nos standards de production
              </div>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#E84A27] shrink-0 mt-0.5" />
                  <span>Temps de chargement initial inférieur à 1,5 seconde sur réseau 3G/4G local.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#E84A27] shrink-0 mt-0.5" />
                  <span>Connexion directe aux API Mobile Money officielles (Wave, Orange Money, Moov).</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#E84A27] shrink-0 mt-0.5" />
                  <span>Cession intégrale et sans réserve du code source (dépôts Git propriétaires).</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* PORTFOLIO DES RÉALISATIONS DOCUMENTÉES */}
      <section id="projets" className="border-b border-[#1A1D24] px-4 sm:px-8 py-20 bg-[#07080A]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-12 border-b border-[#1A1D24] gap-4">
            <div>
              <div className="font-mono text-xs text-[#E84A27] uppercase tracking-wider mb-1 font-semibold">
                Études de cas réels
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Projets conçus et déployés en production
              </h2>
            </div>

            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {[
                { id: 'all', label: 'Tous les projets' },
                { id: 'fintech', label: 'Paiement & Finance' },
                { id: 'commerce', label: 'Commerce & Export' },
                { id: 'logistique', label: 'Transport & Logistique' }
              ].map(b => (
                <button
                  key={b.id}
                  onClick={() => setFilter(b.id)}
                  className={`px-3.5 py-1.5 border transition-colors cursor-pointer ${
                    filter === b.id
                      ? 'bg-[#E84A27] border-[#E84A27] text-white font-semibold'
                      : 'border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {filteredProjets.map(p => (
              <div 
                key={p.id}
                className="border border-[#1A1D24] bg-[#0E1015] p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-3 font-mono text-xs">
                    <span className="text-white font-bold">{p.client}</span>
                    <span className="text-neutral-600">/</span>
                    <span className="text-[#E84A27]">{p.annee}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    {p.titre}
                  </h3>
                  <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[10px]">
                    {p.technologies.map((t, idx) => (
                      <span key={idx} className="px-2 py-1 bg-[#161922] text-neutral-300 border border-[#232732]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4 text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                  <div>
                    <strong className="text-neutral-200 block font-mono text-xs uppercase mb-1">Problématique initiale :</strong>
                    {p.enjeu}
                  </div>
                  <div>
                    <strong className="text-neutral-200 block font-mono text-xs uppercase mb-1">Architecture mise en œuvre :</strong>
                    {p.solution}
                  </div>
                </div>

                <div className="lg:col-span-3 bg-[#13161F] border border-[#1F232D] p-5 font-mono text-xs space-y-2">
                  <span className="text-neutral-400 text-[10px] uppercase tracking-wider block">
                    Impact mesuré
                  </span>
                  <div className="text-lg font-bold text-emerald-400">
                    {p.resultat}
                  </div>
                  <div className="pt-3 border-t border-[#1F232D]">
                    <button
                      onClick={() => onOpenDevis('modern')}
                      className="text-[#E84A27] hover:underline flex items-center gap-1 cursor-pointer text-xs"
                    >
                      Démarrer un projet analogue <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROTOCOLE DE PHASAGE : REMPLACE LE FAUX TABLEAU DE PRIX SAAS */}
      <section id="methodologie" className="border-b border-[#1A1D24] px-4 sm:px-8 py-20 bg-[#0B0D11]">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-2xl pb-6 mb-12 border-b border-[#1A1D24]">
            <div className="font-mono text-xs text-[#E84A27] uppercase tracking-wider mb-1 font-semibold">
              Méthodologie de travail
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Un phasage clair, sans engagement opaque.
            </h2>
            <p className="text-sm text-neutral-400 mt-2 font-sans">
              Nous intervenons par cycles de livraison définis avec livrables contractuels et validation systématique avant passage à l'étape suivante.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                etape: 'Phase 01',
                titre: 'Cadrage & Spécifications',
                duree: '1 à 2 semaines',
                description: 'Définition précise du modèle de données, maquettes interactives sur Figma et choix de l’architecture technique adaptée aux usages locaux.',
                livrables: [
                  'Maquettes fonctionnelles validées pour mobile',
                  'Spécifications des API de paiement locales',
                  'Calendrier de livraison ferme'
                ]
              },
              {
                etape: 'Phase 02',
                titre: 'Développement & Intégration',
                duree: '3 à 6 semaines',
                description: 'Écriture du code en Next.js ou React Native, intégration des passerelles Wave et Orange Money, et tests de charge sur connexions instables.',
                livrables: [
                  'Environnement de test accessible en continu',
                  'Code source versionné sur GitHub / GitLab',
                  'Intégration validée des flux financiers'
                ]
              },
              {
                etape: 'Phase 03',
                titre: 'Déploiement & Transfert',
                duree: '1 semaine',
                description: 'Mise en production sécurisée, configuration des noms de domaine, formation de votre équipe et transfert complet des accès d’administration.',
                livrables: [
                  'Mise en ligne supervisée avec CDN Edge',
                  'Documentation technique pour vos équipes',
                  'Garantie corrective de 12 mois incluse'
                ]
              }
            ].map((p, idx) => (
              <div 
                key={idx}
                className="border border-[#1A1D24] bg-[#0E1015] p-8 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline font-mono text-xs text-neutral-400 border-b border-[#1A1D24] pb-3">
                    <span className="text-[#E84A27] font-bold">{p.etape}</span>
                    <span>{p.duree}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {p.titre}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                    {p.description}
                  </p>

                  <div className="pt-3 border-t border-[#1A1D24] space-y-2 font-mono text-xs">
                    <span className="text-[10px] text-neutral-500 uppercase tracking-wider block">Livrables contractuels :</span>
                    {p.livrables.map((l, i) => (
                      <div key={i} className="text-neutral-300 text-xs flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{l}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1A1D24]">
                  <button
                    onClick={() => onOpenDevis('modern')}
                    className="w-full py-2.5 border border-neutral-700 hover:border-white text-neutral-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Demander un cadrage pour cette phase
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ENGAGEMENTS SANS AMBIGUÏTÉ */}
      <section id="principes" className="border-b border-[#1A1D24] px-4 sm:px-8 py-20 bg-[#07080A]">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-2xl mb-12">
            <div className="font-mono text-xs text-[#E84A27] uppercase tracking-wider mb-1 font-semibold">
              Engagements contractuels
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ce que nous garantissons à chaque client
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                titre: 'Propriété totale du code',
                description: 'Le code source produit vous appartient à 100%. Vous disposez de la pleine liberté de le transférer ou de le faire évoluer en interne.'
              },
              {
                titre: 'Délais de livraison fermes',
                description: 'Nous refusons les projets aux contours incertains. Le périmètre validé lors du cadrage est livré à la date contractuellement arrêtée.'
              },
              {
                titre: 'Zéro dépendance captive',
                description: 'Pas de CMS fermé ou de solution propriétaire vous obligeant à payer des abonnements mensuels obligatoires pour maintenir votre site en ligne.'
              },
              {
                titre: 'Interlocuteurs directs',
                description: 'Vous échangez uniquement avec les développeurs et designers seniors en charge de la conception, pour des prises de décision immédiates.'
              }
            ].map((item, idx) => (
              <div key={idx} className="border-t border-[#1A1D24] pt-6 space-y-3">
                <div className="font-mono text-xs text-[#E84A27] font-bold">
                  0{idx + 1}.
                </div>
                <h3 className="text-lg font-bold text-white">
                  {item.titre}
                </h3>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FOOTER DU STUDIO */}
      <footer className="px-4 sm:px-8 py-10 bg-[#07080A] text-neutral-500 font-mono text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-baseline gap-6 border-t border-neutral-800 pt-8">
          <div>
            <span className="text-white font-bold">ATELIER NUMÉRIQUE 225</span> — Société d’Ingénierie & Design Web
            <div className="text-[10px] text-neutral-500 mt-1">Carrefour La Corniche, Cocody Danga, Abidjan — Côte d'Ivoire</div>
          </div>
          <div className="flex gap-6 text-[11px]">
            <a href="mailto:contact@atelier225.ci" className="hover:text-white">contact@atelier225.ci</a>
            <a href="tel:+2250700000000" className="hover:text-white">+225 07 00 00 00 00</a>
            <span className="text-neutral-600">Cocody Danga</span>
          </div>
        </div>
      </footer>

    </div>
  );
};


// ============================================================================
// COMPOSANT PRINCIPAL : SWITCHER DE DÉMONSTRATION ÉPURÉ
// ============================================================================
export default function App() {
  const [activeDirection, setActiveDirection] = useState<Direction>('corporate');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenDevis = (direction: Direction) => {
    setActiveDirection(direction);
    setIsModalOpen(true);
  };

  const handleNotify = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 5000);
  };

  return (
    <div className="relative w-full min-h-screen">
      
      {/* Toast d'accusé de réception */}
      {toastMessage && (
        <div className="fixed top-4 right-4 z-50 max-w-md bg-[#191A1D] text-white p-4 border border-neutral-700 shadow-2xl flex items-start gap-3 font-mono text-xs">
          <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0"></div>
          <div className="flex-1">
            <span className="font-bold uppercase block mb-1">Confirmation d'enregistrement</span>
            <span className="text-neutral-300 leading-normal">{toastMessage}</span>
          </div>
          <button 
            onClick={() => setToastMessage(null)}
            className="text-neutral-400 hover:text-white cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Rendu de la maquette sélectionnée */}
      {activeDirection === 'corporate' ? (
        <CabinetEditorial onOpenDevis={handleOpenDevis} onNotify={handleNotify} />
      ) : (
        <AtelierNumerique onOpenDevis={handleOpenDevis} onNotify={handleNotify} />
      )}

      {/* Modal d'instruction ou de réservation */}
      <DossierModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        direction={activeDirection}
        onNotify={handleNotify}
      />

      {/* COMMUTATEUR FLOTTANT EN BAS D'ÉCRAN */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-[#121316] text-white px-2 py-1.5 border border-neutral-700 shadow-2xl flex items-center gap-1 font-mono text-xs">
          <span className="hidden md:inline text-neutral-400 px-3 uppercase text-[10px] tracking-wider border-r border-neutral-800">
            Direction Artistique :
          </span>

          <button
            onClick={() => setActiveDirection('corporate')}
            className={`px-4 py-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeDirection === 'corporate'
                ? 'bg-[#F8F6F0] text-black font-bold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <span className="w-2 h-2 bg-[#966738]"></span>
            <span>01. Cabinet d’Affaires (Plateau)</span>
          </button>

          <button
            onClick={() => setActiveDirection('modern')}
            className={`px-4 py-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeDirection === 'modern'
                ? 'bg-[#E84A27] text-white font-bold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <span className="w-2 h-2 bg-white"></span>
            <span>02. Atelier Numérique (Cocody)</span>
          </button>
        </div>
      </div>

    </div>
  );
}