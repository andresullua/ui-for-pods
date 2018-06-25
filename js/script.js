var uiForPods;

jQuery(function($) {
  uiForPods = new UiForPods();
});

var UiForPods = function() {
  var _ = this;
  var form = '.pods-form table.form-table';
  var prefix = 'pods_';

  var add_css = {
    title: prefix + 'title_',
    placeholder: prefix + 'placeholder_',
    hidden_input: prefix + 'hidden_input',
    select: prefix + 'select',
    onselect: prefix + 'onselect'
  };

  this.init = function() {
    title();
    placeholder();
    hidden_input();
    horizontal_rule();
    select();
    jQuery(form).show();
  };

  var title = function() {
    jQuery("label[class*='" + add_css.title + "']").each(function(e) {
      var $this = jQuery(this);
      var $tr = jQuery(this).closest('tr');
      var classes = $this.attr('class');
      var classes_array = classes.split(" ");
      var options = [];
      for(var i in classes_array){
        if(classes_array[i].indexOf(add_css.onselect) > -1){
          options.push(classes_array[i]);
        }
      }
      var raw_title = classes.slice(classes.indexOf(add_css.title)).replace(add_css.title, '');
      var title = getCleanText(raw_title);
      var id = 'title-' + e;
      if (title) {
        $this.removeClass(add_css.title + raw_title);
        $tr.attr('id', id);
        $tr.addClass('field-with-title');
        var title_class = "title";
        for(var i in options){
          title_class+= " "+options[i];
        }
        jQuery('<h3 class="' + title_class + '" for="' + id + '">' + title + '</h3>').insertBefore($tr);
      }
    });
  };

  var placeholder = function() {
    jQuery("label[class*='" + add_css.placeholder + "']").each(function() {
      var $this = jQuery(this);
      var $tr = $this.closest('tr');
      var classes = $this.attr('class');
      var raw_placeholder = classes.slice(classes.indexOf(add_css.placeholder)).replace(add_css.placeholder, '');
      var placeholder = getCleanText(raw_placeholder);
      if (placeholder) {
        $this.removeClass(add_css.placeholder + raw_placeholder);
        $tr.find('input').attr('placeholder', placeholder);
      }
    });
  };

  var horizontal_rule = function() {
    jQuery("label[class*='" + add_css.horizontal_rule + "']").each(function() {
      var $this = jQuery(this);
      var $tr = $this.closest('tr');
      $this.removeClass(add_css.horizontal_rule);
      jQuery('<tr class="' + add_css.horizontal_rule + '"><th></th><td></td></tr>').insertAfter($tr);
    });
  };

  var hidden_input = function() {
    jQuery("label[class*='" + add_css.hidden_input + "']").each(function() {
      var $this = jQuery(this);
      var $tr = $this.closest('tr');
      $this.removeClass(add_css.hidden_input);
      $tr.find('td').addClass(add_css.hidden_input);
    });
  };

  var select = function() {
    jQuery("select[class*='" + add_css.select + "']").each(function() {
      var $this = jQuery(this);
      var classes = $this.attr('class');
      var value = this.value;
      var raw_select = classes.slice(classes.indexOf(add_css.select)).replace(add_css.select, '');
      var select = getCleanText(raw_select);
      if (select) {
        selectFields(value);
        $this.on('change', function(e) {
          selectFields(this.value);
        });
      }
    });
  };

  //helpers
  function getCleanText(text) {
    if (text.indexOf(prefix) > -1) {
      text = text.replace(text.slice(text.indexOf(prefix)), '');
    }
    var start_pos = text.indexOf('{') + 1;
    var end_pos = text.indexOf('}', start_pos);
    var text_to_get = text.substring(start_pos, end_pos)
    return text_to_get;
  };

  function selectFields(value) {
    jQuery(form).find("[class*='" + add_css.onselect + "']").closest('tr').addClass('hidden_field');
    jQuery(form).find("h3[class*='" + add_css.onselect + "']").addClass('hidden_field');
    if (value) {
      jQuery(form).find("." + add_css.onselect + "_" + value).closest('tr').removeClass('hidden_field');
      jQuery(form).find("h3." + add_css.onselect + "_" + value).removeClass('hidden_field');
    }
  };

  this.init();

}