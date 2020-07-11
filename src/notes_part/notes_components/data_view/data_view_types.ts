export interface IItem {
  id: string;
  date: Date;
  text: string;
}

export interface IForm {
  sendData: any;
  loading: boolean;
  item?: IItem | any;
}

export interface IState {
  form: { loading: boolean; item: boolean | object };
  notes: { loading: boolean; data: []; activeItem: string; sortType?: string };
}

export interface IDataView {
  hours?: number;
  change_data?: boolean;
  data?: any;
  fetchData?: object;
  onChangeItemData?: any;
  activeItem?: string;
}

export interface iAction {
  type: string;
  loading: boolean;
  payload: [] | any;
  sortType: string;
}

export interface iDataViewState {
  data: [];
  loading: boolean;
  sortType: string | object;
}
export interface iDataFiltered {
  hours?: number | null;
  change_data?: boolean;
  data?: IItem[] | any;
  activeItem?: string;
  sortType?: string | object;
  fetchData?: any;
}
