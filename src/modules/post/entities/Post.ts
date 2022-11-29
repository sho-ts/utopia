import type { User } from '@/share/entities/User';

export type Post = {
  postId: string;
  createdAt: string;
  content: string;
  author: User;
};
