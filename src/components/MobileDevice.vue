<template lang="">
    
  <div class="relative mx-auto h-[700px] w-[400px] rounded-[2.5rem] border-[14px] border-gray-300 bg-gray-300 dark:border-gray-800 dark:bg-gray-800">
  <div class="absolute -left-[17px] top-[72px] h-[32px] w-[3px] rounded-l-lg bg-gray-300 dark:bg-gray-800"></div>
  <div class="absolute -left-[17px] top-[124px] h-[46px] w-[3px] rounded-l-lg bg-gray-300 dark:bg-gray-800"></div>
  <div class="absolute -left-[17px] top-[178px] h-[46px] w-[3px] rounded-l-lg bg-gray-300 dark:bg-gray-800"></div>
  <div class="absolute -right-[17px] top-[142px] h-[64px] w-[3px] rounded-r-lg bg-gray-300 dark:bg-gray-800"></div>

  <div class="col h-[660px] w-[375px] overflow-hidden rounded-[2rem] bg-white dark:bg-gray-800">    
    <slot></slot>
  </div>
</div>
   
</template>

<script>
export default {

}
</script>
<style lang="">
    
</style>