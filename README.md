# Meteor-Mediator

Mediator package starting point, forked from DerMambo/meteor-mediator-example

### Example

```js
// subscribe
Deps.autorun(function() {
  var args;
  args = Mediator.subscribe('channel');
  if (args) {
    console.log('Something was published in "channel"', args);
  }
});

// publish
Mediator.publish('channel', 'Some data');

```
