/**
 * @example
 * // returns <@123456789012345678>
 * mentionUser("123456789012345678")
 * @param {string | bigint} userId The user id to mention
 * @returns {string} The mention string
 * @description This function will not work if the user is not mentionable
 */
const mentionUser = (userId: string | bigint): string => `<@${userId}>`;

/**
 * @example
 * // returns <#23456789012345678>
 * mentionChannel("123456789012345678")
 * @param {string | bigint} channelId The channel id to mention
 * @returns {string} The mention string
 * @description This function will not work if the channel is not mentionable
 */
const mentionChannel = (channelId: string | bigint): string =>
	`<#${channelId}>`;

/**
 * @example
 * // returns <@&123456789012345678>
 * mentionRole("123456789012345678")
 * @param {string | bigint} roleId The role id to mention
 * @returns {string} The mention string
 * @description This function will not work if the role is not mentionable
 */
const mentionRole = (roleId: string | bigint): string => `<@&${roleId}>`;

/**
 * @example
 * // returns @everyone
 * mentionEveryone()
 * @returns {string} The mention string
 */
const mentionEveryone = (): string => `@everyone`;

/**
 * @example
 * // returns @here
 * mentionHere()
 * @returns {string} The mention string
 */
const mentionHere = (): string => `@here`;

/**
 *
 * @param {string} command The command to mention
 * @returns {string} The mention string
 * @description This function will not work if the command is not mentionable
 * @example
 * // returns <command>
 * mentionCommand("command")
 */
const mentionCommand = (command: string): string => {
	if (command.startsWith("/")) {
		return `<${command}>`;
	}
	return `</${command}>`;
};
