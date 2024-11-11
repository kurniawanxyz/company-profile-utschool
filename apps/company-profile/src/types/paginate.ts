export interface ResponseJson<T> {
    meta: Meta
    data: T
  }
  
  export interface Meta {
    success: boolean
    message: string
    status: number
  }
  
  export interface Paginate<T> {
    current_page: number
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    links: Link[]
    next_page_url: string
    path: string
    per_page: number
    prev_page_url: string|null
    to: number
    total: number
    data: T
  }
  

  
  export interface Link {
    url?: string
    label: string
    active: boolean
  }
  