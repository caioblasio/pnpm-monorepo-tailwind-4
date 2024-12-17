import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Text } from "@org/ui";

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
      <Text>Click me :)</Text>
    </div>
  );
}
