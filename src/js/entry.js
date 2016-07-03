import 'styl/styles.styl';

var tagsContext = require.context('tags', true);

tagsContext.keys().forEach(key => tagsContext(key));

import Popover from './controllers/popover';
import Screen from './controllers/screen';
import Facility from './controllers/facility';
import CellControls from './controllers/cellControls';

import mixins from './core/mixins';

riot.mixin(mixins);

riot.mixin('popover', Popover);
riot.mixin('screen', Screen);
riot.mixin('facility', Facility);
riot.mixin('cell-controls', CellControls);

riot.mount('screen');
