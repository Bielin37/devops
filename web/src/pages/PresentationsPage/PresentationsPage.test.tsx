import { render } from '@redwoodjs/testing/web';

import PresentationsPage from './PresentationsPage';

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PresentationsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PresentationsPage />);
    }).not.toThrow();
  });
});
