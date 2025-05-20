// app.ts
import { Hono } from 'hono'

const app = new Hono()

// Add a status endpoint that returns a JSON response with environment variables
app.get('/status', (c) => {
    return c.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        environment: {
            NODE_ENV: process.env.NODE_ENV || 'development',
            APP_VERSION: process.env.APP_VERSION || '1.0.0',
            BUN_ENV: process.env.BUN_ENV || 'local',
            SERVER_PORT: process.env.PORT || '3000',
            OTHER_ENV: process.env.OTHER_ENV || null
        }
    })
})

// Add a simple root route
app.get('/', (c) => {
    return c.text('Hello from Hono! Try the /status endpoint')
})

export default app