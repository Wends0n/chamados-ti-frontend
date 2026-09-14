import http from '../api/http'
import type { Chamado, ChamadoFiltros, Pagina } from '../types'

export const ChamadoService = {
  async listar(filtros?: ChamadoFiltros): Promise<Pagina<Chamado>> {
    const response = await http.get<Pagina<Chamado>>('/chamados', {
      params: filtros,
    })

    return response.data
  },

  async buscarPorId(id: number): Promise<Chamado> {
    const response = await http.get<Chamado>(`/chamados/${id}`)

    return response.data
  },

  async criar(chamado: Chamado): Promise<Chamado> {
    const response = await http.post<Chamado>('/chamados', {
      titulo: chamado.titulo,
      descricao: chamado.descricao,
      estado: chamado.estado,
      prioridade: chamado.prioridade,
      solicitanteId: chamado.solicitanteId,
      tecnicoId: chamado.tecnicoId ?? null,
      categoriaId: chamado.categoriaId,
    })

    return response.data
  },

  async atualizar(id: number, chamado: Chamado): Promise<Chamado> {
    const response = await http.put<Chamado>(`/chamados/${id}`, {
      titulo: chamado.titulo,
      descricao: chamado.descricao,
      estado: chamado.estado,
      prioridade: chamado.prioridade,
      solicitanteId: chamado.solicitanteId,
      tecnicoId: chamado.tecnicoId ?? null,
      categoriaId: chamado.categoriaId,
    })

    return response.data
  },

  async excluir(id: number): Promise<void> {
    await http.delete(`/chamados/${id}`)
  },

  async excluirTodos(): Promise<void> {
    await http.delete('/chamados')
  },
}