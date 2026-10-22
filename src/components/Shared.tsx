import { useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { Link } from 'react-router';
import { sendContact } from '../api';
import { ArrowRight, CheckCircle2, Clock, Mail, MapPin, Menu, MessageCircle, Phone, X } from 'lucide-react';

type Theme = 'premium' | 'studio';

const WHATSAPP_MESSAGE = 'Bonjour Qora Studio, je souhaite en savoir plus sur vos services.';

export function Logo({ light, playful }: { light?: boolean; playful?: boolean }) {
  return (
    <Link to="/" className={`brand-lockup${light ? ' brand-light' : ''}${playful ? ' brand-playful' : ''}`} aria-label="Qora Studio — accueil">
      <span className="brand-mark"><span>Q</span></span>
      <span className="brand-copy">
        <strong>QORA</strong>
        <small>STUDIO DIGITAL <span>by IMFORMAland</span></small>
      </span>
    </Link>
  );
}

export function Eyebrow({ children, light, playful }: { children: ReactNode; light?: boolean; playful?: boolean }) {
  return (
    <div className={`eyebrow${light ? ' eyebrow-light' : ''}${playful ? ' eyebrow-playful' : ''}`}>
      <i className="eyebrow-dot" />
      <span>{children}</span>
    </div>
  );
}

export function DemoLabel({ children = 'PISTES CRÉATIVES' }: { children?: ReactNode }) {
  return <span className="demo-label"><span />{children}</span>;
}

export function SectionHeading({ kicker, title, description, light, playful, center }: {
  kicker: string; title: ReactNode; description?: string; light?: boolean; playful?: boolean; center?: boolean;
}) {
  return (
    <div className={`section-heading${light ? ' section-heading-light' : ''}${playful ? ' section-heading-playful' : ''}${center ? ' text-center' : ''}`}>
      <Eyebrow light={light} playful={playful}>{kicker}</Eyebrow>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

const navs: Record<Theme, { href: string; label: string }[]> = {
  premium: [
    { href: '#apropos', label: 'À propos' },
    { href: '#services', label: 'Services' },
    { href: '#methode', label: 'Méthode' },
    { href: '#contact', label: 'Contact' },
  ],
  studio: [
    { href: '#services', label: 'Services' },
    { href: '#offres', label: 'Offres' },
    { href: '#realisations', label: 'Réalisations' },
    { href: '#faq', label: 'FAQ' },
  ],
};

export function Header({ theme }: { theme: Theme }) {
  const [open, setOpen] = useState(false);
  const playful = theme === 'studio';
  const close = () => setOpen(false);
  return (
    <>
      {!playful && (
        <div className="premium-topbar">
          <span>ABIDJAN · CÔTE D’IVOIRE</span>
          <span>Du lundi au vendredi · 8h – 18h</span>
        </div>
      )}
      <header className={`site-header ${theme}-header`}>
        <div className="header-inner">
          <Logo light={!playful} playful={playful} />
          <nav className={`desktop-nav${open ? ' nav-open' : ''}`}>
            {navs[theme].map((n) => <a key={n.href} href={n.href} onClick={close}>{n.label}</a>)}
            <Link to="/" onClick={close}>Changer de direction</Link>
            <a className={`header-cta${playful ? ' header-cta-playful' : ''}`} href="#contact" onClick={close}>
              {playful ? 'Parlons-en' : 'DEMANDER UN DEVIS'} <ArrowRight size={14} />
            </a>
          </nav>
          <button type="button" className="mobile-menu" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
    </>
  );
}

export function Footer({ theme }: { theme: Theme }) {
  const playful = theme === 'studio';
  return (
    <footer className={`site-footer ${theme}-footer`}>
      <div className="footer-main">
        <div className="footer-brand">
          <Logo light={!playful} playful={playful} />
          <p>Sites vitrines, identité et communication digitale pour les entreprises qui veulent être choisies.</p>
        </div>
        <div>
          <h3>Navigation</h3>
          {navs[theme].map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
          <Link to="/">Les deux directions</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <p><MapPin size={13} /> Abidjan, Côte d’Ivoire</p>
          <a href="mailto:informaland.26@gmail.com"><Mail size={13} /> informaland.26@gmail.com</a>
          <a href="tel:+2250502836119"><Phone size={13} /> +225 05 02 83 61 19</a>
          <p><Clock size={13} /> Lun – Dim · 7h – 18h</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Qora Studio</span>
        <a href="#top">Retour en haut ↑</a>
      </div>
    </footer>
  );
}

/** Champ piège invisible : les humains ne le voient pas, les bots le remplissent. */
export function Honeypot() {
  return (
    <input
      name="website"
      type="text"
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
      style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
    />
  );
}

export function ContactForm({ theme }: { theme: Theme }) {
  const [sent, setSent] = useState(false);
  const playful = theme === 'studio';
  const [error, setError] = useState('');
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const f = new FormData(formEl);
    setError('');
    try {
      await sendContact({
        source: `contact-${theme}`,
        nom: String(f.get('nom')),
        email: String(f.get('email')),
        telephone: String(f.get('tel') || '') || undefined,
        besoin: String(f.get('besoin')),
        message: String(f.get('message')),
      });
      formEl.reset();
      setSent(true);
    } catch {
      setError('Une erreur est survenue, réessayez ou contactez-nous sur WhatsApp.');
    }
  };
  const form = (
    <form className={`contact-form${playful ? ' contact-form-playful' : ''}`} onSubmit={onSubmit}>
      <Honeypot />
      <div className="form-grid grid grid-cols-2 gap-4">
        <label>Nom <span>*</span><input name="nom" placeholder="Votre nom" required /></label>
        <label>E-mail <span>*</span><input name="email" type="email" placeholder="vous@exemple.com" required /></label>
        <label>Téléphone<input name="tel" type="tel" placeholder="+225 …" /></label>
        <label>Besoin
          <select name="besoin" defaultValue="site">
            <option value="site">Site vitrine</option>
            <option value="identite">Identité & design</option>
            <option value="com">Communication digitale</option>
            <option value="conseil">Conseil</option>
          </select>
        </label>
        <label className="form-full">Message <span>*</span><textarea name="message" placeholder="Décrivez votre projet" required /></label>
      </div>
      <div className="form-bottom">
        <button type="submit" className={`button ${playful ? 'button-coral' : 'button-gold'}`}>Envoyer <ArrowRight size={15} /></button>
      </div>
      {sent && <p className="form-status"><CheckCircle2 size={15} /> Merci ! Votre message a bien été envoyé, nous revenons vers vous sous 24h.</p>}
      {error && <p className="form-status" role="alert">{error}</p>}
    </form>
  );
  return playful ? (
    <div className="studio-form-card">
      <div className="studio-form-title"><span>PARLONS-EN</span><span>RÉPONSE SOUS 24H</span></div>
      {form}
    </div>
  ) : (
    <div className="contact-form-panel">
      <div className="form-panel-head"><span>DEMANDE DE DEVIS</span><span>RÉPONSE SOUS 24H</span></div>
      {form}
    </div>
  );
}

export function FloatingWhatsApp({ playful }: { playful?: boolean }) {
  return (
    <a className={`floating-whatsapp${playful ? ' floating-whatsapp-playful' : ''}`} href={`https://wa.me/2250502836119?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} target="_blank" rel="noreferrer">
      <MessageCircle size={18} /> <span>WhatsApp</span>
    </a>
  );
}
