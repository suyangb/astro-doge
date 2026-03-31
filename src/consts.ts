import type { Metadata, Projects, Site, Socials, TechStack } from "@types";

export const SITE: Site = {
	NAME: "王苏洋Blog",
	EMAIL: "1493367306@qq.com",
	DESCRIPTION: "记录折腾博客、技术探索与生活思考的个人小站。",
	NUM_POSTS_ON_HOMEPAGE: 10,
	NUM_THOUGHTS_ON_HOMEPAGE: 3,
	NUM_RELATED_POSTS_ON_POST: 3,
};

export const HOME: Metadata = {
	TITLE: "主页",
	DESCRIPTION: "王苏洋的个人博客，分享技术折腾与生活点滴。",
};

export const BLOG: Metadata = {
	TITLE: "文章",
	DESCRIPTION: "技术笔记、折腾记录与学习总结。",
};

export const THOUGHTS: Metadata = {
	TITLE: "碎碎念",
	DESCRIPTION: "日常随想、心情随笔与生活碎片。",
};

export const ABOUT: Metadata = {
	TITLE: "关于",
	DESCRIPTION: "关于我与这个小站的故事。",
};

export const FRIENDS: Metadata = {
	TITLE: "友链",
	DESCRIPTION: "交换友链，互相学习，共同进步。",
};

export const MESSAGES: Metadata = {
	TITLE: "留言板",
	DESCRIPTION: "欢迎在这里留下你的评论、建议或想说的话。",
};

export const PROJECTS: Projects = [
	{
		category: "项目",
		items: [
			{
				name: "王苏洋Blog",
				href: "https://github.com/suyangb",
				homepage: "https://wsyblog.cn",
				description: "我的个人博客，基于 Astro 构建，持续折腾中。",
			},
			{
				name: "Astro 主题定制",
				href: "https://github.com/suyangb",
				badge: "WIP",
				description: "自用简约二次元风格 Astro 博客主题开发。",
			},
		],
	},
];

export const TECH_STACK: TechStack = [
	{
		category: "语言",
		items: [
			{
				name: "TypeScript",
				href: "https://www.typescriptlang.org/",
				description: "带类型的 JavaScript，更安全的前端开发。",
			},
		],
	},
	{
		category: "前端",
		items: [
			{
				name: "Astro",
				href: "https://astro.build/",
				description: "轻量、快速、适合内容驱动的现代 Web 框架。",
			},
			{
				name: "Tailwind CSS",
				href: "https://tailwindcss.com/",
				description: "实用优先，快速构建现代界面。",
			},
		],
	},
	{
		category: "博客工具",
		items: [
			{
				name: "Halo",
				href: "https://halo.run/",
				description: "曾使用的现代化开源博客系统。",
			},
			{
				name: "Typecho",
				href: "https://typecho.org/",
				description: "简洁轻量的 PHP 博客程序。",
			},
		],
	},
];

export const SOCIALS: Socials = [
	{
		NAME: "GitHub",
		HREF: "https://github.com/suyangb",
	},
];
