import * as React from 'react'

export interface CopyToClipboardProps {
  textAreaRef: React.MutableRefObject<any>
  buttonText?: string
  className?: string
  onSuccess?(): void
}

function copyToClipboard(
  ref: React.MutableRefObject<any>,
  callback?: () => void
): Error | void {
  if (!ref) {
    return new Error('Input ref undefined')
  }

  ref.current.select()
  document.execCommand('copy')
  if (callback) {
    callback()
  }
}

export const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  className,
  buttonText,
  textAreaRef,
  onSuccess,
}) => {
  // only render the button if the copy command is supported
  if (
    !document.queryCommandSupported ||
    !document.queryCommandSupported('copy')
  ) {
    return null
  }

  return (
    <button
      className={className}
      onClick={e => copyToClipboard(textAreaRef, onSuccess)}
    >
      {buttonText || 'Copy to Clipboard'}
    </button>
  )
}
