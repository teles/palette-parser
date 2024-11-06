<script setup lang="ts">
  import CssPaletteParser from '@/features/core/parsers/CssPaletteParser/CssPaletteParser'
  import PaletteParserManager from '@/features/core/parsers/PaletteParserManager/PaletteParserManager'
  import ScssPaletteParser from '@/features/core/parsers/ScssPaletteParser/ScssPaletteParser'
  const parser = new PaletteParserManager([
    new CssPaletteParser(),
    new ScssPaletteParser(),
  ])
  console.log(parser)
</script>
<template>
  <div>
    <ul v-for="name in parser.name">
      <li>
        {{ name }}
      </li>
    </ul>
  </div>
</template>
