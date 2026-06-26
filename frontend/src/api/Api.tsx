import axios, { AxiosError, type AxiosRequestConfig } from 'axios'

export interface AxiosRequestOptions<
  D = unknown,
> extends AxiosRequestConfig<D> {
  url: string
}

export async function apiRequest<D = unknown, R = unknown>({
  url,
  method = 'GET',
  data,
  params,
  headers = {},
}: AxiosRequestOptions<D>): Promise<R> {
  try {
    const token = localStorage.getItem('token')

    const isFormData = data instanceof FormData

    const response = await axios.request<R>({
      baseURL: import.meta.env.VITE_SERVER_URL,
      url,
      method,
      data,
      params,
      headers: {
        ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
        ...(headers ?? {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    })

    return response.data
  } catch (error) {
    const err = error as AxiosError

    console.error('API request failed:', err.response?.data || err.message)
    throw err.response?.data ?? err
  }
}
