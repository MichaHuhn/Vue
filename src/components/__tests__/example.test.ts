import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ExampleComponent from '@/components/ExampleComponent.vue';

/*
If you don't want to use Unit or Component Testing with Vitest, you can just delete this __tests__ folder or keep it for later.

Get started with Vitest:
https://vitest.dev/guide
*/
describe('ExampleComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(ExampleComponent);
    expect(wrapper.text()).toContain('Vue works');
  });
});
