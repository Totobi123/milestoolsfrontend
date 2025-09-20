# Miles - Security-First Web Application

## Overview

Miles is a security-focused web application designed with advanced protection mechanisms against code inspection, debugging, and unauthorized access. The application features a modern dark-themed UI with red accent colors and implements comprehensive client-side security measures to prevent users from accessing developer tools, viewing source code, or performing unauthorized actions.

**Recent Changes (September 19, 2025):** Successfully converted from a backend-dependent architecture to a fully frontend-only application. All backend server logic and API endpoints have been removed, and the application now runs entirely in the browser with integrated data for cryptocurrency balance checks, bank account verification, and bank listing functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Single-Page Application (SPA) Design**
- Static HTML/CSS/JavaScript architecture for simplicity and performance
- No complex frontend frameworks to maintain minimal attack surface
- Responsive design optimized for both desktop and mobile devices with special focus on Android Chrome compatibility

**Security-First Design Pattern**
- Comprehensive keyboard shortcut blocking system preventing access to developer tools (F12, Ctrl+Shift+I, etc.)
- Right-click context menu disabled with event capture and propagation stopping
- Advanced event handling with multiple layers of protection including blur effects and notifications
- Content Security Policy (CSP) headers implemented to prevent XSS attacks

**Mobile-Optimized Experience**
- Extensive viewport and mobile web app meta tags for native-like experience
- Android Chrome theme customization with branded colors
- iOS Safari compatibility with status bar styling
- Touch interaction optimizations with tap highlight removal

### Static File Server Architecture

**Frontend-Only Design**
- Fully client-side application with no backend logic or API endpoints
- All data processing handled in JavaScript within the browser
- Integrated data for cryptocurrency balance checks, bank verification, and financial services

**Static File Serving**
- Simple Python HTTP server using built-in `http.server` module for static file serving only
- No custom request handlers or API endpoints
- Direct file serving of HTML, CSS, JavaScript, and asset files
- Configured for Replit's proxy system with `0.0.0.0` binding on port 5000

### Security Implementation

**Client-Side Protection Layers**
- Multi-tiered keyboard event blocking with comprehensive key combination detection
- Context menu prevention with immediate feedback system
- Page blur effects and notification system for security violations
- Prevention of common debugging and inspection techniques

**HTTP Security Headers**
- Content Security Policy (CSP) restricting script sources
- X-Frame-Options set to DENY preventing iframe embedding
- X-Content-Type-Options for MIME type sniffing prevention
- Strict Transport Security (HSTS) for HTTPS enforcement
- Cache-Control headers preventing sensitive data caching

**Anti-Debugging Measures**
- Function key blocking (F12, F5-F11)
- Developer tool shortcut prevention
- Print and save functionality disabled
- Tab switching and window management restrictions

## External Dependencies

### Runtime Dependencies
- **Python 3.x**: Static file server only (no backend logic)
- **Modern Web Browser**: Client-side execution environment with JavaScript ES6+ support
- **Data Files**: Integrated data files (data.js, crypto-data.js, names.js, lookup-functions.js) for frontend-only functionality

### Development Environment
- **Replit Platform**: Cloud-based development and hosting environment
- **HTTP Proxy System**: Replit's internal proxy for web application serving

### Browser API Dependencies
- **DOM API**: Event handling, element manipulation, and page interaction
- **Web API**: Keyboard events, context menu control, and viewport management
- **CSS3**: Advanced styling features including backdrop-filter and CSS custom properties

### Security Framework
- **Content Security Policy (CSP)**: Browser-native security policy enforcement
- **HTTP Security Headers**: Browser security feature activation through meta tags
- **Event Capture API**: Advanced DOM event handling for security event prevention

### Mobile Platform Integration
- **Progressive Web App (PWA) APIs**: Mobile app-like experience through web standards
- **Android Chrome**: Custom theme and app integration features
- **iOS Safari**: Mobile web app capabilities and status bar customization

### No External Service Dependencies
- No third-party APIs, databases, or external services required
- Self-contained application with no network dependencies beyond serving static files
- No user authentication or data persistence systems implemented