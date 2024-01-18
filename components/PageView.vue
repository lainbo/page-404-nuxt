<script setup lang="ts">

</script>

<template>
  <main>
    <div class="main-content flex-c relative h-100dvh flex-col bg-#fff dark:bg-black">
      <div class="absolute inset-0 overflow-hidden">
        <div class="jumbo absolute opacity-50 -inset-[10px]" />
      </div>
      <h1 class="flex-y-c font-Inter relative select-none text-5xl text-gray-800 font-bold transition-colors dark:(text-#fff opacity-80)">
        404
      </h1>
      <div class="mt-4">
        <DarkToggle />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main-content {
  height: 100vh;
  height: calc(var(--1dvh, 1vh) * 100);
  height: 100dvh;
}

@keyframes jumbo {
  from {
    background-position:
      50% 50%,
      50% 50%;
  }

  to {
    background-position:
      350% 50%,
      350% 50%;
  }
}

.jumbo {
  --stripes: repeating-linear-gradient(
    100deg,
    #fff 0%,
    #fff 7%,
    transparent 10%,
    transparent 12%,
    #fff 16%
  );
  --stripes-dark: repeating-linear-gradient(
    100deg,
    #000 0%,
    #000 7%,
    transparent 10%,
    transparent 12%,
    #000 16%
  );
  --rainbow: repeating-linear-gradient(
    100deg,
    #60a5fa 10%,
    #e879f9 15%,
    #60a5fa 20%,
    #5eead4 25%,
    #60a5fa 30%
  );

  background-image: var(--stripes), var(--rainbow);
  background-size: 300%, 200%;
  background-position:
    50% 50%,
    50% 50%;
  filter: blur(10px) invert(100%);
  mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);
  pointer-events: none;
}

.jumbo::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: var(--stripes), var(--rainbow);
  background-size: 200%, 100%;
  animation: jumbo 60s linear infinite;
  background-attachment: fixed;
  mix-blend-mode: difference;
}

.dark .jumbo {
  background-image: var(--stripes-dark), var(--rainbow);
  filter: blur(10px) opacity(50%) saturate(200%);
}

.dark .jumbo::after {
  background-image: var(--stripes-dark), var(--rainbow);
}
</style>
