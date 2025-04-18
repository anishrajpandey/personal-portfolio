export default function translateElementOnScroll(
  elementId: any,
  scrollFactor = 0.5
) {
  // Get the target element
  const element = document.getElementById(elementId);

  if (!element) {
    console.error(`Element with ID "${elementId}" not found`);
    return;
  }

  // Function to handle scroll events
  function handleScroll() {
    // Get the current scroll position
    const scrollY = window.scrollY || window.pageYOffset;

    // Calculate translation - multiply scroll position by the factor
    // A smaller factor means slower movement
    const translateY = scrollY * scrollFactor;

    // Apply the transformation

    if (element) element.style.transform = `translateY(${translateY}px)`;
  }

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Initial call to set position
  handleScroll();

  // Return a cleanup function to remove event listener if needed
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}
