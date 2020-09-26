import fetch from "node-fetch";
import data from "./config.json";
import chalk from "chalk";
import { tokenify, renewToken } from "../../tokenify/";
import { RequestInit } from "node-fetch";
const f = () => Math.floor(Math.random() * 100) + 2;
const g = () => Math.floor(Math.random() * 3) + 1;
const bobby = {
	appearance: {
		name: { first: 44, middle: 754, last: 882 },
		gender: "male",
		hair: { color: 1, style: 19 },
		skinColor: 1,
		eyeColor: 1,
		face: 4,
	},
	house: {
		currentHouseTag: "suburbs",
		active: [
			{ anchorY: 0, r: 0, stack: [], dx: 0, dy: 0, x: 480, y: 160, z: 1, ID: 17 },
			{ anchorY: 0, r: 0, stack: [], dx: 0, dy: 0, x: 400, y: 160, z: 1, ID: 3 },
			{ anchorY: 0, r: 0, stack: [], dx: 0, dy: 0, x: 440, y: 100, z: 1, ID: 18 },
			{ anchorY: 0, r: 0, stack: [], dx: 0, dy: 0, x: 840, y: 100, z: 1, ID: 18 },
			{ anchorY: 0, r: 0, stack: [], dx: 0, dy: 0, x: 880, y: 240, z: 1, ID: 14 },
			{ anchorY: 0, r: 0, stack: [], dx: 0, dy: 0, x: 880, y: 140, z: 1, ID: 1 },
			{ anchorY: 0, r: 0, stack: [], dx: 0, dy: 0, x: 640, y: 80, z: 1, ID: 13 },
		],
		bg: { active: 1, own: [1] },
		items: {
			"1": { A: [], N: 1 },
			"3": { A: [], N: 1 },
			"13": { A: [], N: 1 },
			"14": { A: [], N: 1 },
			"17": { A: [], N: 1 },
			"18": { A: [], N: 2 },
		},
	},
	data: {
		settings: { bgmVolume: 0.3, voiceVolume: 1, sfxVolume: 0.9 },
		level: 69,
		storedMemberStars: 0,
		hp: 500,
		stars: -1e22,
		team: 0,
		allowsHouseVisitors: false,
		versionID: 36,
		school: "none",
		zone: "shiverchill-A4",
		daily: { isComplete: false, lastStarted: 0 },
		dailyQuestions: { startedChallenge: false, completedDays: 0, numAnsweredToday: 0 },
		startDate: 1601140085315,
		nm: 2,
	},
	state: {
		tutorial: { "0": 4 },
		world: {
			bounties: [169702874.12493998, 78315262.46529493, 113646179.88971193],
			dailyQuests: { "0": { questId: 0, dateId: 18531, questState: 0 } },
		},
		zone: {
			lamplight: { "2": "09262020" },
			house: { quest: { ID: 2 } },
			shiverchill: { "11": { date: "09262020", flags: [1, 1, 1, 1, 1], rewards: 0 } },
			academy: { quest: { ID: 2 } },
		},
		breadcrumbs: { FEATURE_BADGES: 1 },
		towers: {
			earthtower: {
				achievementPagesCount: 0,
				wardenSaved: false,
				floors: 0,
				boss: false,
				achievementMonstersCount: 0,
			},
		},
	},
	equipment: { follow: 19, hat: 19, outfit: 19, weapon: 19, boots: 19 },
};
const rand = () => ({
	appearance: {
		name: { first: f(), middle: f(), last: f() },
		gender: Math.round(Math.random()) ? "male" : "female",
		hair: { color: f(), style: f() },
		skinColor: g(),
		eyeColor: g(),
		face: g(),
	},
	house: {
		currentHouseTag: "suburbs",
		active: [
			{ anchorY: 0, r: 0, stack: [], dx: 0, dy: 0, x: 480, y: 160, z: 1, ID: 17 },
			{ anchorY: 0, r: 0, stack: [], dx: 0, dy: 0, x: 400, y: 160, z: 1, ID: 3 },
			{ anchorY: 0, r: 0, stack: [], dx: 0, dy: 0, x: 440, y: 100, z: 1, ID: 18 },
			{ anchorY: 0, r: 0, stack: [], dx: 0, dy: 0, x: 840, y: 100, z: 1, ID: 18 },
			{ anchorY: 0, r: 0, stack: [], dx: 0, dy: 0, x: 880, y: 240, z: 1, ID: 14 },
			{ anchorY: 0, r: 0, stack: [], dx: 0, dy: 0, x: 880, y: 140, z: 1, ID: 1 },
			{ anchorY: 0, r: 0, stack: [], dx: 0, dy: 0, x: 640, y: 80, z: 1, ID: 13 },
		],
		bg: { active: 1, own: [1] },
		items: {
			"1": { A: [], N: 1 },
			"3": { A: [], N: 1 },
			"13": { A: [], N: 1 },
			"14": { A: [], N: 1 },
			"17": { A: [], N: 1 },
			"18": { A: [], N: 2 },
		},
	},
	data: {
		settings: { bgmVolume: 0.3, voiceVolume: 1, sfxVolume: 0.9 },
		level: f(),
		storedMemberStars: 0,
		hp: f() * 100,
		stars: -1e22,
		team: 0,
		allowsHouseVisitors: false,
		versionID: 36,
		school: "none",
		zone: "shiverchill-A4",
		daily: { isComplete: false, lastStarted: 0 },
		dailyQuestions: { startedChallenge: false, completedDays: 0, numAnsweredToday: 0 },
		startDate: 1601140085315,
		nm: 2,
	},
	state: {
		tutorial: { "0": 4 },
		world: {
			bounties: [169702874.12493998, 78315262.46529493, 113646179.88971193],
			dailyQuests: { "0": { questId: 0, dateId: 18531, questState: 0 } },
		},
		zone: {
			lamplight: { "2": "09262020" },
			house: { quest: { ID: 2 } },
			shiverchill: { "11": { date: "09262020", flags: [1, 1, 1, 1, 1], rewards: 0 } },
			academy: { quest: { ID: 2 } },
		},
		breadcrumbs: { FEATURE_BADGES: 1 },
		towers: {
			earthtower: {
				achievementPagesCount: 0,
				wardenSaved: false,
				floors: 0,
				boss: false,
				achievementMonstersCount: 0,
			},
		},
	},
	equipment: { follow: f(), hat: f(), outfit: f(), weapon: f(), boots: f() },
});
const dat = { username: "7m77k3a", password: "place9" }; // data[0];
(async () => {
	let i = 0;
	for (const dat of data) {
		i++
		const tokened = await tokenify(dat.username, dat.password);
		const userdat = await (
			await fetch(
				`https://api.prodigygame.com/game-api/v2/characters/${tokened.userID}?fields=appearance%2CisMember%2Cequipment%2Cdata%2Cstate&userID=${tokened.userID}`,
				{
					headers: {
						Authorization: `${tokened.token_type} ${tokened.token}`,
					},
				}
			)
		).json();
		const init = await fetch(
			`https://api.prodigygame.com/game-api/v1/character/${tokened.userID}?isMember=1&userID=${tokened.userID}`,
			{
				headers: {
					Authorization: `${tokened.token_type} ${tokened.token}`,
				},
			}
		);
		console.log(`Initalized with ${init.status}`);
		const update = await fetch(`https://api.prodigygame.com/game-api/v3/characters/${tokened.userID}`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `${tokened.token_type} ${tokened.token}`,
			},
			body: JSON.stringify({
				data: JSON.stringify(rand()),
				userID: tokened.userID,
			}),
			method: "POST",
		});
		console.log(`Data updated with ${update.status}`);
		console.log(`${i}/${data.length}`)
	}
})();