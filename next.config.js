// This file was automatically added by edgio init.
// You should commit this file to source control.
const { withEdgio } = require("@edgio/next/config");

module.exports = (phase, config) =>
  withEdgio({
    // Write your Next config here
    async redirects() {
      return [
        {
          source: "/promotion-new",
          destination: "https://uniform-sales-demo-default.glb.edgio.link/JavaDrip-Specialty-Launch",
          permanent: true,
        },
      ];
    },
  });
