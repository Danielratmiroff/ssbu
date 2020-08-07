<template>
    <div>
        <p @click="closeHint" class="h-12 absolute hint-popup text-xs inline-block p-4 leading-none">
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
                    this.content = 'This Attributes is full of shit'
                    break;
                case 'FullHop':
                    this.content = 'This is garbage'
                    break;
                case 'Weight':
                    this.content = 'This Attributes is full of shit'
                    break;
                case 'WalkSPeed':
                    this.content = 'This Attributes is full of shit'
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
     max-width: 80%;
     left: 20%;
     top: -25px;
     border-radius: 0.5rem 0.5rem 0.5rem 0
 }

.hint-popup:before {
    content:"\A";
    border-style: solid;
    border-width: 10px 15px 10px 0;
    border-radius: 0 0 2px 0;
    border-color: transparent #F0F4FF transparent transparent;
    position: absolute;
    left: -15px;
    bottom: -1px;
    z-index:10;
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