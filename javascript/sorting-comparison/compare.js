// Helper function to remove leading articles
function stripLeadingArticles(title) {
  return title.replace(/^(A |An |The )/i, '').trim();
}

// Function to sort movies by year in descending order
function sortByYear(movies) {
  return movies.sort((a, b) => b.year - a.year);
}

// Function to sort movies by title, ignoring leading "A", "An", "The"
function sortByTitle(movies) {
  return movies.sort((a, b) => {
      const titleA = stripLeadingArticles(a.title);
      const titleB = stripLeadingArticles(b.title);
      return titleA.localeCompare(titleB);
  });
}

module.exports = { sortByYear, sortByTitle };
