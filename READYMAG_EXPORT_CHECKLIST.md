# Readymag Design Export Checklist

## Extract These Design Values from Your Readymag Site:

### 1. **Color Palette**
```css
/* Get the exact hex/rgb values */
- Primary text color: #______
- Background color: #______
- Accent color: #______
- Secondary colors: #______
- Link colors (normal/hover): #______
- Border colors: #______
```

### 2. **Typography**
```css
/* From Readymag Text Styles */
- Heading font family: ________
- Body font family: ________
- Font sizes for:
  - H1: ___px
  - H2: ___px
  - H3: ___px
  - Body: ___px
  - Caption: ___px
- Line heights: ________
- Letter spacing: ________
- Font weights used: ________
```

### 3. **Spacing System**
```css
/* Consistent spacing values */
- Section padding: ___px
- Element margins: ___px
- Grid gaps: ___px
- Container max-width: ___px
```

### 4. **Component Styles**

#### Buttons
- Border radius: ___px
- Padding: ___px ___px
- Font size: ___px
- Hover effects: ________

#### Forms/Inputs
- Input height: ___px
- Border style: ________
- Focus state: ________
- Label style: ________

#### Cards/Containers
- Border radius: ___px
- Shadow: ________
- Padding: ___px
- Background: ________

### 5. **Layout Patterns**
- Grid columns: ___
- Breakpoints: ___px
- Header height: ___px
- Footer structure: ________

## How to Export from Readymag:

### Option 1: Manual Extraction
1. Open your Readymag project
2. Use browser Developer Tools (F12)
3. Inspect elements to find:
   - Computed styles
   - Font families
   - Color values
   - Spacing values

### Option 2: CSS Export
1. View your published Readymag site
2. Right-click → View Page Source
3. Find and save the CSS files
4. Extract the relevant styles

### Option 3: Screenshots for Reference
Take screenshots of:
- [ ] Homepage layout
- [ ] Typography examples
- [ ] Button states
- [ ] Form designs
- [ ] Color swatches
- [ ] Mobile responsive views

## Template HTML Structure Needed:

### 1. **Base HTML Template**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><!-- Page Title --></title>
    
    <!-- Your fonts -->
    <link href="[FONT_URL]" rel="stylesheet">
    
    <!-- Brand styles -->
    <link rel="stylesheet" href="/eminente-brand.css">
</head>
<body>
    <!-- Header component -->
    <header class="eminente-header">
        <!-- Your nav structure -->
    </header>
    
    <!-- Main content -->
    <main>
        <!-- Page content -->
    </main>
    
    <!-- Footer component -->
    <footer class="eminente-footer">
        <!-- Your footer structure -->
    </footer>
</body>
</html>
```

### 2. **Component Examples to Provide**

#### Navigation Bar
```html
<!-- Copy your Readymag nav structure -->
<nav class="[your-nav-class]">
    <!-- Nav items -->
</nav>
```

#### Hero Section
```html
<!-- Your hero/header layout -->
<section class="[your-hero-class]">
    <!-- Hero content -->
</section>
```

#### Form Styling
```html
<!-- Your form field structure -->
<div class="[form-group-class]">
    <label><!-- Label style --></label>
    <input><!-- Input style -->
</div>
```

## Files to Create for Consistency:

1. **eminente-variables.css** - All design tokens
2. **eminente-components.css** - Reusable components
3. **eminente-layout.css** - Grid and layout system
4. **eminente-utilities.css** - Helper classes

## What I Need from You:

To create matching templates, please provide:

1. **Color hex codes** you're using
2. **Font names** (and Google Fonts links if applicable)
3. **Typical spacing values** (margins/paddings)
4. **Button/form styles** you want to maintain
5. **Any special effects** (shadows, transitions, etc.)

Or simply share:
- URL to your Readymag site
- Screenshots of key pages/components
- Any exported CSS files

This will ensure all your sites (casting.eminente.art, project.eminente.art, etc.) maintain the exact same professional look as your main site.