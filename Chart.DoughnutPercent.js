Chart.types.Doughnut.extend({
  name: "DoughnutPercent",
  initialize: function(data){
    // Never any tooltips
    this.options.showTooltips = false;
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
    // Add the exterior stroke
    var centerX = this.chart.width / 2;
    var centerY = this.chart.height / 2;
    var radius = (this.chart.height / 2) - 1;

    this.chart.ctx.beginPath();
    this.chart.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    this.chart.ctx.lineWidth = 1;
    this.chart.ctx.strokeStyle = this.options.strokeColor;
    this.chart.ctx.stroke();

    // Add the percentage label
    if (this.options.showLabel) {
      this.chart.ctx.textAlign = 'center';
      this.chart.ctx.fillStyle = this.options.labelColor;
      this.chart.ctx.font = '100 48px Roboto';
      var percentWidth = this.chart.ctx.measureText(this.segments[0].value).width;
      this.chart.ctx.fillText(this.segments[0].value, centerX-5, centerY+18);
      this.chart.ctx.save();

      // Add % sign
      this.chart.ctx.font = '300 24px Roboto';
      this.chart.ctx.fillText('%', centerX+percentWidth/2+5, centerY);
      this.chart.ctx.save();
    }

  }
});