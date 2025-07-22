import type { Preview } from '@storybook/react';
import { withCustomTheme } from './decorators/withCustomTheme';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [withCustomTheme],
};

export default preview;
