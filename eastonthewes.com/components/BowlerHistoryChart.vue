<template>
  <div class="chart-container w-5/6">
    <h2 class="text-2xl font-bold text-white mb-4">Weekly Avg. vs. Week</h2>
    <Line v-if="chartData" :data="chartData" :options="chartOptions1" />
  </div>

  <div class="chart-container w-5/6">
    <h2 class="text-2xl font-bold text-white mb-4">Avg vs. Week</h2>
    <Line
      v-if="runningAverageChartData"
      :data="runningAverageChartData"
      :options="chartOptions2"
    />
  </div>

  <div class="table-container  w-5/6">
    <h2 class="text-2xl font-bold mb-4">Bowling Weekly Scores</h2>
    <table class="table">
      <thead>
        <tr>
          <th
            class="text-left p-1 sm:p-2 text-xs sm:text-sm font-semibold text-white"
          >
            Week #
          </th>
          <th
            class="text-left p-1 sm:p-2 text-xs sm:text-sm font-semibold text-white"
          >
            Game 1
          </th>
          <th
            class="text-left p-1 sm:p-2 text-xs sm:text-sm font-semibold text-white"
          >
            Game 2
          </th>
          <th
            class="text-left p-1 sm:p-2 text-xs sm:text-sm font-semibold text-white"
          >
            Game 3
          </th>
          <th
            class="text-left p-1 sm:p-2 text-xs sm:text-sm font-semibold text-white"
          >
            Series Total
          </th>
          <th
            class="text-left p-1 sm:p-2 text-xs sm:text-sm font-semibold text-white"
          >
            Today's Avg
          </th>
          <th
            class="text-left p-1 sm:p-2 text-xs sm:text-sm font-semibold text-white"
          >
            Season Avg
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="week in tableData"
          :key="week.WeekNum"
          class="border-t border-gray-600 hover:bg-gray-700"
        >
          <td class="p-1 sm:p-2 text-xs sm:text-sm text-white">
            {{ week.WeekNum }}
          </td>
          <td class="p-1 sm:p-2 text-xs sm:text-sm text-white">
            {{ week.Score1 }}
          </td>
          <td class="p-1 sm:p-2 text-xs sm:text-sm text-white">
            {{ week.Score2 }}
          </td>
          <td class="p-1 sm:p-2 text-xs sm:text-sm text-white">
            {{ week.Score3 }}
          </td>
          <td class="p-1 sm:p-2 text-xs sm:text-sm text-white">
            {{ week.SeriesTotal }}
          </td>
          <td class="p-1 sm:p-2 text-xs sm:text-sm text-white">
            {{ week.TodaysAverage }}
          </td>
          <td class="p-1 sm:p-2 text-xs sm:text-sm text-white">
            {{ week.RunningAverage }}
          </td>
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
        backgroundColor: "rgba(255, 255, 255, 0.5)",
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
const chartOptions1 = {
  responsive: true,
  maintainAspectRatio: true,
  layout: {
    padding: {
      top: 20,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        color: "rgba(200, 200, 200, 0.3)",
      },
      ticks: {
        color: "#A0A0A0",
      },
    },
    y: {
      grid: {
        color: "rgba(200, 200, 200, 0.3)",
      },
      ticks: {
        color: "#A0A0A0",
        padding: 10,
      },
      suggestedMax: 250, // Set this to your desired maximum value
    },
  },
};

const chartOptions2 = {
  responsive: true,
  maintainAspectRatio: true,
  layout: {
    padding: {
      top: 20,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        color: "rgba(200, 200, 200, 0.3)",
      },
      ticks: {
        color: "#A0A0A0",
      },
    },
    y: {
      grid: {
        color: "rgba(200, 200, 200, 0.3)",
      },
      ticks: {
        color: "#A0A0A0",
        padding: 10,
      },
      suggestedMax: 220, // Set this to your desired maximum value
    },
  },
};
</script>

<style scoped>
.chart-container {
  font-family: Arial, Helvetica, sans-serif;
}

.table-container {
  font-family: Arial, Helvetica, sans-serif;
}

h2 {
  color: gray;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}

table {
  width: 100%;
}
th,
td {
  border: 1px solid #474747;
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
