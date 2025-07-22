import type { Meta, StoryObj } from '@storybook/react-vite';
import { gql } from '@apollo/client';
import { App } from '../App';

const meta = {
    component: App,
    parameters: {
        apolloClient: {
            mocks: [
                {
                    request: {
                        query: gql`
                            query ExampleQuery {
                                hello
                            }
                        `,
                    },
                    result: {
                        data: {
                            hello: 'Hello World',
                        },
                    },
                },
            ],
        },
    },
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    // play: async ({ canvasElement }) => {
    //   const canvas = within(canvasElement);
    //   const loginButton = canvas.getByRole('button', { name: /Log in/i });
    //   await expect(loginButton).toBeInTheDocument();
    //   await userEvent.click(loginButton);
    //   await expect(loginButton).not.toBeInTheDocument();
    //   const logoutButton = canvas.getByRole('button', { name: /Log out/i });
    //   await expect(logoutButton).toBeInTheDocument();
    // },
};
