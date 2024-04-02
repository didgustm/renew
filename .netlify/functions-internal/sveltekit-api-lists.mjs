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
		client: {"start":"_app/immutable/entry/start.a2811fd6.js","app":"_app/immutable/entry/app.ee0b69fd.js","imports":["_app/immutable/entry/start.a2811fd6.js","_app/immutable/chunks/scheduler.c358b412.js","_app/immutable/chunks/singletons.6eb63386.js","_app/immutable/chunks/paths.04235f2d.js","_app/immutable/entry/app.ee0b69fd.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.c358b412.js","_app/immutable/chunks/index.e7b2270d.js"],"stylesheets":[],"fonts":[]},
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
