export interface iItem {
  id: string;
  date: Date;
  edited: boolean;
  text: string;
}

export interface iNotesFormState {
  loading: boolean;
  item: boolean | object;
}

export interface iAction {
  type: string;
  loading: boolean;
  payload: object;
}
