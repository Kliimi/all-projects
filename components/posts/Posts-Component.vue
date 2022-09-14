<template>
  <li class="post">
    <div class="post__header">
      <div class="post__header-title">
        <span>{{ post.name }}</span>
        <span>{{ post.email }}</span>
      </div>
      <button type="button" class="btn-remove" @click="remove">
        &times;
      </button>
    </div>
    <div class="post__body">
      {{ post.body }}
    </div>
  </li>
</template>

<script>
export default {
  props: ['post'],
  emits: ['removepost'],
  methods: {
    remove () {
      this.$emit('removepost', this.post.id)
    }
  },
  template: `<li class="post">
      <div class="post__header">
        <div class="post__header-title">
          <span>{{ post.name }}</span>
          <span>{{ post.email }}</span>
        </div>
        <button type="button" class="btn-remove" @click="remove">&times;</button>
      </div>
      <div class="post__body">{{ post.body }}</div>
  </li>`
}
</script>

<style lang="scss" scoped>
  // variables
  $button-color: #1890FF;
  $header-color: #06438d;
  $base-color1: #FFFFFF;
  $base-color2: #E5E5E5;
  $header-color: #F5F5F5;
  $text-color1: #595959;
  $title-color: #262626;

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: $text-color1;
    background: $base-color2;
  }

  .post {
    list-style-type: none;
    max-width: 50vw;
    border: none;
    border-radius: 10px;
    background: $base-color1;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
    margin: 2em auto;

    &__header {
      display: flex;
      justify-content: space-between;
      padding: 0.5em 1em;
      color: $title-color;
      border-radius: 10px;
      background: $header-color;

      &-title {
        display: flex;
        flex-direction: column;

        > span {
          display: inline-block;

          &:first-of-type {
            font-size: 1.3em;
            font-weight: bold;
          }

          &:last-of-type {
            font-size: 0.8em;
            font-weight: bolder;
            color: $header-color;
            margin: 0.5em;
          }
        }
      }
    }

    &__body {
      padding: 1em;
      font-size: 1.2em;
    }

    .btn-remove {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      font-size: 1.4em;
      border: 1px solid $header-color;
      border-radius: 50%;
      background: transparent;
      transition: 0.4s;

      &:hover {
        color: $header-color;
        border: 1px solid $button-color;
        background: $button-color;
      }
    }
  }
  </style>
