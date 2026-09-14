import http from '../api/http'
import type { Usuario, Pagina, PaginacaoParams } from '../types'

export const UsuarioService = {
  async listar(filtros?: PaginacaoParams): Promise<Pagina<Usuario>> {
    const response = await http.get<Pagina<Usuario>>('/usuarios', {
      params: filtros,
    })

    return response.data
  },

  async buscarPorId(id: number): Promise<Usuario> {
    const response = await http.get<Usuario>(`/usuarios/${id}`)

    return response.data
  },

  async criar(usuario: Usuario): Promise<Usuario> {
    const response = await http.post<Usuario>('/usuarios', {
      nome: usuario.nome,
      email: usuario.email,
      tipoUsuario: usuario.tipoUsuario,
    })

    return response.data
  },

  async atualizar(id: number, usuario: Usuario): Promise<Usuario> {
    const response = await http.put<Usuario>(`/usuarios/${id}`, {
      nome: usuario.nome,
      email: usuario.email,
      tipoUsuario: usuario.tipoUsuario,
    })

    return response.data
  },

  async excluir(id: number): Promise<void> {
    await http.delete(`/usuarios/${id}`)
  },
}