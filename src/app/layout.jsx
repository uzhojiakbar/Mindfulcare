// app/layout.jsx
import GlobalLoading from "@/components/Loading/loading";
import AosClient from "./AosClient";
import StyledComponentsRegistry from "./StyledComponentsRegistry";
import "./globals.css"; // shu joyda ulanadi

export const metadata = {
  title: "My App",
  description: "Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AosClient />
        <StyledComponentsRegistry>
          <GlobalLoading>{children}</GlobalLoading>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
