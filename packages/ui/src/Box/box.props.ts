import { cx } from "class-variance-authority";
import { mapPropsToClasses } from "../helpers/mapPropsToClasses";
import { type ResponsiveKeys, type ResponsiveProperty } from "../types";
import { generateSafelist } from "../helpers/generateTailwindSafelist";

const boxTokens = {
  display: ["none", "inline", "inline-block", "block"] as const,
};

const boxPrefixMap = {
  display: "",
} as const;

// Define size props
export type BoxProps = {
  [K in ResponsiveKeys<typeof boxTokens>]?: ResponsiveProperty<
    typeof boxTokens,
    K
  >;
};

export const getBoxClasses = (boxProps: BoxProps) => {
  const { display } = boxProps;

  return cx(
    mapPropsToClasses({ value: display, prefix: boxPrefixMap.display })
  );
};

export const generateBoxSafelist = () =>
  generateSafelist({
    props: boxTokens,
    prefixMap: boxPrefixMap,
  });
