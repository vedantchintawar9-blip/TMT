# Narsi Balaji Mandir Portal

Static HTML/CSS/JavaScript prototype for a Narsi Balaji Mandir community portal.

The public-facing template is based on limited online references to Balaji Mandir in Narsi/Narshi, Maharashtra 431709. Exact timings, phone numbers, history, committee details, and festival wording should be confirmed by the mandir before final launch.

## Pages

- `index.html` - public landing page
- `daily-darshan.html` - mandir opening hours, darshan timetable, arti, and pooja details
- `festive-calendar.html` - public festive calendar with admin add/delete controls
- `members.html` - temple member directory draft
- `vahanas.html` - nine vahana detail cards
- `reminders.html` - private birthday vastra pujan reminder planner
- `assets.html` - private asset declaration page
- `admin.html` - hidden admin page for editing events, darshan timings, aartis, and poojas

## Admin Prototype Passcode

```text
temple2026
```

This passcode is only for the static prototype. It is not real server-side security.

The admin page is not linked from the public navigation. Open it directly:

```text
admin.html
```

## Local Preview

Open `index.html` directly in a browser.

No build step is required.

## GitHub Pages Deployment

1. Create a new GitHub repository.
2. Upload or push all files in this folder, including `.nojekyll`.
3. In GitHub, go to `Settings` -> `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select branch `main` and folder `/ root`.
6. Save.

The site will publish at:

```text
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

## Current Prototype Limitations

- Admin data is stored in the browser using `localStorage`.
- Data is not shared between different devices or users.
- Private pages are protected only by client-side JavaScript.
- WhatsApp/SMS sending is manual through generated links.
- Automated reminders, real login, shared records, and secure admin tools need a backend.
- GitHub Pages cannot run PHP, server-side code, or SQL databases directly.

## Future Backend Plan

For the production version, use PHP and a database such as MySQL for:

- Admin login and sessions
- Member records
- Festival calendar records
- Asset declarations
- Reminder schedules
- WhatsApp/SMS message queue
- Sent/failed message logs

Official WhatsApp automation should use WhatsApp Business Platform or a provider such as Twilio, WATI, Gupshup, or 360dialog.
