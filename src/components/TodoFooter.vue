<!-- 모두 삭제하기 버튼을 포함하는 TodoFooter 컴포넌트 -->
<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" @click="clearTodo">Clear All</span>
    </div>
</template>

<script>
export default {
    methods: {
        clearTodo() {
            localStorage.clear();
        }
    }
}
</script>

<style>
    .clearAllContainer {
        width: 8.5rem;
        height: 50px;
        line-height: 50px;
        background-color: white;
        border-radius: 5px;
        margin: 0 auto;
    }
    .clearAllBrn {
        color: #e20303;
        display: black;
    }
</style>

<!-- 브라우저를 새로 고침을 해야 데이터를 삭제한 로컬 스토리지가 반영되어 표시된다. 
로컬 스토리지를 지우고 나서 할일 목록 데이터를 지우지 않았기 떄문에
지금은 TodoFooter 컴포넌튼데 할일 목록 데이터 관련 코드는 TodoList 컴포넌트에 있다. 어떻게 접근해야 할까 -> 다음 커밋   -->