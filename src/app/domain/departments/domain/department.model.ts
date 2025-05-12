export interface DepartmentRoot {
  status: string;
  total: number;
  departments: Department[];
}

export interface Department {
  department_id: number;
  name: string;
  created: string;
}
