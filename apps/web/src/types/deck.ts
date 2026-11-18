/**
 * Represents a deck of flashcards.
 *
 * A deck groups flashcards under a common title and category,
 * while tracking its revision progress.
 */
export type Deck = {
  /** Unique identifier of the deck. */
  id: number

  /** Name displayed for the deck. */
  title: string

  /** Category used to classify the deck. */
  category: string

  /** Total number of flashcards in the deck. */
  cards: number

  /** Revision progress expressed as a percentage (0-100). */
  progress: number

  /** Number of flashcards currently due for revision. */
  due: number

  /** Icon associated with the deck (e.g. emoji or icon name). */
  icon: string

  /** Color associated with the deck's visual representation. */
  color: string
}