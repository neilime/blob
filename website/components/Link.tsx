import MuiLink, { type LinkProps as MuiLinkProps } from "@mui/material/Link";
import NextLink from "next/link";

export default function Link(props: MuiLinkProps) {
  return <MuiLink component={NextLink} {...props} />;
}
