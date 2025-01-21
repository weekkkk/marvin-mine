<template>
  <section
    class="flex flex-col items-center pt-[2rem] mt-[8rem] max-md:mt-[3.6rem] max-md:items-stretch"
  >
    <h1
      :class="[
        'text-[2.25rem] leading-[1.45rem] mb-[3rem]',
        'max-md:text-[1.25rem] max-md:leading-default max-md:mb-4',
        'text-def',
        'text-center',
      ]"
    >
      Roadmap <br class="md:hidden" />
      Marvin Mine
    </h1>

    <ul class="inline-flex gap-[2.5rem] mb-[3rem] max-md:hidden">
      <li>
        <SectionRoadmapItemWidget :n="1">
          <p>
            <span class="text-common"> Core Launch: </span> <br />
            Introduce mining, gold extraction, and water trade
          </p>
        </SectionRoadmapItemWidget>
      </li>

      <li>
        <SectionRoadmapItemWidget :n="2" custom>
          <p>
            <span class="text-common"> Expansion: </span>
            Add new terrains, tools, and abilities.
          </p>
        </SectionRoadmapItemWidget>
      </li>

      <li>
        <SectionRoadmapItemWidget :n="3">
          <p>
            <span class="text-common"> Blockchain Integration: </span>
            Enable trading on blockchain marketplaces
          </p>
        </SectionRoadmapItemWidget>
      </li>

      <li>
        <SectionRoadmapItemWidget :n="4">
          <p>
            <span class="text-common"> Optimization: </span> <br />
            Refine and scale the game.
          </p>
        </SectionRoadmapItemWidget>
      </li>
    </ul>

    <div class="md:hidden">
      <UiSlider>
        <div key="1" class="flex justify-center keen-slider__slide">
          <SectionRoadmapItemWidget :n="1">
            <p>
              <span class="text-common"> Core Launch: </span> <br />
              Introduce mining, gold extraction, and water trade
            </p>
          </SectionRoadmapItemWidget>
        </div>

        <div key="2" class="flex justify-center keen-slider__slide">
          <SectionRoadmapItemWidget :n="2" custom>
            <p>
              <span class="text-common"> Expansion: </span>
              Add new terrains, tools, and abilities.
            </p>
          </SectionRoadmapItemWidget>
        </div>

        <div key="3" class="flex justify-center keen-slider__slide">
          <SectionRoadmapItemWidget :n="3">
            <p>
              <span class="text-common"> Blockchain Integration: </span>
              Enable trading on blockchain marketplaces
            </p>
          </SectionRoadmapItemWidget>
        </div>

        <div key="4" class="flex justify-center keen-slider__slide">
          <SectionRoadmapItemWidget :n="4">
            <p>
              <span class="text-common"> Optimization: </span> <br />
              Refine and scale the game.
            </p>
          </SectionRoadmapItemWidget>
        </div>
      </UiSlider>
    </div>
  </section>
</template>
