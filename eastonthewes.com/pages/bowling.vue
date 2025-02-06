<template>
  <div class="main-screen">
    <div class="website md:sticky text-xl pl-8 md:top-8 pt-8 md:pt-0">
      <h1>eastonthewes.com</h1>
    </div>
    <BowlerHistoryChart v-if="historyData.length" :historyData="historyData" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import BowlerHistoryChart from "~/components/BowlerHistoryChart.vue";
import type { BowlerHistorySummary } from "~/types/bowling";

// Reactive variable to store the history data
const historyData = ref<BowlerHistorySummary[]>([]);

// Fetch data
const { data, error } = await useFetch(
  "https://www.leaguesecretary.com/Bowler/BowlerHistory_Read",
  {
    params: {
      leagueId: 140180,
      year: 2024,
      season: "f",
      bowlerId: 51,
      sort: "",
      page: 1,
      pageSize: 50,
    },
  }
);

// Map the response to summary data
if (data.value && data.value.Data) {
  historyData.value = data.value.Data.map((item) => ({
    WeekNum: item.WeekNum,
    DateBowled: item.DateBowled,
    AverageAfterBowling: item.AverageAfterBowling,
    SeriesTotal: item.SeriesTotal,
    Score1: item.Score1,
    Score2: item.Score2,
    Score3: item.Score3,
    TodaysAverage: item.TodaysAverage,
  }));
}

// Log errors if any
if (error.value) {
  console.error(error.value);
}
</script>

<style lang="css" scoped>
@font-face {
  font-family: Newake;
  src: url(assets/fonts/Newake-Font-Demo.otf);
}

.website h1 {
  color: ghostwhite;
  font-weight: bold;
}

.main-screen {
  background-color: #141414;
  /* min-height: max-content; */
  height:max-content;
}

.main-content {
  color: whitesmoke;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

.header {
  height: 10rem;
}

.image {
  height: 100px;
  width: 100px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 50%;
}

.sub-text {
  color: gray;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0;
  font-weight: 500;
}

.work {
  color: gray;
}

.about-me p {
  color: gray;
}

.date {
  font-size: 0.8rem;
}
.title {
  font-size: 0.8rem;
}
</style>
