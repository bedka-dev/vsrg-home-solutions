// The lead form (id="contact") only exists on Home and Contact. Scroll to it when present,
// otherwise send the visitor to the Contact page so CTAs never dead-end.
export function goToLeadForm() {
  const form = document.getElementById("contact");
  if (form) {
    form.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = "/contact";
  }
}
