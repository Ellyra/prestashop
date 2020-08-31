{**
* Copyright since 2007 PrestaShop SA and Contributors
* PrestaShop is an International Registered Trademark & Property of PrestaShop SA
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License 3.0 (AFL-3.0)
* that is bundled with this package in the file LICENSE.md.
* It is also available through the world-wide-web at this URL:
* https://opensource.org/licenses/AFL-3.0
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to https://devdocs.prestashop.com/ for more information.
*
* @author PrestaShop SA and Contributors <contact@prestashop.com>
    * @copyright Since 2007 PrestaShop SA and Contributors
    * @license https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
    *}
    {extends file=$layout}

    {block name='content'}
    
        <section id="main">
            <div class="cart-grid row">
                <div class="card-block">
                    <h1 class="h1">{l s='Cart' d='Shop.Theme.Checkout'}</h1>
                    <p>FAIRE UN NAV ICI</p>
                </div>
                <!-- Left Block: cart product informations & shpping -->
                <div class="cart-container">
                    <div class="header-cart-container">
                        <h1> Your cart items </h1>
                    </div>
                    <div class="cart-grid-body col-xs-12 col-md-12 col-lg-12">
                        <div id="table" class="col-xs-12 col-md-12 col-lg-12">
                            <div class="col-xs-6 col-md-6 col-lg-6">
                                <p> Product </p>
                            </div>
                            <div class="col-xs-1 col-md-1 col-lg-1">
                                <p> Price </p>
                            </div>
                            <div class="col-xs-2 col-md-2 col-lg-2">
                                <p> Quantity </p>
                            </div>
                            <div class="col-xs-1 col-md-1 col-lg-1">
                                <p> Total </p>
                            </div>
                        </div>
                        <!-- cart products detailed -->
                        <div class="card cart-container">
    
                            {*
                            <hr class="separator"> *}
                            {block name='cart_overview'}
                                {include file='checkout/_partials/cart-detailed.tpl' cart=$cart}
                            {/block}
                        </div>
                        {*------ CONTINUE SHPPOING ---------*}
                        {block name='continue_shopping'}
                            <div class="continu-shopping">
                                <a class="btn btn-primary" href="{$urls.pages.index}">
                                    <i class="material-icons">arrow_back</i>{l s='Continue shopping' d='Shop.Theme.Actions'}
                                </a>
                            </div>
                        {/block}
    
                        <!-- shipping informations -->
                        {block name='hook_shopping_cart_footer'}
                            {hook h='displayShoppingCartFooter'}
                        {/block}
                    </div>
    
                    <!-- Right Block: cart subtotal & cart total -->
                    <div class="cart-grid-right col-xs-12 col-md-12 col-lg-12">
                        {block name='cart_coupon'}
                            <div class="cart_coupon col-md-4">
        
                            </div>
                        {/block}
                        {block name='calculate-shipping'}
                            <div class="calculate-shipping col-md-4">
                                {block name='hook_reassurance'}
                                    {hook h='displayReassurance'}
                                {/block}
                            </div>
                        {/block}
                        {block name='cart_summary'}
                            <div class="cart-summary col-md-4">
                                <div class="cart-summary-inner">
        
                                    {block name='hook_shopping_cart'}
                                        {hook h='displayShoppingCart'}
                                    {/block}
        
                                    {block name='cart_totals'}
                                        {include file='checkout/_partials/cart-detailed-totals.tpl' cart=$cart}
                                    {/block}
                                </div>
                                {block name='cart_actions'}
                                    {include file='checkout/_partials/cart-detailed-actions.tpl' cart=$cart}
                                {/block}
                            </div>
                        {/block}
    
                    </div>
                </div>
            </div>
        </section>
    {/block}