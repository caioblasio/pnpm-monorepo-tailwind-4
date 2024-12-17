import { cx } from "class-variance-authority";
import { mapPropsToClasses } from "../helpers/mapPropsToClasses";
import { type ResponsiveKeys, type ResponsiveProperty } from "../types";
import { generateSafelist } from "../helpers/generateTailwindSafelist";

const tokens = [0, 20, 24, 40, 48, 64, 80, 96, 112] as const;

const spacingTokens = {
  p: tokens,
  px: tokens,
  py: tokens,
  pt: tokens,
  pr: tokens,
  pb: tokens,
  pl: tokens,
};

const spacingPrefixMap = {
  p: "p",
  px: "px",
  py: "py",
  pt: "pt",
  pr: "pr",
  pb: "pb",
  pl: "pl",
};

export type SpacingProps = {
  [K in ResponsiveKeys<typeof spacingTokens>]?: ResponsiveProperty<
    typeof spacingTokens,
    K
  >;
};

export const getSpacingClasses = (spacingValues: SpacingProps) => {
  const { p, px, py, pt, pr, pb, pl } = spacingValues;

  return cx(
    mapPropsToClasses({
      value: p,
      prefix: spacingPrefixMap.p,
    }),
    mapPropsToClasses({
      value: px,
      prefix: spacingPrefixMap.px,
    }),
    mapPropsToClasses({
      value: py,
      prefix: spacingPrefixMap.py,
    }),
    mapPropsToClasses({
      value: pt,
      prefix: spacingPrefixMap.pt,
    }),
    mapPropsToClasses({
      value: pr,
      prefix: spacingPrefixMap.pr,
    }),
    mapPropsToClasses({
      value: pb,
      prefix: spacingPrefixMap.pb,
    }),
    mapPropsToClasses({
      value: pl,
      prefix: spacingPrefixMap.pl,
    })
  );
};

export const generateSpacingSafelist = () =>
  generateSafelist({
    props: spacingTokens,
    prefixMap: spacingPrefixMap,
  });
