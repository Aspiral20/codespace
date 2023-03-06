import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

// process.env.NODE_ENV = "production" &&
Sentry.init({
	dsn: "https://64d40ee988294b59b268904cb2a9059e@o877142.ingest.sentry.io/5828677",
	integrations: [new BrowserTracing()],

	// We recommend adjusting this value in production, or using tracesSampler
	// for finer control
	tracesSampleRate: 1.0,
});