import http from '../api/http'
import type { HistoricoChamado } from '../types/HistoricoChamado'

export const HistoricoChamadoService = {

  async listar(): Promise<HistoricoChamado[]> {
    const response = await http.get<HistoricoChamado[]>('/historico-chamados')

    return response.data
  },

  async criar(historicoChamado: HistoricoChamado): Promise<HistoricoChamado> {
    const response = await http.post<HistoricoChamado>(
      '/historico-chamados',
      historicoChamado
    )

    return response.data
  },

  async excluir(id: number): Promise<void> {
    await http.delete(`/historico-chamados/${id}`)
  },

}