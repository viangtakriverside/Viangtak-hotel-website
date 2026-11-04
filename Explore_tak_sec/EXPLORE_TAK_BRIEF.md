# Brief: build the Explore Tak page (EN + TH)

You are working in the repo `viangtak-hotel-website` (plain HTML/CSS/JS, no build step, deployed on Netlify from the repo root).

Your job: build a new **Explore Tak** page in English and Thai that **matches the design images** in this folder, **without breaking or changing anything else on the site**.

---

## 1. Rules (read these first)

1. **Plan first.** Before writing any code, read this whole file, look at all four design PNGs, and reply with a short plan: the files you will create, the files you will change and exactly what you'll change in them. Then wait for my OK.
2. **Work on a new branch** called `explore-tak`. Never work on `main`.
3. **Never commit, push, merge or deploy** unless I say so in that moment. Pushing to `main` puts the site live.
4. **Don't break existing pages.** New files are fine. For existing files, only make the small changes listed in section 6, and ask me before touching anything else. Never delete or rename existing files, and never rewrite or reformat existing code.
5. **Keep the new CSS separate.** Put all new styles in a new file `explore-tak.css`, with classes prefixed `et-` (for example `.et-card`), so nothing can leak into other pages. Don't edit existing rules in `styles.css`.
6. **If something is unclear, ask me.** Don't guess at anything that changes how the live site looks or works.

---

## 2. What's in this folder

| File | What it is |
|---|---|
| `Desktop — Explore Tak (1440).png` | English page, desktop (1440px wide) |
| `Mobile — Explore Tak (390).png` | English page, mobile (390px wide) |
| `Desktop — เที่ยวตาก TH (1440).png` | Thai page, desktop |
| `Mobile — เที่ยวตาก TH (390).png` | Thai page, mobile |
| `tat tak pictures/` | 36 photos from TAT Tak Office (Tourism Authority of Thailand), for the attractions |

The PNGs are the source of truth for layout, spacing, colours and section order. Match the existing site's fonts, colours and header/footer.

---

## 3. Files to create

- `explore-tak.html`: English page
- `explore-tak-th.html`: Thai page
- `explore-tak.css`: styles for both pages (only `et-` classes)
- `explore-tak.js`: the filter chips (see section 5), plain JS with no libraries
- `assets/images/explore/*.webp`: the TAT photos you use (see section 4)

**Header, footer and `<head>`:** copy them from `index.html` (EN) and `index-th.html` (TH), including the menu, language switch, cookie consent, analytics, favicon and fonts, so the new pages behave exactly like the others. Load `styles.css` first and `explore-tak.css` after it.

**SEO, same pattern as the existing pages:**
- canonical: `https://viangtakriverside.com/explore-tak` and `https://viangtakriverside.com/explore-tak-th`
- hreflang `en` / `th` pointing at each other, plus `x-default` set to the English page
- a title and meta description in the right language

**Language switch:** on `explore-tak.html` the "ไทย" button links to `explore-tak-th.html`, and on the Thai page the "EN" button links back.

---

## 4. Photos

**Important rule: don't use any photo that already appears on another page of the site.**

### Hotel photos (already in the repo, used only on this page)
Use these even if the PNG shows something else in that spot:

| Spot in the design | File |
|---|---|
| Riverside Night Market card | `assets/images/riverside/market-daytime-stalls.webp` |
| Riverside Promenade & Suspension Bridge card | `assets/images/riverside/street-morning-view-01.webp` |
| Free Bicycles card | `assets/images/hotel/lobby/bicycles.webp` |
| "Here in November?" Loy Krathong section | `assets/images/loykrathong/loykrathong10.webp` |
| "Come Back to the River" stay banner | `assets/images/hotel/rooms/king-bed-river-view.webp` |

### TAT photos (from `tat tak pictures/`)
Look at the photos and pick the one that matches each spot in the design:

| Spot | Subject |
|---|---|
| Hero | Tak suspension bridge at sunset |
| King Taksin Shrine card | King Taksin Shrine |
| Lan Sang National Park card | Lan Sang waterfall |
| Taksin Maharat National Park card | Giant krabak tree |
| Bhumibol Dam card | Bhumibol Dam / reservoir |
| Mae Sot Border Town card | Wat Thai Wattanaram (Burmese-style temple) |
| Stop: Wat Thai Samakkhi | golden temple |
| Stop: Jar-baked roti | roti baked on a jar oven |
| Stop: Blue Cave | blue-grey cave walls |
| Stop: Pha Charoen Waterfall | stepped limestone waterfall |
| Overnight, large photo | Thi Lo Su Waterfall |
| Overnight, small photo 1 | Thi Lo Cho waterfall |
| Overnight, small photo 2 | Thi Lo Su in mist |

Convert each one to WebP in `assets/images/explore/` with clear names (for example `king-taksin-shrine.webp`). Follow the repo's convention: a large version (1600px wide, or 2048px for the hero) plus a `-sm.webp` copy (800–900px wide), used with `srcset`. Use `loading="lazy"` on every image except the hero, which gets `fetchpriority="high"`. Every image needs a real `alt` text in the page's language.

**Photo credit:** put "Attraction photos: TAT Tak Office" (EN) / "ภาพสถานที่ท่องเที่ยว: ททท.สำนักงานตาก" (TH) in the footer, plus the short credit "Photos: TAT Tak Office" / "ภาพ: ททท.สำนักงานตาก" where the design shows it. **No TAT logo.**

**Wat Phra Borommathat is not on the page.** There's no photo for it yet, so leave it out.

---

## 5. Behaviour

- **Filter chips** under "Sorted by how far you'll go": All places / Walk from the hotel / Under an hour / Day trips / Overnight. Clicking a chip shows only that group (wrap each group in an element with `data-group="walk|hour|day|overnight"` and toggle `hidden`). Set `aria-pressed` on the chips. It must still work with the keyboard, and the page must look fine if JS fails (everything visible).
- **Mobile:** the "Under an hour" and "Day trips" rows and the "More stops around Mae Sot" row scroll sideways (swipe) as in the mobile PNG, with the "Swipe for more" hint.
- **Every place links to Google Maps** ("Open in Google Maps" / "เปิดใน Google Maps" on cards, "Map" / "แผนที่" on stop tiles), using `https://www.google.com/maps/search/?api=1&query=<place name, Tak>`, opening in a new tab with `rel="noopener"`.
- The Free Bicycles card links to the hotel's facilities section on the home page instead of Google Maps.
- "Book your stay" / "จองห้องพัก" goes to `reservation.html` / `reservation-th.html`. "Read the festival story" goes to `loykrathong.html` / `loykrathong-th.html`.

**Thai text:** don't let short Thai phrases break across lines awkwardly. Wrap them in `<span class="nowrap-th">` (the class already exists in `styles.css`). Use the Thai copy in section 8 exactly. Don't retype it from the image.

---

## 6. Small changes to existing files (show me the diff before saving)

Only these, and nothing else:

1. **Menu and footer links:** add an "Explore Tak" / "เที่ยวตาก" link to the main menu and footer on the other pages (`index`, `loykrathong`, `reservation`, `privacy`, `thanks`, EN + TH). Copy the style of the existing links exactly. **Check the header doesn't wrap onto two lines at widths 840px–1440px after adding the link.** If it does, tell me before changing any CSS.
2. **`sitemap.xml`:** add `/explore-tak` and `/explore-tak-th`.
3. **`_redirects`:** add `/explore-tak.html /explore-tak 301!` and `/explore-tak-th.html /explore-tak-th 301!`, next to the matching lines for the other pages.

---

## 7. Check before you tell me it's done

- Open both pages with Live Server at 390px, 768px, 1024px and 1440px and compare with the PNGs.
- The menu, language switch, cookie banner and footer work the same as on `index.html`.
- The filter chips work, and there are no errors in the browser console.
- No image is missing (no 404s in the Network tab).
- Open `index.html`, `index-th.html`, `loykrathong.html` and `reservation.html` and check they look exactly as before (apart from the new menu link).
- Run `git status` / `git diff --stat` and confirm only the new files and the section 6 changes are there.

Then give me a short summary and wait. Don't commit.

---

## 8. Thai copy (use exactly)

### Menu
ห้องพัก · อาหารเช้า · บริการ · จัดงานเลี้ยง · เที่ยวตาก · ติดต่อเรา · EN · จองเลย

### Hero
- Kicker: เที่ยวตาก · ไกด์ท้องถิ่น
- Title: จากริมน้ำปิง สู่ขุนเขา
- Text (desktop): ไกด์เที่ยวตากจากแผนกต้อนรับของเรา ตั้งแต่ตลาดโต้รุ่งที่เดินจากล็อบบี้เพียงห้านาที ไปจนถึงน้ำตกแห่งอุ้มผาง จัดเรียงตามระยะทางที่คุณจะเดินทาง
- Text (mobile, shorter): ไกด์เที่ยวตากจากแผนกต้อนรับของเรา ตั้งแต่ตลาดโต้รุ่งที่เดินจากล็อบบี้เพียงห้านาที ไปจนถึงน้ำตกแห่งอุ้มผาง
- Button: เริ่มสำรวจ
- Credit: ภาพ: ททท.สำนักงานตาก

### Intro
- Kicker: วางแผนเที่ยว
- Title: เรียงตามระยะทางจากโรงแรม
- Text: เริ่มจากเดินเล่นริมน้ำปิงยามเย็น แล้วค่อยออกไปเที่ยวน้ำตก ป่าเขา และตลาดบนดอย ไม่แน่ใจว่าจะเริ่มที่ไหน? แวะถามเราที่แผนกต้อนรับได้เลย เรารู้จักเส้นทางเหล่านี้ดี
- Box title: ข้อมูลน่ารู้
  - จักรยานให้ยืมฟรีสำหรับแขกที่เข้าพัก รับได้ที่ล็อบบี้
  - แผนกต้อนรับเปิดตลอด 24 ชั่วโมง พร้อมแนะนำเส้นทาง
  - ทุกสถานที่มีลิงก์เปิดใน Google Maps
- Chips: ทั้งหมด · เดินจากโรงแรม · ขับรถไม่ถึงชั่วโมง · ไปเช้าเย็นกลับ · ค้างคืน

### Section titles and subtitles
- เดินจากโรงแรม: เดินเท้าได้สบาย ไม่ต้องใช้รถ
- ขับรถไม่ถึงชั่วโมง: ป่าเขา น้ำตก และศาลคู่เมือง เส้นทางขับง่าย
- ไปเช้าเย็นกลับ: ออกเดินทางหลังอาหารเช้า กลับมาทันมื้อเย็นริมน้ำ (mobile: ออกเดินทางหลังอาหารเช้า กลับมาทันมื้อเย็น)
- Swipe hint: ปัดเพื่อดูเพิ่มเติม

### Cards (area · title · text · distance · best time · link)
1. ในเมือง · ตลาดโต้รุ่งริมน้ำ · ร้านค้าเริ่มตั้งแผงริมน้ำตั้งแต่ช่วงบ่ายแก่ๆ มีทั้งของปิ้งย่าง ขนมไทย และไฟประดับยามค่ำคืน เดินจากล็อบบี้เพียงห้านาที · เดิน 5 นาที · ช่วงบ่ายแก่ถึงหัวค่ำ · เปิดใน Google Maps
2. ริมแม่น้ำปิง · ทางเดินริมน้ำและสะพานแขวน · เดินเล่นเลียบริมน้ำไปจนถึงสะพานแขวนที่เปิดไฟสวยงาม วิวสวยที่สุดช่วงพระอาทิตย์ตก · เดินไม่ไกล · สวยที่สุดตอนพระอาทิตย์ตก · เปิดใน Google Maps
3. ที่โรงแรม · จักรยานให้ยืมฟรี · ยืมจักรยานที่ล็อบบี้ แล้วปั่นเที่ยวเลียบแม่น้ำตามจังหวะของคุณเอง · แนะนำจากโรงแรม · เหมาะกับช่วงเย็น · ดูบริการของโรงแรม
4. ตัวเมืองตาก · ศาลสมเด็จพระเจ้าตากสินมหาราช · แลนด์มาร์กที่ขึ้นชื่อที่สุดของเมือง เป็นที่สักการะสมเด็จพระเจ้าตากสินมหาราช · ขับรถ ~5 นาที · ไปได้ทุกช่วงเวลา · เปิดใน Google Maps
5. ถนนตาก–แม่สอด · อุทยานแห่งชาติลานสาง · เส้นทางเดินป่าง่ายๆ และน้ำตก ขับรถออกไปทางทิศตะวันตกของเมืองไม่ไกล · ขับรถ ~25 นาที · เขียวขจีที่สุดช่วงหน้าฝน · เปิดใน Google Maps
6. ถนนตาก–แม่สอด · อุทยานแห่งชาติตากสินมหาราช · เดินไปชมต้นกระบากใหญ่ แล้วแวะตลาดดอยมูเซอ ตลาดชาวเขาริมทาง · ขับรถ ~30 นาที · ช่วงเช้าที่อากาศเย็นสบาย · เปิดใน Google Maps
7. อำเภอสามเงา · เขื่อนภูมิพล · วิวอ่างเก็บน้ำกว้างไกลรายล้อมด้วยขุนเขา แนะนำให้ไปแต่เช้า อากาศเย็นและแสงสวย · ขับรถ ~1 ชม. · เหมาะกับช่วงเช้า · เปิดใน Google Maps
8. อำเภอแม่สอด · เมืองชายแดนแม่สอด · วัดไทยวัฒนารามสไตล์พม่า ตลาดริมเมย และสะพานมิตรภาพไทย–เมียนมา รวมอยู่ในเมืองที่เต็มไปด้วยสีสัน · ขับรถ ~1.5 ชม. · ควรเผื่อเวลาทั้งวัน · เปิดใน Google Maps

### Mae Sot stops
- Kicker: เที่ยวแม่สอดให้คุ้ม · Title: แวะเที่ยวเพิ่มรอบแม่สอด
- Text (desktop): ทางหลวงหมายเลข 12 ไต่ข้ามเขาไปทางทิศตะวันตกจนถึงชายแดนเมียนมา เลือกแวะสักหนึ่งหรือสองที่ระหว่างวันที่แม่สอด ออกเดินทางราวแปดโมงเช้า ก็ยังกลับมาทันชมพระอาทิตย์ตกริมน้ำ
- Text (mobile): ทางหลวงหมายเลข 12 ไต่ข้ามเขาไปทางทิศตะวันตกจนถึงชายแดนเมียนมา เลือกแวะสักหนึ่งหรือสองที่ระหว่างวันที่แม่สอด
- Tiles (area · name · text · link "แผนที่"):
  - ตำบลแม่กาษา · วัดไทยสามัคคี · วัดสีทองที่ผสานศิลปะล้านนาและพม่า เป็นที่ประดิษฐานพระพุทธรูปที่ผู้คนเคารพศรัทธา
  - ในเมืองแม่สอด · โรตีโอ่ง · โรตีที่อบจนพองบนผนังโอ่งร้อนๆ จากเตาถ่าน คนในพื้นที่มาต่อคิวกินกันตั้งแต่เช้า
  - ใกล้แม่สอด · ถ้ำสีฟ้า · ผนังถ้ำสีฟ้าอมเทาที่หาชมได้ยาก และพระพุทธไสยาสน์ ห่างจากตัวเมืองราว 30 กม.
  - อำเภอพบพระ · น้ำตกพาเจริญ · สายน้ำไหลลดหลั่นลงมาตามชั้นหินปูนเล็กๆ ถึง 97 ชั้น อยู่ไม่ไกลจากเส้นทางไปอุ้มผาง

### Overnight
- Kicker: ทริปค้างคืน · อุ้มผาง · Title: น้ำตกทีลอซู
- Text (desktop): ได้ชื่อว่าเป็นน้ำตกที่ใหญ่ที่สุดในประเทศไทย ตั้งอยู่กลางผืนป่าอุ้มผาง ควรวางแผนค้างอย่างน้อยสองคืน เพราะเส้นทางภูเขาจากแม่สอดทั้งไกลและคดเคี้ยว แต่คุ้มค่าทุกโค้ง ทัวร์ส่วนใหญ่มักพาแวะน้ำตกทีลอจ่อหรือ "น้ำตกสายฝน" ในทริปเดียวกันด้วย
- Text (mobile): same, without "แต่คุ้มค่าทุกโค้ง"
- Note: สภาพเส้นทางเปลี่ยนไปตามสภาพอากาศ แวะให้เราช่วยเช็กให้ก่อนออกเดินทางได้เลย
- Facts: 2–3 วัน · เดินทางผ่านแม่สอด · ออกแต่เช้า ถนนวิ่งได้ช้า

### Festival
- Kicker: มาเที่ยวช่วงพฤศจิกายน? · Title: ลอยกระทงสายริมน้ำปิง
- Text: ทุกเดือนพฤศจิกายน กระทงกะลามะพร้าวจุดเทียนนับพันดวงจะล่องลอยผ่านหน้าโรงแรมไปตามสายน้ำ เป็นหนึ่งในประเพณีที่ชาวตากภาคภูมิใจที่สุด และเป็นภาพที่สวยที่สุดของเมือง
- Link: อ่านเรื่องราวของประเพณี

### Stay banner
- Kicker: หลังเที่ยวมาทั้งวัน · Title: กลับมาพักผ่อนริมน้ำ
- Text: ห้องพักวิวแม่น้ำของเรามองเห็นแม่น้ำปิงได้เต็มตา ที่นั่งที่ดีที่สุดในเมืองยามไฟริมน้ำเริ่มเปิด
- Button: จองห้องพัก

### Footer
Copy the footer from `index-th.html` (brand, address and copyright stay in English, as there), and add the photo credit: ภาพสถานที่ท่องเที่ยว: ททท.สำนักงานตาก
