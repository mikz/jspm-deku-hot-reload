SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json"
  ],
  globalEvaluationScope: false,
  transpiler: "plugin-babel",

  map: {
    "plugin-babel": "github:systemjs/plugin-babel@master"
  },

  packages: {
    "app": {
      "format": "esm"
    }
  }
});