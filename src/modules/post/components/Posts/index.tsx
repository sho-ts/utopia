import type { Post } from '@/modules/post/entities/Post';
import PostsItem from './Posts.Item';
import { Stack } from '@mantine/core';

type Props = {
  posts: Post[];
};

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <Stack spacing={16}>
      {posts.map((post) => (
        <PostsItem key={post.postId} post={post} />
      ))}
    </Stack>
  );
};

export default Posts;
