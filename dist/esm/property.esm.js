/*!
 * @tenoxui/property v1.3.0 (https://github.com/tenoxui/css)
 * Copyright (c) 2024 NOuSantx
 * Licensed under the MIT License (https://github.com/tenoxui/css/blob/main/LICENSE)
 */
const property = {
    // Mapping type and its Property
    p: "padding",
    pt: "paddingTop",
    pb: "paddingBottom",
    pr: "paddingRight",
    pl: "paddingLeft",
    py: ["paddingTop", "paddingBottom"],
    px: ["paddingLeft", "paddingRight"],
    // Margin
    m: "margin",
    mt: "marginTop",
    mb: "marginBottom",
    mr: "marginRight",
    ml: "marginLeft",
    my: ["marginTop", "marginBottom"],
    mx: ["marginLeft", "marginRight"],
    // Text and font
    fs: "fontSize",
    fw: "fontWeight",
    lh: "lineHeight",
    ls: "letterSpacing",
    ta: "textAlign",
    tc: "color",
    td: "textDecoration",
    ti: "textIndent",
    tn: "textTransform",
    tw: "textWrap",
    ws: "wordSpacing",
    family: "fontFamily",
    "font-s": "fontStyle",
    "white-space": "whiteSpace",
    // Positioning
    position: "position",
    z: "zIndex",
    t: "top",
    b: "bottom",
    r: "right",
    l: "left",
    // Display
    d: "display",
    // Width and Height
    w: "width",
    "w-mx": "maxWidth",
    "w-mn": "minWidth",
    h: "height",
    "h-mx": "maxHeight",
    "h-mn": "minHeight",
    // Background
    bg: "background",
    "bg-color": "backgroundColor",
    "bg-image": "backgroundImage",
    "bg-attach": "backgroundAttachment",
    "bg-origin": "backgroundOrigin",
    "bg-size": "backgroundSize",
    "bg-clip": "backgroundClip",
    "bg-repeat": "backgroundRepeat",
    "bg-loc": "backgroundPosition",
    // Flex
    fd: "flexDirection",
    flex: "flex",
    "flex-wrap": "flexWrap",
    "flex-basis": "flexBasis",
    "flex-grow": "flexGrow",
    "flex-shrink": "flexShrink",
    order: "order",
    // Gap
    gap: "gap",
    // Align
    ac: "alignContent",
    ai: "align-items",
    // Justify
    jc: "justifyContent",
    ji: "justifyItems",
    // Filter
    filter: "filter",
    // Backdrop Filter
    backdrop: "backdropFilter",
    // Border
    border: "border",
    bc: "borderColor",
    br: "borderRadius",
    bs: "borderStyle",
    bw: "borderWidth",
    "bw-left": "borderLeftWidth",
    "bw-right": "borderRightWidth",
    "bw-top": "borderTopWidth",
    "bw-bottom": "borderBottomWidth",
    "radius-top": ["borderTopLeftRadius", "borderTopRightRadius"],
    "radius-bottom": ["borderBottomLeftRadius", "borderBottomRightRadius"],
    "radius-left": ["borderTopLeftRadius", "borderBottomLeftRadius"],
    "radius-right": ["borderTopRightRadius", "borderBottomRightRadius"],
    // Cursor
    cursor: "cursor",
    // Overflow
    over: "overflow",
    "over-y": "overflowY",
    "over-x": "overflowX",
    // Aspect Ratio
    ratio: "aspectRatio",
    // Transition
    transition: "transition",
    "tr-time": "transitionDuration",
    "tr-prop": "transitionProperty",
    "tr-timing": "transitionTimingFunction",
    "tr-delay": "transitionDelay",
    // Transform
    transform: "transform",
    // More
    opa: "opacity",
    rt: "rotate",
    scale: "scale",
    // custom property
    box: ["width", "height"],
    "flex-parent": ["justifyContent", "alignItems"]
};
export default property;
//# sourceMappingURL=property.esm.js.map