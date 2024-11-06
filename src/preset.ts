import { definePreset } from '@primevue/themes'
import Lara from '@primevue/themes/lara'

export const AmPreset = definePreset(Lara, {
  primitive: {
    grape: {
      50: '#F8F6FC',
      100: '#E4D6FF',
      200: '#CCB2FF',
      300: '#CCB2FF',
      400: '#B28BFF',
      500: '#9B6AFA',
      600: '#7443D6',
      700: '#623DAE',
      800: '#4D2F89',
      900: '#372263',
      950: '#2B0850'
    },
    oil: {
      50: '#F7F7FD',
      100: '#F2F8FD',
      200: '#E1EAFA',
      300: '#CCD7EB',
      400: '#A3ADC2',
      500: '#727E96',
      600: '#535D73',
      700: '#35435E',
      800: '#202A44',
      900: '#282E38',
      950: '#060D1E'
    }
  },
  semantic: {
    primary: {
      50: '{grape.50}',
      100: '{grape.100}',
      200: '{grape.200}',
      300: '{grape.300}',
      400: '{grape.400}',
      500: '{grape.500}',
      600: '{grape.600}',
      700: '{grape.700}',
      800: '{grape.800}',
      900: '{grape.900}',
      950: '{grape.950}'
    },
    colorScheme: {
      light: {
        surface: {
          0: '#FFFFFF',
          50: '{oil.50}',
          100: '{oil.100}',
          200: '{oil.200}',
          300: '{oil.300}',
          400: '{oil.400}',
          500: '{oil.500}',
          600: '{oil.600}',
          700: '{oil.700}',
          800: '{oil.800}',
          900: '{oil.900}',
          950: '{oil.950}'
        },
        primary: {
          color: '{primary.500}',
          contrastColor: '{surface.0}',
          hoverColor: '{primary.600}',
          activeColor: '{primary.700}'
        },
        highlight: {
          background: '{primary.50}',
          focusBackground: '{primary.100}',
          color: '{primary.700}',
          focusColor: '{primary.800}'
        }
      },
      dark: {
        primary: {
          color: '{primary.400}',
          contrastColor: '{surface.900}',
          hoverColor: '{primary.300}',
          activeColor: '{primary.200}'
        },
        highlight: {
          background: 'color-mix(in srgb, {primary.400}, transparent 84%)',
          focusBackground: 'color-mix(in srgb, {primary.400}, transparent 76%)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)'
        }
      }
    }
  }
})

export default AmPreset
