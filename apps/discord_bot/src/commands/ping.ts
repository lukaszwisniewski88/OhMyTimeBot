import { Command } from '@sapphire/framework';
import { ApplyOptions } from '@sapphire/decorators';
import { ApplicationCommandType, type Message } from 'discord.js';


@ApplyOptions<Command.Options>({
  description: 'ping pong'
})
export class PingCommand extends Command {
  public override registerApplicationCommands(registry: Command.Registry) {
    // Register slash command
    registry.registerChatInputCommand({
      name: this.name,
      type: ApplicationCommandType.ChatInput,
      description: this.description
    });

    // Register context menu command available from any message
    registry.registerContextMenuCommand({
      name: this.name,
      type: ApplicationCommandType.Message
    });

    // Register context menu command available from any user
    registry.registerContextMenuCommand({
      name: this.name,
      type: ApplicationCommandType.User
    });
  }
  public override async messageRun(message: Message) {
    const msg = await message.channel.send('Ping?');
    const guild = message.guild?.name
    const userNamr = message.author.username
    const content = `Pong from BUN! Bot Latency ${Math.round(this.container.client.ws.ping)}ms. API Latency ${msg.createdTimestamp - message.createdTimestamp
      }ms.`;

    return msg.edit(content);
  }
  public override async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
    const msg = await interaction.reply({ content: 'Ping?', fetchReply: true });

    const guild = interaction.guild?.id
    const userNamr = interaction.user.username
    const content = `Pong! Bot ${Math.round(this.container.client.ws.ping)}ms. API Latency ${msg.createdTimestamp - interaction.createdTimestamp
      }ms. Guild: ${guild} User: ${userNamr}`

    return interaction.editReply({ content });
  }

  // context menu command
  public override async contextMenuRun(interaction: Command.ContextMenuCommandInteraction) {
    const msg = await interaction.reply({ content: 'Ping?', fetchReply: true });

    const content = `Pong! Bot Latency ${Math.round(this.container.client.ws.ping)
      }ms. API Latency ${msg.createdTimestamp - interaction.createdTimestamp
      } ms.`;

    return interaction.editReply({ content });
  }
}
