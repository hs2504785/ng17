const sourceDir = "dist/ng17/browser";

module.exports = {
  content: [`${sourceDir}/index.html`, `${sourceDir}/*.js`],
  css: [`${sourceDir}/*.css`],
  output: sourceDir,
  safelist: {
    standard: [/red1$/],
    deep: [
      //   /modal/,
      //   /ag-menu/,
      //   /ag-header-active/,
      //   /^cm-s-neat/,
      //   /offcanvas-end/,
    ],
    // greedy: [
    //     /tooltip-arrow/
    // ],
  },
};
