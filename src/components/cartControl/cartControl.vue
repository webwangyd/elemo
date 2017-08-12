<template>
    <div class="cartControl">
    	<div class="cart-decrease icon-remove_circle_outline" v-show="food.count>0" @click.stop.prevent="decreaseCart"></div>
    	<div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    	<div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
    </div>
</template>

<script type="ecmascript-6">
	// import Vue from 'Vue';
    export default {
    	props:{
    		food: {
    			type: Object
    		}
    	},
    	methods: {
    		addCart(event) {
				if(!event._constructed){
					return;
				}
				if (!this.food.count) {
					this.$set(this.food,'count', 1);
				} else {
					this.food.count++;
				}
    		},
    		decreaseCart(event){
    			if(!event._constructed){
    				return;
    			}
    			if (this.food.count) {
    				this.food.count--;
    			}
    		}
    	}
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .cartControl
    	font-size: 0
    	.cart-decrease, .cart-add
    		display: inline-block
    		font-size: 24px
    		line-height: 24px
    		padding: 6px
    		color: rgb(0, 160, 220)
    	.cart-count
    		display: inline-block
    		vertical-align: top
    		width: 12px
    		padding-top: 6px
    		line-height: 24px
    		text-align: center
    		font-size: 10px
    		color: rgb(147, 153, 159)
    	.cart-add
    		display: inline-block
</style>