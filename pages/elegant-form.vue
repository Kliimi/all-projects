<template>
  <div>
    <NavBar />
    <main>
      <h1>Elegant Contact Form.</h1>
      <FormHeader />
      <FormBody />
    </main>
  </div>
</template>

<script>
import FormHeader from '~/components/elegant-form/Form-Header.vue'
import FormBody from '~/components/elegant-form/Form-Body.vue'
import NavBar from '~/components/Nav-Bar.vue'

export default {
  name: 'ElegantForm',
  components: {
    FormHeader,
    FormBody,
    NavBar
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href:
          '//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css'
      },
      {
        rel: 'stylesheet',
        href:
          '//cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css',
        crossorigin: 'anonymous',
        integrity:
          'sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We'
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
header {
  h2 {
  font-size: 1.5em;
  }
  a {
    text-decoration: none;
    color: #211F54;
  }
  a:hover {
      color: #0075FF;
  }
}

main {
  height: 92vh;
  margin: auto;
  background: #eaeaea;
  font-family: "Open Sans", sans-serif;
}

h1 {
  text-align: center;
  color: #666;
  text-shadow: 1px 1px 0px #FFF;
}

</style>
