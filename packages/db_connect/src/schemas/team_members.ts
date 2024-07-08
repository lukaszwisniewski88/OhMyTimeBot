import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const team_member = sqliteTable("team_member", {
  id: text("id").primaryKey(),
  name: text("name"),
  email: text("email"),
  phone: text("phone"),
  role: text("role"),
  guild_id: text("guild_id").notNull()
})
