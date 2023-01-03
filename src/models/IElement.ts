export interface IElement {
  name: string,
  owner: string,
  lastUpdated: string,
  size: string,
  public: boolean,
  type: IElementTypes
}

export enum IElementTypes {
  FILE = 'Файл',
  FOLDER = 'Папка',
  ZIP = 'Архив'
}