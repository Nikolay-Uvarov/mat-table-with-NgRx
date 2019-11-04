export interface CustomerParams {
  filter: string;
  sortDirection: string;
  sortField: 'asc' | 'desc'| '';
  pageIndex: number;
  pageSize: number;
}
