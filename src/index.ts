// server.ts
import { serve } from 'bun'
import app from './app'

// Load environment variables from .env file


const port = process.env.PORT || 3000

console.log(`🚀 Server running in ${process.env.NODE_ENV || 'development'} mode at http://localhost:${port}`)

export default {
  port,
  fetch: app.fetch
}