/* eslint-disable semi */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import { extend, localize } from 'vee-validate'
import ru from 'vee-validate/dist/locale/ru.json'
import {
  required,
  alpha,
  email,
  alpha_spaces,
  numeric
} from 'vee-validate/dist/rules'

localize('ru')
localize({
  ru: {
    messages: {
      required: 'Поле {_field_} обязательно для заполнения',
      alpha: 'Поле {_field_} должно содержать только буквы',
      email: 'Поле {_field_} должно содержать адрес эл. почты',
      alpha_spaces:
        'Поле {_field_} поле может содержать буквенные символы или пробелы',
      numeric: 'Поле {_field_} должно состоять только из цифр',
      phone: 'Поле {_field_} содержит неверный формат номера телефона',
      terms: 'Необходимо принять условия соглашения'
    }
  }
})

extend('required', required)
extend('alpha', alpha)
extend('email', email)
extend('alpha_spaces', alpha_spaces)
extend('numeric', numeric)
extend('phone', {
  validate: (value) => {
    if (value) {
      return (
        value.match(
          /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/
        ) !== null
      )
    }
    return false
  }
})
extend('terms', {
  validate: (value) => {
    if (value === true) {
      return true;
    }
  }
})
extend('minForbidden', {
  validate (value, { min, symbol }) {
    if (value.length >= min && !value.includes(symbol)) { return true }
    let message = `Это поле содержит ${value.length} из ${min} символов`
    if (value.includes(symbol)) {
      message += ', и есть запрещенный символ *'
    }
    return message
  },
  params: ['min', 'symbol']
})
