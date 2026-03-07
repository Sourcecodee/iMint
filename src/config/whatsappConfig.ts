// WhatsApp Contact Configuration

export const whatsappConfig = {
  // Primary WhatsApp contact information
  phoneNumber: "+447700900123", 
  whatsappLink: "https://wa.me/447700900123", 

  
  
  // Seller information
  sellerName: "TechGuru UK",
  
  // Default message template
  defaultMessage: "Hi! I'm interested in your products. Could you please provide more information?",
  
  // Product-specific message template
  productMessageTemplate: (productName: string, price: string, ram?: string, storage?: string) => {
    let message = `Hi! I'm interested in this product:\n\n📱 *${productName}*\n💰 Price: ${price}`;
    
    if (ram) {
      message += `\n🧠 RAM: ${ram}`;
    }
    
    if (storage) {
      message += `\n💾 Storage: ${storage}`;
    }
    
    message += `\n\nIs it still available? I'd like to know more details about the condition and shipping to Nigeria.`;
    
    return message;
  }
};

// Helper function to get WhatsApp URL with product information
export const getWhatsAppUrl = (productName?: string, price?: string, ram?: string, storage?: string) => {
  const baseUrl = whatsappConfig.whatsappLink;
  
  if (productName && price) {
    const message = whatsappConfig.productMessageTemplate(productName, price, ram, storage);
    const encodedMessage = encodeURIComponent(message);
    return `${baseUrl}?text=${encodedMessage}`;
  }
  
  const encodedMessage = encodeURIComponent(whatsappConfig.defaultMessage);
  return `${baseUrl}?text=${encodedMessage}`;
};

// Helper function to get just the phone number (for direct WhatsApp links)
export const getWhatsAppNumber = () => {
  return whatsappConfig.phoneNumber;
};
