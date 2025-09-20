// Nigerian Names Database

// Common Nigerian First Names
window.NIGERIAN_FIRST_NAMES = {
    male: [
        'Adebayo', 'Emeka', 'Tunde', 'Ibrahim', 'Chinedu', 'Yusuf', 'Kelechi', 'Mohammed',
        'Olumide', 'Chidera', 'Babatunde', 'Abdul', 'Godwin', 'Suleiman', 'Chukwu',
        'Aliyu', 'Temitope', 'Musa', 'David', 'Hassan', 'Samuel', 'Uche', 'Abubakar',
        'Ishaq', 'Christopher', 'Rasheed', 'Emmanuel', 'Kabir', 'Joshua', 'Mustapha',
        'Daniel', 'Abdullahi', 'Michael', 'Lawal', 'Peter', 'Garba', 'John', 'Bello',
        'James', 'Ahmed', 'Joseph', 'Sani', 'Paul', 'Danjuma', 'Benjamin', 'Umar',
        'Anthony', 'Yakubu', 'Matthew', 'Haruna', 'Mark', 'Idris', 'Luke', 'Shehu'
    ],
    female: [
        'Fatima', 'Chioma', 'Adunni', 'Aisha', 'Ngozi', 'Kemi', 'Hauwa', 'Blessing',
        'Folake', 'Zainab', 'Ifeoma', 'Temitope', 'Khadija', 'Mercy', 'Funmi', 'Amina',
        'Chinasa', 'Titilayo', 'Maryam', 'Grace', 'Adesola', 'Fatimah', 'Hope', 'Safiya',
        'Victoria', 'Rukayya', 'Faith', 'Halima', 'Queen', 'Hadiza', 'Joy', 'Zara',
        'Precious', 'Salamat', 'Beauty', 'Jamila', 'Comfort', 'Nafisa', 'Peace', 'Asma',
        'Patience', 'Kaltum', 'Love', 'Maimuna', 'Gift', 'Asmau', 'Favour', 'Mariam',
        'Esther', 'Zulaikha', 'Ruth', 'Habiba', 'Mary', 'Balkisu', 'Elizabeth', 'Sumayyah'
    ]
};

// Common Nigerian Surnames by Region
window.NIGERIAN_SURNAMES = {
    yoruba: [
        'Adebayo', 'Ogundimu', 'Adeyemi', 'Afolabi', 'Bamidele', 'Oladele', 'Ogundipe',
        'Adebisi', 'Adeola', 'Akintola', 'Oladipo', 'Adeyinka', 'Adeyemo', 'Akande',
        'Adebowale', 'Ayodele', 'Akinola', 'Oluwaseun', 'Adeyeye', 'Akinyemi',
        'Adeyemi', 'Oyebode', 'Akinwale', 'Ogunleye', 'Adebambo', 'Akinwunmi',
        'Ogunbanjo', 'Adeshina', 'Ogundimu', 'Adetola', 'Oni', 'Ojo', 'Ayinde'
    ],
    igbo: [
        'Okafor', 'Okoro', 'Okonkwo', 'Eze', 'Nwosu', 'Ikenna', 'Okwu', 'Uche',
        'Nwachukwu', 'Obi', 'Nnadi', 'Nwankwo', 'Okechukwu', 'Emeka', 'Chukwu',
        'Okoye', 'Umeh', 'Nkem', 'Okwara', 'Onyeka', 'Okafor', 'Okeke', 'Okocha',
        'Nnamdi', 'Ugochukwu', 'Chibuike', 'Ebuka', 'Chinedu', 'Obinna', 'Kelechi',
        'Ikechi', 'Chidera', 'Kosisochukwu', 'Chinonso', 'Chukwuebuka'
    ],
    hausa: [
        'Mohammed', 'Ibrahim', 'Abdullahi', 'Ahmed', 'Usman', 'Aliyu', 'Bello',
        'Garba', 'Hassan', 'Musa', 'Yakubu', 'Sani', 'Lawal', 'Haruna', 'Danjuma',
        'Abubakar', 'Yusuf', 'Shehu', 'Muhammed', 'Idris', 'Kabir', 'Umar',
        'Suleiman', 'Mustapha', 'Rabiu', 'Tijjani', 'Aminu', 'Bashir', 'Nuhu',
        'Salisu', 'Nasir', 'Isma\'ila', 'Muntari', 'Zakari', 'Adamu'
    ],
    other: [
        'Johnson', 'Williams', 'Brown', 'Davis', 'Wilson', 'Thompson', 'Jackson',
        'Anderson', 'Taylor', 'Thomas', 'Moore', 'Martin', 'Lee', 'Walker',
        'Hall', 'Allen', 'Young', 'King', 'Wright', 'Lopez', 'Hill', 'Scott',
        'Green', 'Adams', 'Baker', 'Nelson', 'Carter', 'Mitchell', 'Perez', 'Roberts'
    ]
};

// Middle Names (Common in Nigerian naming patterns)
window.NIGERIAN_MIDDLE_NAMES = {
    male: [
        'Olamide', 'Oluwaseun', 'Olumide', 'Adebayo', 'Adeyemi', 'Christopher',
        'Emmanuel', 'Michael', 'David', 'Samuel', 'Daniel', 'Peter', 'John',
        'James', 'Joseph', 'Paul', 'Benjamin', 'Anthony', 'Matthew', 'Mark',
        'Luke', 'Rahman', 'Muhammed', 'Abdul', 'Rasheed', 'Kabir', 'Musa'
    ],
    female: [
        'Oluwaseun', 'Temitope', 'Olumide', 'Adunni', 'Kemi', 'Grace', 'Faith',
        'Hope', 'Joy', 'Peace', 'Love', 'Mercy', 'Blessing', 'Gift', 'Favour',
        'Precious', 'Beauty', 'Queen', 'Princess', 'Comfort', 'Patience',
        'Aisha', 'Fatima', 'Khadija', 'Zainab', 'Hauwa', 'Maryam'
    ]
};

// Title Prefixes
window.NIGERIAN_TITLES = [
    'Mr.', 'Mrs.', 'Miss', 'Dr.', 'Prof.', 'Engr.', 'Barr.', 'Chief', 'Alhaji', 'Alhaja'
];

// Generate Random Nigerian Name
window.generateRandomNigerianName = function(gender = null, includeMiddleName = true, includeTitle = false) {
    try {
        // Check if required data is available
        if (!window.NIGERIAN_FIRST_NAMES || !window.NIGERIAN_SURNAMES) {
            throw new Error('Names database not loaded');
        }
        
        // Randomly select gender if not provided
        if (!gender) {
            gender = Math.random() > 0.5 ? 'male' : 'female';
        }
        
        // Validate gender
        if (!window.NIGERIAN_FIRST_NAMES[gender]) {
            gender = 'male'; // fallback
        }
        
        // Select first name
        const firstNames = window.NIGERIAN_FIRST_NAMES[gender];
        if (!firstNames || firstNames.length === 0) {
            throw new Error('First names array is empty');
        }
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        
        // Select middle name (optional)
        let middleName = '';
        if (includeMiddleName && Math.random() > 0.3 && window.NIGERIAN_MIDDLE_NAMES && window.NIGERIAN_MIDDLE_NAMES[gender]) {
            const middleNames = window.NIGERIAN_MIDDLE_NAMES[gender];
            if (middleNames && middleNames.length > 0) {
                middleName = middleNames[Math.floor(Math.random() * middleNames.length)];
            }
        }
        
        // Select surname from random ethnic group
        const ethnicGroups = Object.keys(window.NIGERIAN_SURNAMES);
        if (ethnicGroups.length === 0) {
            throw new Error('No surname groups available');
        }
        const selectedGroup = ethnicGroups[Math.floor(Math.random() * ethnicGroups.length)];
        const surnames = window.NIGERIAN_SURNAMES[selectedGroup];
        if (!surnames || surnames.length === 0) {
            throw new Error('Surnames array is empty for group: ' + selectedGroup);
        }
        const surname = surnames[Math.floor(Math.random() * surnames.length)];
        
        // Add title (optional)
        let title = '';
        if (includeTitle && Math.random() > 0.7 && window.NIGERIAN_TITLES && window.NIGERIAN_TITLES.length > 0) {
            title = window.NIGERIAN_TITLES[Math.floor(Math.random() * window.NIGERIAN_TITLES.length)] + ' ';
        }
        
        // Construct full name
        let fullName = title + firstName;
        if (middleName) fullName += ' ' + middleName;
        fullName += ' ' + surname;
        
        return {
            fullName,
            firstName,
            middleName,
            surname,
            gender,
            ethnicGroup: selectedGroup,
            title: title.trim()
        };
    } catch (error) {
        console.error('Error generating Nigerian name:', error);
        // Return a simple fallback name
        return {
            fullName: 'JOHN SMITH',
            firstName: 'JOHN',
            middleName: '',
            surname: 'SMITH',
            gender: gender || 'male',
            ethnicGroup: 'other',
            title: ''
        };
    }
}

// Business Names
window.NIGERIAN_BUSINESS_NAMES = [
    'Dangote Industries Limited',
    'BUA Group',
    'Flour Mills of Nigeria Plc',
    'Nigerian Breweries Plc',
    'Lafarge Africa Plc',
    'Guaranty Trust Bank Plc',
    'Access Holdings Plc',
    'Zenith Bank Plc',
    'United Bank for Africa Plc',
    'First Bank of Nigeria Limited',
    'MTN Nigeria Communications Plc',
    'Airtel Nigeria Limited',
    '9mobile Telecommunications Limited',
    'Globacom Limited',
    'Nigerian National Petroleum Corporation',
    'Shell Petroleum Development Company',
    'Chevron Nigeria Limited',
    'TotalEnergies Nigeria Limited',
    'ExxonMobil Nigeria',
    'Seplat Energy Plc',
    'Julius Berger Nigeria Plc',
    'Nestle Nigeria Plc',
    'Unilever Nigeria Plc',
    'Cadbury Nigeria Plc',
    'PZ Cussons Nigeria Plc',
    'Oando Plc',
    'Forte Oil Plc',
    'Conoil Plc',
    'Japaul Gold & Ventures Plc',
    'Transcorp Hotels Plc'
];

// Generate Random Business Name
window.generateRandomBusinessName = function() {
    const businessTypes = [
        'Industries Limited', 'Trading Company Limited', 'Investment Limited',
        'Services Limited', 'Enterprises', 'Group Limited', 'Holdings Plc',
        'Nigeria Limited', 'Global Limited', 'International Limited',
        'Ventures Limited', 'Solutions Limited', 'Technologies Limited'
    ];
    
    const businessPrefixes = [
        'Royal', 'Golden', 'Premium', 'Elite', 'Supreme', 'Imperial', 'Noble',
        'Crown', 'Diamond', 'Platinum', 'Ultimate', 'Prime', 'Excel', 'Mega',
        'Super', 'Grand', 'First', 'Alpha', 'Beta', 'Omega', 'Zenith', 'Apex'
    ];
    
    const businessCore = [
        'Trade', 'Commerce', 'Business', 'Finance', 'Capital', 'Investment',
        'Development', 'Construction', 'Engineering', 'Technology', 'Innovation',
        'Solutions', 'Services', 'Resources', 'Energy', 'Power', 'Oil', 'Gas'
    ];
    
    if (Math.random() > 0.7) {
        // Return from predefined list
        return NIGERIAN_BUSINESS_NAMES[Math.floor(Math.random() * NIGERIAN_BUSINESS_NAMES.length)];
    } else {
        // Generate new business name
        const prefix = businessPrefixes[Math.floor(Math.random() * businessPrefixes.length)];
        const core = businessCore[Math.floor(Math.random() * businessCore.length)];
        const type = businessTypes[Math.floor(Math.random() * businessTypes.length)];
        
        return `${prefix} ${core} ${type}`;
    }
}

// Nigerian Phone Number Prefixes
window.NIGERIAN_PHONE_PREFIXES = [
    '0701', '0702', '0703', '0704', '0705', '0706', '0707', '0708', '0709',
    '0801', '0802', '0803', '0804', '0805', '0806', '0807', '0808', '0809',
    '0810', '0811', '0812', '0813', '0814', '0815', '0816', '0817', '0818', '0819',
    '0901', '0902', '0903', '0904', '0905', '0906', '0907', '0908', '0909',
    '0915', '0916', '0917', '0918'
];

// Generate Random Nigerian Phone Number
window.generateRandomPhoneNumber = function() {
    const prefix = NIGERIAN_PHONE_PREFIXES[Math.floor(Math.random() * NIGERIAN_PHONE_PREFIXES.length)];
    const suffix = Math.floor(Math.random() * 10000000).toString().padStart(7, '0');
    return prefix + suffix;
}

// Generate Random Email
window.generateRandomEmail = function(fullName) {
    const domains = [
        'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com',
        'live.com', 'aol.com', 'protonmail.com', 'mail.com', 'ymail.com'
    ];
    
    const cleanName = fullName.toLowerCase()
        .replace(/[^a-z\s]/g, '')
        .replace(/\s+/g, '.')
        .replace(/^\.+|\.+$/g, '');
    
    const domain = domains[Math.floor(Math.random() * domains.length)];
    const number = Math.random() > 0.5 ? Math.floor(Math.random() * 999) : '';
    
    return cleanName + number + '@' + domain;
}