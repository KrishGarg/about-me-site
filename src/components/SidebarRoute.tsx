import { Route } from "@/lib/sidebarRoutes";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
  route: Route;
}

const SidebarRoute: FC<Props> = ({ route: { icon: Icon, name, path } }) => {
  const { pathname } = useRouter();
  return (
    <Link href={path}>
      <a
        className={`hover:bg-soft-black-450 focus-visible:bg-soft-black-450 transition-all rounded-md w-full ${
          pathname === path && "bg-soft-black-500"
        }`}
      >
        <div className="flex w-full justify-center gap-4 items-center my-2 z-20 ">
          <Icon size="2em" />
          <span>{name}</span>
        </div>
      </a>
    </Link>
  );
};

export default SidebarRoute;
