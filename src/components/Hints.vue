<template>
    <div>
        <p @click="closeHint" class="absolute hint-popup text-xs inline-block p-4 leading-tight
        max-w-full  sm:w-1/2
        ">
            {{this.content}}
        </p>
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
 
 <style scoped>
 .hint-popup {
     background-color: #F0F4FF;
     border: 1px solid #F0F4FF;
     left: 20%;
     top: 0px;
     border-radius: 0 0.5rem 0.5rem 0.5rem
 }


.hint-popup:before {
    content:"\A";
    border-style: solid;
    border-width: 10px 15px 10px 0;
    border-radius: 2px 0 0 0;
    border-color: transparent #F0F4FF transparent transparent;
    position: absolute;
    left: -15px;
    top: -1px;
    z-index:999;
}

.hint-popup:after {
    content:"×";
    position:absolute;
    right: 5px;
    top:0;
    font-weight:600;
    z-index:10;
}

 </style>