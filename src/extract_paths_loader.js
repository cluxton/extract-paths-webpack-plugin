module.exports = function(content, map, meta) {
    // Flag the module to be included in the path list
    this[__dirname]();

    // Return an empty file
    return "";
};