# College Listings — Career Compass
This small project provides a searchable, filterable, paginated listing UI for colleges stored in Firestore.

## Files
- `index.html` — Main listing page (uses Bootstrap).
- `styles.css` — Small styling overrides.
- `firebase-config.js` — Firebase initialization (contains project config provided by you).
- `app.js` — Main frontend logic (module): loads data from `collegeList` collection, filters, sorts, paginates and shows details modal.
- `README.md` — This file.

## Usage
1. Unzip the project and serve it using a simple static server (or open `index.html` directly in most browsers but some browsers require a server for ES modules).
2. Make sure your Firestore rules allow reads for this demo or authenticate appropriately.
3. Optionally replace `firebase-config.js` with your own Firebase project credentials.

## Notes
- For large datasets, consider querying Firestore directly (with `where`, `orderBy`, and cursors) instead of loading all documents.
- This demo uses client-side filtering for simplicity.
