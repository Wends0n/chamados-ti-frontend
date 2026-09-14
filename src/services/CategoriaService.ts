import http from '../api/http'
import type { Categoria } from '../types/Categoria'

export const CategoriaService = {

  async listar(): Promise<Categoria[]> {
    const response = await http.get<Categoria[]>('/categorias')

    return response.data
  },

  async criar(categoria: Categoria): Promise<Categoria> {
    const response = await http.post<Categoria>(
      '/categorias',
      categoria
    )

    return response.data
  },

  async excluir(id: number): Promise<void> {
    await http.delete(`/categorias/${id}`)
  },

}