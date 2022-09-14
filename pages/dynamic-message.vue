<template>
  <ValidationProvider
    v-slot="{ errors }"
    rules="minForbidden:30,*"
    tag="div"
    class="field"
  >
    <label for="field"> Введите 30 любых символов, кроме *</label>
    <input
      id="field"
      v-model="value"
      type="text"
      :class="{ 'has-error': errors[0] }"
    >
    <span>{{ errors[0] }}</span>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'DynamicMessage',
  components: {
    ValidationProvider
  },
  layout: 'default-page',
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>
.field {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  max-width: 600px;
  margin: 50px auto;
}
.field > label {
  font-size: 1.3em;
}
.field > input {
  padding: 10px 20px;
  width: 450px;
  border: 2px solid rgb(87, 86, 86);
  border-radius: 10px;
}
.field > input:focus {
  outline: none;
  border: 3px solid cornflowerblue;
}
.field > span {
  color: #de5959;
}
input.has-error {
  border: 2px solid #de5959;
  background-color: #fddfe2;
}
input.has-error:focus {
  border: 3px solid #de5959;
}
</style>
