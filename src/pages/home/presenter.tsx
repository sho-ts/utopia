import { Posts } from '@/modules/post/components';

const postsMock = [...Array(30)].map((_, i) => ({
  postId: `dummy-post-${i}`,
  content: 'this-is-dummy-post',
  createdAt: '2022/10/10 10:10',
  author: {
    userId: 'dummy-userId',
    displayId: 'dummy-displayId',
    nickname: 'dummy-nickname',
  },
}));

const HomePagePresenter = () => {
  return <Posts posts={postsMock} />;
};

export default HomePagePresenter;
