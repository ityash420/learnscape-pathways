// Utility to detect user's region based on various methods
export const detectUserRegion = async (): Promise<'UAE' | 'USA' | 'UK'> => {
  console.log('🌍 Starting region detection...');
  try {
    // First try timezone detection
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log('🕐 Detected timezone:', timezone);
    
    // Enhanced timezone detection
    if (timezone.includes('Dubai') || timezone.includes('Asia/Dubai') || timezone.includes('Asia/Muscat')) {
      console.log('🇦🇪 Region detected via timezone: UAE');
      return 'UAE';
    }
    
    if (timezone.includes('America/') || timezone.includes('US/')) {
      console.log('🇺🇸 Region detected via timezone: USA');
      return 'USA';
    }
    
    if (timezone.includes('Europe/London') || timezone.includes('GMT') || timezone.includes('Europe/')) {
      console.log('🇬🇧 Region detected via timezone: UK');
      return 'UK';
    }

    // Fallback to IP-based detection with timeout
    try {
      console.log('🌐 Attempting IP-based detection...');
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
      console.log('🌐 IP detection response:', data);
      
      // Enhanced country detection
      if (data.country_code === 'AE') {
        console.log('🇦🇪 Region detected via IP: UAE');
        return 'UAE';
      }
      
      if (data.country_code === 'US') {
        console.log('🇺🇸 Region detected via IP: USA');
        return 'USA';
      }
      
      if (data.country_code === 'GB') {
        console.log('🇬🇧 Region detected via IP: UK');
        return 'UK';
      }
      
      // Additional country mappings for better coverage
      const countryToRegionMap: Record<string, 'UAE' | 'USA' | 'UK'> = {
        'IN': 'UK', // India defaults to UK
        'PK': 'UK', // Pakistan defaults to UK  
        'BD': 'UK', // Bangladesh defaults to UK
        'SA': 'UAE', // Saudi Arabia to UAE
        'QA': 'UAE', // Qatar to UAE
        'KW': 'UAE', // Kuwait to UAE
        'BH': 'UAE', // Bahrain to UAE
        'OM': 'UAE', // Oman to UAE
        'CA': 'USA', // Canada to USA
        'MX': 'USA', // Mexico to USA
      };
      
      const mappedRegion = countryToRegionMap[data.country_code];
      if (mappedRegion) {
        console.log(`🗺️ Region mapped via country code ${data.country_code}: ${mappedRegion}`);
        return mappedRegion;
      }
      
      console.log(`⚠️ Country ${data.country_code} not in supported regions, defaulting to UK`);
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('IP detection timed out, using default');
      } else {
        console.log('IP detection failed:', error.message);
      }
    }

    // Default to UK if detection fails
    console.log('🇬🇧 Using default region: UK');
    return 'UK';
  } catch (error) {
    console.log('❌ Region detection failed completely:', error);
    return 'UK';
  }
};