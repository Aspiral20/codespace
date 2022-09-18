
export type LeftContentType = Array<{
  id: string
  title?: string,
  list?: Array<{
    id: string,
    name?: string
  }>,
  text?: Array<{
    id: string,
    content?: string
  }>
}>
