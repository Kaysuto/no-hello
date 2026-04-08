/**
 * SafeStorage - Secure localStorage wrapper with error handling
 * Provides safe access to localStorage with automatic fallbacks
 */

export class SafeStorage {
  /**
   * Check if localStorage is available
   * @returns true if localStorage is accessible, false otherwise
   */
  private static isAvailable(): boolean {
    try {
      const test = '__storage_test__'
      localStorage.setItem(test, test)
      localStorage.removeItem(test)
      return true
    } catch {
      return false
    }
  }

  /**
   * Safely get an item from localStorage
   * @param key - The storage key
   * @returns The stored value or null if not found/error
   */
  static getItem(key: string): string | null {
    if (!this.isAvailable()) {
      console.warn('localStorage not available')
      return null
    }

    try {
      return localStorage.getItem(key)
    } catch (error) {
      console.error(`Failed to get item from localStorage: ${key}`, error)
      return null
    }
  }

  /**
   * Safely set an item in localStorage
   * @param key - The storage key
   * @param value - The value to store
   * @returns true if successful, false otherwise
   */
  static setItem(key: string, value: string): boolean {
    if (!this.isAvailable()) {
      console.warn('localStorage not available')
      return false
    }

    try {
      localStorage.setItem(key, value)
      return true
    } catch (error) {
      console.error(`Failed to set item in localStorage: ${key}`, error)
      return false
    }
  }

  /**
   * Safely remove an item from localStorage
   * @param key - The storage key
   * @returns true if successful, false otherwise
   */
  static removeItem(key: string): boolean {
    if (!this.isAvailable()) {
      return false
    }

    try {
      localStorage.removeItem(key)
      return true
    } catch (error) {
      console.error(`Failed to remove item from localStorage: ${key}`, error)
      return false
    }
  }

  /**
   * Safely get and parse JSON from localStorage
   * @param key - The storage key
   * @returns The parsed object or null if not found/parse error
   */
  static getJSON<T>(key: string): T | null {
    const item = this.getItem(key)
    if (!item) return null

    try {
      return JSON.parse(item) as T
    } catch (error) {
      console.error(`Failed to parse JSON from localStorage: ${key}`, error)
      // Clean up corrupted data
      this.removeItem(key)
      return null
    }
  }

  /**
   * Safely stringify and store JSON in localStorage
   * @param key - The storage key
   * @param value - The value to stringify and store
   * @returns true if successful, false otherwise
   */
  static setJSON<T>(key: string, value: T): boolean {
    try {
      return this.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`Failed to stringify JSON for localStorage: ${key}`, error)
      return false
    }
  }
}
