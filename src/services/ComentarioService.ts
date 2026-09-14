import http from '../api/http'
import type { Comentario } from '../types/Comentario'

export const ComentarioService = {

  async listar(): Promise<Comentario[]> {
    const response = await http.get<Comentario[]>('/comentarios')

    return response.data
  },

  async criar(comentario: Comentario): Promise<Comentario> {
    const response = await http.post<Comentario>(
      '/comentarios',
      comentario
    )

    return response.data
  },

  async excluir(id: number): Promise<void> {
    await http.delete(`/comentarios/${id}`)
  },

}