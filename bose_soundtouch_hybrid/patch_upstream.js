const fs = require("fs");

function patchServerValidation() {
  const file = "/app/server.js";
  let source = fs.readFileSync(file, "utf8");

  if (source.includes("process.env.MASS_AUTH_REQUIRED !== 'false'")) {
    return;
  }

  const original = source;
  source = source.replace(
    /const requiredEnvVars = \[[^\]]*['"]APP_IP['"][^\]]*['"]MASS_IP['"][^\]]*['"]MASS_USERNAME['"][^\]]*['"]MASS_PASSWORD['"][^\]]*\];/,
    "const requiredEnvVars = ['APP_IP', 'MASS_IP'];\n    if (process.env.MASS_AUTH_REQUIRED !== 'false') requiredEnvVars.push('MASS_USERNAME', 'MASS_PASSWORD');"
  );

  if (source === original) {
    console.error("[Build Patch] Unable to update Music Assistant credential validation in server.js");
    process.exit(1);
  }

  fs.writeFileSync(file, source);
}

patchServerValidation();
