# Your Portfolio Site

A static site with two sections — **Design** and **Research/Coding** — built so you
can add unlimited projects later without touching any code.

## What's in here
```
index.html          → home page (hero, both work grids, services, about, footer)
project.html         → ONE template page used for every project (reads the URL)
css/style.css         → all styling
js/projects-data.js   → ⭐ THE ONLY FILE YOU EDIT TO ADD PROJECTS
js/render.js           → renders the data into the pages (no need to touch this)
images/                → one folder per project for its images/gifs/videos
```

## How adding a project works
`project.html` is a single reusable template. When you click a project card, it
opens as `project.html?id=sisteragency` — the page reads `id` from the link and
pulls that project's title, images, and text out of `js/projects-data.js`.

So to add project #21 two years from now, you never create a new HTML page —
you just add one more entry to that one data file.

### Step by step
1. Make a folder: `images/your-project-name/`
2. Drop your thumbnail, hero image, and any gallery images/gifs/videos in it
3. Open `js/projects-data.js`, copy one of the existing `{ ... }` entries, paste
   it into the `projects` array, and edit every field (there are comments at
   the top of the file explaining each one)
4. Give it a unique `id` — this becomes the URL, so keep it lowercase-with-dashes
5. Save, commit, push — done. No other file changes needed.

Videos (mp4/webm) work the same as images — just set `"heroType": "video"` or
use `{ type: "video", src: "..." }` in the gallery array.

## Replacing the placeholder content
Right now every image is a labeled gray placeholder (generated so you can see
the layout working). Replace them with your real files, using the *same
filenames* referenced in `js/projects-data.js`, or edit the paths in that file
to match whatever you name your files.

Also edit:
- "Your Name." → your actual name (appears in `index.html` and `project.html`)
- The hero paragraph, about bio, timeline, and testimonials in `index.html`
- Contact details and email in the footer (both files)

## Hosting it for free (recommended: Cloudflare Pages)
1. Create a free GitHub account if you don't have one, and a new repository
2. Upload this whole `portfolio` folder's contents to that repository
   (drag-and-drop works fine on github.com — no command line needed)
3. Go to [pages.cloudflare.com](https://pages.dev), sign up free, connect your
   GitHub repo, and deploy — no build command needed, this is a plain static
   site
4. You'll get a free `yourproject.pages.dev` URL immediately, with **no
   bandwidth limit** on the free tier — this is what solves the problem you
   were hitting on Framer
5. You can also just enable **GitHub Pages** directly from the repo's Settings
   → Pages tab if you'd rather skip Cloudflare — also free, ~100GB/month
   soft limit, plenty for a portfolio

Either way, every time you push a change (like adding a new project) the live
site updates automatically within a minute or two.

## A note on GIFs going forward
Now that you're off Framer, there's no reason to keep converting videos to
GIFs — neither GitHub Pages nor Cloudflare Pages penalize video bandwidth the
way Framer did. Using real `.mp4`/`.webm` files instead of GIFs for anything
with motion will look better and load faster. GIFs are still fully supported
here if you want to keep using them for anything.
