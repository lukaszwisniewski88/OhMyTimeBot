import { InteractionHandler, InteractionHandlerTypes } from "@sapphire/framework";
import type { ModalSubmitInteraction } from "discord.js";

export class RegisterModal extends InteractionHandler {
  public constructor(ctx: InteractionHandler.LoaderContext, options: InteractionHandler.Options) {
    super(ctx, {
      ...options,
      name: "RegisterModal",
      interactionHandlerType: InteractionHandlerTypes.ModalSubmit
    })

  }
  public async run(interaction: ModalSubmitInteraction) {
    await interaction.reply({
      content: 'Thank you for submitting the form!',
      ephemeral: true
    });
  }
}
