import type { Comentario } from "./Comentario"
import type { HistoricoChamado } from "./HistoricoChamado"

export interface Chamado {
    id?: number
    titulo: string
    descricao: string
    estado: string
    prioridade: string
    dataAbertura: Date
    dataResolucao ?: Date
    solicitanteId: number
    tecnicoId ?: number
    categoriaId: number
    comentario ?: Comentario[]
    historico ?: HistoricoChamado[]
}