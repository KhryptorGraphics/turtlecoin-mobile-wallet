// Copyright (C) 2018, Zpalmtree
//
// Please see the included LICENSE file for more information.

import { MixinLimit, MixinLimits } from 'turtlecoin-wallet-backend';

const Config = {
    theme: {
        /**
         * The primary colour used by the wallet, for TurtleCoin this is green
         */
        primaryColour: '#40C18E',

        /**
         * A lighter version of the primary colour. You can use
         * https://www.w3schools.com/colors/colors_picker.asp to easily get
         * a lighter version.
         */
        primaryColourLight: '#D8F3E8',

        /**
         * We chose to use a darker green here. It is very rarely used.
         */
        secondaryColour: '#00853D',
    },

    /**
     * If you can't figure this one out, I don't have high hopes
     */
    coinName: 'TurtleCoin',

    /**
     * How often to save the wallet, in milliseconds
     */
    walletSaveFrequency: 60 * 1000,

    /**
     * The amount of decimal places your coin has, e.g. TurtleCoin has two
     * decimals
     */
    decimalPlaces: 2,

    /**
     * The address prefix your coin uses - you can find this in CryptoNoteConfig.h.
     * In TurtleCoin, this converts to TRTL
     */
    addressPrefix: 3914525,

    /**
     * Request timeout for daemon operations in milliseconds
     */
    requestTimeout: 10 * 1000,

    /**
     * The block time of your coin, in seconds
     */
    blockTargetTime: 30,

    /**
     * How often to process blocks, in millseconds
     */
    mainLoopInterval: 10,

    /**
     * How often to fetch blocks from the daemon, in milliseconds
     */
    blockFetchInterval: 1 * 1000,

    /**
     * The amount of blocks to process per 'tick' of the mainloop. Note: too
     * high a value will cause the event loop to be blocked, and your interaction
     * to be laggy.
     */
    blocksPerTick: 1,

    /**
     * Your coins 'ticker', generally used to refer to the coin, i.e. 123 TRTL
     */
    ticker: 'TRTL',

    /**
     * Most people haven't mined any blocks, so lets not waste time scanning
     * them
     */
    scanCoinbaseTransactions: false,

    /**
     * The minimum fee allowed for transactions, in ATOMIC units
     */
    minimumFee: 10,

    /**
     * Mapping of height to mixin maximum and mixin minimum
     */
    mixinLimits: new MixinLimits([
        /* Height: 440,000, minMixin: 0, maxMixin: 100, defaultMixin: 3 */
        new MixinLimit(440000, 0, 100, 3),

        /* At height of 620000, static mixin of 7 */
        new MixinLimit(620000, 7),

        /* At height of 800000, static mixin of 3 */
        new MixinLimit(800000, 3),
    ], 3 /* Default mixin of 3 before block 440,000 */),

    /**
     * The length of a standard address for your coin
     */
    standardAddressLength: 99,

    /**
     * The length of an integrated address for your coin - It's the same as
     * a normal address, but there is a paymentID included in there - since
     * payment ID's are 64 chars, and base58 encoding is done by encoding
     * chunks of 8 chars at once into blocks of 11 chars, we can calculate
     * this automatically
     */
    integratedAddressLength: this.standardAddressLength + ((64 * 11) / 8),

    /**
     * Unix timestamp of the time your chain was launched.
     *
     * Note - you may want to manually adjust this. Take the current timestamp,
     * take away the launch timestamp, divide by block time, and that value
     * should be equal to your current block count. If it's significantly different,
     * you can offset your timestamp to fix the discrepancy
     */
    chainLaunchTimestamp: new Date(1000 * 1513031505),

    /**
     * Fee to take on all transactions
     */
    feePercentage: 0.5,
};

module.exports = Config;
