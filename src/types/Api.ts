export interface ApiErrorResponse {
  timestamp: string
  status: number
  erro: string
  campos?: Record<string, string>
}
