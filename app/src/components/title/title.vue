<template>
    <div>
        <p>
            {{title}}
        </p>
    </div>
</template>
<script>
export default {
    props:["title"],
    data() {
        return {}
    },
    created() {
    },
    methods: {
    },
    components: {
    },
};
</script>
<style scoped>
p{
    color: rgba(69, 90, 100, 0.6);
    padding: .133333rem;
    font-size: 14px;
}
</style>