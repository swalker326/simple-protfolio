import { FC } from "react";
import { Link as RouterLink, LinkProps, useLocation } from "react-router-dom";
import { Link as MUILink } from "@mui/material";

export const AppLink: FC<LinkProps> = ({ to, children, ...rest }) => {
  const { pathname } = useLocation();
  const isSelected = pathname === to;
  return (
    <li style={{ margin: "0 12px" }}>
      <MUILink
        component={RouterLink}
        sx={{ fontWeight: isSelected ? "900" : "100", textDecoration: "none" }}
        variant={"h5"}
        to={to}
        {...rest}
      >
        {children}
      </MUILink>
    </li>
  );
};
