<template>
    <section>
        <ul>
            <!-- v-for 에서 key 설정 안해주면 eslint error 발생 -->
           <li v-for="(todoItem, index) in propsdata" :key="todoItem" class="shadow">
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
    props: ['propsdata'],
    methods: {
        removeTodo(todoItem, index) {
            console.log("clicked", todoItem, index);
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index, 1);  // 배열의 특정 인덱스에서 부여한 숫자 개수만큼 인덱스 및 값 삭제
        }
    },
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