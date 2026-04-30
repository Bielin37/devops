import { render } from '@redwoodjs/testing/web';

import TeamMembers from './TeamMembers';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TeamMembers', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeamMembers />);
    }).not.toThrow();
  });
});
