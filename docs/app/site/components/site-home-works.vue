<script lang="ts" setup>
const TITLE_LEAD_FE = 'Lead Frontend Engineer';

const experiences = [
  {
    id: 'kintell',
    title: TITLE_LEAD_FE,
    duration: 'Jan 2022 — present',
    companyUrl: 'https://kintell.com/',
    companyName: 'Kintell',
    companyLogo: 'i-company-kintell',
    bgColor: 'bg-[#4E888C]',
  },

  {
    id: 'bonza',
    title: TITLE_LEAD_FE,
    duration: 'Apr 2020 - Dec 2021',
    companyUrl: '',
    companyName: 'Bonza',
    companyLogo: 'i-company-bonza',
    bgColor: 'bg-[#0F1E3A]',
  },

  {
    id: 'schoters',
    title: TITLE_LEAD_FE,
    duration: 'Jun 2019 - Mar 2020',
    companyUrl: 'https://www.schoters.com/id',
    companyName: 'Schoters',
    companyLogo: 'i-company-schoters',
    bgColor: 'bg-[#2090C6]',
  },

  {
    id: 'oddbit',
    title: TITLE_LEAD_FE,
    duration: 'May 2017 - May 2019',
    companyUrl: 'https://oddbit.id/',
    companyName: 'Oddbit',
    companyLogo: 'i-company-oddbit',
    bgColor: 'bg-[#ABD138]',
  },

  {
    id: 'carriage',
    title: 'Software Engineer',
    duration: 'Nov 2015 - Nov 2017',
    companyUrl: 'https://www.trycarriage.com/',
    companyName: 'Carriage',
    companyLogo: 'i-company-carriage',
    bgColor: 'bg-[#ABD138]',
  },

  {
    id: 'magloft',
    title: 'Software Engineer',
    duration: 'Aug 2015 - Oct 2015',
    companyUrl: 'https://www.magloft.com/',
    companyName: 'Magloft',
    companyLogo: 'i-company-magloft',
    bgColor: 'bg-[#2A709F]',
  },
];
</script>

<template>
  <section
    id="work"
    class="mt-10 container"
  >
    <h2 class="mt-24 headline text-center text-xl lg:text-3xl md:text-2xl">
      Professional Work
    </h2>

    <div class="relative w-[calc(100%+2rem)] flex snap-x snap-center gap-6 overflow-hidden overflow-x-auto pb-14 -mx-4 lg:(mx-0 w-full)">
      <!-- <div class="w-12 shrink-0 grow-0 md:w-1/8" /> -->

      <div
        v-for="job in experiences"
        :key="job.companyName"
        class="w-4/5 flex shrink-0 transform snap-center transition-all lg:w-1/3 md:w-3/4"
      >
        <SiteBox class="mt-12 w-full">
          <div class="mb-4 w-full flex justify-center -mt-12">
            <!-- <NuxtImg
              src="/profile"
              class="h-16 w-16 rounded-md"
              loading="lazy"
            /> -->
            <div class="relative">
              <div
                :class="job.bgColor"
                class="absolute left-[50%] top-[50%] h-20 w-20 translate-x-[-50%] translate-y-[-50%] rounded-full opacity-40 blur-12"
              />
              <i
                class="relative h-16 w-16"
                :class="job.companyLogo"
              />
            </div>
          </div>

          <div class="flex items-start gap-4 md:items-center">
            <div class="mb-2 w-full">
              <h3 class="text-center font-bold">
                {{ job.title }}
              </h3>

              <h4 class="text-center">
                <NuxtLink
                  :href="job.companyUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="relative"
                  :class="{
                    '*underlined': !!job.companyUrl,
                  }"
                >
                  {{ job.companyName }}
                </NuxtLink>
              </h4>

              <p class="mb-4 mt-1 text-center text-sm text-slate-500">
                {{ job.duration }}
              </p>
            </div>
          </div>
        </SiteBox>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
</style>
