import { Injectable, Inject, UseGuards } from '@nestjs/common';
import { CommandInteraction, MessageEmbed } from 'discord.js';
import { Guilds, SlashGroup, SlashCommand, Context, Options } from 'necord';
import {
  UsersService,
  Meeting,
  MeetingsService,
  Coach,
  User,
} from 'src/database';
import { AppAbility, Actions, AuthorizationRequire } from 'src/shared';
import { SlashCommandsAuthGuard } from 'src/shared/guards/authorization.guard';
import {
  CreateMeetingDTO,
  FinishMeetingDTO,
  UpdateMeetingDTO,
} from './act.interface';

@Injectable()
@Guilds([process.env.GUILD])
@SlashGroup('act', 'Interact with the application.')
export class ActCommands {
  constructor(
    @Inject('SRV:USERS') private readonly users: UsersService,
    @Inject('SRV:MEETINGS') private readonly meetings: MeetingsService,
  ) {}

  @SlashCommand('meet', 'Create a meet as if you were a given user')
  @UseGuards(SlashCommandsAuthGuard)
  @AuthorizationRequire((ability: AppAbility) =>
    ability.can(Actions.CREATE, Meeting),
  )
  public async amongUs(
    @Context() [interaction]: [CommandInteraction],
    @Options() dto: CreateMeetingDTO,
  ) {
    const [usr, coach] = [
      this.users.fetchById(dto.user),
      this.users.fetchById(dto.coach),
    ];

    if (!usr || !coach)
      return await interaction.reply({
        content: 'Could not find entities.',
        ephemeral: true,
      });
    // These checks could be abstracted out to a pipe to prevent the execution of the method if the users do not exist. As well as to implement further validation with class-validator & transformer.

    const mtn = this.meetings.create({
      ...dto,
      user: usr as User,
      coach: coach as Coach,
      finished: false,
      notes: '',
    });

    return await interaction.reply({
      embeds: [
        new MessageEmbed().setDescription(
          `\`\`\`json\n${JSON.stringify(mtn, null, 4)}\`\`\``,
        ),
      ],
      ephemeral: true,
    });
  }

  @SlashCommand('finish', 'Finish a meeting as if you were a given user.')
  @UseGuards(SlashCommandsAuthGuard)
  @AuthorizationRequire((ability: AppAbility) =>
    ability.can(Actions.UPDATE, Meeting, 'finished'),
  )
  public async finishMeet(
    @Context() [interaction]: [CommandInteraction],
    @Options() dto: FinishMeetingDTO,
  ) {
    const mtn = this.meetings.fetchById(dto.id);

    if (!mtn)
      return await interaction.reply({
        content: 'Could not find entities.',
        ephemeral: true,
      });

    const upt_meeting = this.meetings.update({ ...mtn, finished: true });

    return await interaction.reply({
      embeds: [
        new MessageEmbed().setDescription(
          `\`\`\`json\n${JSON.stringify(upt_meeting, null, 4)}\`\`\``,
        ),
      ],
      ephemeral: true,
    });
  }

  @SlashCommand(
    'addnote',
    'Add a note to a meeting as if you were a given user.',
  )
  @UseGuards(SlashCommandsAuthGuard)
  @AuthorizationRequire((ability: AppAbility) =>
    ability.can(Actions.UPDATE, Meeting, 'notes'),
  )
  public async notesOnMeeting(
    @Context() [interaction]: [CommandInteraction],
    @Options() dto: UpdateMeetingDTO,
  ) {
    const mtn = this.meetings.fetchById(dto.id);

    if (!mtn)
      return await interaction.reply({
        content: 'Could not find entities.',
        ephemeral: true,
      });

    const upt_meeting = this.meetings.update({
      ...dto,
      user: mtn.user,
      coach: mtn.coach,
      topic: mtn.topic,
      finished: mtn.finished,
    });

    return await interaction.reply({
      embeds: [
        new MessageEmbed().setDescription(
          `\`\`\`json\n${JSON.stringify(upt_meeting, null, 4)}\`\`\``,
        ),
      ],
      ephemeral: true,
    });
  }
}
