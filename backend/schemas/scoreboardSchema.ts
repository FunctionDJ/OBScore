import z from "zod";
import { ssbuCharacterSchema } from "./ssbuCharacter";
import { bracketSchema } from "./bracketSchema";
import { roundSchema } from "./roundSchema";

export const sides = ["Winners", "Losers"] as const;
const sideSchema = z.enum(sides);
export type Side = z.infer<typeof sideSchema>;

const attendeeSchema = z.object({
	tag: z.string(),
	sponsor: z.string(),
});

export type Attendee = z.infer<typeof attendeeSchema>;

const playerSchema = attendeeSchema.extend({
	character: ssbuCharacterSchema.nullable(),
	side: sideSchema.nullable(),
	score: z.int().min(0),
});

export type Player = z.infer<typeof playerSchema>;

const levelSchema = z.object({
	bracket: bracketSchema,
	/** ignore if bracket is grandFinals or pools */
	round: roundSchema,
	/** only use if bracket = custom */
	custom: z.string(),
	number: z.int(),
});

export type Level = z.infer<typeof levelSchema>;

export const sets = ["BO3", "BO5", "Custom"] as const;
const setSchema = z.enum(sets);
export type Set = z.infer<typeof setSchema>;

export const scoreboardSchema = z.object({
	/**
	 * blank = initial state of controller without having received state from backend
	 * dirty = changed by user, controller needs to send to backend
	 * sync = current backend state, do not send this to backend again to avoid any loops
	 *
	 * the purpose is that the controller, when mounted, will not automatically update backend (and potentially overwrite the save data being loaded) until first user interaction.
	 */
	state: z.enum(["blank", "dirty", "sync"]),
	title: z.string(),
	bracketURL: z.string(),
	players: z.array(playerSchema),
	commentators: z.array(attendeeSchema),
	level: levelSchema,
	set: setSchema,
	/** only use if set = custom */
	setCustom: z.string(),
});

export type Scoreboard = z.infer<typeof scoreboardSchema>;
