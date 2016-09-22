import { iOS } from 'navbar-native';
import { androidFonts, iosFonts } from './fontFamily';

export function merge(obj, ...add) {
    return Object.assign(obj, ...add);
}

export const color = {
    backgroundColor: iOS('#f7f7f7', '#c0c0c0'),
    black: '#000000',
    border: iOS('#efeff4', '#c0c0c0'),
    gray: iOS('#c7c7c7', '#c0c0c0'),
    link: iOS('#0076ff', '#ffffff'),
    red: iOS('#ff3a2d', '#ff3a2d'),
    white: '#ffffff',
};

export const font = {
    family: iOS(iosFonts, androidFonts),
    weight100: '100',
    weight200: '200',
    weight300: '300',
    weight400: '400',
    weight500: '500',
    weight600: '600',
    weight700: '700',
    weight800: '800',
    weight900: '900',
};

export const direction = {
    column: 'column',
    row: 'row',
};

export const position = {
    center: 'center',
    top: 'flex-start',
    bottom: 'flex-end',
    left: 'flex-start',
    right: 'flex-end',
    spaceBetween: 'space-between',
    spaceAround: 'space-around',
    stretch: 'stretch',
    baseline: 'baseline',
};

export const size = {
    text: 17,
    big: 21,
    small: 15,
    heading: 30,
};

export const unit = {
    spaceExtraMin: 5,
    spaceMin: 10,
    space: 20,
    spaceMax: 30,
    spaceExtraMax: 40,
};

export const mixin = {
    withPadding: (...prop) => {
        switch (true) {
            case (prop.length == 4):
                return { paddingTop: prop[0], paddingRight: prop[1], paddingBottom: prop[2], paddingLeft: prop[3] };
            case (prop.length == 2):
                return { paddingTop: prop[0], paddingRight: prop[1], paddingBottom: prop[0], paddingLeft: prop[1] };
            case (prop.length == 1):
            default:
                return { padding: prop[0] };
        }
    },
    withMargin: (...prop) => {
        switch (true) {
            case (prop.length == 4):
                return { marginTop: prop[0], marginRight: prop[1], marginBottom: prop[2], marginLeft: prop[3] };
            case (prop.length == 2):
                return { marginTop: prop[0], marginRight: prop[1], marginBottom: prop[0], marginLeft: prop[1] };
            case (prop.length == 1):
            default:
                return { margin: prop[0] };
        }
    },
};

