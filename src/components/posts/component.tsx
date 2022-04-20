import * as React from 'react'
import { contentfulGetEntry } from '@/api/contentful'

export const Posts = () => {
  const [entries, setEntries] = React.useState([])

  React.useEffect(() => {
    ;(async function() {
      const entry = await contentfulGetEntry('6vtwCqrU9QO9C2N9DHzi87')
      setEntries([entry])
    })()
  }, [])

  return (
    <div>
      {entries.map((entry, idx) => (
        <div key={idx}>{entry.text}</div>
      ))}
    </div>
  )
}
