### 🚀 _Comming Soon_:

>We are working to enable a floating button that will let Product Owners and Designers interact with your theme and change it in the browser. **So stay tuned!**

# 🔥 Styled Tools

*Save time, avoid changing your theme.{js,ts} file in order to test a theme change in the browser. **_Styled Tools was created to let you change the theme properties in the browser!_***

This tool was created with the purpose to **enable css-in-js theme debugging in the browser**, so you will be able to change your themes property in the browser in order to speed-up your development process and **will save you from** looking for the name of the theme properties, change one by one and wait for your bundle to transpile all your files again and refresh the browser to see the changes.

### How to use it?

It is pretty straight forward to use the library, you just need to first install it:

```js
npm i styled-tools-core --save
```

then in your theme definition, you can decorate it with the `StyledTools` function, like:

```js
    import StyledTools from "styled-tools-core";

    const { theme, globals } = StyledTools({
        colors: {
            background: "#000",
            primary: "hotpink",
        },
        base: {
            fontSize: "16px",
        },
    });
```

Then you can use your theme normally how your _css-in-js_ library suggest, here I'll use `emotion` **as an example**, but any other _css-in-js_ library will work as well.

In your theme provider, you can include your theme, and also, since the way how we enable the access to the themes variables in the browser is using [css variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), you need to add the globals variables in a global css scope:

```js
<ThemeProvider theme={theme}>
    <Global styles={css`${globals}`} />
      ...
</ThemeProvider>
```

And that is it! You are ready to start rocking and play around with your application theme in the browser!

**If you still have doubts on how to use the library, please check the [examples/index](https://github.com/clovisdasilvaneto/styled-tools/blob/main/examples/basic/src/index.js)** file, from our basic example app 🙂🙃.