export function toDashCase(str) {
    return str.replace(/([A-Z])/g, $1 => '-' + $1.toLowerCase());
}

export function setStyles(target, styles) {
    let str = Object
        .keys(styles)
        .reduce((str, key) => {
            return str += toDashCase(key) + ':' + styles[key] + ';';
        }, '')

    target.setAttribute('style', str);
}
