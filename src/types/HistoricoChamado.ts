import type { TipoEvento } from './enums'

export interface HistoricoChamado {
  id?: number
  descricao: string
  tipoEvento: TipoEvento
  usuarioId: number
  chamadoId: number
  dataHora?: string
}