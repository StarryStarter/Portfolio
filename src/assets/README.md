# Assets

Drop your real files here and wire them up:

1. **Resume** — add `Sachin_Kumar_Resume.pdf` to `/public` (not this folder) so it's
   served at `/Sachin_Kumar_Resume.pdf`, matching `profile.resumeUrl` in
   `src/utils/data.js`.
2. **Profile photo** — the hero currently renders a monogram ("SK") inside an
   animated gradient ring instead of a photo, since none was provided. To use a
   real photo:
   - Add your image here, e.g. `src/assets/profile.jpg`.
   - In `src/sections/Hero.jsx`, import it (`import profileImg from '../assets/profile.jpg'`)
     and replace the `<span>SK</span>` monogram with
     `<img src={profileImg} alt="Sachin Kumar" className="w-full h-full object-cover" />`.
3. **OG image** — add `og-image.png` (1200×630) to `/public` for link previews.
