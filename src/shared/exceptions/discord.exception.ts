export class DiscordUnauthorized extends Error {
  constructor(message: string) {
    super(message);
  }
}
