
# select

  Select utility

## Installation

    $ component install component/select

## API

### select(array, fn)

  Filter `array` returning a new array:

```js
users = select(users, function(user){
  return user.age > 20;
});
```

# License

  MIT
