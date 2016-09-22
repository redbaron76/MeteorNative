import { color, direction, font, mixin, position, size, unit, merge } from './values';

const styles = {
    innerContainer: {
        flex: 1,
        backgroundColor: color.backgroundColor,
    },
    sectionContainer: {
        flex: 1,
        justifyContent: position.center,
    },
    jumboTron: merge({
            backgroundColor: color.gray,
            textAlign: position.center,
            color: color.white,
        },
        mixin.withPadding(unit.spaceMin, unit.spaceExtraMin)
    ),
    blackBox: merge({
            textAlign: position.center,
            alignItems: position.bottom,
            backgroundColor: color.black,
            fontSize: size.big,
            color: color.white,
            marginTop: unit.space,
        },
        mixin.withPadding(unit.space),
    ),

    h1: merge({
            textAlign: position.center,
            fontSize: size.heading,
            fontWeight: font.weight200,
        },
        mixin.withPadding(unit.spaceMax),
    ),

    formContainer: mixin.withPadding(0, unit.space),
    formField: {
        marginTop: unit.spaceMin
    },
    formButton: {
        marginTop: unit.space,
    },
    formErrorContainer: merge({
            backgroundColor: color.red,
            borderRadius: unit.spaceExtraMin,
        },
        mixin.withPadding(unit.spaceMin),
        mixin.withMargin(unit.space, 0, 0, 0)),
    formErrorMessage: {
        color: color.white,
        textAlign: position.center,
        fontSize: size.text,
    },

    onTop: { justifyContent: position.top },
    onRight: { alignItems: position.right },
    onBottom: { justifyContent: position.bottom },
    onLeft: { alignItems: position.left },

    withPadding: (...p) => mixin.withPadding(...p),
    withMargin: (...p) => mixin.withMargin(...p),
};

export {
    color,
    direction,
    font,
    mixin,
    position,
    size,
    styles,
    unit,

    merge,
};

