<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(onSubmit)">
      <h1>
        Should you have any questions, please do not hesitate to contact me :
      </h1>
      <div class="contentform">
        <div class="leftcontact">
          <ValidationProvider
            v-for="leftfield in formSchema.leftcontact"
            :key="leftfield.name"
            v-slot="{ errors }"
            class="form-group"
            :name="leftfield.name"
            :rules="leftfield.rules"
            tag="div"
          >
            <p>{{ leftfield.label }}<span>*</span></p>
            <span class="icon-case"><i :class="['fa', leftfield.class]" /></span>
            <input
              :id="leftfield.name"
              v-model="leftfield.value"
              :type="leftfield.type"
              :class="{ 'has-error': errors[0] }"
            >
            <span class="validation">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="rightcontact">
          <ValidationProvider
            v-for="rightfield in formSchema.rightcontact"
            :key="rightfield.name"
            v-slot="{ errors }"
            class="form-group"
            :name="rightfield.name"
            :rules="rightfield.rules"
            tag="div"
          >
            <p>{{ rightfield.label }}<span>*</span></p>
            <span class="icon-case"><i :class="['fa', rightfield.class]" /></span>
            <input
              v-if="rightfield.type !== 'textarea'"
              :id="rightfield.name"
              v-model="rightfield.value"
              :type="rightfield.type"
              :class="{ 'has-error': errors[0] }"
            >
            <textarea
              v-else
              :id="rightfield.name"
              v-model="rightfield.value"
              :rows="rightfield.rows"
              :class="{ 'has-error': errors[0] }"
            />
            <span class="validation">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
      </div>
      <button type="submit" class="bouton-contact">
        Send
      </button>
    </form>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  name: 'FormBody',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data: () => {
    return {
      formSchema: {
        leftcontact: [
          {
            name: "'Фамилия'",
            type: 'text',
            label: 'Surname',
            class: 'fa-male',
            value: '',
            rules: 'required|alpha'
          },
          {
            name: "'Имя'",
            type: 'text',
            label: 'Name',
            class: 'fa-user',
            value: '',
            rules: 'required|alpha'
          },
          {
            name: "'Email'",
            type: 'email',
            label: 'E-mail',
            class: 'fa-envelope-o',
            value: '',
            rules: 'required|email'
          },
          {
            name: "'Компания'",
            type: 'text',
            label: 'Company',
            class: 'fa-home',
            value: '',
            rules: 'required|alpha_spaces'
          },
          {
            name: "'Адрес компании'",
            type: 'text',
            label: 'Company Address',
            class: 'fa-location-arrow',
            value: '',
            rules: 'required'
          },
          {
            name: "'Почтовый индекс'",
            type: 'text',
            label: 'Postcode',
            class: 'fa-map-marker',
            value: '',
            rules: 'required|numeric'
          }
        ],
        rightcontact: [
          {
            name: "'Город'",
            type: 'text',
            label: 'City',
            class: 'fa-building-o',
            value: '',
            rules: 'required|alpha'
          },
          {
            name: "'Номер телефона'",
            type: 'text',
            label: 'Phone number',
            class: 'fa-phone',
            value: '',
            rules: 'required|phone'
          },
          {
            name: "'Должность'",
            type: 'text',
            label: 'Function',
            class: 'fa-info',
            value: '',
            rules: 'required|alpha'
          },
          {
            name: "'Тема сообщения'",
            type: 'text',
            label: 'Subject',
            class: 'fa-comment-o',
            value: '',
            rules: 'required|alpha_spaces'
          },
          {
            name: "'Сообщение'",
            type: 'textarea',
            label: 'Message',
            class: 'fa-comments-o',
            value: '',
            rows: '14',
            rules: 'required|alpha_spaces'
          }
        ]
      }
    }
  },
  methods: {
    onSubmit (values) {
      alert('Форма отправлена!')
    }
  }
}
</script>

<style scoped>
form h1 {
  font-size: 18px;
  background: #F6AA93 none repeat scroll 0% 0%;
  color: rgb(255, 255, 255);
  padding: 22px 25px;
  border-radius: 5px 5px 0px 0px;
  margin: auto;
  text-shadow: none;
  text-align: left;
}
form {
  border-radius: 5px;
  max-width: 800px;
  width: 100%;
  margin: 3% auto;
  background-color: #ffffff;
  overflow: hidden;
}

p span {
  color: #f00;
}

p {
  margin: 0px;
  font-weight: 500;
  line-height: 2;
  color: #333;
}

h1 {
  text-align: center;
  color: #666;
  text-shadow: 1px 1px 0px #fff;
  margin: 50px 0px 0px 0px;
}

input {
  border-radius: 0px 5px 5px 0px;
  border: 1px solid #eee;
  margin-bottom: 15px;
  width: 75%;
  height: 42px;
  float: left;
  padding: 0px 15px;
}
input:focus {
  outline: none;
  border: 2px solid #eee;
}

a {
  text-decoration: inherit;
}

textarea {
  border-radius: 0px 5px 5px 0px;
  border: 1px solid #eee;
  margin: 0;
  width: 75%;
  height: 130px;
  float: left;
  padding: 0px 15px;
}
textarea:focus {
  outline: none;
  border: 2px solid #eee;
}

.form-group {
  overflow: hidden;
  clear: both;
}

.icon-case {
  width: 35px;
  float: left;
  border-radius: 5px 0px 0px 5px;
  background: #eeeeee;
  height: 42px;
  position: relative;
  text-align: center;
  line-height: 40px;
}

i {
  color: #555;
}

.contentform {
  padding: 40px 30px;
}

.bouton-contact {
  background-color: #81bda4;
  color: #fff;
  text-align: center;
  width: 100%;
  border: 0;
  padding: 17px 25px;
  border-radius: 0px 0px 5px 5px;
  cursor: pointer;
  margin-top: 40px;
  font-size: 18px;
}

.leftcontact {
  width: 49.5%;
  float: left;
  border-right: 1px dotted #ccc;
  box-sizing: border-box;
  padding: 0px 15px 0px 0px;
}

.rightcontact {
  width: 49.5%;
  float: right;
  box-sizing: border-box;
  padding: 0px 0px 0px 15px;
}

.validation {
  display: inline-block;
  margin: 0 0 10px;
  font-weight: 400;
  font-size: 13px;
  color: #de5959;
}
input.has-error,
textarea.has-error {
  border: 1px solid #de5959;
  background-color: #fddfe2;
}
input.has-error:focus,
textarea.has-error:focus {
  border: 2px solid #de5959;
}
</style>
