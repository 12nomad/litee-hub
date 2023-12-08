interface IGetUserById {
  clerkId: string;
}

interface ICreateUser {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  picture: string;
}

interface IUpdateUser {
  clerkId: string;
  data: {
    email: string;
    picture: string;
    name: string;
    username: string;
  };
  path: string;
}

interface IDeleteUser {
  clerkId: string;
}

interface IGetQuestions {
  page?: number;
  pageSize?: number;
  searchQuery?: string;
  filter?: string;
}

interface ICreateQuestion {
  title: string;
  content: string;
  tags: string[];
  author: string;
  path: string;
}
