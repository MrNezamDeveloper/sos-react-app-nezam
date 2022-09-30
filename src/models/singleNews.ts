interface ICategory {
  name: string;
}
interface IUser {
  full_name: string;
}

export interface ISingleNews {
  category: ICategory;
  description: string;
  id: string;
  title: string;
  user: IUser;
}
