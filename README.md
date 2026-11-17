# Atash College of Management and Technology Website

Responsive React + Vite + Tailwind frontend with Express + MongoDB backend, JWT admin login, admission enquiry/tracking, admin content management and photo upload.

## Local setup
Requirements: Node.js 20+ and MongoDB (local or Atlas).

1. In `server`, copy `.env.example` to `.env`, set `MONGODB_URI` and a random `JWT_SECRET` of at least 32 characters.
2. Run `npm install` in `server`.
3. Run `npm run create-admin` in `server` to securely create the first admin (no public registration).
4. Run `npm run dev` in `server`.
5. In a second terminal, run `npm install` in `client`, copy `.env.example` to `.env`, and run `npm run dev`.
6. Open the Vite URL. Admin login is `/admin/login`.

## Production checklist
- Verify all courses, eligibility, duration, contact details, affiliations and claims with the college before publishing.
- Configure MongoDB Atlas, HTTPS, strong secrets, exact CORS origin, backups and private/persistent image storage.
- The local upload folder is not durable on Render unless persistent storage is configured. Prefer private object storage for production uploads.
- Email notifications are not configured; the site does not claim to send emails.
- This source package is for local testing and has not been deployed or independently penetration-tested.
- No fake students, applications, faculty, notices or admin accounts are seeded. Gallery and faculty are empty until admins add real approved content.
