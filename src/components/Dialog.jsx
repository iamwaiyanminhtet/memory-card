import '../styles/dialog.css'

const WonDialog = ({closeModal, bestScore}) => {
  return (
    <div className='dialog-container'>
      <dialog className='dialog' open>
        <h1>Congratulations! You Won. 🥳</h1>
        <p>Your Best Score is  {bestScore}</p>
        <div>
            <button className='dialog-btn' onClick={() => closeModal()}>Close</button>
        </div>
      </dialog>
    </div>
  )
}

const LostDialog = ({closeModal, bestScore}) => {
    return (
        <div  className='dialog-container'>
        <dialog className='dialog' open>
            <h1>You&apos;ve clicked the same card twice 🥺</h1>
            <p>Your Best Score is  {bestScore}</p>
            <div>
                <button className='dialog-btn try-again' onClick={() => closeModal()}>Try Again</button>
            </div>
        </dialog>
      </div>
    )
  }

export {WonDialog, LostDialog};