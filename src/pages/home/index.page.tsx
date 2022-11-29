import type { NextPageWithLayout } from '@/share/types/app';
import HomePagePresenter from './presenter';
import { AppShell } from '@/share/components/layouts';

const HomePageContainer: NextPageWithLayout = () => {
  return <HomePagePresenter />;
};

HomePageContainer.getLayout = (page) => <AppShell>{page}</AppShell>;

export default HomePageContainer;
