import * as React from 'react'

export interface CopyToClipboardProps {
  textAreaRef: React.MutableRefObject<any>
  buttonText?: string
  className?: string
  onSuccess?(): void
}

export const CopyToClipboard: React.FC<CopyToClipboardProps> = props => {
  const { textAreaRef, onSuccess, className } = props

  function copyToClipboard(e: React.MouseEvent<HTMLButtonElement>) {
    if (textAreaRef) {
      textAreaRef.current.select()
      document.execCommand('copy')
      if (onSuccess) {
        onSuccess()
      }
    }
  }

  // only render the button if the copy command is supported
  if (
    !document.queryCommandSupported ||
    !document.queryCommandSupported('copy')
  ) {
    return null
  }

  return (
    <button className={className} onClick={copyToClipboard}>
      {props.buttonText || 'Copy to Clipboard'}
    </button>
  )
}
