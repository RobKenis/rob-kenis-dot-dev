import { Header } from "../components/Header";
import React from "react";

type User = {
  name: string;
};

type WorkshopLayoutProps = {
  children: React.ReactNode;
};

export default function WorkshopLayout({ children }: WorkshopLayoutProps) {
  const [user, setUser] = React.useState<User>();

  return (
    <>
      <Header
        user={user}
        onLogin={() => setUser({ name: "Jane Doe" })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "Jane Doe" })}
      />
      <main>{children}</main>
      {/*<Footer />*/}
    </>
  );
}
