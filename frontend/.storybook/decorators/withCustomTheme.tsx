import { CustomTheme } from '../../src/CustomTheme';

export const withCustomTheme = (Story: any) => (
    <CustomTheme>
        <Story />
    </CustomTheme>
);
