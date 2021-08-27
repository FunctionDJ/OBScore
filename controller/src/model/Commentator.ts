import Attendee from "./Attendee";

export const createCommentator = (tag: string): Commentator => ({
  tag
});

export default class Commentator extends Attendee {

}