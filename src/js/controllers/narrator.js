import dialogs from 'json/dialogs';

export default class Narrator {
    constructor() {
        this._current = null;
        this._index = -1;
    }

    start(name) {
        let list = dialogs[name];

        if (!list) {
            throw new Error('No dialog with name "' + name + '" found');
        }

        this._current = name;

        return this.next();
    }

    next() {
        this._index++;

        let phrase = dialogs[this._current][this._index];

        if (!phrase) {
            throw new Error('Dialog "' + this._current + '" is out of bounds (' + this._index + ')');
        }

        if (typeof phrase === 'string') {
            return Narrator.parsePhrase(phrase);
        }
    }

    static parsePhrase(phrase) {
        if (typeof phrase !== 'string') {
            throw new TypeError('Can\'t parse a non-string phrase');
        }

        let [result, name, text] = phrase.match(Narrator.PHRASE_REGEXP);

        return { name, text };
    }
}

Narrator.PHRASE_REGEXP = /(\w+):\s?(.+)/;
