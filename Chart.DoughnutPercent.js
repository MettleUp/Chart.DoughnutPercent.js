Chart.types.Doughnut.extend({
  name: "DoughnutPercent",
  initialize: function(data){
    // Convert data to an array, since we only take in one data point
    data = Array(data);
    // Apply the prototype initialization
    Chart.types.Doughnut.prototype.initialize.apply(this, arguments);
  },
	calculateTotal: function(data){
  	// Override calculateTotal for a total of 100%
		this.total = 100;
	},
  draw: function () {
    // Apply prototype rendering
    Chart.types.Doughnut.prototype.draw.apply(this, arguments);
   }
});