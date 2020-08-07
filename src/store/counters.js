import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// Store counters .
// Store Tiers .
// Store values which are not return from the API but they are still valuable for us.

export const counters = new Vuex.Store({
    state: {
        chars : {

            1 : {
                name : 'Bayonetta',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },

            2 : {
                name : 'Bowser',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },

            3 : {
                name : 'Bowserjr',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            5 : {
                name : 'Charizard',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            61 : {
                name : 'Chrom',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            6 : {
                name : 'Cloud',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            7 : {
                name : 'Corrin',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            60 : {
                name : 'Daisy',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            8 : {
                name : 'DarkPit',
                tier : 'D',
                attr : {
                    AirFriction : '0.014',
                    FallSpeed : '1.76',
                    FullHop : '29.8',
                    Weight : '106',
                    WalkSpeed : '1.06',
                    RunSpeed : '2.18',
                    Gravity : '0.11',
                },
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            9 : {
                name : 'DiddyKong',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            10 : {
                name : 'DonkeyKong',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            11 : {
                name : 'DrMario',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            12 : {
                name : 'DuckHunt',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            13 : {
                name : 'Falco',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            14 : {
                name : 'Fox',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            15 : {
                name : 'Ganondorf',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            16 : {
                name : 'Greninja',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            75 : {
                name : 'Hero',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            17 : {
                name : 'Ike',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            59 : {
                name : 'Incineroar',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            62 : {
                name : 'Inkling',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            72 : {
                name : 'Ivysaur',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            18 : {
                name : 'Jigglypuff',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            74 : {
                name : 'Joker',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            70 : {
                name : 'Ken',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            19 : {
                name : 'KingDedede',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            20 : {
                name : 'Kirby',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            21 : {
                name : 'Link',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            22 : {
                name : 'LittleMac',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            23 : {
                name : 'Lucario',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            24 : {
                name : 'Lucas',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            25 : {
                name : 'Lucina',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            26 : {
                name : 'Luigi',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            27 : {
                name : 'Mario',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            28 : {
                name : 'Marth',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            29 : {
                name : 'MegaMan',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            30 : {
                name : 'MetaKnight',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            32 : {
                name : 'MiiBrawler',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            33 : {
                name : 'MiiGunner',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            34 : {
                name : 'MiiSwordfighter',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            35 : {
                name : 'MrGameWatch',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            36 : {
                name : 'Ness',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            37 : {
                name : 'Olimar',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            38 : {
                name : 'PAC-MAN',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            39 : {
                name : 'Palutena',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            40 : {
                name : 'Peach',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            64 : {
                name : 'Pichu',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            41 : {
                name : 'Pikachu',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            69 : {
                name : 'PiranhaPlant',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            42 : {
                name : 'Pit',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            63 : {
                name : 'Richter',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            71 : {
                name : 'Ridley',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            43 : {
                name : 'Rob',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            44 : {
                name : 'Robin',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            45 : {
                name : 'RosalinaLuma',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            46 : {
                name : 'Roy',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            47 : {
                name : 'Ryu',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            48 : {
                name : 'Samus',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            50 : {
                name : 'Shulk',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            66 : {
                name : 'Simon',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            65 : {
                name : 'Snake',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            51 : {
                name : 'Sonic',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            67 : {
                name : 'Squirtle',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            78 : {
                name : 'Terry',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            52 : {
                name : 'ToonLink',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            53 : {
                name : 'Villager',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            54 : {
                name : 'Wario',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            55 : {
                name : 'WiiFitTrainer',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            68 : {
                name : 'Wolf',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            79 : {
                name : 'YoungLink',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            57 : {
                name : 'Zelda',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            58 : {
                name : 'ZeroSuitSamus',
                tier : 'D',
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            
            76 : {
                name : 'banjokazooie',
                tier : 'D',
                attr : {
                    AirFriction : '0.014',
                    FallSpeed : '1.76',
                    FullHop : '29.8',
                    Weight : '106',
                    WalkSpeed : '1.06',
                    RunSpeed : '2.18',
                    Gravity : '0.11',
                },
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            },
            77 : {
                name : 'minmin',
                DisplayName : 'Min Min',
                tier : 'D',
                attr : {
                    FallSpeed : '1.5',
                    FullHop : '29.8',
                    Weight : '104',
                    RunSpeed : '1.566',
                },
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker'],
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool']
            }
        },
    }
});
