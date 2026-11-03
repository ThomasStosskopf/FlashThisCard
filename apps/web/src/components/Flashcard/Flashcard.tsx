import { useState } from 'react'
import type { Flashcard as FlashcardType } from '../../types/flashcard'
import './Flashcard.css'

type FlashcardProps = {
  card: FlashcardType
  onReveal: () => void
}

function Flashcard({ card, onReveal  }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

function handleFlip() {
  if (!isFlipped) {
    onReveal()
  }

  setIsFlipped(!isFlipped)
}

  return (
    <div className="flashcard-container">
      <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}>
        <div className="flashcard-face flashcard-front">
          <span className="flashcard-label">QUESTION</span>

          <p>{card.front}</p>

          <button type="button" onClick={handleFlip}>
            Révéler la réponse →
          </button>
        </div>

        <div className="flashcard-face flashcard-back">
          <span className="flashcard-label">RÉPONSE</span>

          <p>{card.back}</p>

          <button type="button" onClick={handleFlip}>
            ← Retourner la carte
          </button>
        </div>
      </div>
    </div>
  )
}

export default Flashcard