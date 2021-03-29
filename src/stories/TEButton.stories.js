import TEButton from "../components/TEButton.vue";

export default {
  title: "Components/TEButton",
  component: TEButton,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TEButton },
  template: `<t-e-button v-bind="$props" @onClick="onClick"></t-e-button>`,
});

export const Default = Template.bind({});
