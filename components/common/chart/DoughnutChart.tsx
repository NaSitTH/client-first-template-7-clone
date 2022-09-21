import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Statistics } from "../../../interfaces/statistics";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  data: Array<Statistics>;
};

const options = {
  responsive: true,
  plugins: { legend: { display: false } },
};

const DoughnutChart = ({ data }: Props) => {
  const dataChart = {
    labels: data.map((x) => x.title),
    datasets: [
      {
        data: data.map((x) => x.value),
        backgroundColor: [
          "rgba(190, 243, 192, 1)",
          "rgba(172, 148, 241, 1)",
          "rgba(255, 240, 202, 1)",
          "rgba(249, 207, 100, 1)",
          "rgba(243, 143, 191, 1)",
        ],
        borderWidth: 0,
      },
    ],
  };

  return <Doughnut data={dataChart} options={options} />;
};
export default DoughnutChart;
