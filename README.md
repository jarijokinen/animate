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
      class: 'fade-in-up',
      root: null,
      rootMargin: '0px',
      threshold: 0.0
    };

    animate(options);

## CSS animation class example

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translate3d(0, 80px, 0); 
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0); 
      }
    }
    .fade-in-up {
      animation: fadeInUp 500ms ease-in-out;
      animation-fill-mode: both;
    }

## License

MIT License. Copyright (c) 2022 [Jari Jokinen](https://jarijokinen.com).  See
[LICENSE](https://github.com/jarijokinen/animate/blob/main/LICENSE.txt)
for further details.
