<!-- eslint-disable  -->

<template>
  <main>
    <ul class="posts">
      <PostsComponent
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @removepost="removePost"
      />
    </ul>
  </main>
</template>

<script>
import PostsComponent from '~/components/posts/Posts-Component.vue'
export default {
  name: 'PostsVue3',
  components: { PostsComponent },
  layout: 'default-page',
  data () {
    return {
      posts: []
    }
  },
  created () {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then(responce => responce.json())
      .then(json => this.posts = json)
  },
  methods: {
    removePost (id) {
      this.posts = this.posts.filter(post => post.id !== id)
    }
  }
}
</script>
