import type { TipoUsuario } from './enums'

export interface Usuario {
  id?: number
  nome: string
  email: string
  tipoUsuario: TipoUsuario
}