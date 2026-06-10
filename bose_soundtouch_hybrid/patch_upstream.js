const fs = require("fs");

function patchServerValidation() {
  const file = "/app/server.js";
  let source = fs.readFileSync(file, "utf8");

  if (source.includes("MASS_TOKEN") && source.includes("Music Assistant credentials")) {
    return;
  }

  const original = source;
  source = source.replace(
    /const requiredEnvVars = \[[^\]]*['"]APP_IP['"][^\]]*['"]MASS_IP['"][^\]]*['"]MASS_USERNAME['"][^\]]*['"]MASS_PASSWORD['"][^\]]*\];/,
    "const requiredEnvVars = ['APP_IP', 'MASS_IP'];"
  );

  if (source === original) {
    console.error("[Build Patch] Unable to update Music Assistant credential validation in server.js");
    process.exit(1);
  }

  source = source.replace(
    "    // Check for placeholder data in speakers.json",
    `    if (!process.env.MASS_TOKEN && (!process.env.MASS_USERNAME || !process.env.MASS_PASSWORD)) {
        console.log("[!!] Validation Failed: Missing Music Assistant credentials -> set MASS_TOKEN or MASS_USERNAME/MASS_PASSWORD");
        isReady = false;
    }

    // Check for placeholder data in speakers.json`
  );

  fs.writeFileSync(file, source);
}

patchServerValidation();
