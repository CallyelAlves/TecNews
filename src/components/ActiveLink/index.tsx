import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import { ReactElement, cloneElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({
  children,
  activeClassName,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();
  let path = asPath.split("/");

  let className = asPath === rest.href ? activeClassName : "";

  if (path[2] !== undefined && rest.href === "/posts") {
    className = activeClassName;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        className,
      })}
    </Link>
  );
}
