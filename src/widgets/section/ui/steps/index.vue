<template>
  <section
    class="flex flex-col items-center pt-[2rem] mt-[8rem] max-md:mt-[1.5rem] max-md:items-stretch"
  >
    <h1
      :class="[
        'text-[2.25rem] leading-[1.45rem] mb-[3rem]',
        'max-md:text-[1.25rem] max-md:leading-default max-md:mb-4',
        'text-def',
        'text-center',
      ]"
    >
      How to Play <br class="md:hidden" />
      Marvin Mine?
    </h1>

    <ul class="inline-flex gap-[2.5rem] mb-[3rem] max-md:hidden">
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
        <SectionStepsItemWidget :n="2" custom>
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

    <div class="flex gap-[2.5rem] max-md:hidden">
      <UiButton
        class="w-[5rem] h-[5rem] inline-flex justify-center items-center !pl-0 !pr-0 !pt-0 !pb-0"
      >
        <NuxtImg src="/icons/left.svg" class="h-[1.75rem]" />
      </UiButton>
      <UiButton
        class="w-[5rem] h-[5rem] inline-flex justify-center items-center !pl-0 !pr-0 !pt-0 !pb-0"
      >
        <NuxtImg src="/icons/right.svg" class="h-[1.75rem]" />
      </UiButton>
    </div>

    <div class="md:hidden">
      <UiSlider>
        <div key="1" class="flex justify-center keen-slider__slide">
          <SectionStepsItemWidget :n="1" mobile>
            <p>
              <span class="text-common"> Mine Gold: </span>
              Start mining gold and exchange it for water, a vital resource to
              progress in the game.
            </p>
          </SectionStepsItemWidget>
        </div>

        <div key="2" class="flex justify-center keen-slider__slide">
          <SectionStepsItemWidget :n="2" mobile>
            <p>
              <span class="text-common"> Upgrade & Unlock New Abilities: </span>
              Use the mined gold to upgrade your tools and unlock new abilities
              to mine faster and protect your gold.
            </p>
          </SectionStepsItemWidget>
        </div>

        <div key="3" class="flex justify-center keen-slider__slide">
          <SectionStepsItemWidget :n="3" mobile>
            <p>
              <span class="text-common"> Trade & Compete: </span>
              Trade gold and water on blockchain marketplaces, and form
              alliances or compete with other players in the dynamic economy.
            </p>
          </SectionStepsItemWidget>
        </div>
      </UiSlider>
    </div>
  </section>
</template>
