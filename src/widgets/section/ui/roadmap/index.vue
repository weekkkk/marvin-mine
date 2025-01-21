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
        <SectionRoadmapItemWidget>
          <ul class="list-disc pr-4">
            <li>
              Develop and launch Marvin Coin on the TON blockchain. -
              <span class="text-common"> 01.25.2025 </span>
            </li>
            <li>
              Release the Marvin Mine mini-app on Telegram. -
              <span class="text-common"> 01.27.2025 </span>
            </li>
            <li>
              Establish partnerships with charities focused on water and food
              distribution. -
              <span class="text-common"> Q1 ‘25 </span>
            </li>
          </ul>
        </SectionRoadmapItemWidget>
      </li>

      <li>
        <SectionRoadmapItemWidget>
          <ul class="list-disc pr-5">
            <li>
              Expand game features (e.g., new tools, levels, and events). -
              <span class="text-common"> Q1 ‘25 </span>
            </li>
            <li>
              Increase marketing efforts to onboard more players and investors.
              -
              <span class="text-common"> Q1-Q2 ‘25 </span>
            </li>
            <li>
              List Marvin Coin on additional exchanges. -
              <span class="text-common"> Q1 - Q2 ‘25 </span>
            </li>
          </ul>
        </SectionRoadmapItemWidget>
      </li>

      <li>
        <SectionRoadmapItemWidget>
          <ul class="list-disc">
            <li>
              Introduce NFT-based assets for unique in-game tools and perks. -
              <span class="text-common"> Q2 ‘25 </span>
            </li>
            <li>
              Expand charitable initiatives to include education and healthcare.
              -
              <span class="text-common"> Q2 ‘25 </span>
            </li>
            <li>
              Scale the ecosystem by integrating with other TON-based projects.
              -
              <span class="text-common"> Q2 ‘25 </span>
            </li>
          </ul>
        </SectionRoadmapItemWidget>
      </li>
    </ul>

    <div class="md:hidden">
      <UiSlider>
        <div class="flex justify-center keen-slider__slide">
          <SectionRoadmapItemWidget>
            <ul class="list-disc list-inside">
              <li>
                Develop and launch Marvin Coin on the TON blockchain. -
                <span class="text-common"> 01.25.2025 </span>
              </li>
              <li>
                Release the Marvin Mine mini-app on Telegram. -
                <span class="text-common"> 01.27.2025 </span>
              </li>
              <li>
                Establish partnerships with charities focused on water and food
                distribution. -
                <span class="text-common"> Q1 ‘25 </span>
              </li>
            </ul>
          </SectionRoadmapItemWidget>
        </div>

        <div class="flex justify-center keen-slider__slide">
          <SectionRoadmapItemWidget>
            <ul class="list-disc list-inside">
              <li>
                Expand game features (e.g., new tools, levels, and events). -
                <span class="text-common"> Q1 ‘25 </span>
              </li>
              <li>
                Increase marketing efforts to onboard more players and
                investors. -
                <span class="text-common"> Q1-Q2 ‘25 </span>
              </li>
              <li>
                List Marvin Coin on additional exchanges. -
                <span class="text-common"> Q1 - Q2 ‘25 </span>
              </li>
            </ul>
          </SectionRoadmapItemWidget>
        </div>

        <div class="flex justify-center keen-slider__slide">
          <SectionRoadmapItemWidget>
            <ul class="list-disc list-inside">
              <li>
                Introduce NFT-based assets for unique in-game tools and perks. -
                <span class="text-common"> Q2 ‘25 </span>
              </li>
              <li>
                Expand charitable initiatives to include education and
                healthcare. -
                <span class="text-common"> Q2 ‘25 </span>
              </li>
              <li>
                Scale the ecosystem by integrating with other TON-based
                projects. -
                <span class="text-common"> Q2 ‘25 </span>
              </li>
            </ul>
          </SectionRoadmapItemWidget>
        </div>
      </UiSlider>
    </div>
  </section>
</template>
