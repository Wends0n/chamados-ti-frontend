/** Spring Pageable usa páginas a partir de zero. Ex.: sort: ['nome,asc', 'id,desc']. */
export interface PaginacaoParams {
  page?: number
  size?: number
  sort?: string | string[]
}

export interface Pagina<T> {
  content: T[]
  totalElements: number
  totalPages: number
  number: number
  size: number
  numberOfElements: number
  first: boolean
  last: boolean
  empty: boolean
}

export interface ChamadoFiltros extends PaginacaoParams {
  titulo?: string
}

export interface PorChamadoFiltros extends PaginacaoParams {
  chamadoId?: number
}

export interface RequestOptions {
  signal?: AbortSignal
}
