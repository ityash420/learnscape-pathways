// Utility to detect user's region based on various methods
export const detectUserRegion = async (): Promise<'UAE' | 'USA' | 'UK'> => {
  try {
    // First try timezone detection
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    if (timezone.includes('Dubai') || timezone.includes('Asia/Dubai')) {
      return 'UAE';
    }
    
    if (timezone.includes('America/') || timezone.includes('US/')) {
      return 'USA';
    }
    
    if (timezone.includes('Europe/London') || timezone.includes('GMT')) {
      return 'UK';
    }

    // Fallback to IP-based detection using a free service
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      
      if (data.country_code === 'AE') {
        return 'UAE';
      }
      
      if (data.country_code === 'US') {
        return 'USA';
      }
      
      if (data.country_code === 'GB') {
        return 'UK';
      }
    } catch (error) {
      console.log('IP detection failed, using default');
    }

    // Default to UK if detection fails
    return 'UK';
  } catch (error) {
    console.log('Region detection failed, using default');
    return 'UK';
  }
};