import { use } from '@rndm/render';
import * as R from 'ramda';

const plugin = {
  key: 'ramda',
  methods: Object.keys(R).map(type => ({type, value: R[type]}))
};

use(plugin);

export default plugin;
