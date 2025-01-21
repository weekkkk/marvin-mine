<template>
  <section class="flex flex-col items-center mt-[10rem]">
    <h1 class="text-[2.25rem] leading-[1.45rem] mb-[3rem] text-def">
      Roadmap Marvin Mine
    </h1>

    <ul class="inline-flex gap-[2.5rem] mb-[3rem]">
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
  </section>
</template>
