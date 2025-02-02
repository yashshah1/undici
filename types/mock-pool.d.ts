import Pool from './pool'
import MockAgent from './mock-agent'
import { MockInterceptor } from './mock-interceptor'
import Dispatcher from './dispatcher'

export = MockPool

/** MockPool extends the Pool API and allows one to mock requests. */
declare class MockPool extends Pool {
  constructor(origin: string, options: MockPool.Options);
  /** Number of connected mock clients */
  connected: number
  /** Intercepts any matching requests that use the same origin as this mock pool. */
  intercept(options: MockInterceptor.Options): MockInterceptor;
  /** Dispatches a mocked request. */
  dispatch(options: Dispatcher.DispatchOptions, handlers: Dispatcher.DispatchHandlers): void;
  /** Closes the mock pool and gracefully waits for enqueued requests to complete. */
  close(): Promise<void>;
}

declare namespace MockPool {
  /** MockPool options. */
  export interface Options extends Pool.Options {
    /** The agent to associate this MockPool with. */
    agent: MockAgent;
  }
}
