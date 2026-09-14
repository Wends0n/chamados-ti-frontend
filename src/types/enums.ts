/* eslint-disable @typescript-eslint/no-redeclare -- Constante e tipo compartilham o nome intencionalmente. */
export const Estado = {
  FINALIZADO: 'FINALIZADO',
  PROCESSANDO: 'PROCESSANDO',
  ABERTO: 'ABERTO',
} as const

export type Estado = typeof Estado[keyof typeof Estado]

export const Prioridade = {
  ALTA: 'ALTA',
  MEDIA: 'MEDIA',
  BAIXA: 'BAIXA',
} as const

export type Prioridade = typeof Prioridade[keyof typeof Prioridade]

export const TipoEvento = {
  CRIACAO: 'CRIACAO',
  ALTERACAO: 'ALTERACAO',
  ATRIBUICAO: 'ATRIBUICAO',
  COMENTARIO: 'COMENTARIO',
  RESOLUCAO: 'RESOLUCAO',
  REABERTURA: 'REABERTURA',
} as const

export type TipoEvento = typeof TipoEvento[keyof typeof TipoEvento]

export const TipoUsuario = {
  SOLICITANTE: 'SOLICITANTE',
  TECNICO: 'TECNICO',
  ADMIN: 'ADMIN',
} as const

export type TipoUsuario = typeof TipoUsuario[keyof typeof TipoUsuario]
