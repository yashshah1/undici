import Client from './client'
import Dispatcher from './dispatcher'
import MockAgent from './mock-agent'
import { MockInterceptor } from './mock-interceptor'

export = MockClient

/** MockClient extends the Client API and allows one to mock requests. */
declare class MockClient extends Client {
  constructor(origin: string, options: MockClient.Options);
  /** Number of connected mock clients */
  connected: number
  /** Intercepts any matching requests that use the same origin as this mock client. */
  intercept(options: MockInterceptor.Options): MockInterceptor;
  /** Dispatches a mocked request. */
  dispatch(options: Dispatcher.DispatchOptions, handlers: Dispatcher.DispatchHandlers): void;
  /** Closes the mock client and gracefully waits for enqueued requests to complete. */
  close(): Promise<void>;
}

declare namespace MockClient {
  /** MockClient options. */
  export interface Options extends Client.Options {
    /** The agent to associate this MockClient with. */
    agent: MockAgent;
  }
}
