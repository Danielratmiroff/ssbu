<template>
    <div>

        <button class="ml-2 text-center text-grey-50 font-bold border bg-grey-10 border-solid border-primary-grey " 
            style="line-height:1.2;border-radius:50%;height:12px;width:12px;font-size:0.6rem;"
            :content="this.content" 
            v-tippy="{
                arrow : true,
                arrowType : 'default',
                theme : 'google',
                trigger : 'click'
                }">
            ?
        </button>

    </div>
</template>

<script>

export default {
    name: 'Hints',

    props: {
        attr: String
    },

    data() {
        return {
            content : String
        }
    },

    watch: {
        content: {
            immediate: true, 
            handler () {
                this.showPopUp();
            }
        }
    },
    
    methods: {
        showPopUp() {
            const attr = this.attr;
            switch (attr) {
                case 'FallSpeed':
                    this.content = 'Falling speed is the rate at which a character can move downward in mid-air.'
                    break;
                case 'FullHop':
                    this.content = 'Full Hop is the action that moves a character from the ground into the air.'
                    break;
                case 'Weight':
                    this.content = 'Weight is a measurement of how much a character can resist knockback.'
                    break;
                case 'WalkSpeed':
                    this.content = 'Walking is a form of ground-based movement slower than dashing.'
                    break;
                case 'RunSpeed':
                    this.content = 'Run speed or dashing, is form of ground movement faster than walking.'
                    break;
                case 'AirSpeed':
                    this.content = 'Air Speed is the maximum rate at which a character can move left or right while in midair.'
                    break;
                case 'Gravity':
                    this.content = 'Gravity is a measure of how fast a falling character reaches their maximum falling speed.'
                    break;
            
                default:
                    break;
            }
        },
        closeHint() {
            this.$emit('closeHint');
        }
    }
}
</script>
 
 