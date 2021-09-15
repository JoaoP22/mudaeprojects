function kakeraT() {
  //Get Sheet
  var app = SpreadsheetApp;
  var activeSheet = app.getActiveSpreadsheet().getSheetByName('Kakera Tower');

  //Vars
  var kakeraVl = activeSheet.getRange(2, 2).getValue();
  var kakeraVl2 = activeSheet.getRange(3, 2).getValue();
  var towerVl = activeSheet.getRange(2, 3).getValue();
  var flrsBuilt = activeSheet.getRange(2, 4).getValue();
  var useTradeables = activeSheet.getRange(2, 6).getValue();
  var vlTradeables =  activeSheet.getRange(2, 7).getValue();

  //Logs
  /*
  console.log("Kakera Vl1: ", kakeraVl);
  console.log("Kakera Vl2: ", kakeraVl2);
  console.log("Tower value: ", towerVl);
  console.log("Floors Built: ", flrsBuilt);
  console.log("Use Tradeables? ", useTradeables);
  console.log("Tradeables value: ", vlTradeables);
  */

  calcNextFloor(flrsBuilt, towerVl);

  function calcNextFloor(flrsBuilt, towerVl){
    let nextFloor = (flrsBuilt * towerVl) + towerVl;
    var setVl = activeSheet.getRange(2, 5).setValue(nextFloor);
    calcMissingVl(kakeraVl, kakeraVl2, useTradeables, vlTradeables, nextFloor);
  }

  function calcMissingVl(kakeraVl, kakeraVl2, useTradeables, vlTradeables, nextFloor){
    if (useTradeables === true){
      let missingVl = nextFloor - vlTradeables - kakeraVl - kakeraVl2;
      var setVl = activeSheet.getRange(2, 8).setValue(missingVl);
    }
    else {
      let missingVl = nextFloor - kakeraVl - kakeraVl2;
      var setVl = activeSheet.getRange(2, 8).setValue(missingVl);
    }
  }
}