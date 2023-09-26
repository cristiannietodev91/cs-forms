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


Import the library styles globally. **(React example).**

<h5 a><strong><code>App.js</code></strong></h5>
```jsx
import '@cristian.nieto.dev/cs-forms/dist/css/styles.css'
```

Implement the component 

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

That's it! You are using cs-forms Cristian's library.
