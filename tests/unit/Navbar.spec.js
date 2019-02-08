import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "";
    const wrapper = shallowMount(Navbar, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  });
});
