# Registration Email Setup (JavaScript Only)

This project now uses **EmailJS plugin** from the browser.
No PHP backend is required.

## What Is Implemented

1. Register button shows submit notification.
2. On form submit, registration details are sent to `missionagrp@gmail.com` via EmailJS.
3. Original form submission to Motion backend continues as before.

## Configure EmailJS

1. Create an account at `https://www.emailjs.com/`.
2. Create one Email Service (Gmail/SMTP).
3. Create one Email Template and include these variables:
   - `to_email`
   - `student_name`
   - `student_email`
   - `student_mobile`
   - `stream`
   - `student_class`
   - `state`
   - `center`
   - `source`
4. Copy your IDs and update `client2/index.html`:

```javascript
var EMAILJS_CONFIG = {
    PUBLIC_KEY: "YOUR_EMAILJS_PUBLIC_KEY",
    SERVICE_ID: "YOUR_EMAILJS_SERVICE_ID",
    TEMPLATE_ID: "YOUR_EMAILJS_TEMPLATE_ID"
};
```

## Recipient Email

Current recipient is set in `client2/index.html` as:

```javascript
to_email: 'missionagrp@gmail.com'
```

Change it if needed.

## Test

1. Fill registration form.
2. Click `Register Now`.
3. You should see submit and success/failure notifications.
4. Confirm email arrives at `missionagrp@gmail.com`.

## Notes

- If EmailJS keys are not configured, form still submits but email notification is skipped.
- Because this is client-side email, keep template and service settings restricted in EmailJS dashboard.
