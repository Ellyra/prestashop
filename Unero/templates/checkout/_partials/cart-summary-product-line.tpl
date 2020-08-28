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
    {block name='cart_summary_product_line'}
        {* <div class="media-left">
            <a href="{$product.url}" title="{$product.name}">
                <img class="media-object" src="{$product.cover.small.url}" alt="{$product.name}" loading="lazy">
            </a>
        </div> *}
        <div class="media-body">
            <div class="product-info col-md-12">
                <div class="col-md-9">
                    <span class="product-name">{$product.name}</span>
                    <span class="product-quantity">x{$product.quantity}</span>
                </div>
                <div class="col-md-3">
                    <span class="product-price">{$product.price}</span>
                </div>
            </div>
            {hook h='displayProductPriceBlock' product=$product type="unit_price"}
            <div class="col-md-9">
                {foreach from=$product.attributes key="attribute" item="value"}
                    <div class="product-line-info product-line-info-secondary col-md-12 text-muted">
                        <span class="label">{$attribute}:</span>
                        <span class="value">{$value}</span>
                    </div>
                {/foreach}
            </div>
            <br />
        </div>
    {/block}