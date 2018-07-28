# Electron - Using preact - No Webpack

To make Electron work with preact I pretty much only have to make sure Babel transforms the JSX before calling in Electron.

On their Getting Started page they have info for that: https://preactjs.com/guide/getting-started

Although they provide the means to create your own babelrc, there is this npm package:
```
npm install babel-preset-preact --save-dev
```
And let's also install this:
```
npm install -D babel-cli
```

Now we create a .babelrc file with this content:
```
{
  "presets": [
    "preact"
  ]
}
```

To transpile to a directory (let's create "dist" for that) you need js files. So I split my script to put it inside a .js file.

Next I added this npm script:
```
"compile": "babel -d dist/ src/"
```

The file in dist appears to be transpiled correctly.

Problem is my HTML doesn't have the right script in src.

Can I just transpile the HTML?

I could just have the HTML use files in "dist". And that should work.

-> It works but I can't use "import" in index.js, I guess I don't have the transpile option for that.

But, can I use classes?

## Restructurer tous les répertoires
Il faudrait un répertoire pour mettre les .js liés à Electron et un autre pour tout ce qui est lié au renderer.

Dans un autre projet j'avais appelé ça "views".