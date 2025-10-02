import z from "zod";

export const brackets = [
	"Pools",
	"Winners",
	"Losers",
	"Grand Finals",
	"Grand Finals Reset",
	"Custom",
] as const;

export const bracketSchema = z.enum(brackets);

export type Bracket = z.infer<typeof bracketSchema>;
