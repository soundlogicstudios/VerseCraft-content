# VerseCraft GitHub Upload Bundle (mobile-friendly)

Upload these files to GitHub from your phone (no folders needed).

## What you upload
- catalog.json
- *.pack.json (one per story)

## iPhone steps
1) Open the Files app → tap the zip to unzip.
2) GitHub repo → Add file → Upload files → Choose files.
3) Select ALL the .json files (catalog + packs) → Commit.

## Raw URLs after upload
- https://raw.githubusercontent.com/<YOU>/<REPO>/main/catalog.json
- https://raw.githubusercontent.com/<YOU>/<REPO>/main/<storyId>.pack.json

Your app can fetch catalog.json, then fetch the chosen packFile.
