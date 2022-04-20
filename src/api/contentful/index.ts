import { createClient, EntryCollection } from 'contentful'

const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN

const client = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
})

interface EntryResponse {
  fields: {
    text: string
  }
  sys: any
}

interface ContentfulEntry {
  text: string
}

export async function getContentfulEntry(id: string): Promise<ContentfulEntry> {
  const entry = (await client.getEntry(id)) as EntryResponse
  // console.log(entry.sys)
  // console.log(entry.fields.text)

  return {
    text: entry.fields.text,
  }
}

export async function getAllContentfulEntries(): Promise<ContentfulEntry[]> {
  const entries = (await client.getEntries()) as EntryCollection<EntryResponse>
  console.log(entries)
  // @ts-ignore
  return entries.items.map(entry => ({ text: entry.fields.text }))
}
