
import type { ReactNode } from 'react'
import './Modal.css'

type ModalProps = {
  children: ReactNode
  onClose: () => void
}

function Modal({ children, onClose }: ModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        {children}
      </div>
    </div>
  )
}

export default Modal
