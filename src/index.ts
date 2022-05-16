import { registerPlugin } from '@capacitor/core';

import type { IosSwipeBackPlugin } from './definitions';

const IosSwipeBack = registerPlugin<IosSwipeBackPlugin>('IosSwipeBack', {
  web: () => import('./web').then(m => new m.IosSwipeBackWeb()),
});

export * from './definitions';
export { IosSwipeBack };