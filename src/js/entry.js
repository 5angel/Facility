import 'styl/styles.styl';

import 'tags/screen.tag';
import 'tags/phrase.tag';

import Screen from './controllers/screen';
import Phrase from './controllers/phrase';

riot.mixin('screen', Screen);
riot.mixin('phrase', Phrase);

riot.mount('screen');
