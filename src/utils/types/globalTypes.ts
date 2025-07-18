export type TSkillAndTool = {
  title: string;
  percent: number;
};

export type TService = {
  _id: string;
  title: string;
  image: string;
  shortDescription: string;
  description: string;
  skillAndTools: TSkillAndTool[];
  order: number;
};

export type TPortfolio = {
  _id: string;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
  link: string;
};

export type TBlog = {
  _id: string;
  title: string;
  image: string;
  description: string;
  category: string;
  author: string;
  date: Date;
};

export type TTestimonial = {
  id: string;
  image: string;
  desc: string;
  name: string;
  position: string;
  rating: number;
};
export type TFun = {
  number: number;
  title: string;
  botText: string;
};

export type TEducation = {
  year: string;
  institute: string;
  topic: string;
};

export type TAdmin = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  isBlocked: boolean;
  phone: string;
  image: string;
};
