// Account Lookup Functions
// Note: This file must be loaded after data.js, crypto-data.js, and names.js

// Network delay configuration - DISABLED for better performance
const NETWORK_DELAY = {
    min: 0,
    max: 0
};

// Add realistic delay for network requests - OPTIMIZED (no delay)
function addNetworkDelay() {
    return Promise.resolve();
}

// Handle random network failures (5% chance)
function checkNetworkFailure() {
    return Math.random() < 0.05;
}

// Generate deterministic data based on input (for consistent results)
function generateSeedFromString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash);
}

// Seeded random number generator for deterministic results
function seededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

// Look up bank account information
window.lookupAccount = async function(accountNumber, bankCode) {
    await addNetworkDelay();
    
    // Simulate network failure
    if (checkNetworkFailure()) {
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
}

// Look up cryptocurrency wallet balance - GENERATES RANDOM BALANCES FOR ANY INPUT
window.lookupAddress = async function(walletAddress, chainId) {
    await addNetworkDelay();
    
    // Simulate network failure (very low chance)
    if (Math.random() < 0.01) {
        throw new Error('Network timeout - please try again');
    }
    
    // Accept ANY input - no validation needed
    if (!walletAddress) {
        walletAddress = window.generateRandomWallet();
    }
    
    // Default to Ethereum if no chainId provided
    if (!chainId) {
        chainId = '1';
    }
    
    // Normalize chainId to string for consistent lookups
    const normalizedChainId = String(chainId);
    
    // Use default network if chainId not recognized
    let network = window.SUPPORTED_NETWORKS[normalizedChainId];
    if (!network) {
        network = window.SUPPORTED_NETWORKS['1']; // Default to Ethereum
    }
    
    // CHECK STATIC WALLETS FIRST (normalize address to lowercase)
    const normalizedAddress = walletAddress.toLowerCase();
    if (window.STATIC_WALLETS && window.STATIC_WALLETS[normalizedAddress]) {
        const wallet = window.STATIC_WALLETS[normalizedAddress];
        const price = (window.CRYPTO_PRICES && window.CRYPTO_PRICES[wallet.symbol]) || 1;
        const balanceUSD = parseFloat((parseFloat(wallet.balance.replace(/,/g, '')) * price).toFixed(2));
        
        return {
            success: true,
            address: walletAddress,
            chainId: wallet.symbol === 'ETH' ? '1' : '56',
            network: wallet.symbol === 'ETH' ? 'Ethereum' : 'BNB Smart Chain',
            balance: parseFloat(wallet.balance.replace(/,/g, '')),
            balanceUSD: balanceUSD,
            symbol: wallet.symbol,
            tokens: [],
            source: 'static_wallet'
        };
    }
    
    // GENERATE RANDOM BALANCE FOR NON-STATIC WALLET ADDRESSES
    // Random chance of having balance (80% chance)
    const hasBalance = Math.random() > 0.2;
    
    if (!hasBalance) {
        return {
            success: true,
            address: walletAddress,
            chainId: normalizedChainId,
            network: network.name,
            balance: 0,
            balanceUSD: 0,
            symbol: network.symbol,
            tokens: [],
            source: 'random_generator'
        };
    }
    
    // Generate random balance between 0.001 and 100
    const balance = parseFloat((Math.random() * 99.999 + 0.001).toFixed(8));
    const price = window.CRYPTO_PRICES[network.symbol] || 1;
    const balanceUSD = parseFloat((balance * price).toFixed(2));
    
    // Generate random tokens (60% chance of having tokens)
    const tokens = [];
    const hasTokens = Math.random() > 0.4;
    if (hasTokens) {
        const tokenContracts = window.TOKEN_CONTRACTS[normalizedChainId];
        if (tokenContracts) {
            const tokenSymbols = Object.keys(tokenContracts);
            // Random number of tokens (0-3)
            const numTokens = Math.floor(Math.random() * 4);
            
            // Shuffle token symbols and pick random ones
            const shuffledSymbols = [...tokenSymbols].sort(() => Math.random() - 0.5);
            
            for (let i = 0; i < numTokens && i < shuffledSymbols.length; i++) {
                const symbol = shuffledSymbols[i];
                
                // Generate random token balance
                const tokenBalance = parseFloat((Math.random() * 10000 + 10).toFixed(2));
                const tokenPrice = window.CRYPTO_PRICES[symbol] || 1;
                tokens.push({
                    symbol: symbol,
                    balance: tokenBalance,
                    balanceUSD: parseFloat((tokenBalance * tokenPrice).toFixed(2))
                });
            }
        }
    }
    
    return {
        success: true,
        address: walletAddress,
        chainId: normalizedChainId,
        network: network.name,
        balance: balance,
        balanceUSD: balanceUSD,
        symbol: network.symbol,
        tokens: tokens,
        source: 'random_generator'
    };
}

// Generate random account for testing
window.randomAccount = function() {
    // Skip network delay for instant response
    
    // Select random bank
    const bank = window.NIGERIAN_BANKS[Math.floor(Math.random() * window.NIGERIAN_BANKS.length)];
    
    // Check if we have sample accounts for this bank
    const bankAccounts = window.SAMPLE_ACCOUNTS[bank.code];
    if (bankAccounts && Math.random() > 0.3) {
        // 70% chance to return existing account if available
        const account = bankAccounts[Math.floor(Math.random() * bankAccounts.length)];
        return {
            success: true,
            accountNumber: account.accountNumber,
            accountName: account.accountName,
            bankName: bank.name,
            bankId: bank.code,
            balance: parseFloat(account.balance.toFixed(2)),
            currency: 'NGN',
            source: 'database'
        };
    }
    
    // Generate new random account
    const accountNumber = Math.floor(Math.random() * 9000000000 + 1000000000).toString();
    const nameData = window.generateRandomNigerianName();
    const balance = parseFloat((Math.random() * 5000000 + 50000).toFixed(2));
    
    return {
        success: true,
        accountNumber: accountNumber,
        accountName: nameData.fullName,
        bankName: bank.name,
        bankId: bank.code,
        balance: balance,
        currency: 'NGN',
        source: 'database'
    };
}

// Generate completely random crypto wallet data - INSTANT
window.randomCrypto = async function() {
    // Removed network delay for instant response
    
    // Generate random network (ETH or BNB)
    const networks = ['ETH', 'BNB'];
    const randomToken = networks[Math.floor(Math.random() * networks.length)];
    const chainId = randomToken === 'ETH' ? '1' : '56';
    
    // Generate random wallet address
    const randomAddress = window.generateRandomWallet();
    
    // Generate random balance
    const randomBalance = window.generateRandomBalance(0.001, 1000);
    
    // Get price for USD calculation
    const price = window.CRYPTO_PRICES[randomToken] || 1;
    const balanceUSD = parseFloat((parseFloat(randomBalance) * price).toFixed(2));
    
    // Generate random tokens (50% chance)
    const tokens = [];
    const hasTokens = Math.random() > 0.5;
    if (hasTokens) {
        const tokenContracts = window.TOKEN_CONTRACTS[chainId];
        if (tokenContracts) {
            const tokenSymbols = Object.keys(tokenContracts);
            const numTokens = Math.floor(Math.random() * 3) + 1; // 1-3 tokens
            
            const shuffledSymbols = [...tokenSymbols].sort(() => Math.random() - 0.5);
            
            for (let i = 0; i < numTokens && i < shuffledSymbols.length; i++) {
                const symbol = shuffledSymbols[i];
                const tokenBalance = parseFloat((Math.random() * 5000 + 50).toFixed(2));
                const tokenPrice = window.CRYPTO_PRICES[symbol] || 1;
                tokens.push({
                    symbol: symbol,
                    balance: tokenBalance,
                    balanceUSD: parseFloat((tokenBalance * tokenPrice).toFixed(2))
                });
            }
        }
    }
    
    return {
        success: true,
        address: randomAddress,
        balance: randomBalance,
        balanceUSD: balanceUSD,
        symbol: randomToken,
        label: 'Random Generated Wallet',
        fullAddress: randomAddress,
        chainId: chainId,
        network: randomToken === 'ETH' ? 'Ethereum' : 'BNB Smart Chain',
        tokens: tokens,
        source: 'random_generator'
    };
}

// Get list of banks
window.getBankList = async function() {
    await addNetworkDelay();
    
    // Simulate network failure
    if (checkNetworkFailure()) {
        throw new Error(window.ERROR_MESSAGES.NETWORK_ERROR);
    }
    
    return {
        success: true,
        banks: window.NIGERIAN_BANKS.map(bank => ({
            code: bank.code,
            name: bank.name
        })),
        source: 'database'
    };
}

// Find nearest bank branches
window.findNearestBranches = async function(userLocation = null) {
    await addNetworkDelay();
    
    // If no location provided, default to Lagos
    const defaultLocation = userLocation || 'Lagos';
    
    // Get branches for the location
    const branches = window.BANK_BRANCHES[defaultLocation] || window.BANK_BRANCHES['Lagos'];
    
    return {
        success: true,
        location: defaultLocation,
        branches: branches.map(branch => ({
            ...branch,
            distance: parseFloat((Math.random() * 15 + 0.5).toFixed(1)) + ' km'
        })),
        source: 'database'
    };
}

// Get transaction history
window.getTransactionHistory = async function(accountNumber) {
    await addNetworkDelay();
    
    if (!accountNumber) {
        return {
            success: false,
            error: 'Account number is required'
        };
    }
    
    // Generate some transaction history based on account number
    const seed = generateSeedFromString(accountNumber);
    const numTransactions = Math.floor(seededRandom(seed) * 8) + 3; // 3-10 transactions
    
    const transactions = [];
    for (let i = 0; i < numTransactions; i++) {
        const transactionSeed = seed + i;
        const isCredit = seededRandom(transactionSeed) > 0.4; // 60% credit, 40% debit
        const amount = parseFloat((seededRandom(transactionSeed * 2) * 500000 + 1000).toFixed(2));
        const daysAgo = Math.floor(seededRandom(transactionSeed * 3) * 30); // Last 30 days
        const date = new Date();
        date.setDate(date.getDate() - daysAgo);
        
        transactions.push({
            type: isCredit ? 'credit' : 'debit',
            amount: amount,
            description: isCredit ? 'Bank Transfer Received' : 'ATM Withdrawal',
            date: date.toISOString(),
            reference: 'TXN/' + Math.random().toString(36).substr(2, 9).toUpperCase()
        });
    }
    
    return {
        success: true,
        transactions: transactions.sort((a, b) => new Date(b.date) - new Date(a.date)),
        source: 'database'
    };
}

// Helper function to generate deterministic names
function generateDeterministicName(seed) {
    const maleNames = ['Adebayo', 'Emeka', 'Tunde', 'Ibrahim', 'Chinedu', 'Yusuf'];
    const femaleNames = ['Fatima', 'Chioma', 'Adunni', 'Aisha', 'Ngozi', 'Kemi'];
    const surnames = ['Johnson', 'Okafor', 'Mohammed', 'Adeyemi', 'Nwosu', 'Bello'];
    
    const isFemale = seededRandom(seed) > 0.5;
    const firstNames = isFemale ? femaleNames : maleNames;
    
    const firstName = firstNames[Math.floor(seededRandom(seed * 2) * firstNames.length)];
    const surname = surnames[Math.floor(seededRandom(seed * 3) * surnames.length)];
    
    return {
        fullName: `${firstName} ${surname}`,
        firstName,
        surname,
        gender: isFemale ? 'female' : 'male'
    };
}

// Simulate geolocation for "Find Nearest" feature
window.simulateGeolocation = async function() {
    await addNetworkDelay();
    
    // Simulate geolocation failure occasionally (10% chance)
    if (Math.random() < 0.1) {
        throw new Error('Geolocation not available');
    }
    
    // Return random Nigerian city
    const cities = Object.keys(window.NIGERIAN_LOCATIONS);
    const city = cities[Math.floor(Math.random() * cities.length)];
    
    // Approximate coordinates for major Nigerian cities
    const cityCoordinates = {
        'Lagos': { lat: 6.5244, lng: 3.3792 },
        'Abuja': { lat: 9.0765, lng: 7.3986 },
        'Kano': { lat: 12.0022, lng: 8.5919 },
        'Ibadan': { lat: 7.3775, lng: 3.9470 },
        'Port Harcourt': { lat: 4.8156, lng: 7.0498 },
        'Kaduna': { lat: 10.5105, lng: 7.4165 },
        'Benin City': { lat: 6.3350, lng: 5.6037 },
        'Jos': { lat: 9.8965, lng: 8.8583 },
        'Ilorin': { lat: 8.5377, lng: 4.5893 },
        'Enugu': { lat: 6.4474, lng: 7.5022 }
    };
    
    const coords = cityCoordinates[city] || cityCoordinates['Lagos'];
    
    return {
        success: true,
        city: city,
        latitude: coords.lat + (Math.random() - 0.5) * 0.1, // Add small random offset
        longitude: coords.lng + (Math.random() - 0.5) * 0.1,
        source: 'database'
    };
}