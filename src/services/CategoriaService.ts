import http from '../api/http'
import type { Categoria, Pagina, PaginacaoParams } from '../types'

export const CategoriaService = {
  async listar(filtros?: PaginacaoParams): Promise<Pagina<Categoria>> {
    const response = await http.get<Pagina<Categoria>>('/categorias', {
      params: filtros,
    })

    return response.data
  },

  async buscarPorId(id: number): Promise<Categoria> {
    const response = await http.get<Categoria>(`/categorias/${id}`)

    return response.data
  },

  async criar(categoria: Categoria): Promise<Categoria> {
    const response = await http.post<Categoria>('/categorias', {
      nome: categoria.nome,
      descricao: categoria.descricao,
    })

    return response.data
  },

  async atualizar(id: number, categoria: Categoria): Promise<Categoria> {
    const response = await http.put<Categoria>(`/categorias/${id}`, {
      nome: categoria.nome,
      descricao: categoria.descricao,
    })

    return response.data
  },

  async excluir(id: number): Promise<void> {
    await http.delete(`/categorias/${id}`)
  },
}