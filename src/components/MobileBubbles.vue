<template>
  <div class="canvas">
    <div v-for="(item, key) in 20" :key="key" class="bubble"></div>
  </div>
</template>

<style lang="stylus">
random(min,max)
  return floor(math(0, 'random')*(max - min + 1) + min)

randomT(min,max)
  return floor(math(0, 'random')*(max - min + 1) + min)s

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

for $i in (1..20)

  .bubble
    &:nth-child({$i+"bubble"})
      background: radial-gradient(ellipse at bottom, rgba(27, 113, 255, 0.0001) 0%,#1B71FF 100%)
      width: random(5, 50)px
      height: @width
      left: random(1, 100)vw
      bottom: random(1, 100)vh
      animation move+$i infinite randomT(3, 15)

  @keyframes move{$i+"bubble"}
    0%
      bottom: -100px

    100%
      bottom: random(0, 100)vh
      transform: translate(random(-100, 200)px, 0)
      opacity 0
    
</style>
