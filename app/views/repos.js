var $ = require('jquery-browserify');
var _ = require('underscore');
var Backbone = require('backbone');
var templates = require('../../dist/templates');

module.exports = Backbone.View.extend({
  template: _.template(templates.repo),

  initialize: function(options) {
    this.model = options.model;
  },

  render: function(collection, options) {
    this.$el.empty();

    collection.each((function(repo, index) {
      this.$el.append(this.template(repo.attributes));
    }).bind(this));

    return this;
  }
});
