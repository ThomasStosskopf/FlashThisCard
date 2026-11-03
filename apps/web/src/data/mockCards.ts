import type { Flashcard } from '../types/flashcard'

export const mockCards: Flashcard[] = [
  {
    id: 1,
    deckId: 1,
    front: 'What is DNA?',
    back: 'Deoxyribonucleic acid',
  },
  {
    id: 2,
    deckId: 1,
    front: 'What is the role of ribosomes?',
    back: 'They are responsible for protein synthesis.',
  },
  {
    id: 3,
    deckId: 1,
    front: 'What is transcription?',
    back: 'The process of copying DNA into RNA.',
  },
  {
    id: 4,
    deckId: 2,
    front: 'What does "Nevertheless" mean?',
    back: 'Cependant / Néanmoins',
  },
  {
    id: 5,
    deckId: 2,
    front: 'What does "Although" mean?',
    back: 'Bien que / Quoique',
  },
  {
    id: 6,
    deckId: 3,
    front: 'What is React?',
    back: 'A JavaScript library for building user interfaces.',
  },
  {
    id: 7,
    deckId: 3,
    front: 'What is TypeScript?',
    back: 'A programming language that adds static typing to JavaScript.',
  },
]