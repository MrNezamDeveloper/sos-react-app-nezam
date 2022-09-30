interface ICategory {
  name?: string;
}

interface IResult {
  id: string;
  category: ICategory;
  description: string;
  title: string;
}
interface IData {
    results: IResult[];
}

export interface INews {
  data: IData;
}
