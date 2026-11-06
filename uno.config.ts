import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWind4,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import presetAnimations from 'unocss-preset-animations'
import { presetShadcn, builtinColors } from 'unocss-preset-shadcn'

export default defineConfig({
  shortcuts: [
    [
      /^tag-(.*)$/,
      ([, c]) =>
        `bg-${c}-50 text-${c}-700 ring-${c}-200 py-1 px-1.5 rounded-md ring-1 ring-inset text-xs font-medium`,
    ],
  ],
  safelist: [
    ...['green', 'red', 'blue', 'yellow', 'orange', 'purple', 'pink', 'cyan', 'gray', 'amber', 'lime', 'emerald', 'teal', 'sky', 'indigo', 'violet', 'fuchsia', 'rose', 'slate', 'zinc', 'neutral', 'stone'].map(color => `tag-${color}`),
  ],
  theme: {
    colors: {},
  },
  presets: [
    presetWind4(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        scale: '1.2',
        display: 'inline-block',
        'vertical-align': 'middle',
        width: '1em',
        height: '1em',
      },
      collections: {
        custom: FileSystemIconLoader('./src/assets/icons'),
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {},
    }),
    presetAnimations(),
    presetShadcn(
      builtinColors.map((c) => ({ color: c })),
      {
        componentLibrary: 'reka',
      },
    ),
  ],
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'src/**/*.{js,ts}',
      ],
    },
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
  rules: [
    [
      /^line-clamp-(\d+)$/,
      ([, n]) => ({
        display: '-webkit-box',
        '-webkit-line-clamp': n,
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden',
      }),
    ],
  ],
})
