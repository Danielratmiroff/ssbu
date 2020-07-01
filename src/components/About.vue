<template>
    <div class="overlay">
        <div class="close" @click="closeOverlay">X</div>
        <p>
            here intro
        </p>
    </div>
</template>

<script>
export default {
    name: 'About',
    methods: {
        closeOverlay() {
            this.$emit('closeAbout')
        }
    }
}
</script>

<style lang="scss" scoped>

</style>