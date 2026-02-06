/**
 * Navbar - Main navigation component
 *
 * This file re-exports the Navbar component from the navbar directory
 * for backward compatibility with existing imports.
 *
 * The component has been refactored into smaller, more maintainable pieces:
 * - navbar/navbar.tsx - Main orchestrator (~30 lines)
 * - navbar/mobile-menu.tsx - Mobile menu sidebar (~80 lines)
 * - navbar/desktop-nav.tsx - Desktop navigation (~60 lines)
 */

export { Navbar } from './navbar/navbar'
