<template>
  <div style="width: 500px;height: 300px; margin: auto;">
    <div class="lunbo" v-for="(n,i) in bggimg" :src="n" v-if="i==show" :style="n"></div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        bggimg: [],
        show: 0,
        time1:1000,
        time2:5000,
        time3:8000,

      }
    },
    methods: {
      lunbo() {
        var ob = this
        window.setTimeout(function() {
          ob.show = 1
          window.setTimeout(function() {
            ob.show = 2

            window.setTimeout(function() {
              ob.show = 0
              ob.lunbo()
            }, ob.time3)

          }, ob.time2)

        }, ob.time1)
      }
    },
    mounted: function() {
      this.bggimg.push("backgroundImage:url(../../static/n1.jpg)")
      this.bggimg.push("backgroundImage:url(../../static/n2.jpg)")
      this.bggimg.push("backgroundImage:url(../../static/n3.jpg)")
      this.lunbo()
    },

  }
</script>

<style>
.lunbo{
  width: 100%;
  height: 100%;
}
</style>
