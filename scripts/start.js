#!/usr/bin/env node

// This script starts the production server
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// Default to production environment
const env = process.argv[2] || 'production';

// Run the command with env-cmd
const command = spawn('npx', ['env-cmd', '-e', env, 'node', 'dist/index.js'], {
  cwd: rootDir,
  stdio: 'inherit',
  shell: true
});

command.on('error', (err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

command.on('close', (code) => {
  process.exit(code);
});