type ContactMessageType = {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
};

type StatusType = {
  status: 'success' | 'warn' | 'error';
  message: string;
};

export type ProjectType = {
  _id: string | undefined;
  featured: string | Boolean;
  title: string;
  description: string;
  thumbnail: string;
  gallery: string[] | undefined;
  demo_url: string | undefined;
  published: Boolean | string;
  skills: string[];
  process: [{ order: Number; type: string; content: string }] | undefined;
  github_url: string;
  createdAt: string;
  updatedAt: string;
};

export type SkillType = {
  _id: string | undefined;
  featured: string | Boolean;
  name: string;
  category: string;
  description: string;
  projects?: string[] | undefined;
  published: Boolean | string;
  createdAt?: string;
  updatedAt?: string;
};
