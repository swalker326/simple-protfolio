import { Container } from "@mui/system";
import React, { FC } from "react";
import { Nav } from "../components/Nav";

interface LayoutProps {
  children?: React.ReactNode;
}

export const DefaultLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Nav />
      <Container>{children}</Container>
    </Container>
  );
};
