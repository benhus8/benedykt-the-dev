# catalog structure:

```plaintext
/app
  `/layout (headers, footers, navigations bars)
    LayoutWithAnimation.jsx
  /components
    /animated
      AnimatedWrapper.jsx
      PageTransition.jsx
    /static
      StaticContent.jsx
  /pages (concrete pages of website)
    index.jsx
    about.jsx
  /shared
    /hooks
      useAnimateOnScroll.js
    /animations
      motionSettings.js
    /styles
      globals.css
```

Locales did with this tutorial: https://hygraph.com/blog/nextjs-internationalization