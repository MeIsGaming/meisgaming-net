<script setup lang="ts">
import { useI18n } from '@/i18n'
const { t } = useI18n()
</script>

<template>
  <footer>
    <span>{{ t('footer_copy') }}</span>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  border-top: 1px solid $border;
  padding: 1.25rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $muted;
  font-size: 0.7rem;

  @media (max-width: 640px) {
    padding: 1rem 1.25rem;
  }
}
</style>
