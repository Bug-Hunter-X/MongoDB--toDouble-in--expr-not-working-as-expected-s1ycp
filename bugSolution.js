```javascript
const query = {
  $expr: {
    $gt: [ {
      $convert: {
        input: '$price',
        to: 'double',
        onError: 0 // Handle conversion errors
      }
    }, 100 ]
  }
};

db.collection('products').find(query);
```