/* Goal: desktop.js */

(function ($, PLUGIN_ID) {
  'use strict';

  var CONFIG = kintone.plugin.app.getConfig(PLUGIN_ID); // Get Plug-in configurations
  if (!CONFIG) {
    return false;
  }

  var TABLEFIELD, NUMBERFIELD;
  var disableEvents; // Disable Number fields during these Events
  var numberEvents; // Number the Table rows during these Events
  var row; // Keeps track of row

  var BUTTONFIELD, SORT_BY, ORDER_BY;
  var sortEvents; // Sort the rows during these Events

  TABLEFIELD = CONFIG.table; // Field code of the Table
  NUMBERFIELD = CONFIG.number; // Field code of Number field in the Table
  disableEvents = [
    'app.record.edit.show',
    'app.record.create.show',
    'app.record.edit.change.' + TABLEFIELD,
    'app.record.create.change.' + TABLEFIELD
  ];

  kintone.events.on(disableEvents, function (event) {
    var record = event.record;

    // Disable the Number fields to prevent user input
    var count = record[TABLEFIELD].value.length;
    for (row = 0; row < count; row++) {
      record[TABLEFIELD].value[row].value[NUMBERFIELD].disabled = true;
    }
    return event;
  });

  numberEvents = [
    'app.record.create.submit',
    'app.record.edit.submit'
  ];
  kintone.events.on(numberEvents, function (event) {
    var record = event.record;

    // Insert the row number into the Number field
    var count = record[TABLEFIELD].value.length;
    for (row = 0; row < count; row++) {
      record[TABLEFIELD].value[row].value[NUMBERFIELD].value = row + 1;
    }

    return event;
  });

  // Sorting function setup

  sortEvents = [
    'app.record.edit.show',
    'app.record.create.show',
  ];

  BUTTONFIELD = CONFIG.button;
  SORT_BY = CONFIG.sortBy;
  ORDER_BY = CONFIG.sortOrder;

  function sorting() {
    var obj = kintone.app.record.get();

    // Sort the Table by the selected field's value
    obj.record[TABLEFIELD].value.sort(function (a, b) {
      if (ORDER_BY === 'asc') {
        if (a.value[SORT_BY].value < b.value[SORT_BY].value) return -1;
        if (a.value[SORT_BY].value > b.value[SORT_BY].value) return 1;
      }

      if (ORDER_BY === 'desc') {
        if (a.value[SORT_BY].value < b.value[SORT_BY].value) return 1;
        if (a.value[SORT_BY].value > b.value[SORT_BY].value) return -1;
      }
      return 0;
    });

    kintone.app.record.set(obj);
  }

  kintone.events.on(sortEvents, function (event) {

    // Sort the rows when the button is clicked
    var $button = kintone.app.record.getSpaceElement(BUTTONFIELD);
    $('<input>').attr({
      type: 'button',
      value: 'Sort',
      id: 'sort'
    }).appendTo($button);
    $('#sort').click(sorting);

    return event;
  });
})(jQuery, kintone.$PLUGIN_ID);