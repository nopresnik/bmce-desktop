import PusherJS, { Channel } from 'pusher-js';

class Pusher {
  private static instance: Pusher;
  private pusher: PusherJS = new PusherJS('6814256d3829ff3d95fa', {
    cluster: 'ap4',
    forceTLS: true,
  });

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static getInstance(): Pusher {
    if (!Pusher.instance) {
      Pusher.instance = new Pusher();
    }

    return Pusher.instance;
  }

  public getJobsChannel(): Channel {
    return this.pusher.subscribe('jobs');
  }
}

export default Pusher;
