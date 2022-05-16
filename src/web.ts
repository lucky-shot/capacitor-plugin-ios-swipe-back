import { WebPlugin } from '@capacitor/core';
import { IosSwipeBackPlugin } from './definitions';

export class IosSwipeBackWeb extends WebPlugin implements IosSwipeBackPlugin {
  async enable(options: { error: number }): Promise<{error: number}> {
    return options;
  }

  async disable(options: { error: number }): Promise<{error: number}> {
    return options;
  }
}

const IosSwipeBack = new IosSwipeBackWeb();

export { IosSwipeBack };
