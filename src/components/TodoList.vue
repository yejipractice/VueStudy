<template>
    <section>
        <ul>
            <!-- v-for 에서 key 설정 안해주면 eslint error 발생 -->
           <li v-for="todoItem, key in todoItems" :key="key">{{ todoItem }}</li> 
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            todoItems: []
        }
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
</style>