<template>
  <section
    :class="[
      'w-[54.7rem] h-[33.1rem]',
      'max-md:w-[16.9rem] max-md:h-[29rem]',
      'relative',
      'mx-auto',
      'mt-[3.5rem]',
      'max-md:mt-[4.2rem]',
    ]"
  >
    <NuxtImg
      src="/bgs/about.png"
      class="max-md:hidden absolute object-cover w-full h-full"
    />
    <NuxtImg
      src="/bgs/about-wather.svg"
      class="max-md:hidden w-[3rem] absolute left-[6.7rem] top-[4.95rem]"
    />
    <NuxtImg
      src="/bgs/about.svg"
      class="max-md:hidden object-cover w-full h-full"
    />

    <NuxtImg
      src="/bgs/about-mobile.svg"
      class="md:hidden object-cover w-full h-full"
    />

    <main
      :class="[
        'text-brand',
        'top-0 absolute object-cover w-full h-full',
        'pl-[17.45rem] pr-[2.55rem] py-[2.25rem]',
        'max-md:pl-0 max-md:pr-0 max-md:py-[1.5rem]',
        'max-md:text-center',
      ]"
    >
      <h1
        :class="[
          'text-[2.25rem] leading-[1.45rem] mb-4',
          'max-md:text-[1.25rem] max-md:leading-[0.8075rem]',
        ]"
      >
        What is Marvin Mine?
      </h1>
      <div
        :class="[
          'leading-text mb-4',
          'max-md:text-[0.75rem]',
          'max-md:px-[1.6rem]',
        ]"
      >
        <p>
          <span class="text-common"> Engaging Gameplay: </span>
          Step into the role of a brave gold miner, extracting valuable gold and
          trading it for water.
        </p>
        <p>
          <span class="text-common"> Tool Upgrades: </span>
          Enhance your mining tools and unlock abilities to boost your
          efficiency and speed.
        </p>

        <p>
          <span class="text-common"> Challenging Terrains: </span>
          Navigate through dynamic environments and overcome obstacles to secure
          your resources.
        </p>
        <p>
          <span class="text-common"> Strategic Alliances: </span>
          Form alliances or compete against rivals in a bustling,
          resource-driven economy.
        </p>
        <p>
          <span class="text-common"> Blockchain Integration: </span>
          Trade gold and water on blockchain marketplaces, with true ownership
          of in-game assets.
        </p>
        <p>
          <span class="text-common"> Real-World Value: </span>
          Hold your resources as real-world investments and shape your journey
          in this precious-resource ecosystem.
        </p>
      </div>

      <UiButton class="w-[12.5rem] max-md:hidden"> TON APP </UiButton>
    </main>
  </section>
</template>
