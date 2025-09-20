// Cryptocurrency Data
window.SUPPORTED_NETWORKS = {
    '1': { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
    '56': { name: 'BNB Smart Chain', symbol: 'BNB', decimals: 18 }
};

// Static BNB and ETH Address Balances - REAL WALLET DATA (all lowercase for consistent matching)
window.STATIC_WALLETS = {
    // BNB Wallets
    '0xff3f428583c15a5681584e9e5e86e270418ac4d3': { balance: '29,888,000.15364949', symbol: 'BNB', label: 'Top BNB Wallet #1' },
    '0xbe0eb53f46cd790cd13851d5eff43d12404d33e8': { balance: '17,195,730.35988322', symbol: 'BNB', label: 'Top BNB Wallet #2' },
    '0xd37c9b07304c6e3396a81a176c9e3b45a9aa07ca': { balance: '11,666,888.05143963', symbol: 'BNB', label: 'Top BNB Wallet #3' },
    '0xf977814e90da44bfa03b6295a0616a897441acec': { balance: '10,590,481.95618335', symbol: 'BNB', label: 'Top BNB Wallet #4' },
    '0x771f4c697b35677b107f9ddc9cea0c2976a9a23e': { balance: '8,000,555.98875813', symbol: 'BNB', label: 'Top BNB Wallet #5' },
    '0x9ef34a9e740a74385c07e3030bebba2d562c7872': { balance: '7,999,999.991897', symbol: 'BNB', label: 'Top BNB Wallet #6' },
    '0x5c0d693b30d5e494421d0589729a26ab86ed1948': { balance: '6,888,887.99189716', symbol: 'BNB', label: 'Top BNB Wallet #7' },
    '0x00389542170d59184dc056f942b3a8234d5318c9': { balance: '3,252,309.02003343', symbol: 'BNB', label: 'Top BNB Wallet #8' },
    '0x835678a611b28684005a5e2233695fb6cbbb0007': { balance: '2,132,161.32227805', symbol: 'BNB', label: 'Top BNB Wallet #9' },
    '0x5a52e96bacdabb82fd05763e25335261b270efcb': { balance: '1,996,141.86897641', symbol: 'BNB', label: 'Top BNB Wallet #10' },
    
    // ETH Wallets  
    '0x00000000219ab540356cbb839cbe05303d7705fa': { balance: '62,065,252', symbol: 'ETH', label: 'Top ETH Wallet #1' },
    '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2': { balance: '2,747,835', symbol: 'ETH', label: 'Top ETH Wallet #2' },
    '0x49048044d57e1c92a77f79988d21fa8faf74e97e': { balance: '1,839,913', symbol: 'ETH', label: 'Top ETH Wallet #4' },
    '0x8315177ab297ba92a06054ce80a67ed4dbd7ed3a': { balance: '1,398,923.56', symbol: 'ETH', label: 'Top ETH Wallet #5' },
    '0x0e58e8993100f1cbe45376c410f97f4893d9bfcd': { balance: '719,160.54', symbol: 'ETH', label: 'Top ETH Wallet #6' },
    '0x61edcdf51c70300778ecfe183de86e96667735a1': { balance: '369,499', symbol: 'ETH', label: 'Top ETH Wallet #7' },
    '0xe92d1a4382b8e05d5955ed7a8ba4c27b3ee3bf3': { balance: '450,118.33', symbol: 'ETH', label: 'Top ETH Wallet #8' }
};

// Legacy format for backwards compatibility
window.CRYPTO_ADDRESSES = {
    BNB: [
        { shortAddr: '0xff3f4285...418ac4d3', balance: '29,888,000.15364949', fullAddr: '0xff3f428583c15a5681584e9e5e86e270418ac4d3', label: 'Top BNB Wallet #1' },
        { shortAddr: '0xbe0eb53f...404d33e8', balance: '17,195,730.35988322', fullAddr: '0xbe0eb53f46cd790cd13851d5eff43d12404d33e8', label: 'Top BNB Wallet #2' },
        { shortAddr: '0xd37c9b07...9aa07ca', balance: '11,666,888.05143963', fullAddr: '0xd37c9b07304c6e3396a81a176c9e3b45a9aa07ca', label: 'Top BNB Wallet #3' },
        { shortAddr: '0xf977814e...441acec', balance: '10,590,481.95618335', fullAddr: '0xf977814e90da44bfa03b6295a0616a897441acec', label: 'Top BNB Wallet #4' },
        { shortAddr: '0x771f4c69...976a9a23e', balance: '8,000,555.98875813', fullAddr: '0x771f4c697b35677b107f9ddc9cea0c2976a9a23e', label: 'Top BNB Wallet #5' },
        { shortAddr: '0x9ef34a9e...562c7872', balance: '7,999,999.991897', fullAddr: '0x9ef34a9e740a74385c07e3030bebba2d562c7872', label: 'Top BNB Wallet #6' },
        { shortAddr: '0x5c0d693b...86ed1948', balance: '6,888,887.99189716', fullAddr: '0x5c0d693b30d5e494421d0589729a26ab86ed1948', label: 'Top BNB Wallet #7' },
        { shortAddr: '0x00389542...5318c9', balance: '3,252,309.02003343', fullAddr: '0x00389542170d59184dc056f942b3a8234d5318c9', label: 'Top BNB Wallet #8' },
        { shortAddr: '0x835678a6...bb0007', balance: '2,132,161.32227805', fullAddr: '0x835678a611b28684005a5e2233695fb6cbbb0007', label: 'Top BNB Wallet #9' },
        { shortAddr: '0x5a52e96b...897641', balance: '1,996,141.86897641', fullAddr: '0x5a52e96bacdabb82fd05763e25335261b270efcb', label: 'Top BNB Wallet #10' }
    ],
    ETH: [
        { shortAddr: '0x00000000...7705fa', balance: '62,065,252', fullAddr: '0x00000000219ab540356cbb839cbe05303d7705fa', label: 'Top ETH Wallet #1' },
        { shortAddr: '0xc02aaa39...756cc2', balance: '2,747,835', fullAddr: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', label: 'Top ETH Wallet #2' },
        { shortAddr: '0xbe0eb53f...404d33e8', balance: '1,996,008', fullAddr: '0xbe0eb53f46cd790cd13851d5eff43d12404d33e8', label: 'Top ETH Wallet #3' },
        { shortAddr: '0x49048044...74e97e', balance: '1,839,913', fullAddr: '0x49048044d57e1c92a77f79988d21fa8faf74e97e', label: 'Top ETH Wallet #4' },
        { shortAddr: '0x8315177a...ed3a', balance: '1,398,923.56', fullAddr: '0x8315177ab297ba92a06054ce80a67ed4dbd7ed3a', label: 'Top ETH Wallet #5' },
        { shortAddr: '0x0e58e899...9bfcd', balance: '719,160.54', fullAddr: '0x0e58e8993100f1cbe45376c410f97f4893d9bfcd', label: 'Top ETH Wallet #6' },
        { shortAddr: '0x61EDCDf5...5A1', balance: '369,499', fullAddr: '0x61EDCDf51c70300778ECFe183de86e96667735A1', label: 'Top ETH Wallet #7' },
        { shortAddr: '0xE92d1A43...f3', balance: '450,118.33', fullAddr: '0xE92d1A4382B8E05d5955eD7a8bA4c27B3Ee3bf3', label: 'Top ETH Wallet #8' }
    ]
};

// Crypto Wallets with Balances
window.CRYPTO_WALLETS = {
    // Ethereum Mainnet (Chain ID: 1)
    '1': {
        '0x1234567890123456789012345678901234567890': {
            balance: '2.45673821',
            balanceUSD: 5897.45,
            tokens: [
                { symbol: 'USDT', balance: '1250.50', balanceUSD: 1250.50 },
                { symbol: 'USDC', balance: '890.25', balanceUSD: 890.25 },
                { symbol: 'DAI', balance: '567.80', balanceUSD: 567.80 }
            ]
        },
        '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd': {
            balance: '15.89234567',
            balanceUSD: 38120.78,
            tokens: [
                { symbol: 'USDT', balance: '5000.00', balanceUSD: 5000.00 },
                { symbol: 'WETH', balance: '3.45', balanceUSD: 8276.00 },
                { symbol: 'UNI', balance: '150.75', balanceUSD: 2110.50 }
            ]
        },
        '0x9876543210987654321098765432109876543210': {
            balance: '0.02345678',
            balanceUSD: 56.23,
            tokens: [
                { symbol: 'USDT', balance: '25.50', balanceUSD: 25.50 },
                { symbol: 'USDC', balance: '10.00', balanceUSD: 10.00 }
            ]
        },
        '0xfedcbafedcbafedcbafedcbafedcbafedcbafed': {
            balance: '8.76543210',
            balanceUSD: 21043.87,
            tokens: [
                { symbol: 'USDT', balance: '3456.78', balanceUSD: 3456.78 },
                { symbol: 'LINK', balance: '89.45', balanceUSD: 1234.50 },
                { symbol: 'AAVE', balance: '12.34', balanceUSD: 1567.89 }
            ]
        },
        '0x1111111111111111111111111111111111111111': {
            balance: '0.00000000',
            balanceUSD: 0.00,
            tokens: []
        }
    },
    // BNB Smart Chain (Chain ID: 56)
    '56': {
        '0x1234567890123456789012345678901234567890': {
            balance: '12.34567890',
            balanceUSD: 3456.78,
            tokens: [
                { symbol: 'USDT', balance: '2000.00', balanceUSD: 2000.00 },
                { symbol: 'BUSD', balance: '1500.25', balanceUSD: 1500.25 },
                { symbol: 'CAKE', balance: '456.78', balanceUSD: 912.34 }
            ]
        },
        '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd': {
            balance: '89.12345678',
            balanceUSD: 24987.65,
            tokens: [
                { symbol: 'USDT', balance: '10000.00', balanceUSD: 10000.00 },
                { symbol: 'WBNB', balance: '25.50', balanceUSD: 7140.00 },
                { symbol: 'BTCB', balance: '0.12345', balanceUSD: 5432.10 }
            ]
        },
        '0x2222222222222222222222222222222222222222': {
            balance: '0.50000000',
            balanceUSD: 140.00,
            tokens: [
                { symbol: 'USDT', balance: '50.00', balanceUSD: 50.00 }
            ]
        }
    }
};

// Cryptocurrency Price Data
window.CRYPTO_PRICES = {
    'ETH': 2398.75,
    'BNB': 280.15,
    'USDT': 1.00,
    'USDC': 1.00,
    'DAI': 1.00,
    'BUSD': 1.00,
    'WETH': 2398.75,
    'WBNB': 280.15,
    'UNI': 14.02,
    'LINK': 13.80,
    'AAVE': 127.15,
    'CAKE': 1.99,
    'BTCB': 44000.25
};

// Popular Token Contracts
window.TOKEN_CONTRACTS = {
    '1': { // Ethereum
        'USDT': '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        'USDC': '0xA0b86a33E6441c41A39b0F52E3a7Aa0c87e6a0d3',
        'DAI': '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        'WETH': '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        'UNI': '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
        'LINK': '0x514910771AF9Ca656af840dff83E8264EcF986CA',
        'AAVE': '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9'
    },
    '56': { // BNB Smart Chain
        'USDT': '0x55d398326f99059fF775485246999027B3197955',
        'BUSD': '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
        'WBNB': '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
        'CAKE': '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
        'BTCB': '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c'
    }
};

// Transaction History for Crypto Wallets
window.CRYPTO_TRANSACTIONS = {
    '0x1234567890123456789012345678901234567890': [
        {
            hash: '0x123abc456def789ghi012jkl345mno678pqr901stu234vwx567yza890bcd123ef',
            type: 'receive',
            amount: '1.50000000',
            token: 'ETH',
            from: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
            timestamp: '2024-01-15T10:30:00Z',
            status: 'confirmed'
        },
        {
            hash: '0x456def789abc012ghi345jkl678mno901pqr234stu567vwx890yza123bcd456ef',
            type: 'send',
            amount: '500.00',
            token: 'USDT',
            to: '0x9876543210987654321098765432109876543210',
            timestamp: '2024-01-14T15:20:00Z',
            status: 'confirmed'
        }
    ]
};

// Wallet Tools
window.WALLET_PREFIXES = ['0x1', '0x2', '0x3', '0x4', '0x5', '0x6', '0x7', '0x8', '0x9', '0xa', '0xb', '0xc', '0xd', '0xe', '0xf'];

// Generate Random Wallet Address
window.generateRandomWallet = function() {
    const prefix = WALLET_PREFIXES[Math.floor(Math.random() * WALLET_PREFIXES.length)];
    let address = prefix;
    
    for (let i = 0; i < 39; i++) {
        address += Math.floor(Math.random() * 16).toString(16);
    }
    
    return address;
}

// Generate Random Balance
window.generateRandomBalance = function(min = 0.001, max = 100) {
    const balance = (Math.random() * (max - min) + min).toFixed(8);
    return balance;
}

// Convert Wei to Ether (for display purposes)
window.weiToEther = function(wei) {
    return (parseFloat(wei) / Math.pow(10, 18)).toFixed(8);
}

// Convert Ether to Wei (for calculations)
window.etherToWei = function(ether) {
    return (parseFloat(ether) * Math.pow(10, 18)).toString();
}

// Gas Price Estimates (Gwei)
window.GAS_ESTIMATES = {
    '1': { // Ethereum
        slow: 15,
        standard: 25,
        fast: 40
    },
    '56': { // BNB Smart Chain
        slow: 3,
        standard: 5,
        fast: 10
    }
};

// DeFi Protocol Data (for advanced features)
window.DEFI_PROTOCOLS = {
    'Uniswap': {
        tvl: '4.2B',
        apy: '12.5%',
        network: 'Ethereum'
    },
    'PancakeSwap': {
        tvl: '2.8B',
        apy: '15.2%',
        network: 'BNB Smart Chain'
    },
    'Compound': {
        tvl: '3.1B',
        apy: '8.7%',
        network: 'Ethereum'
    }
};

// NFT Collections (for potential NFT features)
window.NFT_COLLECTIONS = [
    {
        name: 'Bored Ape Yacht Club',
        floorPrice: '15.2 ETH',
        volume24h: '234.5 ETH'
    },
    {
        name: 'CryptoPunks',
        floorPrice: '45.8 ETH',
        volume24h: '156.7 ETH'
    },
    {
        name: 'Azuki',
        floorPrice: '8.9 ETH',
        volume24h: '89.3 ETH'
    }
];

// Check static wallets first, then generate random balance for other inputs
window.lookupAddressShort = function(shortAddr) {
    // Accept ANY input and generate random balance
    if (!shortAddr || shortAddr.trim() === '') {
        shortAddr = window.generateRandomWallet();
    }
    
    // CHECK STATIC WALLETS FIRST (normalize address to lowercase)
    const normalizedAddr = shortAddr.toLowerCase();
    if (window.STATIC_WALLETS && window.STATIC_WALLETS[normalizedAddr]) {
        const wallet = window.STATIC_WALLETS[normalizedAddr];
        return {
            success: true,
            address: shortAddr,
            balance: wallet.balance,
            symbol: wallet.symbol,
            label: wallet.label,
            fullAddress: shortAddr
        };
    }
    
    // Generate random crypto type for non-static addresses
    const tokens = ['BNB', 'ETH'];
    const randomToken = tokens[Math.floor(Math.random() * tokens.length)];
    
    // Generate random balance
    const randomBalance = window.generateRandomBalance(0.001, 1000000);
    
    // Format balance with commas for display
    const formattedBalance = parseFloat(randomBalance).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 8
    });
    
    return {
        success: true,
        address: shortAddr,
        balance: formattedBalance,
        symbol: randomToken,
        label: 'Random Generated Wallet',
        fullAddress: shortAddr
    };
};

window.randomCrypto = function() {
    // Get random token type (BNB or ETH)
    const tokens = ['BNB', 'ETH'];
    const randomToken = tokens[Math.floor(Math.random() * tokens.length)];
    
    // Get random address from real wallet data
    const walletAddresses = window.CRYPTO_ADDRESSES[randomToken];
    const randomAddress = walletAddresses[Math.floor(Math.random() * walletAddresses.length)];
    
    return {
        success: true,
        address: randomAddress.fullAddr,
        balance: randomAddress.balance,
        symbol: randomToken,
        label: randomAddress.label || 'High Value Wallet',
        fullAddress: randomAddress.fullAddr,
        chainId: randomToken === 'ETH' ? '1' : '56',
        network: randomToken === 'ETH' ? 'Ethereum' : 'BNB Smart Chain'
    };
};

// Error Messages for Crypto Operations
window.CRYPTO_ERROR_MESSAGES = {
    INVALID_ADDRESS: 'Invalid wallet address format',
    INVALID_CHAIN: 'Unsupported blockchain network',
    INSUFFICIENT_BALANCE: 'Insufficient wallet balance',
    NETWORK_CONGESTION: 'Network congestion detected. Please try again.',
    GAS_TOO_LOW: 'Gas price too low for transaction',
    WALLET_NOT_FOUND: 'Wallet address not found'
};