/**
 * @example
 * // returns ```js
 * // console.log("Hello World!")
 * // ```
 * codeBlock("console.log(\"Hello World!\")", "js")
 * @param {string} content The content of the code block
 * @param {string} [language] The language of the code block
 * @returns {string} The code block string
 * @description This function will create a code block
 */
const codeBlock = (
	content: string,
	language?: CodeBlockLanguage | string
): string => `\`\`\`${language || ""}\n${content}\`\`\``;

/**
 * @example
 *  // returns `Hello World!`
 * inlineCode("Hello World!")
 * @param {string} content The content of the inline code
 * @returns {string} The inline code string
 * @description This function will create an inline code block
 */
const inlineCode = (content: string): string => `\`${content}\``;

/**
 * @example
 * // returns **Hello World!**
 * bold("Hello World!")
 * @param {string} content The content of the bold text
 * @returns {string} The bold text string
 * @description This function will create bold text
 */
const bold = (content: string): string => `**${content}**`;

/**
 * @example
 * // returns *Hello World!*
 * italic("Hello World!")
 * @param {string} content The content of the italic text
 * @returns {string} The italic text string
 * @description This function will create italic text
 */
const italic = (content: string): string => `*${content}*`;

/**
 * @example
 * // returns __Hello World!__
 * underline("Hello World!")
 * @param {string} content The content of the underline text
 * @returns {string} The underline text string
 * @description This function will create an underline
 */
const underline = (content: string): string => `__${content}__`;

/**
 * @example
 * // returns ~~Hello World!~~
 * strikethrough("Hello World!")
 * @param {string} content The content of the strikethrough text
 * @returns {string} The strikethrough text string
 * @description This function will create a strikethrough
 */
const strikethrough = (content: string): string => `~~${content}~~`;

/**
 * @example
 * // returns ||Hello World!||
 * spoiler("Hello World!")
 * @param {string} content The content of the spoiler text
 * @returns {string} The spoiler text string
 * @description This function will create a spoiler
 */
const spoiler = (content: string): string => `||${content}||`;

/**
 * @example
 * // returns > Hello World!
 * quote("Hello World!")
 * @param {string} content The content of the quote
 * @returns {string} The quote string
 * @description This function will create a quote
 */
const quote = (content: string): string => `> ${content}`;

/**
 * @example
 * // returns >>> Hello World!
 * blockQuote("Hello World!")
 * @param {string} content The content of the block quote
 * @returns {string} The block quote string
 * @description This function will create a block quote
 */
const blockQuote = (content: string): string => `>>> ${content}`;

/**
 * @example
 * // returns Hello World!
 * removeFormatting("**Hello World!**")
 * @param {string} content The content of the text
 * @returns {string} The text without formatting
 * @description This function will remove all formatting from the text
 */
const removeFormatting = (content: string): string =>
	content
		.replace(/`/g, "")
		.replace(/\*\*/g, "")
		.replace(/\*/g, "")
		.replace(/__/g, "")
		.replace(/~~/g, "")
		.replace(/\|\|/g, "")
		.replace(/>/g, "")
		.replace(/>>>/g, "");

/**
 * @example
 * // returns [Example](https://example.com)
 * hyperlink("Example", "https://example.com")
 * @param {string} content The content of the hyperlink
 * @param {string} url The url of the hyperlink
 * @returns {string} The hyperlink string
 * @description This function will create a hyperlink
 */
const hyperlink = (content: string, url: string): string =>
	`[${content}](${url})`;

/**
 * @example
 * // returns <t:1681834424436:R>
 * timestamp(new Date(), "R")
 * @param {Date} date The date to convert to a timestamp
 * @param {TimestampStyle} style The style of the timestamp
 * @returns {string} The timestamp string
 * @description This function will create a timestamp
 * @see https://discord.com/developers/docs/reference#message-formatting-timestamp-styles
 */
const timestamp = (date: Date, style: TimestampStyle): string =>
	`<t:${Math.floor(date.getTime() / 1000)}:${style}>`;

/**
 * @example
 * // returns <:123456789012345678>
 * customEmoji("123456789012345678")
 * @param {string | bigint} emojiId The id of the emoji
 * @returns {string} The emoji string
 * @description This function will create a custom emoji
 */
const customEmoji = (emojiId: string | bigint): string => {
	return `<:${emojiId}>`;
};

/**
 * @example
 * // returns <a:123456789012345678>
 * animatedCustomEmoji("123456789012345678")
 * @param {string | bigint} emojiId The id of the emoji
 * @returns {string} The emoji string
 * @description This function will create an animated custom emoji
 */
const animatedCustomEmoji = (emojiId: string | bigint): string => {
	return `<a:${emojiId}>`;
};
