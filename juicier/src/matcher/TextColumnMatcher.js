class TextColumnMatcher {
  constructor(columns, separator) {
    this.columns = columns;
    this.separator = separator;
  }

  match(text) {
    let match = [];
    let currentColumn = 1;

    let start = text.indexOf(this.separator);
    let end = text.indexOf(this.separator, start + 1);
    let found = false;

    while (end !== -1 && !found) {
      if (this.columns.some(col => col === currentColumn)) {
        match = text.substring(start + 1, end);
        found = true;
      }
      currentColumn++;
      start = text.indexOf(this.separator, end);
      end = text.indexOf(this.separator, start + 1);
    }

    return match;
  }
}

module.exports = TextColumnMatcher;
