function drawGraph() {
  if (localStorage.getItem("tbRecords") ===
    null) {
    alert("No records exist.");

    $(location).attr("href", "#pageMenu");
  } else {
    setupCanvas();

    var TSHarr = new Array();
    var Datearr = new Array();
    getTSHhistory(TSHarr, Datearr);

    var tshLower = new Array(2);
    var tshUpper = new Array(2);
    getTSHbounds(tshLower, tshUpper);

    drawLines(TSHarr, tshUpper, tshLower,
      Datearr)
    labelAxes();
  }
}

function setupCanvas() {

  var c = document.getElementById("GraphCanvas");
  var ctx = c.getContext("2d");

  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, 500, 500);

}

function getTSHhistory(TSHarr, Datearr) {
  var tbRecords = JSON.parse(localStorage.getItem(
    "tbRecords"));

  tbRecords.sort(compareDates);

  for (var i = 0; i < tbRecords.length; i++) {
    var date = new Date(tbRecords[i].Date);

    /*These methods start at 0, must increment
     * by one to compensate
     */
    var m = date.getMonth() + 1;
    var d = date.getDate() + 1;

    //The x-axis label
    Datearr[i] = (m + "/" + d);

    //The point to plot
    TSHarr[i] = parseFloat(tbRecords[i].TSH);
  }
}

function getTSHbounds(tshLower, tshUpper) {
  //Get users cancer stage
  var user = JSON.parse(localStorage.getItem(
    "user"));
  var TSHLevel = user.TSHRange;

  /*These lines show upper and lower bounds
   * of acceptable TSH levels (for each
   * stage)
   */
  if (TSHLevel == "StageA") {
    tshUpper[0] = tshUpper[1] = 0.1;
    tshLower[0] = tshLower[1] = 0.01;
  } else if (TSHLevel == "StageB") {
    tshUpper[0] = tshUpper[1] = 0.5;
    tshLower[0] = tshLower[1] = 0.1;
  } else {
    tshUpper[0] = tshUpper[1] = 2.0;
    tshLower[0] = tshLower[1] = 0.35;
  }
}

function drawLines(TSHarr, tshUpper, tshLower,
  Datearr) {
  var TSHline = new RGraph.Line("GraphCanvas",
      TSHarr, tshUpper, tshLower)
    .Set("labels", Datearr)
    .Set("colors", ["blue", "green", "red"])
    .Set("shadow", true)
    .Set("shadow.offsetx", 1)
    .Set("shadow.offsety", 1)
    .Set("linewidth", 1)
    .Set("numxticks", 6)
    .Set("scale.decimals", 2)
    .Set("xaxispos", "bottom")
    .Set("gutter.left", 40)
    .Set("tickmarks", "filledcircle")
    .Set("ticksize", 5)
    .Set("chart.labels.ingraph", [, , ["TSH",
      "blue", "yellow", 1, 80
    ], , ])
    .Set("chart.title", "TSH")
    .Draw();
}

function labelAxes() {
  var c = document.getElementById("GraphCanvas");
  var ctx = c.getContext("2d");
  ctx.font = "11px Georgia";
  ctx.fillStyle = "green";
  ctx.fillText("Date(MM/DD)", 400, 470);
  ctx.rotate(-Math.PI / 2);
  ctx.textAlign = "center";
  ctx.fillText("TSH Value", -250, 10);
}

var canvas = document.getElementById("cylinder");
var ctx = canvas.getContext("2d");
drawCylinder(canvas, ctx, "white", "black", 2);
function drawCylinder(canvas, ctx, fill, border, lineWidth)
{
		canvas.width = 160;
    canvas.height = 175;
    ctx.translate(25,0);
    ctx.fillStyle = fill;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(97.0, 156.7);
    ctx.lineTo(97.0, 17.7);
    ctx.lineTo(1.0, 17.7);
    ctx.lineTo(1.0, 156.7);
    ctx.lineTo(97.0, 156.7);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // layer1/Group/Path
    ctx.beginPath();
    ctx.moveTo(96.7, 156.2);
    ctx.bezierCurveTo(96.7, 165.3, 75.4, 172.7, 49.0, 172.7);
    ctx.bezierCurveTo(22.7, 172.7, 1.4, 165.3, 1.4, 156.2);
    ctx.bezierCurveTo(1.4, 147.2, 22.7, 139.8, 49.0, 139.8);
    ctx.bezierCurveTo(75.4, 139.8, 96.7, 147.2, 96.7, 156.2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // layer1/Group/Path
    ctx.beginPath();
    ctx.moveTo(96.7, 17.4);
    ctx.bezierCurveTo(96.7, 26.5, 75.4, 33.8, 49.0, 33.8);
    ctx.bezierCurveTo(22.7, 33.8, 1.4, 26.5, 1.4, 17.4);
    ctx.bezierCurveTo(1.4, 8.4, 22.7, 1.0, 49.0, 1.0);
    ctx.bezierCurveTo(75.4, 1.0, 96.7, 8.4, 96.7, 17.4);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}
