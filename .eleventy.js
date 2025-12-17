module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats(["njk", "md", "html"]);
  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
