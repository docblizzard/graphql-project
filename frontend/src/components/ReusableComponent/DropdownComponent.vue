<template>
    <nav>
        <label for="touch" :for="touchId"><span>{{ content.title }}</span></label>               
        <input type="checkbox" id="touch" :id="touchId" v-model="isOpen" class="dropdown-checkbox"> 

        <ul class="slide" :class="{active: isOpen}">
            <li v-for="(item, index) in content.items" :key="index">
                <a @click="selectOption(item)">{{ item }}</a>
            </li>
        </ul>
    </nav> 
</template>

<script>

export default {
    data(){
        return{
            isOpen: false
        }
    },
    props: {
        content: {
            title: String,
            items:[]
        },
        dropdownId: String,
    },
    methods:{
        selectOption(option){
            this.$emit('optionSelected', option);
        }
    },
    computed: {
        touchId() {
          return `touch-${this.dropdownId}`;
        },
  }
}
</script>

<style scoped>
h1 {
  padding: 20px;
  text-align: center;
  font-size: 1.5em;
}

li a {
  text-decoration: none;
  color: #2d2f31;
}

nav {
  position: relative;
  width: 300px;
  background: #d9d9d9;
  margin: 40px auto;
}

span {
  padding: 10px;
  background: white;
  color: #2d2f31;
  cursor: pointer;
  display: block;
  border: 1px solid #000;
}

span::after {
  float: right;
  right: 10%;
  content: "+";
}

.slide {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  text-align: center;
  transition: opacity 0.4s ease;
  opacity: 0;
  visibility: hidden;
  background: #d9d9d9;
  z-index: 1; 
}

.slide.active {
  opacity: 1;
  visibility: visible;
}

.slide li {
  padding: 10px;
}

#touch {
  position: absolute;
  opacity: 0;
  height: 0;
}

#touch:checked + .slide {
  opacity: 1;
  visibility: visible;
}
</style>