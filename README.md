# O²-RAN — Academic Consortium Website

A ready-to-upload responsive HTML/CSS website, inspired by the clear academic structure of COINSConf.org.
No sliders, trackers, remote fonts or framework dependencies. No News & Events page.

## Pages
- `index.html` — homepage with updated space–air–ground architecture, research highlights, demonstration roadmap and leadership.
- `about.html` — project mission, objectives and broader impacts.
- `research.html` — eleven Core Technical Directions in three logical groups, plus detailed T1.1–T3.4 work packages with planned task schedules, L/S-band satellite RU and CubeSat-class payload hardware, beamforming, RIC, MEC, and original reference architecture.
- `use-cases.html` — UC1 disaster-resilient aerial base stations, UC2 direct-to-cell satellite connectivity, UC3 UAV swarms with MEC; corrected working demonstration-roadmap link.
- `team.html` — dedicated Team & Partners page using the slide's actual portraits, logos and four research-group assignments.
- `demonstrations.html` — detailed planned M6/M11/M18/M23/M30/M36 demonstrations, with expandable configuration and scenario descriptions.
- `publications.html` — accurate placeholder for publications, software and datasets pending release.
- `contact.html` — project inquiries to Farshad Firouzi (farshad.firouzi@jhu.edu), Johns Hopkins University.
- `styles.css` / `site-pages.css` / `team.css` — responsive styles.
- `script.js` — accessible mobile navigation and dynamic footer year.
- `assets/` — image files, architecture diagrams, team photos and logos.

## Use
Open `index.html` locally, or upload the **contents** of this folder to the root of the web host for o2ran.org. No build step is required.

## Before public launch
1. Confirm NSF award number and final acknowledgment language; do not post guesses.
2. The designated project contact is Farshad Firouzi, farshad.firouzi@jhu.edu. Confirm whether a contact form is needed.
3. Verify full legal names, project roles and image/logo reuse permissions with the consortium. The slide provides some collaborators by surname only.
4. Farshad Firouzi is listed as **Project Lead & Principal Investigator** at **Johns Hopkins University**, following the project team's instruction. The original proposal listed an earlier ASU affiliation. Confirm the official NSF administrative role if needed for award reporting.
5. Verify planned demo locations, dates, hardware descriptions and any restrictions on public dissemination. All demos are marked **Planned**.
6. The homepage conceptual infographic was generated from supplied architecture references. Verify fine-grained diagram labels before using it as a technical reference; the original detailed image is retained on `research.html`.

The project content is based on the supplied proposal, architecture figures, consortium PowerPoint slide, and user-provided six-demonstration schedule.

## Revision notes
- Replaced the non-rendered `{linkout(...)}` placeholder in Use Cases with an actual internal HTML anchor.
- Detailed Research work packages, subtask codes and project months are based on the supplied task register.
- Added planned L/S-band RU/satellite packaging, environmental/shielding design considerations and CubeSat-class integration pathway. A satellite launch is not stated as guaranteed.
- Updated the homepage figure to the most recent version labeled HAPS / UAV without an E2-via-ISL caption, per the team's requested edit.

- Replaced project contact placeholders with Farshad Firouzi’s clickable email on the Contact page and all page footers.

## Use Cases and technical-directions separation
Core Technical Directions now lists **eleven enabling research capabilities** across three groups. A satellite networking capability card (direction 10) is paired with UAV networking (direction 09), while system-level testbed validation is direction 11. These describe engineering capabilities, not a specific UC2 experiment. CubeSat payload and L/S-band hardware remain prominent under directions 03–04. All three scenarios (UC1–UC3) belong on the separate `use-cases.html` page. Their scheduled demonstrations remain on `demonstrations.html`.

## Core Technical Directions update
The Research page presents eleven technical directions in three groups (architecture/software/hardware; AI and distributed edge; applications/validation). The O²-RAN srsRAN-based **software stack implementation** is explicitly distinguished from architectural design. Each direction links to associated task descriptions, and six highlights appear on the homepage. Thrust-lead names have been removed from the homepage research cards as well as the Research page, while project leadership remains on Team & Partners.

- Group C now has dedicated, equally prominent technology directions for autonomous UAV networking (09), 5G NR-NTN / 6G-oriented satellite networking and direct-to-cell systems (10), and integrated NTN testbeds and system validation (11). The separate Use Cases page still describes UC1–UC3.
