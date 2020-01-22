import * as React from 'react'
import { useState } from 'react'
import * as runes from 'runes'

const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const italicLetters = runes(
  '𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡'
)

export function getItalicText(text: string): string {
  let italicText = ''
  text.split('').forEach(char => {
    const idx = letters.indexOf(char)
    if (idx > -1) {
      italicText += italicLetters[idx]
    } else {
      italicText += char
    }
  })
  return italicText
}

export interface ItalicTextProps {
  className?: string
  onChange?(italicText: string): void
  copyToClipboard?: boolean
}

export const ItalicText: React.FC<ItalicTextProps> = ({
  onChange,
  children,
  className,
}) => {
  const [text, setText] = useState('')
  const italicText = getItalicText(text)

  React.useEffect(() => {
    if (onChange) {
      onChange(italicText)
    }
  }, [italicText])

  function handleValueChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value)
  }

  if (typeof children === 'function') {
    children = children(italicText)
  }

  return (
    <>
      <textarea
        className={className}
        value={text}
        onChange={handleValueChange}
        placeholder="Enter text here"
      ></textarea>
      {children || italicText}
    </>
  )
}
