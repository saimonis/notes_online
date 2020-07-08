export interface IItem {
  date: Date;
  text: string;
}
export interface IState {
  form: { loading: boolean };
  notes: { loading: boolean; payload: [] };
}

export interface IDataView {
  hours?: number;
  data: any;
  fetchData?: object;
}

export interface IMain {
  loading: boolean;
  fetchData?: object;
}
