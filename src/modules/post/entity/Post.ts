import type { User } from '@/share/entity/User';

export type Post = {
  postId: string;
  createdAt: string;
  content: string;
  author: User;
};
