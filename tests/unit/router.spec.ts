import createRouter from '@/router'
import { createLocalVue, mount } from '@vue/test-utils';
import App from '@/App.vue'
import Home from '@/views/Home.vue'
import HelloWorld from '@/components/HelloWorld.vue'

describe("router", () => {
  test("should show Home component on /", () => {
    const localVue = createLocalVue()
    const router = createRouter(localVue)
    const wrapper = mount(App, { localVue, router, stubs: { Home }})
    expect(wrapper.find(Home).exists()).toBe(true)
    expect(wrapper.find(HelloWorld).exists()).toBe(false)
  })
})
