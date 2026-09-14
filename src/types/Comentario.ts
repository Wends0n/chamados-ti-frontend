export interface Comentario {
  id?: number
  mensagem: string
  usuarioId: number
  chamadoId: number
  dataHora?: string
}