import http from '../api/http'
import type { Usuario } from '../types/Usuario'

export const UsuarioService = {

  async listar(): Promise<Usuario[]> {
    const response = await http.get<Usuario[]>('/usuarios')

    return response.data
  },

  async criar(usuario: Usuario): Promise<Usuario> {
    const response = await http.post<Usuario>(
      '/usuarios',
      usuario
    )

    return response.data
  },

  async excluir(id: number): Promise<void> {
    await http.delete(`/usuarios/${id}`)
  },

}