import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Button } from "@org/ui";

export function meta(args: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="grid w-full place-items-center">
      <Welcome />
      <Button>Click me :)</Button>
    </div>
  );
}
