import { CommandInteraction } from 'discord.js';

export class DiscordUnauthorized {
  private handler(interaction: CommandInteraction): Promise<void> {
    return interaction.reply({
      content: `You are not allowed to do this!`,
    });
  }

  constructor(interaction: CommandInteraction) {
    this.handler(interaction);
  }
}
