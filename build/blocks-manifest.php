<?php
// This file is generated. Do not modify it manually.
return array(
	'learn-wpvip-callout-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 2,
		'name' => 'learn-wpvip/callout',
		'version' => '0.1.0',
		'title' => 'Callout Block',
		'category' => 'design',
		'icon' => 'marker',
		'description' => 'Add a color-coded callout to your post.',
		'supports' => array(
			'align' => true,
			'spacing' => array(
				'margin' => array(
					'top',
					'bottom'
				),
				'padding' => true,
				'blockGap' => false
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true
			)
		),
		'attributes' => array(
			'content' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.wp-block-learn-wpvip-callout__content',
				'multiline' => 'p'
			),
			'type' => array(
				'type' => 'string',
				'default' => 'tip',
				'enum' => array(
					'alert',
					'info',
					'warning',
					'tip',
					'success'
				)
			)
		),
		'example' => array(
			'attributes' => array(
				'type' => 'alert',
				'content' => '<p>This is an alert callout.</p>'
			)
		),
		'textdomain' => 'learn-wpvip',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css'
	)
);
