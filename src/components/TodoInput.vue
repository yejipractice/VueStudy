<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" 
        placeholder="Type What you have to do">
        <!-- 버튼 대신 이벤트 받을 태그 -->
        <span class="addContainer" v-on:click="addTodo"> 
            <!-- 어썸 아이콘 -->
            <i class="addbtn fas fa-plus" aria-hidden="true"></i> 
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return{
            newTodoItem: ''
        }
    },
    methods: {
        addTodo() {
            if(this.newTodoItem!=="") {
                var value = this.newTodoItem && this.newTodoItem.trim();
                // 상위 컴포넌트에 이벤트 관련하여 전달할 때 this.$emit을 사용, v-on이 있는 상위 컴포넌트로 신호를 보낸다. 
                this.$emit('addTodo', value);
                this.clearInput();
            }
        },
        clearInput() {
            this.newTodoItem = "";
        }
    }
}
</script>

<!-- vue파일에 있던 css는 하나로 합쳐진다. 다른 vue파일로 전염되지 않도록 scoped 추가 -->
<style scoped>
    input:focus {
        outline: none;
    }
    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    }
    .addContainer {
        float: right;
        /* linear-gradient: 두 개 이상의 색이 직선을 따라 점진적으로 변화 */
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn {
        color: white;
        vertical-align: middle;
    }
</style>