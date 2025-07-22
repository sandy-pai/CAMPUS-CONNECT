# Campus Connect - Project Documentation

## Overview
Campus Connect is a comprehensive campus directory and navigation system designed for engineering colleges. The website provides an intuitive interface to help students, faculty, and visitors find classrooms, faculty offices, and administrative services across different academic blocks.

## Features Implemented

### 1. **Homepage**
- Institution welcome message and hero section
- Search functionality for faculty and classrooms
- Academic blocks displayed as interactive cards
- Professional color scheme (Dark Blue, Dark Yellow, White)
- Responsive design for mobile and desktop

### 2. **Search Functionality**
- Real-time search across all faculty names, room numbers, and classroom names
- Instant results with room location and contact information
- Clear search interface with helpful placeholder text

### 3. **Block Navigation**
- 5 Academic blocks: Civil Engineering, Mechanical Engineering, Computer Science, Electrical Engineering, and Administrative Block
- Each block page includes:
  - Block image and description
  - Floor selection buttons (Ground, First, Second, Third Floor)
  - Room listings with faculty/classroom details
  - Contact information for each room

### 4. **Technical Implementation**
- **HTML**: Semantic structure with proper accessibility
- **CSS**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Interactive functionality for navigation and search
- **Responsive Design**: Works on all device sizes

## File Structure
```
campus-connect/
├── index.html          # Main HTML file
├── style.css           # Stylesheet with custom color scheme
└── app.js              # JavaScript functionality
```

## Color Scheme
- **Primary Blue**: #1a365d (Navigation, headers, buttons)
- **Accent Yellow**: #d69e2e (Highlights, icons, active states)
- **Background**: #ffffff (Clean white background)
- **Text**: #2d3748 (Dark gray for readability)

## Usage Instructions

### For Students:
1. Visit the homepage to see all academic blocks
2. Use the search bar to quickly find specific faculty or classrooms
3. Click on any block card to explore that building
4. Select floors to view room-wise information
5. Find contact details for faculty and administrative offices

### For Administrators:
The website data is stored in the `app.js` file. You can easily modify:
- Block information
- Faculty names and contact details
- Room numbers and descriptions
- Add or remove floors

## Customization Guide

### Adding New Blocks
1. Open `app.js`
2. Add a new block object to the `blocksData.blocks` array
3. Include floors and room information

### Updating Faculty Information
1. Locate the specific block in `app.js`
2. Update the faculty details in the appropriate floor section
3. Ensure contact information is current

### Modifying Colors
1. Edit the CSS variables in `style.css`
2. Update the `--primary-color` and `--accent-color` variables
3. All components will automatically use the new colors

## Data Structure
Each block contains:
- **id**: Unique identifier
- **name**: Display name of the block
- **image**: Block image URL
- **description**: Brief description
- **floors**: Object containing room data for each floor
  - **ground/first/second/third**: Array of rooms
  - Each room has: type, room number, name, and contact info

## Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Future Enhancements
Possible additions for future versions:
- Interactive campus map
- QR code generation for room locations
- Faculty availability status
- Event scheduling integration
- Mobile app companion
- Multi-language support

## Support
For technical support or customization requests, contact the development team or refer to the inline code comments for detailed explanations of each function.

---

**Note**: This is a complete, functional website that can be deployed on any web server. All files are self-contained and use only modern web standards.