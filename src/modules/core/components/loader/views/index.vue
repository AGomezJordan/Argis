<template>
  <q-page class="flex flex-center loader-container">
    <div class="loadingio-spinner-dual-ball-j1ks27h7qd">
    <div class="ldio-qin869tsjf">
    <div></div><div></div><div></div>
    </div></div>
  </q-page>
</template>
<script>
export default {
  name: 'loader',
}
</script>
<style lang="css" scoped>
.loader-container {
  position: absolute;
  left: 50%;
}
@keyframes ldio-qin869tsjf-o {
  0%    { opacity: 1; transform: translate(0 0) }
  49.99% { opacity: 1; transform: translate(80px,0) }
  50%    { opacity: 0; transform: translate(80px,0) }
  100%    { opacity: 0; transform: translate(0,0) }
}
@keyframes ldio-qin869tsjf {
    0% { transform: translate(0,0) }
   50% { transform: translate(80px,0) }
  100% { transform: translate(0,0) }
}
.ldio-qin869tsjf div {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  top: 60px;
  left: 20px;
}
.ldio-qin869tsjf div:nth-child(1) {
  background: #2c4459;
  animation: ldio-qin869tsjf 1s linear infinite;
  animation-delay: -0.5s;
}
.ldio-qin869tsjf div:nth-child(2) {
  background: #04bf7b;
  animation: ldio-qin869tsjf 1s linear infinite;
  animation-delay: 0s;
}
.ldio-qin869tsjf div:nth-child(3) {
  background: #2c4459;
  animation: ldio-qin869tsjf-o 1s linear infinite;
  animation-delay: -0.5s;
}
.loadingio-spinner-dual-ball-j1ks27h7qd {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: #ffffff;
}
.ldio-qin869tsjf {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-qin869tsjf div { box-sizing: content-box; }
</style>