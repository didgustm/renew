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
		client: {"start":"_app/immutable/entry/start.74b76bfd.js","app":"_app/immutable/entry/app.c2272877.js","imports":["_app/immutable/entry/start.74b76bfd.js","_app/immutable/chunks/scheduler.2bfa17be.js","_app/immutable/chunks/singletons.f62b8806.js","_app/immutable/entry/app.c2272877.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.2bfa17be.js","_app/immutable/chunks/index.5b7eef27.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js'))
		],
		routes: [
			{
				id: "/api",
				pattern: /^\/api\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/api/_server.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
