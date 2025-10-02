/**
 * helps some components keep their "height" when their content would otherwise be empty.
 *
 * an element like span with the content empty string or regular whitespaces will usually "collapse" in the block model and have 0px height.
 *
 * this character is invisible but makes the element keep it's height without having to find appropriate "min-height" values or similar workarounds.
 */
export const invisibleCharacter = <>&#8203;</>;
