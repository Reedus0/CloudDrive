export interface IElement {
  name: string,
  type: IElementTypes
}

export enum IElementTypes {
  FILE = 'Файл',
  FOLDER = 'Папка'
}