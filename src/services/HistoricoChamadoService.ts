import http from '../api/http'
import type {
  HistoricoChamado,
  Pagina,
  PorChamadoFiltros,
} from '../types'

export const HistoricoChamadoService = {
  async listar(
    filtros?: PorChamadoFiltros,
  ): Promise<Pagina<HistoricoChamado>> {
    const response = await http.get<Pagina<HistoricoChamado>>(
      '/historicos-chamados',
      {
        params: filtros,
      },
    )

    return response.data
  },

  async buscarPorId(id: number): Promise<HistoricoChamado> {
    const response = await http.get<HistoricoChamado>(
      `/historicos-chamados/${id}`,
    )

    return response.data
  },

  async criar(historico: HistoricoChamado): Promise<HistoricoChamado> {
    const response = await http.post<HistoricoChamado>(
      '/historicos-chamados',
      {
        descricao: historico.descricao,
        tipoEvento: historico.tipoEvento,
        usuarioId: historico.usuarioId,
        chamadoId: historico.chamadoId,
      },
    )

    return response.data
  },

  async atualizar(
    id: number,
    historico: HistoricoChamado,
  ): Promise<HistoricoChamado> {
    const response = await http.put<HistoricoChamado>(
      `/historicos-chamados/${id}`,
      {
        descricao: historico.descricao,
        tipoEvento: historico.tipoEvento,
        usuarioId: historico.usuarioId,
        chamadoId: historico.chamadoId,
      },
    )

    return response.data
  },

  async excluir(id: number): Promise<void> {
    await http.delete(`/historicos-chamados/${id}`)
  },
}