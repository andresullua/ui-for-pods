var uiForPods;
jQuery(function($){
  uiForPods = new UiForPods();
});

var UiForPods = function(){
  var _ = this;
  var form = '.pods-form';
  var prefix  = 'pods_';
  
  var add_css = {
    title: prefix+'title_',
    related: prefix+'related_',
    placeholder: prefix+'placeholder_'
  }
  
  this.init = function(){
    titles();
    placeholder();
    jQuery(form).show();
  }

  var titles = function(){
    jQuery("label[class*='"+add_css.title+"']").each(function(e){
      var $this = jQuery(this);
      var $tr = jQuery(this).closest('tr');
      var classes = $this.attr('class');
      var title = classes.slice(classes.indexOf(add_css.title)).replace(add_css.title,'').replace(/-/g, " ");
      title = title.replace(title.slice(title.indexOf(prefix)),'');
      var id = 'title-'+e;
      if(title){
        $this.removeClass(add_css.title+title);
        $tr.attr('id', id);
        jQuery('<h3 class="title" for="'+id+'">'+title+'</h3>').insertBefore($tr);
      }
    });
  }
  
  var related = function(){
    //name: pods_related_{id}
    jQuery("label[class*='"+add_css.related+"']").each(function(){
      var $this = jQuery(this);
      var $tr	= $this.closest('tr');
      var classes = $this.attr('class');
      var id = classes.slice(classes.indexOf(add_css.related)).replace(add_css.related,'');
      var placeholder = '';
      if(id){
        debugger;
        if(id.indexOf('_') > -1){
          debugger;
          placeholder = "Title";
        }else if( id.indexOf('link_') > -1){
          placeholder = "Link";
          var n = id.replace('link_','');
          if(jQuery('.'+buttonId+'text-'+n).length){
            $this.hide();
          }
        }
      }
      $tr.find('input').attr('placeholder', placeholder);
    })
  }
  
  var placeholder = function(){
    jQuery("label[class*='"+add_css.placeholder+"']").each(function(){
      var $this = jQuery(this);
      var $tr	= $this.closest('tr');
      var classes = $this.attr('class');
      var placeholder = classes.slice(classes.indexOf(add_css.placeholder)).replace(add_css.placeholder,'').replace(/-/g, " ");
      placeholder = placeholder.replace(placeholder.slice(placeholder.indexOf(prefix)),'');
      if(placeholder){
        $this.removeClass(add_css.placeholder+placeholder);
        $tr.find('input').attr('placeholder', placeholder);
      }
    })
  }
  
  
  this.init();

}