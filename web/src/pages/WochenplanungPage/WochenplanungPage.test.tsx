import { render } from '@redwoodjs/testing/web'

import WochenplanungPage from './WochenplanungPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WochenplanungPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WochenplanungPage />)
    }).not.toThrow()
  })
})
