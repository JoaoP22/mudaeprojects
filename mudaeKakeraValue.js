function baseVal(claimRank, likeRank, claimedChars) {
  
  //Get Sheet
  var app = SpreadsheetApp;
  var activeSheet = app.getActiveSpreadsheet().getSheetByName('Character value');

  //Vars
  var claimRank = activeSheet.getRange(2, 2).getValue();
  var likeRank = activeSheet.getRange(3, 2).getValue();
  var claimedChars = activeSheet.getRange(4, 2).getValue();
  var keys = activeSheet.getRange(5, 2).getValue();

  //Logs
  /*
  console.log("Claim Rank: ", claimRank);
  console.log("Like Rank: ", likeRank);
  console.log("Claimed Chars: ", claimedChars);
  console.log("Keys: ", keys);
  */

  keyMult();

//Keys multiplier
  function keyMult() {
    if (keys < 1) {
      console.log("Multiplicador de chaves: 1");
      let caseVl = 1;
      calcular(caseVl);

    } else if (1 <= keys && keys < 3) {
      let caseVl = 1 + 0.1 * (keys - 1);
      console.log("Multiplicador de chaves: ", caseVl);
      calcular(caseVl);

    } else if (3 <= keys && keys < 6) {
      let caseVl = 1.1 + 0.1 * (keys - 3);
      console.log("Multiplicador de chaves: ", caseVl);
      calcular(caseVl);
      
    } else if (6 <= keys && keys < 10) {
      let caseVl = 1.3 + 0.1 * (keys - 6);
      console.log("Multiplicador de chaves: ", caseVl);
      calcular(caseVl);
      
    } else {
      let caseVl = 1.6 + 0.05 * (keys - 10);
      console.log("Multiplicador de chaves: ", caseVl);
      calcular(caseVl);
      
    }
  }

//Calcular Vars
function calcular(caseVl) {
  let avgRank = (claimRank + likeRank) / 2;
  let claimMulti = 1 + claimedChars / 5500;
  let baseVal = Math.floor((25000 * (avgRank + 70) ** -0.75 + 20) * claimMulti + 0.5);

  //Logs
  /*
  console.log("Avg Rank: ", avgRank);
  console.log("Claim Multiplier: ", claimMulti);
  console.log("Base Value: ", baseVal);
  console.log("Multiplicador chaves: ", caseVl);
  */

  kakeraVal(baseVal, caseVl);
}

//Kakera Value
function kakeraVal(baseVal, caseVl) {
    let kakeraValueFinal = Math.floor(baseVal * caseVl + 0.5);
    console.log("Valor Base: ", baseVal);
    var setVl = activeSheet.getRange(6, 2).setValue(baseVal);
    console.log("Valor em Kakera: ", kakeraValueFinal);
    var setVl = activeSheet.getRange(7, 2).setValue(kakeraValueFinal);
  }
}