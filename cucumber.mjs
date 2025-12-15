export default {
  default: [
    "--publish-quiet",
    "--require", "features/step_definitions/**/*.js",
    "--require", "features/support/**/*.js",
    "--format", "progress"
  ].join(" ")
};
