export interface IItem {
  id: string;
  date: Date;
  text: string;
}

export interface IForm {
  sendData: any;
  loading: boolean;
  item: boolean | object;
}

export interface IState {
  form: { loading: boolean; item: boolean | object };
  notes: { loading: boolean; data: [] };
}

export interface IDataView {
  hours?: number;
  change_data?: boolean;
  data?: any;
  fetchData?: object;
  onChangeItemData?: any;
}

export interface IMain {
  loading: boolean;
  fetchData?: object;
}
