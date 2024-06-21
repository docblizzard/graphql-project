<template>
  <div class="home">
    <div class="section section1">
      <div class="content">
        <img src="/fn_bmw.png" alt="Featured Banner" />
        <div class="text-block">
          <h2> High quality add-ons</h2>
          <div class="line"></div>
          <div class="text">Improve the feeling of your steering wheel with these high-grade add-ons
              Developped with the best quality of filaments, these add-ons are made via a 3D
              printer, optimized for the best performance and strength
          </div>
          <div class="section1-button"> Browse add-ons</div>
        </div>
      </div>
    </div>
    <div class="section section2">
      <div class="content">
        <img src="/tm_collar.png" alt="Featured Banner" />
          <div class="text-block">
            <h2> COMING SOON</h2>
            <div class="line"></div>
            <div class="text">Be patient, as there will be completely new product for the Thrustmaster products, such as a ring collar, magnectif shifter and wheel customization !
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
};
</script>

<style scoped>
.home {
}

.section1 {
  padding: 15px;
  background-color: #050714be;
}
.section1 .text-block {
  color: azure;
  padding-bottom: 0px;
}

.section1 .text-block .text {
  max-width: 50%;
  text-align: left;
}
.section1 .text-block .line {
  margin: 10px 0px 10px 0px;
  /* position: absolute; */
  width: 10%;
  height: 2px;
  background-color: azure;
  box-shadow: 0 2px 4px rgba(255, 255, 255, 0.5); 
}

.section1 img {
  width: 40%;
  height: 30%;
}

.section1-button{
  margin-top: 30px;
  padding: 20px;
  background-color: #050714ad;
  border-radius: 5px;
  text-align: center;
  max-width: 20%;
}
.section1-button:hover{
  background-color: #7e7e7e;
  cursor: pointer;
}

.section2 {
  padding: 20px;
  background-color: rgb(247, 247, 247);
} 
.section2 img{
  margin-left: 5%;
  width: 30%;
  height: 30%;
}

.section2 .text-block {
  color: rgb(8, 8, 8);
  padding-bottom: 0px;
  padding-left: 60px;
}

.section2 .text-block .text {
  max-width: 50%;
  text-align: left;
}
.section2 .text-block .line {
  margin: 10px 0px 10px 0px;
  /* position: absolute; */
  width: 6%;
  height: 2px;
  background-color: rgb(165, 0, 0);
  box-shadow: 0 2px 4px rgba(158, 0, 0, 0.5); 
}

.content {
  display: flex;
  align-items: center;
  /* border: 1px solid #ccc; */
}
</style>