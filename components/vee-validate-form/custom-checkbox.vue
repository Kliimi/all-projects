<!-- eslint-disable vue/require-default-prop -->
<template>
  <div class="custom-checkbox">
    <span :name="name" class="no-error" :class="{'is-check': isChecked}" @click="switchCheckbox" />
    <a href="#">Пользовательское соглашение</a>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  },
  data () {
    return {
      isChecked: false
    }
  },

  methods: {
    switchCheckbox () {
      this.isChecked = !this.isChecked
      this.$emit('change', this.isChecked)
    }
  }
}
</script>
