import z from "zod";

export const rounds = ["Round", "Quarters", "Semis", "Finals"] as const;
export const roundSchema = z.enum(rounds);
export type Round = z.infer<typeof roundSchema>;
