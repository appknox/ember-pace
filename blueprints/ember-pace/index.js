module.exports = {
  normalizeEntityName: function() {},
  afterInstall: function() {
    return this.addPackageToProject('pace-progressbar');
  }
};
