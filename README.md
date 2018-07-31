# Electron - Using preact - No Webpack

To make Electron work with preact from sratch and with the least extraneous overhead possible I pretty much only have to make sure Babel transforms the JSX before calling in Electron.

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

I can. Check out the "clock" example.

## Require paths are weird
In my index.js I need to require clock.js. If I require './clock.js' it doesn't work at all. It looks like babel is transforming the paths for some reason.

I don't get it.

## Can I use the material components from Preact?
I don't think so, they probably use ES6 imports.

In fact the more pressing issue is that you need to import styles. I'd have to do that in my HTML page, it's not impossible, just a little dirty.

## Restructurer tous les répertoires
Il faudrait un répertoire pour mettre les .js liés à Electron et un autre pour tout ce qui est lié au renderer.

Dans un autre projet j'avais appelé ça "views".

Idem, plutôt que "dist" pour les JS transpilé il faudrait utiliser "lib".

## Les composants doivent avoir une majuscule
Mes noms de fichier composants sont foireux, par convention ils sont supposés commencer par une majuscule.