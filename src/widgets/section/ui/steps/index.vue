<template>
  <section class="flex flex-col items-center mt-[10rem]">
    <h1 class="text-[2.25rem] leading-[1.45rem] mb-[3rem] text-def">
      How to Play Marvin Mine?
    </h1>

    <ul class="inline-flex gap-[2.5rem] mb-[3rem]">
      <li>
        <SectionStepsItemWidget :n="1">
          <p>
            <span class="text-common"> Mine Gold: </span>
            Start mining gold and exchange it for water, a vital resource to
            progress in the game.
          </p>
        </SectionStepsItemWidget>
      </li>

      <li>
        <SectionStepsItemWidget :n="2">
          <p>
            <span class="text-common"> Upgrade & Unlock New Abilities: </span>
            Use the mined gold to upgrade your tools and unlock new abilities to
            mine faster and protect your gold.
          </p>
        </SectionStepsItemWidget>
      </li>

      <li>
        <SectionStepsItemWidget :n="3">
          <p>
            <span class="text-common"> Trade & Compete: </span>
            Trade gold and water on blockchain marketplaces, and form alliances
            or compete with other players in the dynamic economy.
          </p>
        </SectionStepsItemWidget>
      </li>
    </ul>

    <div class="flex gap-[2.5rem]">
      <UiButton class="w-[5rem] px-0 inline-flex justify-center">
        <NuxtImg src="/icons/left.svg" class="h-[1.75rem]" />
      </UiButton>
      <UiButton class="w-[5rem] px-0 inline-flex justify-center">
        <NuxtImg src="/icons/right.svg" class="h-[1.75rem]" />
      </UiButton>
    </div>
  </section>
</template>
