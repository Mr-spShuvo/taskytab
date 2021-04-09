/**
 * Extract data with id properties of firebase documents.
 * @param {object} doc
 * @returns {object} An object with id properties and data;
 */
export const getDocsWithId = doc => ({ id: doc.id, ...doc.data() });
