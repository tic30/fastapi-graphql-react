import { useQuery, gql } from '@apollo/client';
import reactLogo from './assets/react.svg';
import { Anchor, Button, Flex, Image, Typography } from 'antd';

export const App = () => {
    const { data, loading, refetch } = useQuery(gql`
        query ExampleQuery {
            hello
        }
    `);

    return (
        <Flex
            vertical
            align="center"
            justify="center"
            style={{ height: '100vh' }}
        >
            <Typography.Title level={3}>
                Backend: FastAPI + Strawberry GraphQL
            </Typography.Title>
            <Typography.Title level={3}>
                Frontend: React + Apollo Client + Typescript
            </Typography.Title>
            <Image src={reactLogo} alt="React Logo" width={200} />
            <Anchor
                items={[
                    {
                        key: 'react',
                        href: 'https://react.dev',
                        title: 'React',
                    },
                ]}
            />
            {loading ? (
                <Typography.Paragraph>Loading...</Typography.Paragraph>
            ) : (
                <>
                    <Typography.Paragraph copyable>
                        {data.hello}
                    </Typography.Paragraph>
                    <Button
                        type="primary"
                        onClick={() => {
                            refetch();
                        }}
                    >
                        Primary button with custom global theme token
                    </Button>
                    <Button type="default">
                        Secondary button with custom component token
                    </Button>
                </>
            )}
        </Flex>
    );
};
