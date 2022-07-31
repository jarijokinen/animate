# animate

A zero-dependency, vanilla JavaScript library for animating elements when they
appear in the viewport.

## Installation

NPM:

    npm install @jarijokinen/animate

Yarn:

    yarn add @jarijokinen/animate

## Usage

    import { animate } from '@jarijokinen/animate';

    document.addEventListener('DOMContentLoaded', () => {
      animate();
    });

## Configuration

    const options = {
      elements: document.querySelectorAll('.animate'),
      class: 'fade-in-up'
    };

    animate(options);

## License

MIT License. Copyright (c) 2022 [Jari Jokinen](https://jarijokinen.com).  See
[LICENSE](https://github.com/jarijokinen/animate/blob/main/LICENSE.txt)
for further details.
