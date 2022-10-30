const path = require('path')

function defaultIndexTemplate(filePaths) {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath))
    const formattedBaseName = filePath.includes('fill')
      ? `Svg${basename}Fill`
      : filePath.includes('outline')
      ? `Svg${basename}Outline`
      : basename
    const exportName = formattedBaseName
    return `export { default as ${exportName} } from './${basename}'`
  })
  return exportEntries.join('\n')
}

module.exports = defaultIndexTemplate
