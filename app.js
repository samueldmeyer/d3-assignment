'use strict';
$(function(){
  // Setting up the chart area
  var margin = {
    top: 40,
    right: 20,
    bottom: 30,
    left: 40
  };
  var canvasWidth = 400;
  var canvasHeight = 300;
  var width = canvasWidth - margin.left - margin.right;
  var height = canvasHeight - margin.top - margin.bottom;
  var svg = d3.select('svg')
    .attr('width', canvasWidth)
    .attr('height', canvasHeight);
  // Add area for points
  var graphArea = svg.append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
  var xScale;
  var yScale;

  // Step 1: edit data.csv to include the data you want to show
  d3.csv('data.csv', function(data) {
    // Step 2: Create x and y scales (scaleLinear) to draw points. 
    // Set xScale and yScale to the scales so you can use them outside this function.
    
    // Add code here
    // xScale = 
    // yScale =


    // Step 3: Add code to color the points by category (add code here or above)

    // // Add axes (uncomment this code to add axes)
    // graphArea.append('g')
    //   .attr('class', 'x axis')
    //   .attr('transform', 'translate(0,' + (height) + ')')
    //   .call(d3.axisBottom(xScale));

    // graphArea.append('g')
    //   .attr('class', 'y axis')
    //   .call(d3.axisLeft(yScale));
  });

  // Animate points
  var originalYear = 2012;
  var maxYear = 2015;
  var year = originalYear;
  d3.select('#nextButton').on('click', function(event) {
    if (year == maxYear) {
      year = originalYear;
    } else {
      year = year + 1;
    }
    var xColumn = 'xValue_' + String(year);
    var yColumn = 'yValue_' + String(year);
    
    // Step 4: Animate changing the points shown by year here

    // Add code here


  });

});

// Step 5: make some other change to the graph
