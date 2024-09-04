
type CSSProperty = keyof CSSStyleDeclaration;
type CSSPropertyOrVariable = CSSProperty | `--${string}`;
type GetCSSProperty = CSSPropertyOrVariable | CSSPropertyOrVariable[];
type PropertyMap = {
  [type: string]:
    | GetCSSProperty
    | {
        property?: GetCSSProperty;
        value?: string;
      };
};
