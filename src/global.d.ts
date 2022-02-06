type ContactMessageType = {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
};

type StatusType = {
  status: string;
  message: string;
};

export type UserType = {
  _id: string | undefined;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  resetPasswordToken: string | null | undefined;
  resetPasswordExpire: Date | null | undefined;
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

export type SubscriberType = {
  _id: string | undefined;
  first_name?: string | undefined;
  last_name?: string | undefined;
  email: string;
  main_newsletter: Boolean;
  subscribed_to: [{ blog: string; subscribe_date: Date; unsubscribe_date: Date }] | undefined;
};

export type InquiryType = {
  _id: string | undefined;
  first_name: string;
  last_name: string;
  email: string;
  message: string;
};

export type GalleryType = {
  _id: string | undefined;
  title: string;
  media: [{ type: string; url: string; caption: string; width: Number; height: Number }] | undefined;
  description: string;
  thumbnail: string;
  published: Boolean | string;
};

export type BlogType = {
  _id: string | undefined;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  media: string[] | undefined;
  posts: string[];
  published: Boolean | string;
};

export type PostType = {
  _id: string | undefined;
  blogID: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  thumbnail: string;
  media: string | undefined;
  published: Boolean | string;
};

// For Resume
export type EducationType = {
  school: string;
  degree: string;
  major: string;
  concentration: string;
  minor: string;
  start_date: Date;
  current: Boolean;
  end_date: Date | undefined;
};

export type CertificationType = {
  name: string;
  from: string;
  skill: string;
  date: Date;
  cert_url: string;
  detail_url: string;
};

export type ExperienceType = {
  company: string;
  location: string;
  title: string;
  description: string;
  start_date: Date;
  current: Boolean;
  end_date: Date | undefined;
};

export type ResumeType = {
  _id: string | undefined;
  featured: string | Boolean;
  profile_image: string;
  headline: string;
  introduction: string;
  education: Education[];
  certification: CertificationType[];
  experience: ExperienceType[];
  skills: string[];
  projects: string[];
  meta: [
    {
      summary: string;
      file_name: string | undefined;
      file_purpose: string | undefined;
      file_url: string | undefined;
      upload_date: Date | undefined;
      company: string;
      position: string;
      application_url: string;
    }
  ];
  published: boolean;
};
