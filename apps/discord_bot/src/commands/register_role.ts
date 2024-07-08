import { Command } from '@sapphire/framework';
import { ApplyOptions } from '@sapphire/decorators';


@ApplyOptions<Command.Options>({
  description: 'Zarejestruj użytkownika, jako członka zespołu',
  name: "set-role",
  enabled: true,
  options: [
    "role_name"
  ]

})
export class RegisterCommand extends Command {
  public override registerApplicationCommands(registry: Command.Registry) {
    // Register slash command
    registry.registerChatInputCommand((builder) => {
      builder.setName(this.name)
        .setDescription(this.description)
        .addRoleOption((option) => {
          return option.setName("role_name").setDescription("Nazwa roli").setRequired(true)
        })
    });
  }

  public override async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
    const role = interaction.options.get("role_name", true)
    console.log(role?.role?.id)
    return interaction.reply({
      content: "Thank you for submitting the form!",
    })
  }

}
