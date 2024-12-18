import type { Route } from "./+types/home";
import { Text } from "@org/ui";
import { Box } from "@org/ui";

export function meta(args: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="grid w-full place-items-center">
      <Box pt={20}>
        <Text>Click me :)</Text>
      </Box>
    </div>
  );
}
