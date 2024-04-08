import { defineCommand, runMain } from 'citty'
import type { ArgsDef, CommandDef } from 'citty'
import { version, description } from '../package.json' assert { type: 'json' }

const main = defineCommand({
  meta: {
    name: 'rolldown',
    version,
    description
  },
  args: {
    config: {
      type: 'string',
      alias: 'c',
      description:
        'Use this config file (if argument is used but value is unspecified, defaults to rolldown.config.js)',
    },
    help: {
      type: 'boolean',
      alias: 'h',
      description: 'Show this help message',
    },
  },
  async run(ctx) {
    // Something ...
  },
})

export async function showUsage<T extends ArgsDef = ArgsDef>(
  cmd: CommandDef<T>,
  parent?: CommandDef<T>,
) {
  console.log(`Usage: rolldown [options]`)
}

runMain(main, { showUsage })