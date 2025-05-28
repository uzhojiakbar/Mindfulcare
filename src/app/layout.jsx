// app/layout.jsx
import GlobalLoading from "@/components/Loading/loading";
import AosClient from "./AosClient";
import StyledComponentsRegistry from "./StyledComponentsRegistry";
import "./globals.css"; // shu joyda ulanadi

export const metadata = {
  title: "Учебно-научный центр остеопатии им. С.В. Новосельцева",
  description:
    "Пройдите обучение остеопатии с практикой на базе клиники Biolife и семинарами от Северо-Западной Академии. Получите диплом государственного образца всего за 6 месяцев.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
      </head>
      <body>
        <AosClient />
        <StyledComponentsRegistry>
          <GlobalLoading>{children}</GlobalLoading>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
