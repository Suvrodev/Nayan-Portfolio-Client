export type TServcie = {
  _id: number;
  title: string;
  image: string;
  shortDescription: string;
  description: string;
  order: number;
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
  isBlocked: string;
  phone: string;
  image: string;
};
