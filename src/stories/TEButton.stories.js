import TEButton from "../components/TEButton.vue";

export default {
  title: "TEButton",
  component: TEButton,
};

const Template = (args) => ({
  components: {
    TEButton,
  },
  template: `<t-e-button></t-e-button>`,
});

export const Default = Template.bind({});
