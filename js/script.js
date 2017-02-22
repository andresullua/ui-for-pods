var uiForPods;
jQuery(function($){
  uiForPods = new UiForPods();
});

var UiForPods = function(){
  var _ = this;
  var form = '.pods-form';
  
  var add_css = {
    title: 'pods_title_'
  }
  
  this.init = function(){
    titles();
    jQuery(form).show();
  }

  var titles = function(){
    jQuery("label[class*='"+add_css.title+"']").each(function(e){
      var $this = jQuery(this);
      var $tr = jQuery(this).closest('tr');
      var classes = $this.attr('class');
      var title = classes.slice(classes.indexOf(add_css.title)).replace(add_css.title,'').replace(/-/g, " ");
      var id = 'title-'+e;
      if(title){
        $this.removeClass(add_css.title+title);        
        $tr.attr('id', id);
        jQuery('<h3 class="title" for="'+id+'">'+title+'</h3>').insertBefore($tr);
      }
    });
  }

  this.init();

}