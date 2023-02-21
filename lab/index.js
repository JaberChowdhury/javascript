var getRandomDataArray = function () {
  var dataArray = [];
  for (var i = 0; i <= 90; i++) dataArray.push(Math.tan(i));
  return dataArray;
};

let getLabel = () => {
  var arr = [];
  for (let i = 0; i <= 90; i++) {
    arr.push(i);
  }
  return arr;
};

var chartData = {
  labels: getLabel(),
  datasets: [
    {
      label: "My First dataset",
      fillColor: "rgba(22,22,22,0.2)",
      strokeColor: "rgba(20,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#00000",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(222,222,20,1)",
      data: getRandomDataArray(),
    },
  ],
};

window.onload = function () {
  var chartOptions = { responsive: true };
  var chart = document.getElementById("canvas").getContext("2d");
  window.myBar = new Chart(chart).Line(chartData, chartOptions);
};
