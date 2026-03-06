
export const MOCK_PROPERTIES = [
    {
        _id: 'prop1',
        title: 'Modern Luxury Villa',
        location: 'Satellite, Ahmedabad, Gujarat',
        price: 25000000,
        image: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200'],
        beds: 4,
        baths: 4,
        sqft: 3200,
        type: 'Villa',
        availability: 'Available',
        description: 'A stunning modern villa with premium amenities, located in the heart of Ahmedabad.',
        amenities: ['Swimming Pool', 'Garden', 'Security', 'Modern Kitchen'],
        phone: '+91 98765 43210',
        googleMapLink: 'https://maps.google.com/?q=Ahmedabad'
    },
    {
        _id: 'prop2',
        title: 'Skyline Penthouse',
        location: 'Worli, Mumbai, Maharashtra',
        price: 85000000,
        image: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200'],
        beds: 3,
        baths: 3,
        sqft: 2400,
        type: 'Penthouse',
        availability: 'Available',
        description: 'Luxury penthouse with a panoramic view of the Mumbai skyline.',
        amenities: ['Gym', 'Clubhouse', 'Parking', 'Steam Room'],
        phone: '+91 98765 43211',
        googleMapLink: 'https://maps.google.com/?q=Mumbai'
    },
    {
        _id: 'prop3',
        title: 'Serene Garden House',
        location: 'Whitefield, Bangalore, Karnataka',
        price: 18000000,
        image: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1200'],
        beds: 3,
        baths: 2,
        sqft: 1800,
        type: 'House',
        availability: 'Available',
        description: 'Beautiful house surrounded by greenery in the IT hub of Bangalore.',
        amenities: ['Power Backup', 'Play Area', 'Community Hall'],
        phone: '+91 98765 43212',
        googleMapLink: 'https://maps.google.com/?q=Bangalore'
    },
    {
        _id: 'prop4',
        title: 'Elegant 3BHK Apartment',
        location: 'Gomti Nagar, Lucknow, Uttar Pradesh',
        price: 12000000,
        image: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200'],
        beds: 3,
        baths: 3,
        sqft: 1550,
        type: 'Apartment',
        availability: 'Available',
        description: 'Spacious apartment in a prime residential area of Lucknow.',
        amenities: ['Lift', 'Gas Connection', 'Security'],
        phone: '+91 98765 43213',
        googleMapLink: 'https://maps.google.com/?q=Lucknow'
    },
    {
        _id: 'prop5',
        title: 'Beachside Studio',
        location: 'Candolim, North Goa, Goa',
        price: 7500000,
        image: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200'],
        beds: 1,
        baths: 1,
        sqft: 650,
        type: 'Studio',
        availability: 'Available',
        description: 'Compact studio apartment just minutes away from the beach.',
        amenities: ['Pool', 'Parking', 'WiFi'],
        phone: '+91 98765 43214',
        googleMapLink: 'https://maps.google.com/?q=Goa'
    }
];

export const MOCK_USER = {
    _id: 'user1',
    name: 'Demo User',
    email: 'demo@example.com',
    phone: '1234567890'
};

export const MOCK_APPOINTMENTS = [
    {
        _id: 'appt1',
        propertyId: 'prop1',
        date: '2026-04-15',
        time: '10:00 AM',
        status: 'Scheduled'
    }
];

export const MOCK_AI_RESULTS = {
    properties: MOCK_PROPERTIES.slice(0, 3).map(p => ({
        ...p,
        aiScore: 9.5,
        aiAnalysis: 'This property offers excellent value for money in the current market conditions.'
    })),
    analysis: 'Based on current trends, property prices in this area are expected to rise by 12% over the next year. This is a prime investment opportunity.'
};

export const MOCK_TRENDS = {
    city: 'Ahmedabad',
    averagePrice: '₹75,000 per sqft',
    growthRate: '8.5%',
    topLocalities: ['Satellite', 'Prahlad Nagar', 'Bodakdev'],
    insight: 'The market is currently showing a strong preference for 3BHK villas.'
};
