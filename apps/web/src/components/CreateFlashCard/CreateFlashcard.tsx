
import { useState } from 'react'
import type { Flashcard } from '../../types/flashcard'
import './CreateFlashcard.css'

// Properties received from the parent component.
type CreateFlashcardProps = {
  decks: {
    id: number
    title: string
  }[]
  onCreate: (card: Flashcard) => void
  onCancel: () => void
}

function CreateFlashcard({ decks, onCreate, onCancel }: CreateFlashcardProps) {
  const [selectedDeck, setSelectedDeck] = useState<number>(decks[0]?.id ?? 0)
  const [front, setFront] = useState('')
  const [back, setBack] = useState('')

  return (
    <section className="create-flashcard">
      <h1>Create a flashcard</h1>

      <form>
        {/* Deck selection */}
        <label htmlFor="deck">Choose a deck</label>
        <select
          id="deck"
          value={selectedDeck}
          onChange={(event) => setSelectedDeck(Number(event.target.value))}
        >
          {decks.map((deck) => (
            <option key={deck.id} value={deck.id}>
              {deck.title}
            </option>
          ))}
        </select>

        {/* Front of the card */}
        <label htmlFor="front">Question (front)</label>
        <textarea
          id="front"
          value={front}
          onChange={(event) => setFront(event.target.value)}
          placeholder="Enter your question..."
          rows={4}
        />

        {/* Back of the card */}
        <label htmlFor="back">Answer (back)</label>
        <textarea
          id="back"
          value={back}
          onChange={(event) => setBack(event.target.value)}
          placeholder="Enter the answer..."
          rows={4}
        />

        <div className="form-actions">
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit">
            Create flashcard
          </button>
        </div>
      </form>
    </section>
  )
}

export default CreateFlashcard
