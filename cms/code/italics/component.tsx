import * as React from 'react'
import { ItalicText, getItalicText } from 'ak.gg/components'
import { CopyToClipboard } from 'ak.gg/components/copy-to-clipboard'
import './styles.scss'

export const Italics = () => {
  const copyRef = React.useRef(null)
  const [showSuccessMsg, setShowSuccessMsg] = React.useState(false)
  function onCopySuccess() {
    console.log('success')
    setShowSuccessMsg(true)
  }

  return (
    <div className="italics">
      <p key="italics-description">
        Tool for converting normal text into{' '}
        {getItalicText('unicode italic text')}. This is useful for platforms
        that do not support italic styling, such as Instagram and Twitter.
      </p>
      <ItalicText
        key="italics-generator"
        className="italics-textarea"
        onChange={() => setShowSuccessMsg(false)}
      >
        {(italicText: string) =>
          italicText && (
            <>
              <textarea
                ref={copyRef}
                className="italics-result"
                value={italicText}
                onChange={() => {}}
              />
              <div className="italics-copy">
                <CopyToClipboard
                  textAreaRef={copyRef}
                  buttonText={showSuccessMsg && 'Copied to Clipboard!'}
                  onSuccess={onCopySuccess}
                />
              </div>
            </>
          )
        }
      </ItalicText>
    </div>
  )
}
