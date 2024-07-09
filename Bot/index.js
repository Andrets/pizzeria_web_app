import { Telegraf } from 'telegraf'

// eslint-disable-next-line no-undef
const TOKEN = "7234751346:AAEZgb8S2ZypmCUQp_pdhK6Pf-5iBKcKEqY"
// eslint-disable-next-line no-undef
const web_link = ""

const bot = new Telegraf(TOKEN)

bot.start((ctx) => {
	const url = web_link
	const user = ctx.message.from
	const userName = user.username ? `@${user.username}` : user.first_name;
	ctx.replyWithMarkdownV2(`*Привет, ${userName} Добро пожаловать в PIZZA FRESCA* Нажми на кнопку ниже для начала работы`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '🚀 Начать', web_app: {url: url} }],
			],
			in: true
		},
		parse_mode: 'HTML'
	})
})

bot.launch();