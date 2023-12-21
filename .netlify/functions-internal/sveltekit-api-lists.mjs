import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","favicon.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.c1cfccf1.js","app":"_app/immutable/entry/app.a3dd0942.js","imports":["_app/immutable/entry/start.c1cfccf1.js","_app/immutable/chunks/scheduler.2bfa17be.js","_app/immutable/chunks/singletons.977b5de6.js","_app/immutable/entry/app.a3dd0942.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.2bfa17be.js","_app/immutable/chunks/index.5b7eef27.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js'))
		],
		routes: [
			{
				id: "/api/lists",
				pattern: /^\/api\/lists\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/api/lists/_server.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
