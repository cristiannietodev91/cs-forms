# CS system design

[![Auto Release](https://img.shields.io/badge/release-auto.svg?colorA=888888&colorB=9B065A&label=auto)](https://github.com/intuit/auto) [![Coverage Status](https://coveralls.io/repos/github/cristiannietodev91/cs-forms/badge.svg?branch=main)](https://coveralls.io/github/cristiannietodev91/cs-forms?branch=main)


System design library created with React and Storybook. 


It is a design system created by Cristian Nieto. It is used to learn the design system flow using storybook and for using
the created components in my additional projects [Branch](https://github.com/cristiannietodev91/branch) and 
[portfolio](https://github.com/cristiannietodev91/crisnietodev)

### Install

```
npm install @cristian.nieto.dev/cs-forms
```

### Usage

#### Fonts

This library trusts in Exo2 google font which is not imported directly in our library to keep the performance.

You can import it in your project using css

```html
<style>
@import url('https://fonts.googleapis.com/css2?family=Exo+2&display=swap');
</style> 
```

or in the html header

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Exo+2&display=swap" rel="stylesheet"> 
```

### Components

Import the component that you want to use.

```jsx
import React from 'react'
import { Button } from "@cristian.nieto.dev/cs-forms";

export const Page = () => {
    return (
        <div >
            <Button variant="primary" size="lg">Text</Button>
        </div>
    )
}
```

