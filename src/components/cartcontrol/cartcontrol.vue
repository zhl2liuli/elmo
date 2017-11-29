<template>
  <div class="cartcontrol">
    <transition name="move" type="animation">
    <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart">
      <span class="icon-remove_circle_outline rotate-z"></span>
    </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  export default {
    props: {
      food: {
        type: Object
      }
    },
    created() {
      // console.log(this.food);
    },
    methods: {
      addCart() {
        // if (!event._constructed) {
          // return;
        // }
        // console.log('click');
        if (!this.food.count) {
          Vue.set(this.food, 'count', 0);
        }
        this.food.count++;
        // console.log(event.target);
        this.$emit('cartadd', event.target);
      },
      decreaseCart() {
        if (this.food.count) {
          this.food.count--;
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @keyframes move-in {
    0% {
      transform: translate3D(24px, 0, 0)
      opacity: 0
    }
    100% {
      transform: translate3D(0, 0, 0)
      opacity: 1
    }
  }
  
  @keyframes move-out {
    0% {
      transform: translate3D(0, 0, 0)
      opacity: 1
    }
    100% {
      transform: translate3D(24px, 0, 0)
      opacity: 0
    }
  }
  
   @keyframes rotate-in {
    0% {
      transform: rotate(180deg)
      opacity: 0
    }
    100% {
      transform: rotate(0)
      opacity: 1
    }
  }
  
  @keyframes rotate-out {
    0% {
      transform: rotate(0)
      opacity: 1
    }
    100% {
      transform: rotate(180deg)
      opacity: 0
    }
  }
  .cartcontrol
    font-size: 0
    .cart-add
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)
    .cart-count
      display: inline-block
      width: 10px
      padding-top: 6px
      font-size: 10px
      line-height: 24px
      vertical-align: top
    .cart-decrease
      display: inline-block
      padding: 6px
      .rotate-z
        display: inline-block
        line-height: 24px
        font-size: 24px
        color: rgb(0, 160, 220)
      &.move-enter-active
        animation: move-in 0.5s
        .rotate-z
          animation: rotate-in 0.4s
      &.move-leave-active
        animation: move-out 0.4s
        .rotate-z
          animation: rotate-out 0.4s
</style>