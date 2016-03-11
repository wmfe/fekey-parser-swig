'use strict';

module.exports = function (content, file, settings) {
    content = content.toString().replace(/"/g,'\"').replace(/\n/g, "");
    return content;
};