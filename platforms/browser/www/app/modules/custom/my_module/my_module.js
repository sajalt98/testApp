/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function my_module_menu(){
  var items = {};
  items['hello_world'] = {
    title : 'Drupal Gap',
    page_callback : 'my_module_hello_world_page'
  };
  
  return items;  
}

function my_module_hello_world_page(){
  var content = {};
  var node = node_load(2881, {
    success: function(node) {
      if (node && node.title) {
        
       
   

   
      
      }
    }
  });
 
  content['my_button'] = {
    theme : 'button',
    text : 'Hello World',
    attributes :{
      onclick : "drupalgap_alert('Hi')"       
    }
  };

  content['my_tag'] =  {
    'theme': 'node',
    // @todo - is this line of code doing anything?
   // 'node': node,
    // @todo - this is a core field and should by fetched from entity.js
    'title': {
      'markup': 'asdfasdfsad'
    },
    'content': {
      'markup': 'asdfasdfsdf'
      }
  };
  return content;
}