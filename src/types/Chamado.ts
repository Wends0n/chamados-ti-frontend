import type { Estado, Prioridade } from './enums'

export interface Chamado {
  id?: number
  titulo: string
  descricao: string
  estado: Estado
  prioridade: Prioridade
  solicitanteId: number
  tecnicoId?: number | null
  categoriaId: number
  dataAbertura?: string
  dataResolucao?: string | null
}