<template>
    <div>11111</div>
</template>

<script>
import { getCategory } from '@/api/strategy'
export default {
  mounted () {
    getCategory().then(res => {
      const { data } = res
      console.log(data)
    })
  }
}
</script>
