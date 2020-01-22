import { PureComponent } from 'react';
import { Store } from 'laco';
import Scoreboard from '../model/Scoreboard';

export declare class Subscribe extends PureComponent<any, any> {
  stores: any[];
  componentWillReceiveProps(): void;
  componentWillUnmount(): void;
  _unsubscribe(): void;
  onUpdate: () => void;
  render(): any;
}

export declare function useStore(store: Store): Scoreboard;
export declare function useStores(stores: any[]): any[];
