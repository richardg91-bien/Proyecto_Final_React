import purgecssPlugin from '@fullhuman/postcss-purgecss';
import autoprefixer from 'autoprefixer';

const purgecss = purgecssPlugin.default || purgecssPlugin;

export default {
  plugins: [
    purgecss({
      content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
      ],
      // Safelist para clases dinámicas de Bootstrap y otras librerías
      safelist: {
        standard: [
          /^btn-/,
          /^text-/,
          /^bg-/,
          /^border-/,
          /^alert-/,
          /^badge-/,
          /^card-/,
          /^nav-/,
          /^navbar-/,
          /^spinner-/,
          /^modal-/,
          /^toast-/,
          /^dropdown-/,
          /^table-/,
          /^form-/,
          /^pagination-/,
          /^bi-/,
          /^show$/,
          /^active$/,
          /^disabled$/,
          /^collapse$/,
          /^collapsing$/,
          /^fade$/,
          /^d-/,
          /^flex-/,
          /^justify-/,
          /^align-/,
          /^m-/,
          /^p-/,
          /^w-/,
          /^h-/,
          /^position-/,
          /^top-/,
          /^start-/,
          /^end-/,
          /^translate-/,
        ],
        deep: [
          /Toastify/,
          /toast/,
        ],
        greedy: [
          /^col-/,
          /^row/,
          /^container/,
        ],
      },
      // No eliminar estas propiedades CSS
      variables: true,
      keyframes: true,
    }),
    autoprefixer(),
  ],
};
