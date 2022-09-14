<template>
  <header>
    <NLink to="/">
      <h2>Мои задания на Vue</h2>
    </NLink>
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
  </header>
</template>

<style lang="scss">

header {
  $font-color: #211F54;
  $active-color: #0075FF;

  display: flex;
  justify-content: space-between;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 0px 4px 10px rgba(20, 20, 43, 0.04);

  h2 {
    text-align: center;
    font-size: 1.5em;
    font-weight: bold;
    line-height: normal;
    margin: 1em;
  }
  ul {
    display: flex;
    gap: 2em;
    padding: 0;
    font-size: 1.2em;
    margin: 1em 2em;
  }
  li {
    list-style-type: none;
    display: flex;
    padding: 0.5em 1em;
    align-items: center;
    border: 1px solid transparent;
    &:hover {
      cursor: pointer;
      border: 1px solid #EFF0F6;
      box-shadow: 0px 4px 10px rgba(20, 20, 43, 0.04);
      border-radius: 14px;
    }
  }
  a {
    text-decoration: none;
    color: #211F54;
  }
  a:hover {
      color: #0075FF;
  }
}

</style>
