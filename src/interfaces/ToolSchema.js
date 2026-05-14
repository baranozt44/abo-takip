/**
 * @interface ITool
 * @property {string} id -id
 * @property {string} name - Abonelik adı
 * @property {('Yazılım'|'Tasarım'|'Altyapı'|'Eğlence')} category - Kategori
 * @property {number|string} price - Ücret
 * @property {string} date - Abonelik tarihi (YYYY-MM-DD)
 */

export const TOOL_CATEGORIES = {
    SOFTWARE: 'Yazılım',
    DESIGN: 'Tasarım',
    INFRASTRUCTURE: 'Altyapı',
    ENTERTAINMENT: 'Eğlence'
};

/**
 * Yeni bir ITool objesi oluşturmak için
   @returns {ITool}
 */
export const createInitialTool = () => ({
    id: '',
    name: '',
    category: TOOL_CATEGORIES.SOFTWARE,
    price: '',
    date: new Date().toISOString().split('T')[0]
});

// Select inputları için kategori listesi
export const CATEGORY_OPTIONS = Object.values(TOOL_CATEGORIES);
