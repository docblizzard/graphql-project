<template>
    <div class="product-page">
      <div class="left-container">
        <img src="/fn_shifter.jpeg" alt="Product" />
      </div>
      <div class="right-container">
        <h2 class="product-title">Fanatec magnetic shifter</h2>
        <div class="product-options">
          <Dropdown :content="colorOption" @optionSelected="handleOptionSelected" :dropdownId="color"></Dropdown>
          <div class="button-cart">Add to cart</div>
        </div>
        <p class="product-description">
            This magnetic shifter mod is compatible with Logitech wheels such as G27/G29/G920/G923.<br>

Everything that is included :<br>
-M3 bolt with nut to secure the mod<br>
-4 magnets of size 10x3mm<br>
-The main 3d printed piece itself.<br>

This mod will greatly improve the feeling of your shifting, the magnets will add a good resistance as well as a satisfying snapyness, compared to the old mushy stock ones.<br>

To install it, simply undo the nut so that you can stretch the collar ( The collar is made strongly so that it can be stretched easily ), and slip it on the base, and then tight everything down. There is nothing to disassemble !
        </p>
      </div>
    </div>
</template>
<script>
import Dropdown from '@/components/ReusableComponent/DropdownComponent.vue'
export default {
    components:{
        Dropdown
    },
    data(){
        return {
            colorOption :{
                title: 'Color',
                items: ['Red', 'Blue', 'Black', 'Grey']
            },
            typeOption :{
                title: 'Wheel type',
                items: ['BMW GT2', 'Formula wheel', 'Universal Hub']
            },
            selectedColor: null,
            selectedType: null
        }
    },
    methods:{
        handleOptionSelected(option){
            if (colorOption.items.includes(option)){
                this.selectedColor = option
                console.log("color selected" + option)
            }
            else if (typeOption.items.includes(option)){
                this.selectedType = option
                console.log("option selected" + option)
            }
        }
    }
}
</script>
<style scoped>
.product-page {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 20px;
}

.left-container img {
    padding: 30px;
    margin-left: 150px;
    width: 60%;
    height: auto;
}   

.right-container {
    width: 60%;
    margin-top: 60px;
    margin-right: 80px;
}

.product-title {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.product-options {
    margin-top: 10px;
}

.option {
    margin-bottom: 10px;
}

.product-options label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.product-description {
    line-height: 1.5;
}

.button-cart{
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    max-width: 100%;
    border: 1px solid #000;
}

</style>