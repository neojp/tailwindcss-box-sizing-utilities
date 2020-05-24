<p align="center">
    <a href="https://tailwindcss.com/" target="_blank"><img width="200" src="https://tailwindcss.com/img/tailwind.svg"></a><br>
    A utility-first CSS framework for rapidly building custom user interfaces.
</p>

---

<br>

# Tailwind CSS `box-sizing` utilities

This is a Tailwind CSS plugin that adds utilities to modifiy the [CSS Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) property: `box-sizing`. It's useful to override defaults coming from [Preflight](https://tailwindcss.com/docs/preflight/) or [normalize.css](https://github.com/necolas/normalize.css/) or any other [CSS reset](https://meyerweb.com/eric/tools/css/reset/).


**Note:** `box-sizing` utilities were added to [Tailwind 1.2.0](https://github.com/tailwindcss/tailwindcss/releases/tag/v1.2.0) as `.box-border` and `.box-content`.

Maintained by: [Joan Piedra](https://joanpiedra.com) → [@neojp](https://twitter.com/neojp)

## Installation

Install as a node module with either `npm` or `yarn` on your command line

```bash
# Install via npm
npm install --save-dev @neojp/tailwindcss-box-sizing-utilities

# Install via yarn
yarn add --dev @neojp/tailwindcss-box-sizing-utilities
```

Add this module as a plugin on your [Tailwind configuration file](https://tailwindcss.com/docs/configuration#plugins) (`tailwind.config.js`).

```js
module.exports = {
  plugins: [
      require('@neojp/tailwindcss-box-sizing-utilities')
  ]
};
```

### Variants

Note that this plugin allows the usage of variants through the key `boxSizing` and will default to your global variant setting.

```js
module.exports = {
  variants: {
    boxSizing: ['responsive']
  }
};
```

## Usage

Use the Tailwind utility classes provided by this plugin.

```html
<div class="border-box"></div>
<div class="content-box"></div>
```

## About overriding browsers' default `box-sizing`

There is a debate about whether `border-box` is better than `content-box`, and how it should be used by default across projects and browsers. Hence it's been included in several popular CSS libraries as a hard-set default. **Preflight** is one of them.

The browsers' default `box-sizing` value is `content-box`.

Overriding the default to `border-box` with **Preflight** or any other CSS reset can do wonders for your project's code, but it can and probably will wreak havoc to third-party code, plugins, and widgets that expect it to be `content-box`.

This utility should help remediate this scenario:

```html
<div class="content-box">
  <!-- insert third-party code here -->
</div>
```

My personal preference is to avoid **Preflight**, and just use the `.border-box` utility classes as needed.

## Output

Tailwind will be outputed as follows.

```css
.border-box  { box-sizing: border-box; }
.content-box { box-sizing: content-box; }
```

## Contributing

Feel free to [submit an issue](https://github.com/neojp/tailwindcss-box-sizing-utilities/issues) or a [pull request](https://github.com/neojp/tailwindcss-box-sizing-utilities/pulls), and send me a message on Twitter ([@neojp](https://twitter.com/neojp)) about it.

## License
This project has been licensed under [the Hippocratic License](https://firstdonoharm.dev/).