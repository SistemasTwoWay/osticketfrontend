export interface RequestApi<T = any> {
  query: string;
  condition: string;
  parameters?: T;
}
