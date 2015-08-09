Chart.DoughnutPercent.js
===

An extension of the [Chart.js](https://github.com/nnnick/Chart.js) Doughnut chart type. Accepts a single data point and shows an arc based on a total of 100%. Also includes an exterior stroke around the entire circle.

```javascript
<canvas id="myChart" width="500" height="500"></canvas>
<script type="text/javascript" src="Chart.js"></script>
<script type="text/javascript" src="Chart.DoughnutPercent.js"></script>
<script type="text/javascript">
  var data = {
               value: 85,
               color: '#59ae83',
               highlight: '#4b9a72',
               label: "85%"
             }

  var options = {
                  animationEasing: 'easeOutBounce',
                  animateRotate: true,
                  animateScale: false,
                  animationSteps: 50,
                  percentageInnerCutout: 90,
                  segmentShowStroke: false,
                  strokeColor: '#59ae83',
                  responsive: true
                } 

  var ctx = document.getElementById("myChart").getContext("2d");
  var myDoughnutChart = new Chart(ctx).DoughnutPercent(data, options);
</script>
```
