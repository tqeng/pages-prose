// Run with Playwright installed locally, or set PLAYWRIGHT_PATH to its entry point.
import { createRequire } from 'node:module';
import assert from 'node:assert/strict';
import { writeFile, mkdir } from 'node:fs/promises';
import os from 'node:os';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright');
const browser = await chromium.launch({ headless: true, ...(process.env.BROWSER_EXECUTABLE ? { executablePath: process.env.BROWSER_EXECUTABLE } : {}) });
const page = await browser.newPage({ viewport: { width: 1440, height: 1050 } });
const results = { runAt: new Date().toISOString(), environment: { node: process.version, platform: `${os.platform()} ${os.release()}`, cpu: os.cpus()[0].model, memoryGiB: Math.round(os.totalmem()/2**30), browser: await browser.version(), viewport: '1440x1050', storage: 'Chromium localStorage', url: 'http://127.0.0.1:3000' }, cases: [] };
const errors=[]; page.on('pageerror',e=>errors.push(e.message));
async function check(id, action) { try { const actual=await action(); results.cases.push({id,status:'Pass',actual}); } catch(e) { results.cases.push({id,status:'Fail',actual:e.stack}); } }
await mkdir('docs/evidence', { recursive: true });
await page.goto('http://127.0.0.1:3000');
await check('TC-039', async()=>{
  await page.locator('#reader').selectOption('alice');
  await page.locator('#query').fill('Austen'); await page.locator('#search button').click();
  await page.getByRole('button',{name:'View book',exact:true}).click();
  await page.getByRole('button',{name:'Add to shelf',exact:true}).click();
  await page.locator('#status').selectOption('Currently Reading'); await page.getByRole('button',{name:'Update shelf',exact:true}).click();
  await page.locator('#page').fill('432'); await page.getByRole('button',{name:'Save progress',exact:true}).click();
  assert.match(await page.locator('#view').innerText(),/You reached the last page/);
  await page.locator('#status').selectOption('Completed'); await page.getByRole('button',{name:'Update shelf',exact:true}).click();
  await page.locator('#rating').fill('4.25'); await page.locator('#reviewText').fill('A rewarding community read.'); await page.getByRole('button',{name:'Save review',exact:true}).click();
  await page.locator('#postText').fill('The final chapter changes how I read the opening.'); await page.locator('#spoiler').check(); await page.getByRole('button',{name:'Post discussion',exact:true}).click();
  assert.equal(await page.getByText('The final chapter changes how I read the opening.',{exact:true}).count(),0);
  await page.getByRole('button',{name:'Reveal spoiler',exact:true}).click();
  assert.equal(await page.getByText('The final chapter changes how I read the opening.',{exact:true}).count(),1);
  await page.locator('#postText').fill('I agree with your interpretation.'); await page.locator('#parent').selectOption({index:1}); await page.getByRole('button',{name:'Post discussion',exact:true}).click();
  assert.equal(await page.getByText('The final chapter changes how I read the opening.',{exact:true}).count(),1);
  // New reader resets reveal state and sees no private shelves.
  await page.locator('#reader').selectOption('bob'); assert.equal(await page.getByRole('button',{name:'Reveal spoiler',exact:true}).count(),1);
  await page.getByRole('button',{name:'My shelves',exact:true}).click(); assert.match(await page.locator('#view').innerText(),/No books yet/);
  await page.reload(); await page.locator('#reader').selectOption('alice'); await page.getByRole('button',{name:'My shelves',exact:true}).click();
  assert.match(await page.locator('#view').innerText(),/Completed/); await page.getByRole('button',{name:'Manage book',exact:true}).click();
  await page.screenshot({path:'docs/evidence/prototype-book.png',fullPage:true});
  await page.getByRole('button',{name:'Discover',exact:true}).click(); await page.screenshot({path:'docs/evidence/prototype-discover.png',fullPage:true});
  assert.deepEqual(errors,[]); return 'Search, add, move, progress prompt, review, spoiler reveal, reply, reader isolation and real page reload passed; two screenshots saved; no page errors.';
});
await check('TC-037',async()=>{
  await page.locator('[data-book="b1"]').click(); await page.locator('#reviewText').fill('<img src=x onerror="window.xssExecuted=true">'); await page.getByRole('button',{name:'Save review',exact:true}).click();
  assert.equal(await page.locator('img').count(),0); assert.equal(await page.evaluate(()=>window.xssExecuted),undefined);
  assert.match(await page.locator('#view').innerText(),/<img src=x/); return 'Review payload rendered as literal text; no image element or script execution.';
});
await check('TC-041',async()=>{
  await page.evaluate(()=>{window.originalSetItem=Storage.prototype.setItem;Storage.prototype.setItem=function(){throw Error('Simulated storage failure');};});
  await page.locator('#status').selectOption('Want to Read'); await page.getByRole('button',{name:'Update shelf',exact:true}).click();
  assert.equal(await page.locator('#message').innerText(),'Simulated storage failure');
  await page.evaluate(()=>{Storage.prototype.setItem=window.originalSetItem;});
  await page.getByRole('button',{name:'My shelves',exact:true}).click(); assert.match(await page.locator('#view').innerText(),/Completed/);
  return 'Failed browser save displayed an error and retained Completed; no success message.';
});
await check('TC-030',async()=>{
  await page.getByRole('button',{name:'Discover',exact:true}).click();
  const coreLabels=await page.locator('input,select,textarea').evaluateAll(els=>els.every(e=>e.labels?.length || e.getAttribute('aria-label')));assert.equal(coreLabels,true);
  await page.locator('#query').focus(); await page.keyboard.type('Shelley'); await page.keyboard.press('Tab');
  assert.equal(await page.evaluate(()=>document.activeElement.textContent),'Search');
  const outline=await page.evaluate(()=>getComputedStyle(document.activeElement).outlineWidth);assert.notEqual(outline,'0px');
  await page.keyboard.press('Enter'); await page.keyboard.press('Tab'); await page.keyboard.press('Enter');
  assert.match(await page.locator('h1').innerText(),/Frankenstein/);
  // Keyboard-only shelf/status/progress/review path after initial focus.
  await page.locator('#status').focus(); await page.keyboard.press('Home'); await page.keyboard.press('Tab'); await page.keyboard.press('Enter');
  await page.locator('#page').focus(); await page.keyboard.press('Control+A'); await page.keyboard.type('140'); await page.keyboard.press('Tab'); await page.keyboard.press('Enter');
  assert.match(await page.locator('#view').innerText(),/50% complete/);
  await page.locator('#rating').focus(); await page.keyboard.press('Control+A'); await page.keyboard.type('4.5'); await page.keyboard.press('Tab'); await page.keyboard.type('Keyboard review'); await page.keyboard.press('Tab'); await page.keyboard.press('Enter');
  assert.match(await page.locator('#view').innerText(),/Keyboard review/);
  return 'Search, open, add, progress and review operated with keyboard after programmatic focus; visible 3px outline and labels checked on discovery. Full manual keyboard and assistive-technology audit pending.';
});
await check('TC-028',async()=>{
  const fixture=Array.from({length:100},(_,i)=>({id:`p${i}`,title:`Sample Book ${String(i).padStart(3,'0')}`,author:`Author ${i}`,pages:200,genre:'Test',colour:'#476b60'}));
  await page.route('**/src/catalogue.mjs',route=>route.fulfill({contentType:'text/javascript',body:`export const books=${JSON.stringify(fixture)};`}));
  await page.evaluate(()=>localStorage.clear()); await page.reload(); await page.locator('#reader').selectOption('alice');
  const searches=[];for(let i=0;i<20;i++)searches.push(await page.evaluate(async i=>{document.querySelector('#query').value=`Sample Book ${String(i).padStart(3,'0')}`;const start=performance.now();document.querySelector('#search').requestSubmit();if(!document.querySelector(`[data-book="p${i}"]`))throw Error('Result missing');await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));return performance.now()-start;},i));
  await page.locator('[data-book="p19"]').click();
  const updates=[];for(let i=0;i<20;i++)updates.push(await page.evaluate(async i=>{document.querySelector('#status').value=i%2?'Completed':'Want to Read';const start=performance.now();document.querySelector('#shelf').requestSubmit();if(document.querySelector('#message').textContent!=='Saved successfully.')throw Error('Save failed');await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));return performance.now()-start;},i));
  assert.ok(searches.filter(t=>t<=2000).length>=19);assert.ok(updates.filter(t=>t<=2000).length>=19);
  return { fixtureBooks:100,activeUsers:1,searchesMs:searches,updatesMs:updates,searchesWithin2s:searches.filter(t=>t<=2000).length,updatesWithin2s:updates.filter(t=>t<=2000).length,scope:'Browser event submission through DOM update and two animation frames as a display proxy; local-only, no network/database latency.' };
});
await browser.close();
await writeFile('docs/testing/browser-results.json',JSON.stringify(results,null,2)+'\n');
console.log(JSON.stringify(results,null,2));
if(results.cases.some(c=>c.status==='Fail'))process.exitCode=1;
