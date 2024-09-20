export interface NewsType {
  id: string
  thumbnail: string
  title: string
  description: string
  content: string | TrustedHTML
  visibility: 0 | 1
  created_at: string
  updated_at: string
}
