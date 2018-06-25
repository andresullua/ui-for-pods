<?php
/**
* Plugin Name: UI for Pods Framework
* Plugin URI: https://github.com/andresullua/ui-for-pods
* Description: UI improvements for Pods Framework.
* Version: 0.4.4
* Author: Andrés Ullúa
* Author URI: https://github.com/andresullua/
* License: GPLv3
*/


add_action('admin_enqueue_scripts', 'load_ui_for_pods');

function load_ui_for_pods() {
  //css
  wp_register_style('ui_for_pods_css', plugin_dir_url(__FILE__).'css/style.css', array(), '0.4.2', false);
  wp_enqueue_style('ui_for_pods_css' );
  //js
  wp_register_script('ui_for_pods_js', plugin_dir_url(__FILE__).'js/script.js', array('jquery','pods-dfv'), '0.4.2', true);
  wp_enqueue_script('ui_for_pods_js'); 
}