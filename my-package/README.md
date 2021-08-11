# @switchfly/my-package

Test npm scoped package for npm public registry.  This is a HYBRID node module that allows for both CommonJS and ESM use cases.

To use via terminal:

```
npm install @switchfly/my-package
```

To consume in your test.js file (using CommonJS way):

```
// require using commonjs vi myPkg const variable
const myPkg = require('@switchfly/my-package');
myPkg.hi();  // say hi on the console
```

To consume in your test.js file (using ESM way):

```
// import using ES modules via myPkg object
import * as myPkg from '@switchfly/my-package';
myPkg.hi();
```

testing with node via command line (node only allows imports from within modules):

```
node -r esm <test js file name>
```

