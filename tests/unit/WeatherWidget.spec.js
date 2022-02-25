import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex'
import WeatherWidget from "@/components/WeatherWidget.vue";
import App from "@/App.vue";

describe("WeatherWidget.vue", () => {
  it("renders props when passed", () => {
    const cityName = "Vienna";
    const weatherDescription = "Sunny";
    const weatherTemp = 10;
    const weatherIcon = "Clear";

    const wrapper = shallowMount(WeatherWidget, {
      propsData: {
        cityName,
        weatherDescription,
        weatherTemp,
        weatherIcon,
      },
    });
    expect(wrapper.text()).toMatch(
      cityName,
      weatherDescription,
      weatherTemp,
      weatherIcon
    );
  });

  it("Click on button", () => {
    let actions;
    let store;

    beforeEach(() => {
      actions = {
        updateWeather: jest.fn()
      };
      store = new Vuex.Store({
        actions,
      });
    });

    const wrapper = shallowMount(App, { store, createLocalVue })
    wrapper.find('button.submit-btn').trigger('click')
    expect(actions.updateWeather).toHaveBeenCalled()
  });
});
