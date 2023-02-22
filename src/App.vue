<template>
  <!-- 상위 컴포넌트 -->
  <div id="app"> 
    <!-- 하위 컴포넌트 -->
    <TodoHeader />
    <!-- 하위 컴포넌트에 메소드 넘겨주기 -->
    <TodoInput v-on:addTodo="addTodo"/>
    <!-- 하위 컴포넌트에 데이터 넘겨주기 -->
    <TodoList v-bind:propsdata="todoItems"/> 
    <TodoFooter v-on:removeAll="removeAll"/>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

export default {
  data() {
    return {
      todoItems: []
    }
  },  
  methods: {
    addTodo(todoItem) {
      // 로컬 스토리지에 데이터를 추가하는 로직 
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },
    removeAll () {
      localStorage.clear();
      this.todoItems = [];
    }
  },  
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }, 
    // 라이프 사이클 훅
  created () {
    if(localStorage.length>0) {
      for(var i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
      console.log(this.todoItems);
    }
  }
}
</script>

<style>
  body{
        text-align: center;
        background-color: pink;
    }
  input{
    border-style: groove;
    width: 200px;
  }
  button{
    border-style: groove;
  }
  .shadow{
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
