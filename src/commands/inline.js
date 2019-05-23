const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');
const svgr = require('@svgr/core').default;
const prettier = require('prettier');
const tsTemplate = require('../templates/ts');

module.exports = async argv => {
  // Console.log(argv);
  const {svgCode, icon, ts} = argv;
  const svgoYml = fs.readFileSync(
    path.resolve(__dirname, '../../.svgo.yml'),
    'utf8',
  );
  const svgoConfig = yaml.safeLoad(svgoYml);

  const config = {
    icon,
    svgoConfig,
  };
  const prettierConfig = {parser: 'babel'};

  if (ts) {
    config.template = tsTemplate;
    prettierConfig.parser = 'typescript';
  }

  const code = await svgr(svgCode, config, {componentName: 'foo'});

  process.stdout.write(prettier.format(code, prettierConfig));
};
