const { CommandContext, CommandOptionType, SlashCommand } = require('slash-create');

module.exports = class HelloCommand extends SlashCommand {
  constructor(creator) {
    super(creator, {
      name: "hello",
      description: "Say hello to the world.",
      options: [
        {
          type: CommandOptionType.STRING,
          name: "name",
          description: "The name to say hello to.",
          required: false
        }
      ]
    });
  }

  /**
   * @param {CommandContext} ctx
   */
  async run(ctx) {
    if (ctx.options.hello) {
      return `Hello **${ctx.options.hello}**!`;
    } else {
      return "Hello World!";
    }
  }
}