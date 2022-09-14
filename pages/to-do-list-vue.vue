<template>
  <main>
    <div class="app">
      <h1>To do list</h1>

      <div>
        <input
          type="text"
          name="todo"
          placeholder="Напишите задачу.."
          :value="valueInput"
          @input="handlyInput"
          @keypress.enter="addTask"
        >
        <button type="button" @click="addTask">
          Добавить задачу
        </button>
      </div>

      <ul class="app__list">
        <li v-for="(task, index) in tasksList" :key="task.id" class="task" :class="{ done: task.isDone}">
          <input v-model="task.isDone" type="checkbox" name="task">
          <span>{{ task.title }}</span>
          <button type="button" @click="removeTask(index)">
            Удалить задачу
          </button>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ToDoListVue',
  layout: 'default-page',
  data () {
    return {
      valueInput: '',
      tasksList: [
        { title: 'Сходить в кино', id: 0, isDone: false },
        { title: 'Погулять с собакой', id: 1, isDone: true },
        { title: 'Встретится с Шерлоком на Бэйкер Стрит', id: 2, isDone: false }
      ],
      id: null
    }
  },
  methods: {
    handlyInput (event) {
      this.valueInput = event.target.value
    },
    addTask () {
      if (this.valueInput === '') { return }
      if (!this.id) { this.id = this.tasksList.length }

      this.tasksList.push({
        title: this.valueInput,
        id: this.id,
        isDone: false
      })
      this.valueInput = ''
      this.id++
    },
    removeTask (index, type) {
      const toDoList = this.tasksList
      toDoList.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  padding: 20px;
  width: 500px;
  border: 2px solid red;
  border-radius: 20px;
  margin: 0 auto;

  &__list {
    margin: 30px 0 0 20px;
    padding: 0;
    list-style: none;
  }
}

.task {
  display: flex;
  align-items: center;
  min-height: 30px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  span {
    margin-right: auto;
  }
}

.done {
    span {
      text-decoration: line-through;
    }

    button {
        display: none;
    }
  }
</style>
