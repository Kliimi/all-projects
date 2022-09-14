<!-- eslint-disable no-useless-escape -->
<!-- eslint-disable no-unused-vars -->
<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form class="registration-form" @submit.prevent="handleSubmit(onSubmit)">
      <ValidationProvider
        v-for="input in formSchemaFields"
        :id="input.name"
        :key="input.name"
        v-slot="{ errors }"
        class="field"
        :name="input.name"
        :rules="input.rules"
      >
        <CustomCheckbox v-if="input.type === 'checkbox'" v-model="changeValue" @change="handleChange" />
        <input v-else v-model="input.value" :class="{'no-error': !errors[0], 'has-error': errors[0]}" :type="input.type" :placeholder="input.placeholder">
        <div class="error-message">
          {{ errors[0] }}
        </div>
      </ValidationProvider>
      <SubmitButton />
    </form>
    <ValidationObserver />
  </validationobserver>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import CustomCheckbox from '~/components/vee-validate-form/custom-checkbox.vue'
import SubmitButton from '~/components/vee-validate-form/submit-button.vue'
export default {
  name: 'VeeValidateForm',
  components: { CustomCheckbox, SubmitButton, ValidationProvider, ValidationObserver },
  layout: 'default-page',
  data () {
    return {
      formSchemaFields: [
        {
          name: 'ФИО',
          type: 'text',
          placeholder: 'ФИО',
          value: '',
          rules: 'alpha_spaces|required'
        },
        {
          name: 'Телефон',
          type: 'tel',
          placeholder: 'Телефон',
          value: '',
          rules: { regex: /^[\d\+][\d\(\)\ -]{4,14}\d$/, required: true }
        },
        {
          name: 'Email',
          type: 'email',
          placeholder: 'Email',
          value: '',
          rules: 'email|required'
        },
        {
          name: 'note',
          type: 'text',
          placeholder: 'Примечание',
          value: '',
          rules: ''
        },
        {
          name: 'terms',
          type: 'checkbox',
          placeholder: '',
          rules: 'terms'
        }
      ],
      changeValue: false
    }
  },
  methods: {
    onSubmit (values) {
      alert('Форма отправлена!')
    },
    handleChange (event) {
      this.changeValue = event
    }
  }
}
</script>

<style lang="scss">
// variables
$input-bcgr: #f9f9f9;
$input-border: #e8e8e8;
$placeholder-color: #c4c6c7;
$button-color: #ff597f;
$button-font: #ffffff;
$button-hovered: #ff3867;
$link-color: #474949;
$error-color: #f23648;
$error-background: #fddfe2;

// styles
* {
  box-sizing: border-box;
}
.registration-form {
  display: flex;
  gap: 2.5em;
  max-width: 380px;
  flex-direction: column;
  margin: 45px auto 0;
  .field {
    position: relative;
    &:first-child {
      margin-top: 25px;
    }
    input {
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
        background-color 0.3s ease-in-out;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: $placeholder-color;
      }
    }

    .custom-checkbox {
      display: flex;
      align-items: center;
      span {
        position: relative;
        width: 18px;
        height: 18px;
        border-radius: 5px;
        margin-right: 10px;
        cursor: pointer;
      }
      .is-check {
        background: $button-font;
        &:before {
          position: absolute;
          left: -15%;
          top: 35%;
          height: 50%;
          width: 3px;
          background-color: $button-color;
          content: "";
          transform: translateX(10px) rotate(-45deg);
          transform-origin: left bottom;
        }
        &:after {
          position: absolute;
          left: -15%;
          bottom: 15%;
          height: 3px;
          width: 100%;
          background-color: $button-color;
          content: "";
          transform: translateX(10px) rotate(-45deg);
          transform-origin: left bottom;
          }
      }
      a {
        color: $link-color;
      }
  }
}
  .submit-button {
    width: 135px;
    height: 45px;
    font-size: 0.9em;
    color: $button-font;
    border: none;
    border-radius: 30px;
    background: $button-color;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    &:hover {
      background: $button-hovered;
      transform: scale(1.1);
    }
    &__icon {
      svg {
        fill: $button-font;
      }
    }
  }
}

.has-error {
  border: 1px solid $error-background;
  background-color: $error-background;
  &:focus {
    border: 2px solid $error-color;
  }
}
.no-error {
    border: 1px solid $input-border;
  background-color: $input-bcgr;
    &:focus {
      border: 2px solid #0071fe;
    }
}
.error-message {
  position: absolute;
  display: inline-block;
  left: 0.1em;
  bottom: -1.8em;
  width: 100%;
  color: $error-color;
}
</style>
