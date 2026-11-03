import { useState } from 'react'
//import type { Flashcard as FlashcardType } from '../../types/flashcard'
import Flashcard from '../Flashcard/Flashcard'
import { mockCards } from '../../data/mockCards'
import './FlashcardSession.css'


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
  // Retrieve only the flashcards belonging to the selected deck.
  const cards = mockCards.filter((card) => card.deckId === deckId)

  // Index of the currently displayed flashcard.
  // Starts at 0 because JavaScript arrays use zero-based indexing.
  const [currentCardIndex, setCurrentCardIndex] = useState(0)

  // Tracks the current session status:
  // "studying" while reviewing cards and "completed" when finished.
  const [sessionState, setSessionState] =
    useState<FlashcardSessionState>('studying')

  // Stores the number of times each difficulty rating is selected.
  const [ratings, setRatings] = useState({
    again: 0, // Number of cards the user needs to review again.
    hard: 0,  // Number of cards the user found difficult.
    good: 0,  // Number of cards the user answered correctly.
    easy: 0,  // Number of cards the user found easy.
  })

  // Indicates whether the answer to the current flashcard has been revealed.
  // Used to control when the rating buttons become visible.
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false)

  // Retrieves the flashcard currently displayed in the session.
  const currentCard = cards[currentCardIndex]

  // Calculates the session progress as a percentage.
  // Adds 1 to the index to get the actual card number.
  const progress = ((currentCardIndex + 1) / cards.length) * 100

  // Moves to the next flashcard or completes the session
  // if the current card is the last one.
  function handleNextCard() {
    if (currentCardIndex < cards.length - 1) {
      // Increment the index to display the next flashcard.
      // Uses the previous state value to ensure a reliable update.
      setCurrentCardIndex((currentIndex) => currentIndex + 1)
    } else {
      // All flashcards have been reviewed: mark the session as completed.
      setSessionState('completed')
    }
  }

  function handleRating(rating: keyof typeof ratings) {
  setRatings((currentRatings) => ({
    ...currentRatings,
    [rating]: currentRatings[rating] + 1,
  }))
  // Hide the answer before moving to the next card.
  setIsAnswerRevealed(false)
  // Move to the next card.
  handleNextCard()
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

    <div className="session-progress">
    <div className="session-progress-info">
        <span>Progression</span>
        <span>{currentCardIndex + 1} / {cards.length}</span>
    </div>

    <div className="progress-bar">
        <div
        className="progress-bar-fill"
        style={{ width: `${progress}%` }}
        />
    </div>
    </div>

<Flashcard key={currentCard.id} card={currentCard} onReveal={() => setIsAnswerRevealed(true)} />

{isAnswerRevealed && (
    <div className="rating-buttons">
  <button type="button" onClick={() => handleRating('again')}>
    Again
  </button>

  <button type="button" onClick={() => handleRating('hard')}>
    Hard
  </button>

  <button type="button" onClick={() => handleRating('good')}>
    Good
  </button>

  <button type="button" onClick={() => handleRating('easy')}>
    Easy
  </button>
</div>)}
    </section>
  )
}

export default FlashcardSession