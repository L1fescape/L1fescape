import * as React from 'react'
import { ItalicText, getItalicText } from 'l1/components'
import { CopyToClipboard } from 'l1/components/copy-to-clipboard'
import './styles.scss'

export const Italics = () => {
  const copyRef = React.useRef(null)
  const [showSuccessMsg, setShowSuccessMsg] = React.useState(false)
  const onCopySuccess = () => setShowSuccessMsg(true)

  return (
    <div className="italics">
      <p key="italics-description">
        Convert text into {getItalicText('unicode italic text')}. This is useful
        for platforms that do not support italic styling, such as Instagram and
        Twitter.
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
