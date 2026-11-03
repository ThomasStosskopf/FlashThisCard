import { useState } from 'react'
//import type { Flashcard as FlashcardType } from '../../types/flashcard'
import Flashcard from '../Flashcard/Flashcard'
import { mockCards } from '../../data/mockCards'

type FlashcardSessionProps = {
  deckId: number
  deckTitle: string
  onExit: () => void
}

type FlashcardSessionState = 'studying' | 'completed'

function FlashcardSession({
  deckId,
  deckTitle,
  onExit,
}: FlashcardSessionProps) {
  const cards = mockCards.filter((card) => card.deckId === deckId)

  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [sessionState, setSessionState] =
    useState<FlashcardSessionState>('studying')

  const currentCard = cards[currentCardIndex]

  function handleNextCard() {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex((currentIndex) => currentIndex + 1)
    } else {
      setSessionState('completed')
    }
  }

  if (sessionState === 'completed') {
    return (
      <section>
        <h1>Session terminée ! 🎉</h1>
        <p>Tu as révisé {cards.length} cartes dans {deckTitle}.</p>
        <button type="button" onClick={onExit}>
          Retour au tableau de bord
        </button>
      </section>
    )
  }

  if (cards.length === 0) {
    return (
      <section>
        <h1>Aucune carte disponible</h1>
        <p>Ce paquet ne contient pas encore de cartes.</p>
        <button type="button" onClick={onExit}>
          Retour au tableau de bord
        </button>
      </section>
    )
  }

  return (
    <section>
      <button type="button" onClick={onExit}>
        ← Quitter la révision
      </button>

      <h1>{deckTitle}</h1>

      <p>
        Carte {currentCardIndex + 1} / {cards.length}
      </p>

      <Flashcard card={currentCard} />

      <button type="button" onClick={handleNextCard}>
        {currentCardIndex === cards.length - 1
          ? 'Terminer la session'
          : 'Carte suivante →'}
      </button>
    </section>
  )
}

export default FlashcardSession