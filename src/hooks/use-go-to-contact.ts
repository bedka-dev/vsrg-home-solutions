import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Returns a callback that takes the user to the contact form.
 * Smooth-scrolls to the #contact element when it exists on the current page,
 * otherwise navigates to the /contact route.
 */
export function useGoToContact() {
  const navigate = useNavigate();

  return useCallback(() => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/contact");
    }
  }, [navigate]);
}
