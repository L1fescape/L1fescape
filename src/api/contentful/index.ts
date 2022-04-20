import * as contentful from 'contentful'

const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN

const client = contentful.createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
})

interface ContentfulEntryResponse {
  fields: {
    text: string
  }
  sys: any
}

interface ContentfulEntry {
  text: string
}

export async function contentfulGetEntry(id: string): Promise<ContentfulEntry> {
  const entry = (await client.getEntry(id)) as ContentfulEntryResponse
  // console.log(entry.sys)
  // console.log(entry.fields.text)

  return {
    text: entry.fields.text,
  }
}
