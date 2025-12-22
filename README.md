# VerseCraft Expo Minimal (Remote Content Test)

This version can load stories from:
- **Remote** GitHub RAW URLs (preferred), OR
- **Local bundled** story packs (fallback)

## 1) Upload content bundle to GitHub
Upload the files from `versecraft-github-upload-bundle.zip` into your repo root:
- catalog.json
- *.pack.json

## 2) Set your GitHub RAW base URL
Open:
- `src/config/content.ts`

Replace:
- `PASTE_YOUR_GITHUB_RAW_BASE_URL_HERE`

With:
- `https://raw.githubusercontent.com/<YOU>/<REPO>/main`

## 3) Run the app
```bash
npm install
npm run start
```

## 4) Test you are loading REMOTE
- Open the app → Story Select screen.
- You should see a banner: **Content: Remote (GitHub)**.
- Tap a story → Details shows **REMOTE** in the meta line.

## 5) Test caching works
- Open a story once (remote loads & caches).
- Turn on Airplane Mode.
- Re-open the story: it should still work (cached).
- Back on Wi‑Fi, hit **Refresh** on Story Select to re-check remote.

## 6) Force refresh
- Tap **Refresh** on Story Select to clear remote cache and refetch catalog.

If remote fails (wrong URL / private repo / typo), the app automatically uses local bundled stories.
