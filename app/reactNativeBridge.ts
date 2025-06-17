interface ReactNativeBridge {
  sendMessage: (message: any) => void;
  onMessage: (callback: (message: any) => void) => void;
}

class ReactNativeBridgeImpl implements ReactNativeBridge {
  private messageHandlers: ((message: any) => void)[] = [];

  constructor() {
    // Listen for messages from React Native
    if (typeof window !== "undefined") {
      window.addEventListener("message", (event) => {
        try {
          const data = JSON.parse(event.data);
          this.messageHandlers.forEach((handler) => handler(data));
        } catch (error) {
          console.error("Error handling message from React Native:", error);
        }
      });
    }
  }

  sendMessage(message: any): void {
    if (typeof window !== "undefined") {
      window.ReactNativeWebView?.postMessage(JSON.stringify(message));
    }
  }

  onMessage(callback: (message: any) => void): void {
    this.messageHandlers.push(callback);
  }
}

// Create a singleton instance
export const reactNativeBridge = new ReactNativeBridgeImpl();
