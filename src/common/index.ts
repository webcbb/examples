import { bootstrapComponents } from '@wesib/wesib';
import { AppFeature } from './app.feature';

export * from './app.feature';
export * from './examples.ns';
export * from './input';
export * from './theme';

export const examplesContext = bootstrapComponents(AppFeature);
