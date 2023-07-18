/**
 * Calculate the estimated reading time of a blog.
 * @param {string} markdownText - The text content of the blog.
 * @param {number} readingSpeed - The average reading speed (in words per minute).
 * @returns {number} The estimated reading time in minutes.
 */
const calculateReadingTime = (
  markdownText: string,
  readingSpeed = 200,
): number => {
  const plainText = markdownText.replace(/```[\s\S]*?```/g, '');
  const wordCount = plainText.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / readingSpeed);
  return readingTime;
};

export default calculateReadingTime;
