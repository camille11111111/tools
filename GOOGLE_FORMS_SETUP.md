# Google Forms Integration Setup Guide

## Step 1: Create Your Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Create a new form
3. Add questions matching your casting form fields:
   - First Name (Short answer)
   - Last Name (Short answer)
   - Email (Short answer with email validation)
   - Phone (Short answer)
   - Date of Birth (Date)
   - Agency (Short answer)
   - Height (Short answer)
   - Hair Color (Multiple choice or dropdown)
   - Eye Color (Multiple choice or dropdown)
   - Experience (Paragraph)
   - Skills (Checkboxes)
   - Availability (Checkboxes)
   - Location (Short answer)
   - Portfolio URL (Short answer)
   - Instagram (Short answer)
   - Additional Info (Paragraph)

## Step 2: Get the Form URL and Field IDs

1. In your Google Form, click the **three dots menu** (⋮) in top right
2. Select **"Get pre-filled link"**
3. Fill in test data for each field
4. Click **"Get link"** at the bottom
5. Click **"COPY LINK"**

## Step 3: Extract the Field IDs

The pre-filled URL will look like:
```
https://docs.google.com/forms/d/e/1FAIpQLSd.../viewform?usp=pp_url&entry.123456789=John&entry.987654321=Doe...
```

From this URL, extract:
- **Form ID**: The part after `/d/e/` (e.g., `1FAIpQLSd...`)
- **Field IDs**: The `entry.XXXXXX` numbers for each field

## Step 4: Update Your Casting Form

Edit the `castingform.html` file and update these sections:

```javascript
// Replace with your actual form URL
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID_HERE/formResponse';

// Replace with your actual field entry IDs
const fieldMappings = {
    firstName: 'entry.123456789',     // Replace with actual entry ID
    lastName: 'entry.987654321',      // Replace with actual entry ID
    email: 'entry.111111111',         // Replace with actual entry ID
    phone: 'entry.222222222',         // Replace with actual entry ID
    dob: 'entry.333333333',          // Replace with actual entry ID
    agency: 'entry.444444444',        // Replace with actual entry ID
    height: 'entry.555555555',        // Replace with actual entry ID
    hairColor: 'entry.666666666',     // Replace with actual entry ID
    eyeColor: 'entry.777777777',      // Replace with actual entry ID
    clothingSize: 'entry.888888888',  // Replace with actual entry ID
    shoeSize: 'entry.999999999',      // Replace with actual entry ID
    bust: 'entry.101010101',          // Replace with actual entry ID
    waist: 'entry.202020202',         // Replace with actual entry ID
    experience: 'entry.303030303',    // Replace with actual entry ID
    skills: 'entry.404040404',        // Replace with actual entry ID
    availability: 'entry.505050505',  // Replace with actual entry ID
    location: 'entry.606060606',      // Replace with actual entry ID
    portfolio: 'entry.707070707',     // Replace with actual entry ID
    instagram: 'entry.808080808',     // Replace with actual entry ID
    additionalInfo: 'entry.909090909' // Replace with actual entry ID
};
```

## Step 5: Enable Form Submission

In the form submission handler, uncomment the Google Forms submission:

```javascript
// Option 1: Submit to Google Forms (uncomment this line)
submitToGoogleForms(data);
```

## Step 6: Test Your Form

1. Fill out your casting form on your website
2. Submit it
3. Check your Google Forms responses to see if the data arrived
4. Responses will appear in:
   - The "Responses" tab in Google Forms
   - A Google Sheet (if you've linked one)

## Important Notes

- **CORS**: The form uses `mode: 'no-cors'` which means you won't get a response back from Google
- **Validation**: Google Forms validation won't apply - validate in your HTML form
- **Success**: The form will always show success even if Google Forms fails (consider adding error handling)
- **Privacy**: Make sure your Google Form settings allow responses from anyone

## Alternative: Using Google Sheets Directly

If you prefer more control, you can use Google Apps Script:

1. Create a Google Sheet
2. Go to Extensions → Apps Script
3. Create a web app that receives POST requests
4. Use that URL instead of the Google Forms URL

## Viewing Responses

Your form responses will be collected in:
1. **Google Forms**: Forms.google.com → Your form → Responses tab
2. **Google Sheets**: Click the green sheets icon in the Responses tab to create a linked spreadsheet
3. **Email Notifications**: In Form settings, you can enable email notifications for new responses

## Troubleshooting

If submissions aren't working:
1. Check browser console for errors
2. Verify all entry IDs are correct
3. Make sure your Google Form accepts responses
4. Test with a simple form first
5. Check that form sharing settings allow anyone to respond