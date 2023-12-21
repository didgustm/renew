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
		client: {"start":"_app/immutable/entry/start.a4659b35.js","app":"_app/immutable/entry/app.d2760ba1.js","imports":["_app/immutable/entry/start.a4659b35.js","_app/immutable/chunks/scheduler.2bfa17be.js","_app/immutable/chunks/singletons.7fcbdea7.js","_app/immutable/entry/app.d2760ba1.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.2bfa17be.js","_app/immutable/chunks/index.5b7eef27.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
