const { environment } = require('@rails/webpacker')

// Excludes Mapbox-GL from Babel transpiler
const nodeModulesLoader = environment.loaders.get('nodeModules')
if (!Array.isArray(nodeModulesLoader.exclude)) {
  nodeModulesLoader.exclude = (nodeModulesLoader.exclude == null)
    ? []
    : [nodeModulesLoader.exclude]
}
nodeModulesLoader.exclude.push(/mapbox-gl/)

module.exports = environment
