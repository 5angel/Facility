import { setStyles } from 'js/core/utils';

export default class Popover {
    init() {
        this.hide();
    }

    show(e) {
        this.item = e.item;

        let rect = e.target.getBoundingClientRect();

        setStyles(this.root, {
            display: 'block',
            position: 'absolute',
            top: rect.top + 'px',
            left: rect.left + 'px'
        });
    }

    hide() {
        setStyles(this.root, {
            display: 'none'
        });
    }
}
