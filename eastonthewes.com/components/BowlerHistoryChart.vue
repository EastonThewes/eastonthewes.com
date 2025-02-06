<template>
  <div class="chart-container">
    <h2>Today's Average Over Time</h2>
    <Line v-if="chartData" :data="chartData" :options="chartOptions" />
  </div>
    <div class="chart-container">
    <h2>Average After Bowling Over Time</h2>
    <Line
      v-if="runningAverageChartData"
      :data="runningAverageChartData"
      :options="chartOptions"
    />
    </div>
    <div class="table-container">
    <h2>Bowling Weekly Scores</h2>
    <table>
      <thead>
        <tr>
          <th>Week #</th>
          <th>Game 1</th>
          <th>Game 2</th>
          <th>Game 3</th>
          <th>Series Total</th>
          <th>Today's Avg</th>
          <th>Season Avg</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="week in tableData" :key="week.WeekNum">
          <td>{{ week.WeekNum }}</td>
          <td>{{ week.Score1 }}</td>
          <td>{{ week.Score2 }}</td>
          <td>{{ week.Score3 }}</td>
          <td>{{ week.SeriesTotal }}</td>
          <td>{{ week.TodaysAverage }}</td>
          <td>{{ week.RunningAverage }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";
import type { BowlerHistorySummary } from "~/types/bowling";

// Register necessary Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale
);

// Props for receiving bowler history data
const props = defineProps<{
  historyData: BowlerHistorySummary[];
}>();

// Computed chart data
const chartData = computed(() => {
  const reversedData = [...props.historyData].reverse(); // Reverse the array
  return {
    labels: reversedData.map((item) => `Week ${item.WeekNum}`),
    datasets: [
      {
        label: "Today's Average",
        data: reversedData.map((item) => item.TodaysAverage),
        borderColor: "#F0F0F0",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        tension: 0.3,
        fill: true,
      },
    ],
  };
});

const runningAverageChartData = computed(() => {
  const reversedData = [...props.historyData].reverse(); // Oldest to latest

  let cumulativeScore = 0;
  let totalGames = 0;

  const cumulativeAverages = reversedData.map((week) => {
    const totalWeekScore = week.Score1 + week.Score2 + week.Score3;
    const gamesPlayed = 3; // Since each week has 3 games

    cumulativeScore += totalWeekScore;
    totalGames += gamesPlayed;

    return cumulativeScore / totalGames;
  });

  return {
    labels: reversedData.map((item) => `Week ${item.WeekNum}`),
    datasets: [
      {
        label: "Running Season Average",
        data: cumulativeAverages,
        borderColor: "#F0F0F0",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        tension: 0,
        fill: true,
      },
    ],
  };
});

const tableData = computed(() => {
  const reversedData = [...props.historyData].reverse(); // Oldest to latest

  let cumulativeScore = 0;
  let totalGames = 0;

  return reversedData.map((week) => {
    const totalWeekScore = week.Score1 + week.Score2 + week.Score3;
    const gamesPlayed = 3;

    cumulativeScore += totalWeekScore;
    totalGames += gamesPlayed;

    return {
      WeekNum: week.WeekNum,
      Score1: week.Score1,
      Score2: week.Score2,
      Score3: week.Score3,
      SeriesTotal: totalWeekScore,
      TodaysAverage: week.TodaysAverage,
      RunningAverage: (cumulativeScore / totalGames).toFixed(2), // Keep 2 decimals
    };
  });
});

// Chart options
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: { title: { display: true, text: "Week Number" } },
    y: { title: { display: true, text: "Today's Average" } },
  },
};
</script>

<style scoped>
.chart-container {
  width: 100%;
  max-width: 800px;
  height: 500px;
  margin: auto;
  font-family: Arial, Helvetica, sans-serif;

}

.table-container {
  width: 100%;
  max-width: 800px;
  padding-bottom: 50px;
  margin: auto;
    font-family: Arial, Helvetica, sans-serif;

}

h2 {
  color: gray;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th,
td {
  border: 1px solid #474747;
  padding: 8px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}
th {
  background-color: #3b3b3b;
  font-family: Arial, Helvetica, sans-serif;
  color: gray;
}
tr {
  background-color: #2e2e2e;
  color: gray;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
