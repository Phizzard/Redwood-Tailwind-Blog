import { render } from '@redwoodjs/testing'

import BlogPostCard from './BlogPostCard'

describe('BlogPostCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlogPostCard />)
    }).not.toThrow()
  })
})
