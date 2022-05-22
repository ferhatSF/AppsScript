function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('ffh Menu')
    .addItem('Say Hello', 'HelloWorld')
    .addItem('Prune Sheet', 'pruneSheet')
    .addToUi();
}

function HelloWorld() {
  Browser.msgBox("Hello World!");
}

function pruneSheet() {
  let activeSheet = SpreadsheetApp.getActiveSheet();
  let sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();

  for (var i = 0; i < sheets.length; i++) {
    let activeSheet = sheets[i];
    let sheetName = activeSheet.getName();

    let maxCols = activeSheet.getMaxColumns();
    let maxRows = activeSheet.getMaxRows();

    let lastCol = activeSheet.getLastColumn();
    let lastRow = activeSheet.getLastRow();

    let emptyCols = maxCols - lastCol;
    let emptyRows = maxRows - lastRow;

    if (emptyCols > 0) {
      firstEmptyCol = lastCol + 1;
      if (emptyCols < maxCols) {
        Logger.log([sheetName, " : REMOVING COLS : ", firstEmptyCol, emptyCols]);
        activeSheet.deleteColumns(firstEmptyCol, emptyCols);
      }
    }

    if (emptyRows > 0) {
      firstEmptyRow = lastRow + 1;
      if (emptyRows < maxRows) {
        Logger.log([sheetName, " : REMOVING ROWS : ", firstEmptyRow, emptyRows]);
        activeSheet.deleteRows(firstEmptyRow, emptyRows);
      }
    }
  }
}
