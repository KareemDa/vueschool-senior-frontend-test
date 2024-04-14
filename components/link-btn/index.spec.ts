import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import LinkBtn from '~/components/link-btn/index.vue'

describe('Link Btn Component', () => {
  it('renders without errors', async () => {
    const wrapper = await mountSuspended(LinkBtn, {
      slots: { default: () => 'Click Here' }
    })

    expect(wrapper.text()).toBeTruthy()
  })

  it('contains the line element', async () => {
    const wrapper = await mountSuspended(LinkBtn, {
      slots: { default: () => 'Click Here' }
    })

    const line = wrapper.find('.line')

    expect(line.exists()).toBeTruthy()
  })
})
