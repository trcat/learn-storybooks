<template>
  <button>{{ label }}</button>
</template>
<script>
export default {
  name: "TEButton",
  props: {
    label: {
      type: String,
      default: '我是一个测试按钮'
    },
  }
}
</script>