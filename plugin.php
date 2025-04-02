<?php
/**
 * Plugin Name: Notice Block
 * Description: Add a color-coded notice to your post.
 */


add_action( 'init', 'register_callout_block', 11 );

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function register_callout_block() {
	register_block_type( __DIR__ . '/build/learn-wpvip-callout-block' );
}