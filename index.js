module.exports = function addBoxSizingUtilities({ addUtilities, variants }) {
  addUtilities({
    '.border-box': { boxSizing: 'border-box' },
    '.content-box': { boxSizing: 'content-box' },
  }, variants('boxSizing'));
};