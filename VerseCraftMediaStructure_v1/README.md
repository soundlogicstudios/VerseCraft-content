# VerseCraft Media Structure v1 (Auto-Bind Ready)

This ZIP contains a GitHub-friendly folder skeleton for VerseCraft media auto-binding.

## Key rules
- GitHub does not keep empty folders; each folder contains a `.keep` placeholder.
- Folder names use Title Case (no underscores).
- Node folders are `Node 0101` etc. (zero-padded).

## Suggested repo
- Works in your existing `versecraft-content` repo.
- If you later want a dedicated CDN-style repo, you can move `Media/` to `versecraft-media` without changing internal structure.

## Where to put it
Upload and extract so that `Media/` is at the repository root:
`/<repo-root>/Media/...`

## Base URL examples
GitHub Pages:
`https://<user>.github.io/<repo>/Media/...`

Raw:
`https://raw.githubusercontent.com/<user>/<repo>/main/Media/...`
