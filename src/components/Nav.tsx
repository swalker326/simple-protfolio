import { Container } from "@mui/material";
import { AppLink } from "./routerComponents/AppLink";

export const Nav = () => {
  return (
    <Container>
      <ul
        style={{
          //weirdness with using ul
          paddingInlineStart: 0,
          marginLeft: 0,
          listStyle: "none",
          display: "flex"
        }}
      >
        <AppLink to="/">home</AppLink>
        <AppLink to="/blog">blog</AppLink>
        <AppLink to="/about">about</AppLink>
      </ul>
    </Container>
  );
};
