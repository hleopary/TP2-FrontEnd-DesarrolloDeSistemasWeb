import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const routes = [
  { path: '/', name: 'captura_home' },
  { path: '/bitacora', name: 'captura_bitacora' },
  { path: '/proyectos', name: 'captura_proyectos' },
  { path: '/github', name: 'captura_github' },
  { path: '/eduardo', name: 'captura_perfil_eduardo' },
  { path: '/leandro', name: 'captura_perfil_leandro' },
  { path: '/melissa', name: 'captura_perfil_melissa' },
  { path: '/marcelo', name: 'captura_perfil_marcelo' },
];

async function main() {
  console.log('Iniciando servidor de desarrollo...');
  const serverProcess = spawn('npm', ['run', 'dev', '--', '--port', '5173'], {
    cwd: __dirname,
    stdio: 'ignore', // We can ignore stdio or pipe it if we need to check when it's ready.
  });

  // Wait for the server to be ready
  console.log('Esperando a que el servidor esté listo (10 segundos)...');
  await delay(10000);

  console.log('Iniciando Puppeteer...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Set a standard desktop resolution
  await page.setViewport({ width: 1280, height: 800 });

  const outputDir = path.join(__dirname, 'Documentacion', 'img');

  for (const route of routes) {
    const url = `http://localhost:5173${route.path}`;
    console.log(`Navegando a ${url}...`);
    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      // Extra delay for animations
      await delay(2000); 
      
      const screenshotPath = path.join(outputDir, `${route.name}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`✅ Captura guardada: ${screenshotPath}`);
    } catch (error) {
      console.error(`❌ Error al capturar ${url}:`, error.message);
    }
  }

  await browser.close();
  console.log('Cerrando servidor...');
  serverProcess.kill();
  console.log('¡Proceso completado!');
  process.exit(0);
}

main().catch(console.error);
