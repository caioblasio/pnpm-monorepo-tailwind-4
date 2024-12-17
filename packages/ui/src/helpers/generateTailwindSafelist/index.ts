import { mapPropsToClasses } from "../mapPropsToClasses";
import { type ExceptionMap } from "../../types";
// shared tokens
import { generateSpacingSafelist } from "../../props/spacing.props";
import { generateFlexItemSafelist } from "../../props/flexItem.props";
import { generateDimensionSafelist } from "../../props/dimension.props";
import { generatePositionSafelist } from "../../props/position.props";
import { generateOverflowSafelist } from "../../props/overflow.props";
import { generateGridItemSafelist } from "../../props/gridItem.props";
import { generateGapSafelist } from "../../props/gap.props";
// component tokens
import { generateBoxSafelist } from "../../Box/box.props";

const responsiveBreakpoints = ["sm", "md", "lg", "xl", "2xl"];

type Props = Record<string, ReadonlyArray<string | number>>;

export const generateSafelist = <T extends Props>({
  props,
  prefixMap,
  exceptionsMap,
}: {
  props: T;
  prefixMap: Record<keyof T, string>;
  exceptionsMap?: ExceptionMap;
}): string[] => {
  return Object.entries(props).flatMap(([prop, tokens]) => {
    const prefix = prefixMap[prop as keyof T];

    return tokens.flatMap((value) => {
      // Map base class
      const baseClass = mapPropsToClasses({
        value,
        prefix,
        exceptionsMap,
      });

      // Map responsive breakpoints
      const responsiveClasses = responsiveBreakpoints.map((bp) =>
        mapPropsToClasses({
          value: { [bp]: value },
          prefix,
          exceptionsMap,
        })
      );

      return [baseClass, ...responsiveClasses].filter(Boolean) as string[];
    });
  });
};

export const generateTailwindSafelist = () => [
  // shared tokens
  ...generateSpacingSafelist(),
  ...generateDimensionSafelist(),
  ...generatePositionSafelist(),
  ...generateOverflowSafelist(),
  ...generateFlexItemSafelist(),
  ...generateGridItemSafelist(),
  ...generateGapSafelist(),
  // component tokens
  ...generateBoxSafelist(),
];
