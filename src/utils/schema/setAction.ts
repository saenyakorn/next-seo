import { Action } from '../../types';

export function setAction(action?: Action) {
  if (action) {
    return {
      '@type': action.actionType,
      name: action.actionName,
      target: action.target,
    };
  }

  return undefined;
}
