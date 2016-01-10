


Canvas = function () {
  var self = this;
  var svg;

  var createSvg = function() {
    svg = d3.select('#canvas').append('svg')
      .attr('width', 800)
      .attr('height',600);
  };
  createSvg();

  self.clear = function() {
    d3.select('svg').remove();
    createSvg();
  };

  self.draw = function(data) {
    if (data.length < 1) {
      self.clear();
      return;
    }
    if (svg) {

          // Remember to format the data properly in markPoints

        // to draw a circle - 
        if (Session.get("form") == "circle") {


           svg.selectAll('circle').data(data, function(d) { return d._id; })
                 .enter().append('circle')
                 .attr('r', 10)
                 .attr('cx', function (d) { return d.xCircle; })
                 .attr('cy', function (d) { return d.yCircle; })
                 .attr("stroke", function (d) { return d.c; })
                 .attr("stroke-width", function (d) { return d.w; }) 
                 .attr("fill", function (d) { return d.c; });
        }
        // svg.selectAll('circle').data(data, function(d) { return d._id; })
        // .enter().append('circle')
        // .attr('r', 10)
        // .attr('cx', function (d) { return d.x; })
         //.attr('cy', function (d) { return d.y; });

      //to draw a line

      
        else{
         var t =  points.find({_id:this._id})
          console.log(t.t);
        svg.selectAll('line').data(data, function(d) { return d._id; })
      .enter().append('line')
      .attr('x1', function (d) { return d.xLine; })
      .attr('y1', function (d) { return d.yLine; })
      .attr('x2', function (d) { return d.x1Line; })
      .attr('y2', function (d) { return d.y1Line; })
      .attr("stroke-width", function (d) { return d.w; })
      .attr("stroke", function (d) { return d.c; })
      .attr("stroke-linejoin", "round");
          }

        


    } // end of the if(svg) statement
  }; // end of the canvas.draw function
} //end of the canvas function

