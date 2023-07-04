<template>
  <div class="stats shadow">
    <div class="stat">
      <div class="stat-title">Total Page Views</div>
      <div class="stat-value">89,400</div>
      <div class="stat-desc">21% more than last month</div>
    </div>

    <div class="stat">
      <div class="stat-title">Total Page Views</div>
      <div class="stat-value">89,400</div>
      <div class="stat-desc">21% more than last month</div>
    </div>
  </div>
</template>
<style scoped>
.stats {
  @apply inline-grid;
}
:where(.stats) {
  @apply grid-flow-col;
}
.stat {
  @apply inline-grid w-full;
  grid-template-columns: repeat(1, 1fr);
  &-figure {
    @apply col-start-2 row-span-3 row-start-1 place-self-center justify-self-end;
  }
  &-title {
    @apply col-start-1 whitespace-nowrap;
  }
  &-value {
    @apply col-start-1 whitespace-nowrap;
  }
  &-desc {
    @apply col-start-1 whitespace-nowrap;
  }
  &-actions {
    @apply col-start-1 whitespace-nowrap;
  }
}

.stats {
  @apply rounded;
}
:where(.stats) {
  @apply divide-x divide-y-0 overflow-x-auto;
}
.stat {
  @apply gap-x-4 border border-opacity-10 px-6 py-4;
  &-title {
    @apply text-stone-800;
  }
  &-value {
    @apply text-4xl font-extrabold;
  }
  &-desc {
    @apply text-xs text-stone-800/60;
  }
  &-actions {
    @apply mt-4;
  }
}
/* .stat + .stat {
  @apply border-l border-base-content border-opacity-10;
}
.stats.grid-flow-row {
  .stat + .stat {
    @apply border-l-0 border-t;
  }
} */

/* .stats.grid-flow-row {
  @apply auto-rows-fr;
} */
</style>

<script setup></script>
