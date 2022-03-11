import { Injectable, Inject } from '@nestjs/common';
import { CommandInteraction, MessageEmbed } from 'discord.js';
import { Guilds, SlashGroup, SlashCommand, Context, Options } from 'necord';
import { UsersService } from 'src/database';
import { CreateCoachDto, CreateUserDto } from './create.interface';

@Injectable()
@Guilds([process.env.GUILD])
@SlashGroup('create', 'Create different entities of the app')
export class CreateCommands {
  constructor(@Inject('SRV:USERS') private readonly users: UsersService) {}

  @SlashCommand('user', 'Create a new user.')
  public async createUser(
    @Context() [interaction]: [CommandInteraction],
    @Options() new_usr: CreateUserDto,
  ): Promise<void> {
    const tmp = this.users.create({ ...new_usr });

    if (tmp)
      return await interaction.reply({
        embeds: [
          new MessageEmbed().setDescription(
            `\`\`\`json\n${JSON.stringify(tmp, null, 4)}\`\`\``,
          ),
        ],
        ephemeral: true,
      });

    return await interaction.reply({ content: 'Failed to create user.' });
  }

  @SlashCommand('coach', 'Create a new coach.')
  public async createCoach(
    @Context() [interaction]: [CommandInteraction],
    @Options() new_usr: CreateCoachDto,
  ): Promise<void> {
    const tmp = this.users.create({ ...new_usr });

    if (tmp)
      return await interaction.reply({
        embeds: [
          new MessageEmbed().setDescription(
            `\`\`\`json\n${JSON.stringify(tmp, null, 4)}\`\`\``,
          ),
        ],
        ephemeral: true,
      });

    return await interaction.reply({ content: 'Failed to create user.' });
  }
}
