const yargs = require('yargs');

// eslint-disable-next-line no-unused-expressions
yargs
  .command(
    'inline <svg-code>',
    'to transform inline code',
    {
      'svg-code': {
        type: 'string',
      },
    },
    require('./commands/inline'),
  )
  .options({
    icon: {
      type: 'boolean',
      default: true,
    },
    ts: {
      type: 'boolean',
      default: false,
    },
  })
  .help().argv;
