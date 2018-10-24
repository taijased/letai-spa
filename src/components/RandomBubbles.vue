<template>
    <div class="canvas">
        <div v-for="(item, key) in 50" :key="key" class="bubble"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
random(min,max)
  return floor(math(0, 'random')*(max - min + 1) + min)
randomT(min,max)
  return floor(math(0, 'random')*(max - min + 1) + min)s

.canvas
  height 100%
  width 100%
  position relative
  overflow hidden
.bubble
  display block
  border-radius: 100%
  opacity: .8
  position absolute

for $i in (1..50)
  
  $bgpos = $i % 2 == 0 ? top right : center

  .bubble
    &:nth-child({$i})
      background: radial-gradient(ellipse at $bgpos, rgba(27, 113, 255, 0.0001) 0%,#004AC4 100%)
      width: random(5, 100)px
      height: @width
      right: random(1, 100)vw
      bottom: random(30%, 50%)
      transform: translate(random(0,-50%), -50%)
      animation move+$i infinite randomT(3, 10)

  @keyframes move{$i}
    0%
      right: 200px
      top: random(30%, 50%)
    100%
      right: random(0, 700)px
      top: random(0, 200)px
      transform: translate(random(-100, -200)px, 0)
      opacity 0
</style>
