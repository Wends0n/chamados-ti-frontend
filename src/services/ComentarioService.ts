import http from '../api/http'
import type { Comentario, Pagina, PorChamadoFiltros } from '../types'

export const ComentarioService = {
  async listar(filtros?: PorChamadoFiltros): Promise<Pagina<Comentario>> {
    const response = await http.get<Pagina<Comentario>>('/comentarios', {
      params: filtros,
    })

    return response.data
  },

  async buscarPorId(id: number): Promise<Comentario> {
    const response = await http.get<Comentario>(`/comentarios/${id}`)

    return response.data
  },

  async criar(comentario: Comentario): Promise<Comentario> {
    const response = await http.post<Comentario>('/comentarios', {
      mensagem: comentario.mensagem,
      usuarioId: comentario.usuarioId,
      chamadoId: comentario.chamadoId,
    })

    return response.data
  },

  async atualizar(id: number, comentario: Comentario): Promise<Comentario> {
    const response = await http.put<Comentario>(`/comentarios/${id}`, {
      mensagem: comentario.mensagem,
      usuarioId: comentario.usuarioId,
      chamadoId: comentario.chamadoId,
    })

    return response.data
  },

  async excluir(id: number): Promise<void> {
    await http.delete(`/comentarios/${id}`)
  },
}