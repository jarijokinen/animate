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

## CSS animation class example

    @keyframes fadeInUp {
      0% { opacity: 0; }
      50% { opacity: 0; transform: translateY(80px); }
      100% { opacity: 1; transform: translateY(0px);  }
    }
    .fade-in-up {
      animation: fadeInUp 500ms ease-in-out;
    }

## License

MIT License. Copyright (c) 2022 [Jari Jokinen](https://jarijokinen.com).  See
[LICENSE](https://github.com/jarijokinen/animate/blob/main/LICENSE.txt)
for further details.
