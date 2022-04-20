import * as React from 'react'
import { getAllContentfulEntries } from '@/api/contentful'
import './style.scss'

export const Posts = () => {
  const [entries, setEntries] = React.useState([])

  React.useEffect(() => {
    ;(async function() {
      const entries = await getAllContentfulEntries()
      setEntries(entries)
    })()
  }, [])

  return (
    <div>
      {entries.map((entry, idx) => (
        <div className="post" key={idx}>
          {entry.text}
        </div>
      ))}
    </div>
  )
}
