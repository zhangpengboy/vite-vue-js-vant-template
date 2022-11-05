<template>
  <p>{{ title }}</p>
  <p>{{ $t('msg.a2') }}</p>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const title = t('msg.a3')
</script>
<style scoped>
</style>
