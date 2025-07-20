import type { PropsWithChildren } from "react";
import { ConfigProvider } from "antd";

export const CustomTheme = ({ children }: PropsWithChildren) => (
  <ConfigProvider
    theme={{
      hashed: false,
      token: {
        colorPrimary: "#00b96b",
      },
      components: { Button: { colorBorder: "red" } },
    }}
  >
    {children}
  </ConfigProvider>
);
