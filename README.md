# citty-repro1

Built-in `showUsage` is not tree-shaking, when put custom `showUsage` at `runMain`.

## step to reproduction

```sh
# install
npm install

# build
npm run build
> citty-repro1@0.0.0 build
> unbuild

ℹ Building citty-repro1  
ℹ Cleaning dist directory: ./dist 
✔ Build succeeded for citty-repro1  
  dist/cli.cjs (total size: 29.3 kB, chunk size: 29.3 kB, exports: showUsage)  
  📦 node_modules/citty/dist/index.mjs (14 kB)
  📦 node_modules/consola/dist/core.mjs (9.79 kB)
  📦 node_modules/consola/dist/utils.mjs (2.79 kB)
  📦 node_modules/consola/dist/browser.mjs (1.75 kB)
  dist/cli.mjs (total size: 28.9 kB, chunk size: 28.9 kB, exports: showUsage) 
  📦 node_modules/citty/dist/index.mjs (14 kB)
  📦 node_modules/consola/dist/core.mjs (9.79 kB)
  📦 node_modules/consola/dist/utils.mjs (2.75 kB)
  📦 node_modules/consola/dist/browser.mjs (1.75 kB)
Σ Total dist size (byte size): 58.2 kB

# grep built-in `showUsage`
cat dist/cli.mjs | grep showUsage\$1
async function showUsage$1(cmd, parent) {
  const showUsage$1$1 = opts.showUsage || showUsage$1;
      await showUsage$1$1(...await resolveSubCommand(cmd, rawArgs));
      await showUsage$1$1(...await resolveSubCommand(cmd, rawArgs));
```
