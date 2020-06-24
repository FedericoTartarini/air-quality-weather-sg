require("babel-register")({
  presets: ["es2015", "react"],
});

const router = require("../Views/SitemapRoutes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
  return new Sitemap(router)
    .build("https://federicotartarini.github.io")
    .save("./public/sitemap.xml");
}

generateSitemap();
