
---
title: Upgrading to Webpack 4 
date: 2018-06-06
---

https://github.com/L1fescape/ak.gg/commit/a6865f046e0295ba4a138577d21931996c55d50e


```
WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/
```

```
-    "build": "yarn && webpack",
-    "dev": "yarn && webpack-dev-server --hot --inline",
+    "build": "yarn && webpack --mode=production",
+    "dev": "yarn && webpack-dev-server --hot --inline --mode=development",
```


https://github.com/s-panferov/awesome-typescript-loader/issues/541
https://github.com/s-panferov/awesome-typescript-loader/issues/560
