module.exports = {
      sitenName: 'Markus-Steiner.at – UI/UX Design, Front End Development & Online Consulting',
      templates: {
            // Add templates for content types here.
            // Read more: https://gridsome.org/docs/templates/
      },
      plugins: [
            {
                  use: 'gridsome-plugin-tailwindcss'
            },
            {
                  use: "@gridsome/source-filesystem",
                  options: {
                        path: "content/**/*.md",
                        typeName: "Content",
                        resolveAbsolutePaths: true,
                        remark: {
                              externalLinksTarget: "_blank",
                              externalLinksRel: ["nofollow", "noopener", "noreferrer"]
                        }
                  }
            }
      ]
};
