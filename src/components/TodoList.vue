<template>
    <section>
        <ul>
            <!-- v-for 에서 key 설정 안해주면 eslint error 발생 -->
           <li v-for="(todoItem, index) in todoItems" :key="todoItem" class="shadow">
                <i class="checkBtn fas fa-check" aria-hidden="true"></i>
                {{ todoItem }}
                
                <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
                    <i class="far fa-trash-alt" aria-hidden="true"></i>
                </span>
            </li> 
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
    methods: {
        removeTodo(todoItem, index) {
            console.log("clicked", todoItem, index);
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
    ul {
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: left;
    }

    li {
        /* 비율 기준의 레이아웃 방식인 flex로 지정 */
        display: flex; 
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }

    .checkBtn {
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }

    .removeBtn{
        margin-left: auto;
        columns: #de4343;
    }
</style>