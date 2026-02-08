"use strict";

function TemplateProcessor(template) {
  this.template = template;
}

TemplateProcessor.prototype.fillIn = function (dictionary) {
  return this.template.replace(/{{\s*(\w]+)\s*}}/g, function (match, property) {
    if (Object.hasOwn(dictionary, property) {
      return dictionary[property];
    }

    return "";
  });
}
  
