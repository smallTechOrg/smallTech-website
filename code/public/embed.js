(function () {
  const script = document.currentScript;
  const chatUrl =
    document.currentScript.getAttribute("data-chat-url") ||
    "https://smalltech.in/embed";

  // Get the host website domain
  const hostWebsite = window.location.origin;
  
  let displayMobile = script.getAttribute("data-display-mobile");
  if (displayMobile === null || displayMobile.trim() === "") {
    displayMobile = true;
  } else if (displayMobile.toLowerCase().trim() === "true") {
    displayMobile = true;
  } else {
    displayMobile = false;
  }
  //  const enableMobile = attr === null ? true : attr === "true";

  // Get custom colour if provided
  const customColour = script.getAttribute("data-colour") || "#5A2A27";

  // Create iframe container
  const iframeWrapper = document.createElement("div");
  iframeWrapper.style.position = "fixed";
  iframeWrapper.style.bottom = "20px";
  iframeWrapper.style.right = "20px";
  iframeWrapper.style.marginLeft = "auto";
  iframeWrapper.style.width = "300px";
  iframeWrapper.style.height = "520px";
  iframeWrapper.style.borderRadius = "16px";
  iframeWrapper.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
  iframeWrapper.style.zIndex = "999999";
  iframeWrapper.style.transition = "all 0.3s ease";
  iframeWrapper.style.display = "none";
  iframeWrapper.style.overflow = "hidden";
  iframeWrapper.style.background = "white";

  // iframe inside wrapper
  const iframe = document.createElement("iframe");
  iframe.src = `${chatUrl}?host=${encodeURIComponent(hostWebsite)}`;
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.style.borderRadius = "16px";
  iframeWrapper.appendChild(iframe);

  // Close button
  const closeBtn = document.createElement("div");
  closeBtn.innerHTML = "✖";
  closeBtn.style.position = "absolute";
  closeBtn.style.top = "8px";
  closeBtn.style.right = "8px";
  closeBtn.style.cursor = "pointer";
  closeBtn.style.fontSize = "18px";
  closeBtn.style.background = "rgba(0,0,0,0.1)";
  closeBtn.style.width = "28px";
  closeBtn.style.height = "28px";
  closeBtn.style.borderRadius = "50%";
  closeBtn.style.display = "flex";
  closeBtn.style.alignItems = "center";
  closeBtn.style.justifyContent = "center";
  closeBtn.addEventListener("click", () => {
    iframeWrapper.style.display = "none";
  });
  iframeWrapper.appendChild(closeBtn);

  // Chat text label
  const bubbleText = document.createElement("div");
  bubbleText.innerHTML = "Talk to our AI Agent now";
  bubbleText.style.position = "fixed";
  bubbleText.style.bottom = "60px";
  bubbleText.style.right = "140px";
  bubbleText.style.background = "#8ECAE6";
  // ...existing code...
bubbleText.style.background = "rgba(255, 255, 255, 0.6)"; // #8ECAE6 with 10% opacity
// ...existing code...
  bubbleText.style.backgroundOpacity = "0.1";
  bubbleText.style.padding = "8px 12px";
  bubbleText.style.borderRadius = "12px";
  bubbleText.style.boxShadow = "0 4px 10px rgba(0,0,0,0.12)";
  bubbleText.style.border = "3px solid #eee";
  bubbleText.style.zIndex = "999997";
  bubbleText.style.fontSize = "16px";
    bubbleText.style.fontWeight = "500";
  bubbleText.style.color = customColour;

  // Floating chat bubble
  const bubble = document.createElement("div");
  bubble.innerHTML = "💬";
  bubble.style.position = "fixed";
  bubble.style.bottom = "50px";
  bubble.style.right = "70px";
  bubble.style.marginLeft = "auto";
  bubble.style.width = "60px";
  bubble.style.height = "60px";
  bubble.style.borderRadius = "50%";
  bubble.style.background = customColour;
  bubble.style.color = "white";
  bubble.style.display = "flex";
  bubble.style.alignItems = "center";
  bubble.style.justifyContent = "center";
  bubble.style.cursor = "pointer";
  bubble.style.fontSize = "28px";
  bubble.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
  bubble.style.zIndex = "999998";

  if (displayMobile === false) {
    // Hide on mobile
    if (window.matchMedia("(max-width: 768px)").matches) {
      bubble.style.display = "none";
      bubbleText.style.display = "none";
      iframeWrapper.style.display = "none";
    }
  }
  // Helper function to track analytics events
  function trackAnalyticsEvent(eventName, eventParams) {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, eventParams);
    }
  }

  // Listen for analytics events from the iframe
  window.addEventListener("message", (event) => {
    //  verify the message is from our iframe
    if (event.source === iframe.contentWindow) {
      const { type, eventName, eventParams } = event.data;
      if (type === "ANALYTICS_EVENT") {
        trackAnalyticsEvent(eventName, eventParams);
      }
    }
  });

  bubble.addEventListener("click", () => {
    iframeWrapper.style.display = "block";
    // Track bubble click in host website's GA4
    trackAnalyticsEvent("chat_bubble_clicked", {
      event_category: "chat_widget",
      event_label: "floating_bubble",
    });
  });

  function addChatElements() {
    document.body.appendChild(iframeWrapper);
    document.body.appendChild(bubble);
    document.body.appendChild(bubbleText);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addChatElements);
  } else {
    addChatElements();
  }
})();
