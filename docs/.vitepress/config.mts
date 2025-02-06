import { withMermaid } from "vitepress-plugin-mermaid";
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs';
import vue from '@vitejs/plugin-vue';
import react from '@vitejs/plugin-react';
import path from 'path';

export default withMermaid({
	plugins: [vue(),react()],
	resolve: {
		alias: {
		  '@components': path.resolve(__dirname, './components'),
		},
	  },
	mermaid: {  // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
		arrowMarkerAbsolute: false,
		theme: 'base',
		darkmode: true,
		themeVariables: {
			fontFamily: ['Roboto', 'Raleway', 'sans-serif'],
			background: '#A7C8F5',
			primaryColor: '#2376e5',
			primaryTextColor: '#304053',
			secondaryColor: '#E9F1FC',
			secondaryTextColor: '#455364',
			tertiaryColor: '#fff',
			lineColor: '#CFE1F9',
			actorBorder: '#304053',
  			actorBkg: '#FFFFFF',
			actorTextColor: '#304053',
			noteBkgColor: 'rgba(158, 167, 177, 0.1)',       // Background color for the note
			noteBorderColor: 'rgba(158, 167, 177, 0.1)',     // Border color for the note
		},
		sequence: {
			diagramMarginX: 10,
			diagramMarginY: 10,
			actorMargin: 50,
			width: 200,
			boxMargin: 10,
			boxTextMargin: 5,
			noteMargin: 10,
			messageMargin: 35,
			messageAlign: 'center',
			mirrorActors: true,
			bottomMarginAdj: 1,
			useMaxWidth: true,
			showSequenceNumbers: true,
		  },
		  flowchart: {
			padding: 24,
			diagramPadding:32,
			rankSpacing:100
		}
    },
    // optionally set additional config for plugin itself with MermaidPluginConfig
    mermaidPlugin: {
      class: "mermaid my-class", // set additional css classes for parent container 
    },
	markdown: {
		// theme: { // Updates code blocks theme https://shiki.style/themes
		// 	light: 'catppuccin-frappe',
		// 	dark: 'rose-pine-moon'
		// },
		lineNumbers: true,
		config(md) {
			md.use(tabsMarkdownPlugin)
		  },
	},
  	ignoreDeadLinks: true,
  	title: "Mywebsite Doc",
  	description: "Mywebsite\'s API documentation. Objects descriptions, endpoints, examples, use cases and implementation guide for developers",
  	head: [
		['link', {rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/img/code-white.png"},],
		['link', {rel: "icon", type: "image/x-icon", sizes: "128x128", href: "/assets/img/code-white.png"}],
		['link', {rel: "icon", type: "image/png", sizes: "128x128", href: "/assets/img/code-white.png"}],
  	],
	appearance: true,
  	sitemap: {
    	hostname: 'https://docs.mywebsite.com'
  	},
  	themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
	logo: {
		light: '/assets/img/code-white.png',
		dark: '/assets/img/code-white.png',
		alt: 'Mywebsite Documentation'
	  },
		siteTitle: false,
		docFooter: {
			prev: 'Previous',
			next: 'Next'
		  },
		lastUpdated: {
			text: 'Updated on',
			formatOptions: {
				dateStyle: 'medium',
			},
		},
		nav: [
			{
			  text: 'Guides',
			  link: '/guide/overview/glossary',
			  activeMatch: '^/guide/(overview|api-basics|webhooks|strong-customer-authentication|emails|users|user-verification|cards|acquiring|cheques|transfers|wallets|operations|dashboard|dev-resources)'
			},
			{
				text: 'API Reference',
				items: [
					{text: 'API Endpoints', link: '/api-reference/api-endpoints'},
				],
			},
		  ],
		outline:[2,3],
		returnToTop: true,
		externalLinkIcon: true,
		returnToTopLabel:"Back to top",
		sidebar: {
		'/guide/': [
					{
						text: "Overview",
						collapsed: true,
						items: [
							{text:'Glossary',link:'/guide/overview/glossary'},
						]
					}
				]
		}
	}
})
