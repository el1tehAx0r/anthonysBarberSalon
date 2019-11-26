module.exports = {
    if: function (conditional, option) {
        if (conditional) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}
};
