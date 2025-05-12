export interface RequestApi<T = any> {
  query: string;
  condition: string;
  sort?: string;
  parameters?: T;
}
