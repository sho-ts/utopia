import type { Post } from '@/modules/post/entities/Post';
import { Text, Paper, Avatar, Flex, Stack, ActionIcon } from '@mantine/core';
import { BsReply } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';

type Props = {
  post: Post;
};

const PostsItem: React.FC<Props> = ({ post: { postId, author, content, createdAt } }) => {
  return (
    <Paper shadow='xs' p='sm'>
      <Stack spacing={8}>
        <Flex gap={16}>
          <Avatar src={author.avatar} size={48} radius={'xl'} />
          <Stack spacing={4}>
            <Text fz='xs'>{createdAt}</Text>
            <Text>{content}</Text>
          </Stack>
        </Flex>
        <Flex gap={24} justify='flex-end'>
          <ActionIcon>
            <BsReply />
          </ActionIcon>
          <ActionIcon>
            <AiOutlineLike />
          </ActionIcon>
        </Flex>
      </Stack>
    </Paper>
  );
};

export default PostsItem;
