/* Starting_Point: desktop.js */

(function (PLUGIN_ID) {
  'use strict';

  var CONFIG = kintone.plugin.app.getConfig(PLUGIN_ID); // Get Plug-in configurations
  if (!CONFIG) {
    return false;
  }

  var TABLEFIELD, NUMBERFIELD;
  var disableEvents; // Disable Number fields during these Events
  var numberEvents; // Number the Table rows during these Events
  var row; // Keeps track of row

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
})(kintone.$PLUGIN_ID);