import { cx } from "class-variance-authority";
import { mapPropsToClasses } from "../helpers/mapPropsToClasses";
import { type ResponsiveKeys, type ResponsiveProperty } from "../types";
import { generateSafelist } from "../helpers/generateTailwindSafelist";

const tokens = [32, 40, 48] as const;

const gapTokens = {
  gap: tokens,
  gapX: tokens,
  gapY: tokens,
};

const gapPrefixMap = {
  gap: "gap",
  gapX: "gap-x",
  gapY: "gap-y",
};

export type GapProps = {
  [K in ResponsiveKeys<typeof gapTokens>]?: ResponsiveProperty<
    typeof gapTokens,
    K
  >;
};

export const getGapClasses = (spacingValues: GapProps) => {
  const { gap, gapX, gapY } = spacingValues;

  return cx(
    mapPropsToClasses({
      value: gap,
      prefix: gapPrefixMap.gap,
    }),
    mapPropsToClasses({
      value: gapX,
      prefix: gapPrefixMap.gapX,
    }),
    mapPropsToClasses({
      value: gapY,
      prefix: gapPrefixMap.gapY,
    })
  );
};

export const generateGapSafelist = () =>
  generateSafelist({
    props: gapTokens,
    prefixMap: gapPrefixMap,
  });
