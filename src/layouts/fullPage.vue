<!-- fullPage.vue -->
<template>
  <div class="flex-col-center">
    <div class="w-100vw h-30vh bg-#f1bbba flex justify-center items-center">我是页头</div>
    <slot></slot>
    <div class="w-100vw h-30vh bg-#f8ecc9 flex justify-center items-center">我是页尾</div>
  </div>
</template>
