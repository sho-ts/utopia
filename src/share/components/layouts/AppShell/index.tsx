import { AppShell as BaseAppShell, Navbar, Header, Text, Flex, ActionIcon, MediaQuery } from '@mantine/core';
import { AiOutlineHome, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import { useMediaQuery } from '@mantine/hooks';

type Props = {
  children?: React.ReactNode;
};

const AppShell: React.FC<Props> = ({ children }) => {
  const matches = useMediaQuery('(max-width: 767px)');

  return (
    <BaseAppShell
      navbarOffsetBreakpoint={768}
      styles={{
        main: {
          '@media screen and (max-width: 767px)': {
            paddingBottom: 80,
          },
        },
      }}
      header={
        <Header sx={{ display: 'flex', alignItems: 'center' }} height={60} px={'xs'}>
          <Text fz='xl' fw='bold'>
            Utopia
          </Text>
        </Header>
      }
      navbar={
        <Navbar width={{ base: 250, lg: 300 }} p={'md'} hidden={matches}>
          <Navbar.Section>hogehoge</Navbar.Section>
        </Navbar>
      }
      footer={
        <MediaQuery query='(min-width: 768px)' styles={{ display: 'none' }}>
          <Flex
            align={'center'}
            justify={'space-around'}
            sx={{
              position: 'fixed',
              zIndex: 500,
              background: '#fff',
              bottom: 0,
              left: 0,
              width: '100%',
              height: 60,
              borderTop: '1px solid #ddd',
            }}
            px={'lg'}
          >
            <ActionIcon size={60}>
              <AiOutlineHome size={24} />
            </ActionIcon>
            <ActionIcon size={60}>
              <AiOutlineSearch size={24} />
            </ActionIcon>
            <ActionIcon size={60}>
              <AiOutlineUser size={24} />
            </ActionIcon>
          </Flex>
        </MediaQuery>
      }
    >
      {children}
    </BaseAppShell>
  );
};

export default AppShell;
