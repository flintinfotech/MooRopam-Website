#!/usr/bin/env node

// This script builds the application for production
import { spawn, spawnSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// Default to production environment
const env = process.argv[2] || 'production';

console.log(`Building application for ${env} environment...`);

// Build the client
const clientBuild = spawnSync('npx', ['env-cmd', '-e', env, 'vite', 'build'], {
  cwd: rootDir,
  stdio: 'inherit',
  shell: true
});

if (clientBuild.status !== 0) {
  console.error('Client build failed');
  process.exit(clientBuild.status || 1);
}

// Build the server
const serverBuild = spawn('npx', [
  'env-cmd', '-e', env, 'esbuild', 
  'server/index.ts', 
  '--platform=node', 
  '--packages=external', 
  '--bundle', 
  '--format=esm', 
  '--outdir=dist'
], {
  cwd: rootDir,
  stdio: 'inherit',
  shell: true
});

serverBuild.on('error', (err) => {
  console.error('Failed to build server:', err);
  process.exit(1);
});

serverBuild.on('close', (code) => {
  if (code !== 0) {
    console.error(`Server build failed with exit code ${code}`);
    process.exit(code);
  }
  
  console.log(`Build completed successfully for ${env} environment`);
});