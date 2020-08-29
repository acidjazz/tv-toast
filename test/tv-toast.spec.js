import { mount } from '@vue/test-utils'
import TvToast from '@/tv-toast'

describe('tv-toast', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(TvToast)
        expect(wrapper.vm).toBeTruthy()
    })
})
