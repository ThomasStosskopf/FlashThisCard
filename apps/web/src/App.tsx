import './App.css'

const decks = [
  {
    id: 1,
    title: 'Biologie moléculaire',
    category: 'SCIENCES',
    cards: 32,
    progress: 65,
    due: 8,
    icon: '🧬',
    color: 'purple',
  },
  {
    id: 2,
    title: 'Vocabulaire anglais',
    category: 'LANGUES',
    cards: 48,
    progress: 35,
    due: 12,
    icon: '💬',
    color: 'cyan',
  },
  {
    id: 3,
    title: 'Développement web',
    category: 'INFORMATIQUE',
    cards: 24,
    progress: 80,
    due: 4,
    icon: '💻',
    color: 'orange',
  },
]

function App() {
  return (
    <main className="app">
      <aside className="sidebar">
        <a className="brand" href="#" aria-label="FlashThisCard, accueil">
          <span className="brand-icon">✦</span>
          <span>
            Flash<span className="brand-highlight">This</span>Card
          </span>
        </a>

        <p className="nav-label">ESPACE DE TRAVAIL</p>

        <nav className="navigation" aria-label="Navigation principale">
          <a className="nav-item active" href="#dashboard">
            <span className="nav-icon">▦</span>
            Tableau de bord
          </a>
          <a className="nav-item" href="#decks">
            <span className="nav-icon">▤</span>
            Mes paquets
          </a>
          <a className="nav-item" href="#create">
            <span className="nav-icon">＋</span>
            Créer des cartes
          </a>
        </nav>

        <div className="sidebar-bottom">
          <div className="tip-card">
            <span className="tip-icon">💡</span>
            <h3>Le savais-tu ?</h3>
            <p>
              Des sessions courtes et régulières t'aident à mieux mémoriser.
            </p>
          </div>
          <div className="profile">
            <div className="avatar">T</div>
            <div className="profile-info">
              <strong>Mon espace</strong>
              <span>Apprenant</span>
            </div>
            <span className="profile-menu">···</span>
          </div>
        </div>
      </aside>

      <section className="main-content" id="dashboard">
        <header className="topbar">
          <span className="breadcrumb">Mon espace / Tableau de bord</span>
          <div className="topbar-actions">
            <span className="streak">🔥 3 jours</span>
            <button className="icon-button" type="button" aria-label="Notifications">
              ♧
            </button>
          </div>
        </header>

        <div className="dashboard">
          <section className="welcome">
            <div className="welcome-copy">
              <span className="eyebrow">TON ESPACE D'APPRENTISSAGE ✨</span>
              <h1>Prêt à faire travailler ta mémoire ?</h1>
              <p>
                Quelques cartes aujourd'hui, de grandes connaissances demain.
              </p>
            </div>
            <div className="welcome-art" aria-hidden="true">
              <span className="art-star star-one">✦</span>
              <span className="art-star star-two">✧</span>
              <div className="art-card card-back" />
              <div className="art-card card-front">
                <span>ABC</span>
                <span className="art-sparkle">✳</span>
              </div>
            </div>
          </section>

          <section className="stats-grid" aria-label="Mes statistiques">
            <article className="stat-card">
              <div className="stat-top">
                <span className="stat-icon purple-bg">▤</span>
                <span className="stat-caption">AU TOTAL</span>
              </div>
              <strong className="stat-number">8</strong>
              <span className="stat-label">Paquets de cartes</span>
            </article>

            <article className="stat-card">
              <div className="stat-top">
                <span className="stat-icon cyan-bg">✦</span>
                <span className="stat-caption">À FAIRE</span>
              </div>
              <strong className="stat-number">24</strong>
              <span className="stat-label">Cartes à réviser</span>
            </article>

            <article className="stat-card">
              <div className="stat-top">
                <span className="stat-icon orange-bg">♨</span>
                <span className="stat-caption">RÉGULARITÉ</span>
              </div>
              <strong className="stat-number">
                3 <small>jours</small>
              </strong>
              <span className="stat-label">Série en cours</span>
            </article>
          </section>

          <section className="decks-section" id="decks">
            <div className="section-heading">
              <div>
                <h2>Mes paquets <span className="heading-count">3</span></h2>
                <p>Retrouve tes cartes et continue ta progression.</p>
              </div>
              <button className="text-button" type="button">
                Voir tous les paquets <span>→</span>
              </button>
            </div>

            <div className="deck-list">
              {decks.map((deck) => (
                <article className="deck-card" key={deck.id}>
                  <div className={`deck-icon ${deck.color}`}>
                    {deck.icon}
                  </div>

                  <div className="deck-info">
                    <span className="deck-category">{deck.category}</span>
                    <h3>{deck.title}</h3>
                    <span className="deck-meta">{deck.cards} cartes</span>

                    <div
                      className="progress-track"
                      role="progressbar"
                      aria-label={`Progression de ${deck.title}`}
                      aria-valuenow={deck.progress}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className={`progress-fill ${deck.color}`}
                        style={{ width: `${deck.progress}%` }}
                      />
                    </div>

                    <span className="progress-label">
                      {deck.progress}% maîtrisé
                    </span>
                  </div>

                  <div className="deck-actions">
                    <span className="due-count">{deck.due} à revoir</span>
                    <button
                      className="review-button"
                      type="button"
                      aria-label={`Réviser ${deck.title}`}
                    >
                      Réviser <span>→</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="create-banner" id="create">
            <div className="create-symbol">＋</div>
            <div className="create-copy">
              <h2>Une nouvelle chose à apprendre ?</h2>
              <p>Crée un paquet et transforme tes connaissances en cartes.</p>
            </div>
            <button className="create-button" type="button">
              Créer un paquet <span>＋</span>
            </button>
          </section>

          <footer className="footer">
            <span>Fait pour apprendre à ton rythme 💜</span>
            <span>FlashThisCard · Première version</span>
          </footer>
        </div>
      </section>
    </main>
  )
}

export default App