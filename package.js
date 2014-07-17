
Package.describe({
  summary: "Mediator subscribe to and publish messages"
});

Package.on_use(function (api) {
  api.use('coffeescript', ["client", "server"]);
  api.use('deps', 'client');
  api.use('underscore', 'client');

  api.add_files("mediator.coffee", ["client", "server"]);

  api.export('Mediator');
});
