<template>
  <div class="Shopping-cart-area pb-80">
		    <div class="container">
		        <div class="row">
		            <div class="col-12">
		                <form action="#">
		                    <div class="table-content table-responsive">
		                        <table class="table">
		                            <thead>
		                                <tr>
		                                    <th class="indecor-product-remove">remove</th>
		                                    <th class="indecor-product-thumbnail">images</th>
		                                    <th class="cart-product-name">Product</th>
		                                    <th class="indecor-product-price">Unit Price</th>
		                                    <th class="indecor-product-quantity">Quantity</th>
		                                    <th class="indecor-product-subtotal">Total</th>
		                                </tr>
		                            </thead>
		                            <tbody>
		                                <tr>
		                                    <td class="indecor-product-remove"><a href="#"><i class="fa fa-times"></i></a></td>
		                                    <td class="indecor-product-thumbnail"><a href="#"><img src="img/cart/cart1.jpg" alt=""></a></td>
		                                    <td class="indecor-product-name"><a href="#">Aliquam lobortis est</a></td>
		                                    <td class="indecor-product-price"><span class="amount">$70.00</span></td>
		                                    <td class="indecor-product-quantity">
		                                        <input value="1" type="number">
		                                    </td>
		                                    <td class="product-subtotal"><span class="amount">$70.00</span></td>
		                                </tr>
		                                <tr>
		                                    <td class="indecor-product-remove"><a href="#"><i class="fa fa-times"></i></a></td>
		                                    <td class="indecor-product-thumbnail"><a href="#"><img src="img/cart/cart2.jpg" alt=""></a></td>
		                                    <td class="indecor-product-name"><a href="#">Cras neque metus</a></td>
		                                    <td class="indecor-product-price"><span class="amount">$60.50</span></td>
		                                    <td class="indecor-product-quantity">
		                                        <input value="1" type="number">
		                                    </td>
		                                    <td class="product-subtotal"><span class="amount">$60.50</span></td>
		                                </tr>
		                            </tbody>
		                        </table>
		                    </div>
		                    <div class="row">
		                        <div class="col-12">
		                            <div class="coupon-all">
		                                <div class="coupon">
		                                    <input id="coupon_code" class="input-text" name="coupon_code" value="" placeholder="Coupon code" type="text">
		                                    <input class="button" name="apply_coupon" value="Apply coupon" type="submit">
		                                </div>
		                                <div class="coupon2">
		                                    <input class="button" name="update_cart" value="Update cart" type="submit">
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                    <div class="row">
		                        <div class="col-md-5 ml-auto">
		                            <div class="cart-page-total">
		                                <h2>Cart totals</h2>
		                                <ul>
		                                    <li>Subtotal <span>$130.00</span></li>
		                                    <li>Total <span>$130.00</span></li>
		                                </ul>
		                                <a href="#">Proceed to checkout</a>
		                            </div>
		                        </div>
		                    </div>
		                </form>
		            </div>
		        </div>
		    </div>
		</div>
</template>

<script>
export default {
  name: 'cart'
}
</script>

<style>

</style>
