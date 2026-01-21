tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                // Sets Inter as the default font for the whole site
                sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            },
            colors: {
                // Since your HTML uses 'emerald' and 'slate' directly, 
                // we don't need to override them unless you want to change the specific shades.
                // Standard Tailwind Emerald matches the San Carlos Green perfectly.
            }
        }
    }
}