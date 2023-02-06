# url-motion
Animate your browser url and make your website 1000 times more attractive.

### How to use it

First, import by cdn or my installing it

npm:
```
npm install url-motion -D
```

cdn:
```html
<script src="https://cdn.jsdelivr.net/npm/url-motion@latest/dist/index.js"></script>
```

Then, this will be a quite good example of how the API works:
```html
<script>
    window.addEventListener("load", () => {
        console.log(window.PredefinedURLMotions)
        let m = new URLMotion(PredefinedURLMotions.aesthetic(), 500);
        m.start();

        setTimeout(() => {
            m.stop()
        }, 10000);
    })
</script>
```

here's a list of predefined motions: [link](https://github.com/mauro-balades/url-motion/blob/main/src/index.ts#L52)

### Example of sufix and prefix

```js
myCoolFrames = prefix("Loading: ", PredefinedURLMotions.monkeys())
myCoolFrames2 = sufix(" <- loading", PredefinedURLMotions.hearts())
```

### Typescript

Types are generated, your welcome, ts enthusiasts ;)