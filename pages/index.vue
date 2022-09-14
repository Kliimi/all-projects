<template>
  <main>
    <h1>Добро пожаловать!</h1>
    <h3>На этом сайте размещены мои задания на Vue:</h3>
    <ul>
      <li>
        <NLink to="/posts-vue3">
          Posts Vue3
        </NLink>
      </li>
      <li>
        <NLink to="/to-do-list-vue">
          To do list Vue
        </NLink>
      </li>
      <li>
        <NLink to="/vee-validate-form">
          VeeValidate(v3) form
        </NLink>
      </li>
      <li>
        <NLink to="/dynamic-message">
          Dynamic message
        </NLink>
      </li>
      <li>
        <NLink to="/elegant-form">
          Elegant form
        </NLink>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default-page'
}
</script>

<style lang="scss" scoped>
  $font-color: #211F54;
  $active-color: #0075FF;
  $description-color: #6E7191;
  $background-color: #F7F9FC;
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: $background-color;
  padding-top: 6em;
  height: 85vh;
}
h1 {
  font-size: 3em;
}
h3 {
  color: $description-color;
}
ul {
  list-style-type: none;
  padding: 0;
  text-align: center;
  li {
    font-size: 1.5em;
    font-weight: bolder;
    margin-top: 1em;
  }
}
</style>
