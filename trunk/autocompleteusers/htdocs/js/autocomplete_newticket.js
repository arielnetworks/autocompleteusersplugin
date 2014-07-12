jQuery(document).ready(function ($) {
  $("#field-owner").autocomplete("subjects", {
    formatItem: formatItem
  });

  $("#field-cc").autocomplete("subjects", {
    multiple: true,
    formatItem: formatItem,
    delay: 100
  });

  $("input:text#field-reporter").autocomplete("subjects", {
    formatItem: formatItem
  });

  for (var i = 0; i < autocomplete_custom_fields.length; i++) {
    $("#field-" + autocomplete_custom_fields[i]).autocomplete("subjects", {
      formatItem: formatItem
    });
  }

});
