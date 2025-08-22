// Utility to detect user's region based on various methods
export const detectUserRegion = async (): Promise<'UAE' | 'USA' | 'UK'> => {
  try {
    // First try timezone detection
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log('Detected timezone:', timezone);
    
    if (timezone.includes('Dubai') || timezone.includes('Asia/Dubai')) {
      console.log('Region detected via timezone: UAE');
      return 'UAE';
    }
    
    if (timezone.includes('America/') || timezone.includes('US/')) {
      console.log('Region detected via timezone: USA');
      return 'USA';
    }
    
    if (timezone.includes('Europe/London') || timezone.includes('GMT')) {
      console.log('Region detected via timezone: UK');
      return 'UK';
    }

    // Fallback to IP-based detection with timeout
    try {
      console.log('Attempting IP-based detection...');
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
      
      const response = await fetch('https://ipapi.co/json/', {
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
        }
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('IP detection response:', data);
      
      if (data.country_code === 'AE') {
        console.log('Region detected via IP: UAE');
        return 'UAE';
      }
      
      if (data.country_code === 'US') {
        console.log('Region detected via IP: USA');
        return 'USA';
      }
      
      if (data.country_code === 'GB') {
        console.log('Region detected via IP: UK');
        return 'UK';
      }
      
      console.log('Country not in supported regions, defaulting to UK');
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('IP detection timed out, using default');
      } else {
        console.log('IP detection failed:', error.message);
      }
    }

    // Default to UK if detection fails
    console.log('Using default region: UK');
    return 'UK';
  } catch (error) {
    console.log('Region detection failed completely:', error);
    return 'UK';
  }
};