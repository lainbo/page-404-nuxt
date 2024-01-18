import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'flex-c': 'flex items-center justify-center',
      'flex-y-c': 'flex items-center',
      'grid-c': 'grid place-items-center',
      'absolute-x-center': 'absolute left-0 right-0 m-inline-auto w-fit',
      'absolute-y-center': 'absolute top-0 bottom-0 m-block-auto h-fit',
      'absolute-center': 'absolute inset-0 m-auto w-fit h-fit',
      'icon-btn': 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none',
    },
    [/^horizontal-place-(.*)$/, ([, c]) => `flex items-center space-x-${c}`],
  ],
  rules: [
    [
      /^transition-cusbezier-(\d+)$/,
      ([, d]) => ({ transition: `all ${d}ms var(--ani-bezier)` }),
      { autocomplete: 'transition-cusbezier-400' },
    ],
  ],
  presets: [
    presetUno(),
    presetWebFonts({
      fonts: {
        provider: 'bunny',
        Inter: [{ name: 'Inter', weights: ['500'] }],
      },
    }),
    presetAttributify(),
    presetIcons({
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  variants: [
    (matcher) => {
      if (!matcher.startsWith('I_'))
        return matcher

      return {
        matcher: matcher.slice(2),
        body: (body) => {
          body.forEach(v => v[1] && (v[1] += ' !important'))
          return body
        },
      }
    },
  ],
})
