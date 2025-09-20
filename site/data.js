// Nigerian Banking Data

// Nigerian Bank Codes and Names
window.NIGERIAN_BANKS = [
    { code: '044', name: 'Access Bank' },
    { code: '023', name: 'Citibank Nigeria' },
    { code: '063', name: 'Diamond Bank' },
    { code: '050', name: 'Ecobank Nigeria' },
    { code: '084', name: 'Enterprise Bank' },
    { code: '070', name: 'Fidelity Bank' },
    { code: '011', name: 'First Bank of Nigeria' },
    { code: '214', name: 'First City Monument Bank' },
    { code: '058', name: 'Guaranty Trust Bank' },
    { code: '030', name: 'Heritage Bank' },
    { code: '301', name: 'Jaiz Bank' },
    { code: '082', name: 'Keystone Bank' },
    { code: '076', name: 'Polaris Bank' },
    { code: '101', name: 'Providus Bank' },
    { code: '221', name: 'Stanbic IBTC Bank' },
    { code: '068', name: 'Standard Chartered Bank' },
    { code: '232', name: 'Sterling Bank' },
    { code: '100', name: 'Suntrust Bank' },
    { code: '032', name: 'Union Bank of Nigeria' },
    { code: '033', name: 'United Bank For Africa' },
    { code: '215', name: 'Unity Bank' },
    { code: '035', name: 'Wema Bank' },
    { code: '057', name: 'Zenith Bank' },
    // Fintech/Digital Banks
    { code: '090267', name: 'Kuda Bank' },
    { code: '090304', name: 'Opay' },
    { code: '090327', name: 'Palmpay' },
    { code: '090405', name: 'Monipoint' },
    { code: '090286', name: 'One Bank (One Microfinance Bank)' },
    { code: '090110', name: 'VFD Microfinance Bank' },
    { code: '090175', name: 'Rubies MFB' },
    { code: '090123', name: 'Sparkle Microfinance Bank' },
    { code: '090365', name: 'Finca Microfinance Bank' },
    { code: '090285', name: 'Renmoney MFB' },
    { code: '090318', name: 'Firmus MFB' },
    { code: '090380', name: 'Kredi Money MFB Ltd' },
    { code: '090391', name: 'Dapo Apomu MFB' }
];

// Bank Accounts
window.SAMPLE_ACCOUNTS = {
    // Access Bank
    '044': [
        { accountNumber: '0123456789', accountName: 'Adebayo Olamide Johnson', balance: 2450000.50 },
        { accountNumber: '1234567890', accountName: 'Fatima Aisha Mohammed', balance: 890000.25 },
        { accountNumber: '2345678901', accountName: 'Emeka Christopher Okafor', balance: 5670000.00 },
        { accountNumber: '3456789012', accountName: 'Kemi Adunni Afolabi', balance: 1230000.75 },
        { accountNumber: '4567890123', accountName: 'Tunde Rasheed Abdullahi', balance: 780000.00 }
    ],
    // GTBank
    '058': [
        { accountNumber: '0987654321', accountName: 'Chioma Grace Nwosu', balance: 3250000.80 },
        { accountNumber: '9876543210', accountName: 'Ibrahim Musa Yakubu', balance: 1450000.30 },
        { accountNumber: '8765432109', accountName: 'Tolulope Faith Adeyemi', balance: 6780000.90 },
        { accountNumber: '7654321098', accountName: 'Amara Beauty Ikenna', balance: 890000.45 },
        { accountNumber: '6543210987', accountName: 'Suleiman Hassan Ahmed', balance: 2340000.60 }
    ],
    // First Bank
    '011': [
        { accountNumber: '1357924680', accountName: 'Ngozi Precious Okwu', balance: 4560000.20 },
        { accountNumber: '2468013579', accountName: 'Yusuf Aliyu Bello', balance: 1890000.75 },
        { accountNumber: '3691470258', accountName: 'Folake Temitope Oni', balance: 2670000.40 },
        { accountNumber: '4792581036', accountName: 'Godwin Chukwu Eze', balance: 3450000.85 },
        { accountNumber: '5814692037', accountName: 'Hauwa Khadija Garba', balance: 1560000.15 }
    ],
    // Zenith Bank
    '057': [
        { accountNumber: '1111222233', accountName: 'Olumide David Adebayo', balance: 5890000.30 },
        { accountNumber: '4444555566', accountName: 'Blessing Queen Nwachukwu', balance: 2890000.70 },
        { accountNumber: '7777888899', accountName: 'Mohammed Kabir Sani', balance: 3670000.55 },
        { accountNumber: '1010101010', accountName: 'Funmi Titilayo Adeola', balance: 4230000.90 },
        { accountNumber: '2020202020', accountName: 'Chinedu Emmanuel Okoro', balance: 1780000.25 }
    ],
    // UBA
    '033': [
        { accountNumber: '5555444433', accountName: 'Adesola Victoria Bamidele', balance: 3450000.40 },
        { accountNumber: '6666777788', accountName: 'Aliyu Mustapha Danjuma', balance: 2340000.80 },
        { accountNumber: '9999000011', accountName: 'Ifeoma Chinasa Okonkwo', balance: 4560000.60 },
        { accountNumber: '1212121212', accountName: 'Babatunde Joshua Oladele', balance: 1890000.35 },
        { accountNumber: '3434343434', accountName: 'Zainab Fatimah Umar', balance: 3780000.75 }
    ],
    // Kuda Bank (Fintech)
    '090267': [
        { accountNumber: '3002633272', accountName: 'LAST KING DOHA ENTERPRISES', balance: 2450000.00 },
        { accountNumber: '2001234567', accountName: 'Chidera Hope Nnadi', balance: 1450000.90 },
        { accountNumber: '2002345678', accountName: 'Abdul Rahman Abubakar', balance: 890000.50 },
        { accountNumber: '2003456789', accountName: 'Temitope Samuel Ogundipe', balance: 2340000.25 },
        { accountNumber: '2004567890', accountName: 'Mercy Chioma Uche', balance: 1670000.80 },
        { accountNumber: '2005678901', accountName: 'Ishaq Muhammed Lawal', balance: 3450000.45 }
    ],
    // Opay
    '090304': [
        { accountNumber: '8107320012', accountName: 'Bright Lebi', balance: 1890000.75 },
        { accountNumber: '8101234567', accountName: 'Adebayo Michael Ogun', balance: 3250000.40 },
        { accountNumber: '8102345678', accountName: 'Fatima Zainab Musa', balance: 890000.20 },
        { accountNumber: '8103456789', accountName: 'Chinedu Emmanuel Okoro', balance: 4560000.80 },
        { accountNumber: '8104567890', accountName: 'Blessing Grace Nkem', balance: 1230000.50 }
    ],
    // Palmpay
    '090327': [
        { accountNumber: '8029948909', accountName: 'Debroah Akiyosoto', balance: 2340000.60 },
        { accountNumber: '8021234567', accountName: 'Ibrahim Yakubu Hassan', balance: 1560000.30 },
        { accountNumber: '8022345678', accountName: 'Ngozi Precious Eze', balance: 3890000.90 },
        { accountNumber: '8023456789', accountName: 'Yusuf Aliyu Garba', balance: 2670000.15 },
        { accountNumber: '8024567890', accountName: 'Temitope Faith Adeyemi', balance: 4230000.85 }
    ],
    // Monipoint
    '090405': [
        { accountNumber: '8037045973', accountName: 'DADDY WILLIAMS', balance: 5670000.00 },
        { accountNumber: '8031234567', accountName: 'Mohammed Kabir Ahmed', balance: 2890000.45 },
        { accountNumber: '8032345678', accountName: 'Adesola Victoria Oni', balance: 1780000.70 },
        { accountNumber: '8033456789', accountName: 'Chukwu Emmanuel Okafor', balance: 3450000.25 },
        { accountNumber: '8034567890', accountName: 'Hauwa Khadija Lawal', balance: 2340000.90 }
    ]
};

// Nigerian States and Cities
window.NIGERIAN_LOCATIONS = {
    'Lagos': ['Ikeja', 'Victoria Island', 'Lekki', 'Surulere', 'Ikoyi', 'Ajah', 'Yaba', 'Apapa'],
    'Abuja': ['Garki', 'Maitama', 'Asokoro', 'Wuse', 'Gwarinpa', 'Kubwa', 'Lokogoma', 'Jahi'],
    'Kano': ['Fagge', 'Nassarawa', 'Gwale', 'Dala', 'Tarauni', 'Ungogo', 'Kumbotso'],
    'Ibadan': ['Bodija', 'Ring Road', 'Dugbe', 'Mokola', 'Agodi', 'Bashorun', 'UI'],
    'Port Harcourt': ['GRA', 'Trans Amadi', 'Mile 1', 'Mile 3', 'Diobu', 'Eleme', 'Rumuola'],
    'Kaduna': ['Barnawa', 'Sabon Tasha', 'Malali', 'Tudun Wada', 'Narayi', 'Ungwan Rimi'],
    'Benin City': ['Ring Road', 'Ugbowo', 'Ikpoba Hill', 'New Benin', 'Aduwawa', 'Sapele Road'],
    'Jos': ['Rayfield', 'Bukuru', 'Rantya', 'Jos North', 'Vom', 'Plateau'],
    'Ilorin': ['GRA', 'Tanke', 'Fate Road', 'Post Office', 'Sango', 'Unity Road'],
    'Enugu': ['Independence Layout', 'GRA', 'Coal Camp', 'New Haven', 'Achara Layout']
};

// Transaction History
window.SAMPLE_TRANSACTIONS = [
    {
        type: 'credit',
        amount: 150000.00,
        description: 'Salary Payment - Monthly',
        date: '2024-01-15T08:30:00Z',
        reference: 'SAL/2024/001/0001'
    },
    {
        type: 'debit',
        amount: 25000.00,
        description: 'ATM Withdrawal',
        date: '2024-01-14T16:45:00Z',
        reference: 'ATM/2024/001/5634'
    },
    {
        type: 'credit',
        amount: 75000.00,
        description: 'Transfer from Adebayo Johnson',
        date: '2024-01-13T11:20:00Z',
        reference: 'TRF/2024/001/8901'
    },
    {
        type: 'debit',
        amount: 12500.00,
        description: 'POS Transaction - Shoprite',
        date: '2024-01-12T14:15:00Z',
        reference: 'POS/2024/001/2345'
    },
    {
        type: 'credit',
        amount: 300000.00,
        description: 'Business Payment - Contract',
        date: '2024-01-10T09:00:00Z',
        reference: 'BIZ/2024/001/7890'
    }
];

// Bank Branch Locations
window.BANK_BRANCHES = {
    'Lagos': [
        { bank: 'Access Bank', address: '14 Broad Street, Lagos Island', lat: 6.4541, lng: 3.3947 },
        { bank: 'GTBank', address: '635 Akin Adesola Street, Victoria Island', lat: 6.4280, lng: 3.4219 },
        { bank: 'First Bank', address: '35 Marina, Lagos Island', lat: 6.4541, lng: 3.3947 },
        { bank: 'Zenith Bank', address: '84 Ajose Adeogun Street, Victoria Island', lat: 6.4280, lng: 3.4219 },
        { bank: 'UBA', address: '57 Marina, Lagos Island', lat: 6.4541, lng: 3.3947 }
    ],
    'Abuja': [
        { bank: 'Access Bank', address: 'Plot 999C Cadastral Zone A0, Central Business District', lat: 9.0579, lng: 7.4951 },
        { bank: 'GTBank', address: 'Plot 1077 Cadastral Zone A00, Central Business District', lat: 9.0579, lng: 7.4951 },
        { bank: 'First Bank', address: 'Plot 1216 Muhammadu Buhari Way, Central Business District', lat: 9.0579, lng: 7.4951 }
    ]
};

// Error Messages
window.ERROR_MESSAGES = {
    INVALID_ACCOUNT: 'Account number not found in our records',
    INVALID_BANK_CODE: 'Invalid bank code provided',
    ACCOUNT_BLOCKED: 'This account has been temporarily blocked',
    INSUFFICIENT_BALANCE: 'Insufficient account balance',
    NETWORK_ERROR: 'Network connection failed. Please try again.',
    SERVICE_UNAVAILABLE: 'Service temporarily unavailable'
};

// Success Messages
window.SUCCESS_MESSAGES = {
    ACCOUNT_VERIFIED: 'Account successfully verified',
    TRANSACTION_COMPLETE: 'Transaction completed successfully',
    BALANCE_RETRIEVED: 'Balance retrieved successfully'
};

// ACCOUNT GENERATION FUNCTIONS

// Generate random account object
window.randomAccount = function() {
    // Randomly select from static accounts or generate new one
    const useStaticAccount = Math.random() < 0.3; // 30% chance of returning static account
    
    if (useStaticAccount) {
        return getRandomStaticAccount();
    } else {
        return generateRandomAccount();
    }
};

// Get one of the predefined static accounts
function getRandomStaticAccount() {
    const staticAccounts = [
        { bankId: '090304', accountNumber: '8107320012', name: 'Bright Lebi' },
        { bankId: '090327', accountNumber: '8029948909', name: 'Debroah Akiyosoto' },
        { bankId: '090405', accountNumber: '8037045973', name: 'DADDY WILLIAMS' },
        { bankId: '090267', accountNumber: '3002633272', name: 'LAST KING DOHA ENTERPRISES' }
    ];
    
    const selectedAccount = staticAccounts[Math.floor(Math.random() * staticAccounts.length)];
    
    // Get official bank name from NIGERIAN_BANKS array
    const bank = window.NIGERIAN_BANKS.find(b => b.code === selectedAccount.bankId);
    const bankName = bank ? bank.name : 'Unknown Bank';
    
    return {
        bankId: selectedAccount.bankId,
        bankName: bankName,
        accountNumber: selectedAccount.accountNumber,
        name: selectedAccount.name,
        distanceMeters: Math.floor(Math.random() * 2000) + 100, // 100m to 2.1km
        balance: Math.floor(Math.random() * 5000000) + 500000, // 500k to 5.5M
        source: 'static_account'
    };
}

// Generate random account with realistic data
function generateRandomAccount() {
    // Prioritize fintech banks for random generation - only store bank codes
    const priorityBankCodes = [
        '090304', // Opay
        '090327', // Palmpay  
        '090405', // Monipoint
        '090267', // Kuda Bank
        '044',    // Access Bank
        '058',    // Guaranty Trust Bank
        '011',    // First Bank of Nigeria
        '057',    // Zenith Bank
        '033'     // United Bank For Africa
    ];
    
    const selectedBankCode = priorityBankCodes[Math.floor(Math.random() * priorityBankCodes.length)];
    
    // Get official bank name from NIGERIAN_BANKS array
    const bank = window.NIGERIAN_BANKS.find(b => b.code === selectedBankCode);
    const bankName = bank ? bank.name : 'Unknown Bank';
    
    // Generate realistic account number based on bank type
    let accountNumber;
    if (['090304', '090327', '090405'].includes(selectedBankCode)) {
        // Fintech banks - 10 digit numbers starting with 8
        accountNumber = '8' + Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
    } else if (selectedBankCode === '090267') {
        // Kuda bank - 10 digit numbers starting with 3 or 2
        const prefix = Math.random() > 0.5 ? '3' : '2';
        accountNumber = prefix + Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
    } else {
        // Traditional banks - 10 digit numbers
        accountNumber = Math.floor(Math.random() * 10000000000).toString().padStart(10, '0');
    }
    
    // Generate realistic name
    const nameData = window.generateRandomNigerianName();
    const accountName = nameData.fullName.toUpperCase();
    
    return {
        bankId: selectedBankCode,
        bankName: bankName,
        accountNumber: accountNumber,
        name: accountName,
        distanceMeters: Math.floor(Math.random() * 5000) + 50, // 50m to 5km
        balance: Math.floor(Math.random() * 8000000) + 100000, // 100k to 8.1M
        source: 'generated_account'
    };
}

// Enhanced lookupAccount function to work with the new system
window.lookupAccount = async function(accountNumber, bankCode) {
    await simulateNetworkDelay();
    
    // Simulate network failure
    if (simulateNetworkFailure()) {
        throw new Error(window.ERROR_MESSAGES.NETWORK_ERROR);
    }
    
    // Validate inputs
    if (!accountNumber || !bankCode) {
        return {
            success: false,
            error: 'Missing required fields: account_number and bank_code'
        };
    }
    
    // Validate account number format (10 digits)
    if (!/^\d{10}$/.test(accountNumber)) {
        return {
            success: false,
            error: 'Invalid account number format. Must be 10 digits.'
        };
    }
    
    // Find bank by code
    const bank = window.NIGERIAN_BANKS.find(b => b.code === bankCode);
    if (!bank) {
        return {
            success: false,
            error: window.ERROR_MESSAGES.INVALID_BANK_CODE
        };
    }
    
    // Check if we have sample data for this bank
    const bankAccounts = window.SAMPLE_ACCOUNTS[bankCode];
    if (bankAccounts) {
        const account = bankAccounts.find(acc => acc.accountNumber === accountNumber);
        if (account) {
            // Simulate occasional account blocks (2% chance)
            if (seededRandom(generateSeedFromString(accountNumber)) < 0.02) {
                return {
                    success: false,
                    error: window.ERROR_MESSAGES.ACCOUNT_BLOCKED
                };
            }
            
            return {
                success: true,
                accountName: account.accountName,
                accountNumber: account.accountNumber,
                bankName: bank.name,
                bankCode: bank.code,
                balance: parseFloat(account.balance.toFixed(2)),
                currency: 'NGN',
                source: 'database'
            };
        }
    }
    
    // Generate fallback account using deterministic data
    const seed = generateSeedFromString(accountNumber + bankCode);
    const nameData = generateDeterministicName(seed);
    
    // Simulate account not found for some cases (15% chance)
    if (seededRandom(seed) < 0.15) {
        return {
            success: false,
            error: window.ERROR_MESSAGES.INVALID_ACCOUNT
        };
    }
    
    // Generate deterministic balance
    const balanceBaseSeed = seed * 1.23456;
    const balance = parseFloat((seededRandom(balanceBaseSeed) * 5000000 + 50000).toFixed(2));
    
    return {
        success: true,
        accountName: nameData.fullName,
        accountNumber: accountNumber,
        bankName: bank.name,
        bankCode: bank.code,
        balance: balance,
        currency: 'NGN',
        source: 'database'
    };
};

// Helper functions for deterministic generation
function generateSeedFromString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
}

function seededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function generateDeterministicName(seed) {
    const gender = seededRandom(seed) > 0.5 ? 'male' : 'female';
    
    const firstNames = window.NIGERIAN_FIRST_NAMES[gender];
    const firstIndex = Math.floor(seededRandom(seed * 1.1) * firstNames.length);
    const firstName = firstNames[firstIndex];
    
    const ethnicGroups = Object.keys(window.NIGERIAN_SURNAMES);
    const groupIndex = Math.floor(seededRandom(seed * 1.2) * ethnicGroups.length);
    const selectedGroup = ethnicGroups[groupIndex];
    const surnames = window.NIGERIAN_SURNAMES[selectedGroup];
    const surnameIndex = Math.floor(seededRandom(seed * 1.3) * surnames.length);
    const surname = surnames[surnameIndex];
    
    return {
        fullName: `${firstName} ${surname}`,
        firstName,
        surname,
        gender,
        ethnicGroup: selectedGroup
    };
}

function simulateNetworkDelay() {
    return Promise.resolve(); // Instant response for better performance
}

function simulateNetworkFailure() {
    return Math.random() < 0.03; // 3% chance of network failure
}