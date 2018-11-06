<template>
  <div class="canvas">
    <div v-for="(item, key) in 30" :key="key" class="bubble"></div>
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
  opacity: 0
  transition: opacity .5s
  position absolute

for $i in (1..30)

  .bubble
    &:nth-child({$i})
      background: radial-gradient(ellipse at bottom, rgba(27, 113, 255, 0.0001) 0%,#1B71FF 100%)
      width: random(5, 60)px
      height: @width
      right: random(1, 100)vw
      bottom: random(30%, 100%)
      opacity: .8
      transition: opacity 1s
      transform: translate(random(0,-50%), -50%)
      animation move+$i infinite randomT(5, 10)

  @keyframes move{$i}
    0%
      right: 30%
      top: random(30%, 50%)
    100%
      right: random(0, 700)px
      top: random(0, 200)px
      transform: translate(random(-100, -200)px, 0)
      opacity 0

@media screen and (max-width: 576px) 
  .canvas
    height 100vh
    width 100vw
    position relative
    overflow hidden

  .bubble
    display block
    // background: radial-gradient(ellipse at top right, #b8c6c6 0%,#30b3d3 46%,#20628c 100%)
    border-radius: 100%
    opacity: .8
    position absolute

  for $i in (1..30)

    .bubble
        &:nth-child({$i})
          background: radial-gradient(ellipse at bottom, rgba(27, 113, 255, 0.0001) 0%,#1B71FF 100%)
          width: random(5, 50)px
          height: @width
          left: random(1, 100)vw
          bottom: random(1, 100)vh
          animation move+$i infinite randomT(7, 15)

      @keyframes move{$i}
        0%
          bottom: -100px

        100%
          bottom: random(80, 100)vh
          transform: translate(random(-100, 200)px, 0)
          opacity 0

</style>
