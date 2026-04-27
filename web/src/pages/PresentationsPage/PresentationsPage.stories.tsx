import type { Meta, StoryObj } from '@storybook/react'

import PresentationsPage from './PresentationsPage'

const meta: Meta<typeof PresentationsPage> = {
  component: PresentationsPage,
}

export default meta

type Story = StoryObj<typeof PresentationsPage>

export const Primary: Story = {}
