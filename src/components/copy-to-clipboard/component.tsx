import * as React from 'react'
import { useState } from 'react'

export interface CopyToClipboardProps {
  textAreaRef: React.MutableRefObject<any>
  onSuccess?(): void
}

export const CopyToClipboard: React.FC<CopyToClipboardProps> = props => {
  const { textAreaRef, onSuccess } = props

  function copyToClipboard(e: React.MouseEvent<HTMLButtonElement>) {
    if (textAreaRef) {
      textAreaRef.current.select()
      document.execCommand('copy')
      if (onSuccess) {
        onSuccess()
      }
    }
  }

  // only render button if the copy command is supported
  if (!document.queryCommandSupported('copy')) {
    return null
  }

  return <button onClick={copyToClipboard}>Copy</button>
}
