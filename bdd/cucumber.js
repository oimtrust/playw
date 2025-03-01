const common = `
    --require setup/assertions.js
    --require setup/hooks.js
    --require steps/**/*.step.js
`

module.exports = {
    default: `${common} features/**/*.feature`,
}