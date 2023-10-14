// Picture
export interface IPicture {
  data: IPictureData[];
}

export interface IPictureData {
  id: number;
  attributes: {
    name: string;
    alternativeText: null | string;
    caption: null | string;
    width: number;
    height: number;
    formats: {
      thumbnail: IImageFormat;
      medium: IImageFormat;
      large: IImageFormat;
      small: IImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null | string;
    provider: string;
    provider_metadata: null | any; // You may want to define a more specific type here
    createdAt: string;
    updatedAt: string;
  };
}

export interface IImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null | string;
  width: number;
  height: number;
  size: number;
  url: string;
}

// Meta
export interface IMeta {
  pagination: IPagination;
}

export interface IPagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  }

// Error
export interface IError {
    status: 200 | 201 | 202 | 204 | 400 | 401 | 403 | 404 | 500;
    name: string;
    message: string;
    details: object
}
