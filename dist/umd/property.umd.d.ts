/*!
 * @tenoxui/property v1.4.0.tejox (https://github.com/tenoxui/css)
 * Copyright (c)2024 NOuSantx
 * Licensed under the MIT License (https://github.com/tenoxui/css/blob/main/LICENSE)
 */
declare function define(dependencies: any[], factory: () => any): void;
declare namespace define {
    const amd: boolean;
}
type CSSProperty = keyof CSSStyleDeclaration;
type CSSPropertyOrVariable = CSSProperty | `--${string}`;
type GetCSSProperty = CSSPropertyOrVariable | CSSPropertyOrVariable[];
type PropertyMap = {
    [type: string]: GetCSSProperty | {
        property?: GetCSSProperty;
        value?: string;
    };
};
