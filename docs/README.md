# [WhatsNew.js](https://bennyluk.github.io)

WhatsNew.js is a plugin that **customize**

## Table of Contents

* [Quick Start](#quick-start)
* [Dependencies](#dependencies)
* [License](#license)

## Quick Start

1. Add WhatNew.js to your site document's `head`
```html
<link href="whatsNew.min.css" rel="stylesheet">
<script src="whatsNew.min.js"></script>
```
2. Once the page loads, initialize a new WhatsNew. The first argument is the data and the (optional) second is extra options. Examine the [API](https://bennyluk.github.io) or [Examples](https:bennyluk.github.io) for a detailed usage of the plugin. Once initialize, it will return a WhatsNew object.
```js
  var whatsNewSteps = new WhatsNew([
    {
      title: "First Slide",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Big_Bear_Valley%2C_California.jpg/1200px-Big_Bear_Valley%2C_California.jpg",
      content: "Hello World !"
    },
    {
      title: "Second Slide",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Big_Bear_Valley%2C_California.jpg/1200px-Big_Bear_Valley%2C_California.jpg",
      content: "This is the second slide !",
    }
  ]);
```

3. Last but not last, start the WhatsNew once ready.
```js
  whatsNewSteps.start();
```

## Dependencies

#### jQuery
Not Needed ~ Vanilla JS :P

##### Browser Support
WhatsNew.js has been tested and works on `IE 9+`, `Chrome 32+`, `Firefox 32+` and `Safari 9+`

## License
WhatNew.js is [licensed](https://bennyluk.github.io) under the MIT license.
