export interface ResponseApi<T = any> {
  status: string;
  time: number;
  data: T;
  error?: string;
}
