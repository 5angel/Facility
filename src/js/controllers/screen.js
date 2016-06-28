import Narrator from './narrator';

export default class Screen {
    init() {
        this._narrator = new Narrator();

        this.phrase = this._narrator.start('intro');
    }
}
