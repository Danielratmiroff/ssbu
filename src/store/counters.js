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
                tier : 'Mid',
                isStrong : ['Ganondorf', 'King Dedede', 'Ridley', 'KingKRool'],
                isWeak : ['Lucario', 'Pichu', 'Young Link', 'Pikachu']
            },

            2 : {
                name : 'Bowser',
                tier : 'Mid+',
                isStrong : ['Young Link', 'Dark Samus', 'Pikachu', 'Samus'],
                isWeak : ['Jigglypuff', 'Kirby', 'Charizard', 'Little Mac']
            },

            88 : {
                name : 'Byleth',
                tier : 'Mid+',
                isStrong : ['Donkey Kong', 'Ganondorf', 'Bowser', 'Ridley'],
                isWeak : ['Pikachu', 'Joker', 'Young Link', 'Wolf']
            },

            3 : {
                name : 'Bowserjr',
                tier : 'Low',
                isStrong : ['Link', 'Wolf', 'Pikachu', 'Palutena'],
                isWeak : ['Ganondorf', 'Jigglypuff', 'Ryu', 'Little Mac'],
            },
            
            5 : {
                name : 'Charizard',
                tier : 'High',
                isStrong : ['Kirby', 'PiranhaPlant', 'Jigglypuff', 'Game & Watch'],
                isWeak : ['Pichu', 'Ike', 'Link', 'Sonic']
            },
            
            61 : {
                name : 'Chrom',
                tier : 'High',
                isStrong : ['Donkey Kong', 'Ganondorf', 'Charizard', 'Bowser'],
                isWeak : ['Squirtle', 'Pikachu', 'Inkling', 'Young Link']
            },
            
            6 : {
                name : 'Cloud',
                tier : 'Mid+',
                isStrong : ['Jigglypuff', 'Yoshi', 'Little Mac', 'KingKRool'],
                isWeak : ['Pikachu', 'Shulk', 'Wolf', 'Inkling']
            },
            
            7 : {
                name : 'Corrin',
                tier : 'Low',
                isStrong : ['Jigglypuff', 'Ganondorf', 'Little Mac', 'Incineroar'],
                isWeak : ['Samus', 'Dark Samus', 'Simon', 'Joker']
            },
            
            60 : {
                name : 'Daisy',
                tier : 'Top',
                isStrong : ['Little Mac', 'Donkey Kong', 'King Dedede', 'Jigglypuff'],
                isWeak : ['Cloud', 'Shulk', 'Wolf', 'Rosalina and Luma']
            },
            
            8 : {
                name : 'DarkPit',
                tier : 'Low',
                attr : {
                    AirFriction : '0.014',
                    FallSpeed : '1.76',
                    FullHop : '29.8',
                    Weight : '106',
                    WalkSpeed : '1.06',
                    RunSpeed : '2.18',
                    Gravity : '0.11',
                },
                isStrong : ['Ganondorf', 'Chrom', 'Donkey Kong', 'Mega man'],
                isWeak : ['Bowser Jr.', 'Ike', 'Pichu', 'Pikachu']
            },
            
            9 : {
                name : 'DiddyKong',
                tier : 'Mid',
                isStrong : ['Ganondorf', 'Donkey Kong', 'Ridley', 'Dr Mario'],
                isWeak : ['Pikachu', 'Pichu', 'ROB', 'Wolf']
            },
            
            10 : {
                name : 'DonkeyKong',
                tier : 'Low',
                attr : {
                    FallSpeed : '1.63',
                    FullHop : '34',
                    Weight : '127',
                    RunSpeed : '1.873',
                    Gravity : '0.085',
                },
                isStrong : ['Ganondorf', 'Incineroar', 'Little Mac', 'Charizard'],
                isWeak : ['Pichu', 'Pikachu', 'Richter', 'Samus']
            },
            
            
            4 : {
                name : 'Captain Falcon',
                tier : 'Low+',
                attr : {
                    FallSpeed : '1.865',
                    FullHop : '37.31',
                    Weight : '104',
                    RunSpeed : '2.552',
                    Gravity : '0.0769',
                },
                isStrong : ['Charizard', 'King K Rool', 'Donkey Kong', 'Bowser'],
                isWeak : ['Pikachu', 'Pichu', 'Lucina', 'Shulk']
            },
            
            11 : {
                name : 'DrMario',
                tier : 'Low',
                attr : {
                    FallSpeed : '1.5',
                    FullHop : '30.8805',
                    Weight : '98',
                    RunSpeed : '1.397792',
                    Gravity : '0.087',
                },
                isStrong : ['Donkey Kong', 'Little Mac', 'King Dedede', 'KingKRool'],
                isWeak : ['Palutena', 'Lucina', 'Marth', 'Ike']
            },
            
            12 : {
                name : 'DuckHunt',
                tier : 'Mid',
                attr : {
                    FallSpeed : '1.65',
                    FullHop : '34',
                    Weight : '86',
                    RunSpeed : '1.793',
                    Gravity : '0.076',
                },
                isStrong : ['Incineroar', 'Ganondorf', 'Bowser', 'Ridley'],
                isWeak : ['Zelda', 'Cloud', 'Pichu', 'Pikachu']
            },
            
            13 : {
                name : 'Falco',
                tier : 'Mid',
                isStrong : ['KingKRool', 'Simon', 'Richter', 'King Dedede'],
                isWeak : ['Pichu', 'Pikachu', 'Greninja', 'Game and Watch']
            },
            
            14 : {
                name : 'Fox',
                tier : 'High',
                isStrong : ['Dark Samus', 'Samus', 'KingKRool', 'Ridley'],
                isWeak : ['Lucina', 'Pikachu', 'ROB', 'Pichu']
            },
            
            15 : {
                name : 'Ganondorf',
                tier : 'Low',
                isStrong : ['Ryu', 'Little Mac', 'Kirby', 'Incineroar'],
                isWeak : ['Richter', 'Ness', 'Snake', 'Young Link']
            },
            
            16 : {
                name : 'Greninja',
                tier : 'High',
                isStrong : ['Little Mac', 'Donkey Kong', 'Incineroar', 'Cloud'],
                isWeak : ['Young Link', 'Snake', 'Palutena', 'Sonic']
            },
            
            75 : {
                name : 'Hero',
                tier : 'Mid',
                attr : {
                    FallSpeed : '1.57',
                    FullHop : '29',
                    Weight : '101',
                    RunSpeed : '1.84',
                    Gravity : '0.094',
                },
                isStrong : ['Ganondorf', 'Incineroar', 'Megaman', 'Ryu'],
                isWeak : ['Roy', 'Pikachu', 'Fox', 'ROB']
            },
            
            17 : {
                name : 'Ike',
                tier : 'Mid',
                isStrong : ['Jigglypuff', 'KingKRool', 'Kirby', 'Ganondorf'],
                isWeak : ['Pichu', 'Young Link', 'Palutena', 'Simon']
            },
            
            59 : {
                name : 'Incineroar',
                tier : 'Low',
                isStrong : ['KingKRool', 'Donkey Kong', 'Bowser', 'Jigglypuff'],
                isWeak : ['Richter', 'Simon', 'Lucas', 'Pikachu']
            },
            
            62 : {
                name : 'Inkling',
                tier : 'High',
                isStrong : ['Ganondorf', 'Captain Falcon', 'Donkey Kong', 'Ridley'],
                isWeak : ['Lucina', 'ROB', 'Marth', 'Cloud']
            },
            
            72 : {
                name : 'Ivysaur',
                tier : 'Top',
                isStrong : ['Little Mac', 'ROB', 'Snake', 'King Dedede'],
                isWeak : ['Megaman', 'Palutena', 'Wolf', 'Young Link']
            },
            
            18 : {
                name : 'Jigglypuff',
                tier : 'Low',
                isStrong : ['KingKRool', 'Donkey Kong', 'Bowser', 'Ganondorf'],
                isWeak : ['Ike', 'Lucina', 'Marth', 'Chrom']
            },
            
            74 : {
                name : 'Joker',
                tier : 'Top',
                 attr : {
                    FullHop : '32.5',
                    Gravity : '0.127',
                    RunSpeed : '2.06',
                    FallSpeed : '1.63',
                    Weight : '93',
                },
                isStrong : ['Little Mac', 'Donkey Kong', 'Ganondorf', 'Ridley'],
                isWeak : ['Pikachu', 'Lucina', 'Inkling', 'Pichu']
            },
            
            70 : {
                name : 'Ken',
                tier : 'Mid+',
                isStrong : ['KingKRool', 'Charizard', 'King Dedede', 'Donkey Kong'],
                isWeak : ['Ness', 'Pikachu', 'Pichu', 'Young Link']
            },
            
            19 : {
                name : 'KingDedede',
                tier : 'Low',
                isStrong : ['Ganondorf', 'Little Mac', 'Incineroar', 'Donkey Kong'],
                isWeak : ['Palutena', 'Pikachu', 'Zelda', 'Pichu']
            },
            
            20 : {
                name : 'Kirby',
                tier : 'Low',
                isStrong : ['Little Mac', 'Donkey Kong', 'Incineroar', 'Bowser'],
                isWeak : ['Ike', 'Lucina', 'Chrom', 'Roy']
            },
            
            21 : {
                name : 'Link',
                tier : 'Mid+',
                isStrong : ['KingKRool', 'Ganondorf', 'Icineroar', 'Jigglypuff'],
                isWeak : ['Pikachu', 'Wolf', 'Pichu', 'Falco']
            },
            
            22 : {
                name : 'LittleMac',
                tier : 'Low',
                isStrong : ['Lucario', 'Ganondorf', 'Charizard', 'Bowser'],
                isWeak : ['Ridley', 'Isabelle', 'Palutena', 'Dark Pit']
            },
            
            23 : {
                name : 'Lucario',
                tier : 'Low+',
                isStrong : ['Little Mac', 'Sheik', 'Bayonetta', 'KingDedede'],
                isWeak : ['Bowser', 'Lucina', 'Joker', 'Ness']
            },
            
            24 : {
                name : 'Lucas',
                tier : 'Mid',
                isStrong : ['Ganondorf', 'KingKRool', 'LittleMac', 'Snake'],
                isWeak : ['Peach', 'Palutena', 'Lucina', 'Cloud']
            },
            
            25 : {
                name : 'Lucina',
                tier : 'High',
                isStrong : ['Kirby', 'Ganondorf', 'Charizard', 'Little Mac'],
                isWeak : ['Young Link', 'Snake', 'Megaman', 'Inkling']
            },
            
            26 : {
                name : 'Luigi',
                tier : 'Mid',
                isStrong : ['Ganondorf', 'Donkey Kong', 'Little Mac', 'Bowser'],
                isWeak : ['Young Link', 'Samus', 'Dark Samus', 'Lucina']
            },
            
            27 : {
                name : 'Mario',
                tier : 'High',
                isStrong : ['KingKRool', 'Chrizard', 'Bowser', 'Ridley'],
                isWeak : ['Lucina', 'Marth', 'Shulk', 'Cloud']
            },
            
            28 : {
                name : 'Marth',
                tier : 'Mid',
                isStrong : ['Little Mac', 'Ganondorf', 'Kirby', 'Donkey Kong'],
                isWeak : ['Young Link', 'Snake', 'Inkling', 'Toon Link']
            },
            
            29 : {
                name : 'MegaMan',
                tier : 'High',
                attr : {
                    FullHop : '32.8',
                    Gravity : '0.107',
                    RunSpeed : '1.602',
                    FallSpeed : '1.8',
                    Weight : '102',
                },
                isStrong : ['KingDedede', 'Ridleu', 'Ganondorf', 'Donkey Kong'],
                isWeak : ['Wolf', 'Olimar', 'Fox', 'Pikachu']
            },
            
            30 : {
                name : 'MetaKnight',
                tier : 'Low+',
                isStrong : ['Little Mac', 'Dr Mario', 'Squirtle', 'Sonic'],
                isWeak : ['Megaman', 'Cloud', 'Joker', 'Ness']
            },
            
            32 : {
                name : 'MiiBrawler',
                tier : 'Low+',
                attr : {
                    FullHop : '35',
                    Gravity : '0.169',
                    RunSpeed : '1.92',
                    FallSpeed : '1.92',
                    Weight : '94',
                },
                isStrong : ['KingKRool', 'BowserJr', 'ROB', 'Bayonetta'],
                isWeak : ['Palutena', 'Richter', 'Pichu', 'Megaman']
            },
            
            33 : {
                name : 'MiiGunner',
                tier : 'Low',
                attr : {
                    FullHop : '30.9',
                    Gravity : '0.098',
                    RunSpeed : '1.37',
                    FallSpeed : '1.45',
                    Weight : '104',
                },
                isStrong : ['Ganondorf', 'LittleMac', 'Cloud', 'Ryu'],
                isWeak : ['Ness', 'Joker', 'Sonic', 'Olimar']
            },
            
            34 : {
                name : 'MiiSwordfighter',
                tier : 'Low+',
                attr : {
                    FullHop : '28.3',
                    Gravity : '0.106',
                    RunSpeed : '1.58',
                    FallSpeed : '1.55',
                    Weight : '100',
                },
                isStrong : ['Ganondorf', 'Donkey Kong', 'Incineroar', 'Little Mac'],
                isWeak : ['Pichu', 'Palutena', 'Sonic', 'Fox']
            },
            
            35 : {
                name : 'MrGameWatch',
                tier : 'High',
                isStrong : ['Ness', 'Lucas', 'Snake', 'Pikachu'],
                isWeak : ['Ike', 'Cloud', 'Shulk', 'Marth']
            },
            
            36 : {
                name : 'Ness',
                tier : 'Mid+',
                isStrong : ['Ganondorf', 'Donkey Kong', 'Bowser', 'KingKRool'],
                isWeak : ['Young Link', 'Lucina', 'Palutena', 'Link']
            },
            
            37 : {
                name : 'Olimar',
                tier : 'High',
                isStrong : ['Pichu', 'Incineroar', 'Little Mac', 'KingKRool'],
                isWeak : ['ROB', 'Shulk', 'Daisy', 'Wolf']
            },
            
            38 : {
                name : 'PAC-MAN',
                tier : 'High',
                isStrong : ['Little Mac', 'Ganondorf', 'Donkey Kong', 'Ridley'],
                isWeak : ['Fox', 'Palutena', 'Falco', 'Zelda']
            },
            
            39 : {
                name : 'Palutena',
                tier : 'Top',
                isStrong : ['Ridley', 'King Dedede', 'KingKRool', 'Ganondorf'],
                isWeak : ['Pichu', 'Pikachu', 'Inkling', 'Greninja']
            },
            
            40 : {
                name : 'Peach',
                tier : 'Top',
                isStrong : ['Little Mac', 'Bowser', 'Mario', 'KingKRool'],
                isWeak : ['Lucina', 'Link', 'Joker', 'Cloud']
            },
            
            64 : {
                name : 'Pichu',
                tier : 'Mid+',
                isStrong : ['Ganondorf', 'KingKRool', 'Donkey Kong', 'Bowser'],
                isWeak : ['Lucina', 'Snake', 'Marth', 'Chrom']
            },
            
            41 : {
                name : 'Pikachu',
                tier : 'Top',
                isStrong : ['KingKRool', 'Ganondorf', 'Donkey Kong', 'Incineroar'],
                isWeak : ['Ness', 'Mr Game and Watch', 'Peach', 'Daisy']
            },
            
            69 : {
                name : 'PiranhaPlant',
                tier : 'Low+',
                isStrong : ['Bayonetta', 'Jigglypuff', 'Ridley', 'Ganondorf'],
                isWeak : ['Samus', 'Joker', 'Falco', 'Bowser']
            },
            
            42 : {
                name : 'Pit',
                tier : 'Low',
                isStrong : ['Little Mac', 'Ryu', 'Ganondorf', 'Captain Falco'],
                isWeak : ['Pikachu', 'Lucina', 'Pichu', 'Snake']
            },
            
            63 : {
                name : 'Richter',
                tier : 'Low+',
                isStrong : ['Olimar', 'Ganondorf', 'Bowser', 'Donkey Kong'],
                isWeak : ['Pichu', 'Pikachu', 'Palutena', 'Joker']
            },
            
            71 : {
                name : 'Ridley',
                tier : 'Low+',
                isStrong : ['Ganondorf', 'Little Mac', 'Incineroar', 'Kind Dedede'],
                isWeak : ['Pikachu', 'Pichu', 'Ness', 'Palutena']
            },
            
            43 : {
                name : 'Rob',
                tier : 'High',
                isStrong : ['Incineroar', 'Little Mac', 'Donkey Kong', 'Ridley'],
                isWeak : ['Pikachu', 'Pichu', 'Cloud', 'Palutena']
            },
            
            44 : {
                name : 'Robin',
                tier : 'Low',
                isStrong : ['Ganondorf', 'Bowser', 'Charizard', 'Incineroar'],
                isWeak : ['Pichu', 'Pikachu', 'Wolf', 'Squirtle']
            },
            
            45 : {
                name : 'RosalinaLuma',
                tier : 'Mid',
                isStrong : ['Lucas', 'Ness', 'PacMac', 'Little Mac'],
                isWeak : ['Chrom', 'Palutena', 'Pikachu', 'Lucina']
            },
            
            46 : {
                name : 'Roy',
                tier : 'High',
                isStrong : ['Ganondorf', 'Donkey Kong', 'Bowser', 'Charizard'],
                isWeak : ['Snake', 'Pikachu', 'ROB', 'Young Link']
            },
            
            47 : {
                name : 'Ryu',
                tier : 'Mid+',
                isStrong : ['Donkey Kong', 'Villager', 'PiranhaPlant', 'Little Mac'],
                isWeak : ['Ness', 'Richter', 'Snake', 'Simon']
            },
            
            48 : {
                name : 'Samus',
                tier : 'Mid+',
                isStrong : ['Ganondorf', 'Bowser', 'Ridley', 'KingKRool'],
                isWeak : ['Wolf', 'Fox', 'Palutena', 'Falco']
            },
            
            50 : {
                name : 'Shulk',
                tier : 'High',
                isStrong : ['Little Mac', 'Jigglypuff', 'CaptainFalcon', 'Ridley'],
                isWeak : ['Snake', 'Pikachu', 'ROB', 'Palutena']
            },
            
            66 : {
                name : 'Simon',
                tier : 'Low+',
                isStrong : ['Ganondorf', 'Bowser', 'Charizard', 'Ridley'],
                isWeak : ['Pikachu', 'Pichu', 'Joker', 'Zero Suit Samus']
            },
            
            65 : {
                name : 'Snake',
                tier : 'High',
                isStrong : ['Kirby', 'Ganondorf', 'Little Mac', 'Donkey Kong'],
                isWeak : ['Ness', 'Lucas', 'Young Link', 'Mr Game and Watch']
            },
            
            51 : {
                name : 'Sonic',
                tier : 'Mid+',
                isStrong : ['Ridley', 'BowserJr', 'Zelda', 'Incineroar'],
                isWeak : ['Pikachu', 'Wolf', 'Lucina', 'Megaman']
            },
            
            67 : {
                name : 'Squirtle',
                tier : 'Top',
                isStrong : ['Chrom', 'Incineroar', 'Little Mac', 'Richter'],
                isWeak : ['Pikachu', 'Pichu', 'Ness', 'Shulk']
            },
            
            78 : {
                name : 'Terry',
                tier : 'Mid+',
                attr : {
                    FullHop : '27',
                    Gravity : '0.09',
                    RunSpeed : '1.72',
                    FallSpeed : '1.48',
                    Weight : '108',
                },
                isStrong : ['Donkey Kong', 'Incineroar', 'Ganondorf', 'Captain Falcon'],
                isWeak : ['Joker', 'Lucina', 'Pikachu', 'Pichu']
            },
            
            52 : {
                name : 'ToonLink',
                tier : 'Mid',
                attr : {
                    FullHop : '33.8',
                    Gravity : '0.081',
                    RunSpeed : '1.906',
                    FallSpeed : '1.38',
                    Weight : '91',
                },
                isStrong : ['KingKRool', 'Charizard', 'Donkey Kong', 'Bowser'],
                isWeak : ['Pikachu', 'Cloud', 'Wolf', 'Fox']
            },
            
            53 : {
                name : 'Villager',
                tier : 'Low+',
                isStrong : ['KingKRool', 'Ganondorf', 'Donkey Kong', 'Simon'],
                isWeak : ['Palutena', 'Pikachu', 'Fox', 'Pichu']
            },
            
            54 : {
                name : 'Wario',
                tier : 'High',
                isStrong : ['Donkey Kong', 'Ganondorf', 'KingKRool', 'Bayonetta'],
                isWeak : ['Lucina', 'Pikachu', 'Cloud', 'Marth']
            },
            
            55 : {
                name : 'WiiFitTrainer',
                tier : 'Mid',
                attr : {
                    FullHop : '35.6',
                    Gravity : '0.09',
                    RunSpeed : '1.866',
                    FallSpeed : '1.3',
                    Weight : '96',
                },
                isStrong : ['Ganondorf', 'Donkey Kong', 'Ridley', 'Charizard'],
                isWeak : ['Pichu', 'Squirtle', 'Pikachu', 'Megaman']
            },
            
            68 : {
                name : 'Wolf',
                tier : 'High',
                attr : {
                    FullHop : '32.02',
                    Gravity : '0.13',
                    RunSpeed : '1.54',
                    FallSpeed : '1.8',
                    Weight : '92',
                },
                isStrong : ['Ganondorf', 'King Dedede', 'Little Mac', 'Captain Falcon'],
                isWeak : ['Pikachu', 'Pichu', 'Lucina', 'Squirtle']
            },
            
            79 : {
                name : 'YoungLink',
                tier : 'Mid+',
                attr : {
                    FullHop : '33.66',
                    Gravity : '0.096',
                    RunSpeed : '1.749',
                    FallSpeed : '1.8',
                    Weight : '88',
                },
                isStrong : ['Ridley', 'Ganondorf', 'Donkey Kong', 'Bowser'],
                isWeak : ['Wolf', 'Palutena', 'Fox', 'Cloud']
            },
            
            57 : {
                name : 'Zelda',
                tier : 'Low+',
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool'],
                isWeak : ['Bowser', 'Daisy', 'Palutena', 'Joker']
            },
            
            58 : {
                name : 'ZeroSuitSamus',
                tier : 'Top',
                isStrong : ['Ganondorf', 'Donkey Kong', 'Ridley', 'KingKRool'],
                isWeak : ['Shulk', 'Yoshi', 'Squirtle', 'Roy']
            },
            
            76 : {
                name : 'banjokazooie',
                tier : 'Mid',
                attr : {
                    FallSpeed : '1.76',
                    FullHop : '29.8',
                    Weight : '106',
                    RunSpeed : '2.18',
                    Gravity : '0.11',
                },
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool'],
                isWeak : ['Palutena', 'Joker', 'Link', 'Zero Suit Samus']
            },
            77 : {
                name : 'minmin',
                DisplayName : 'Min Min',
                tier : 'Mid',
                attr : {
                    FallSpeed : '1.5',
                    FullHop : '29.8',
                    Weight : '104',
                    RunSpeed : '1.566',
                },
                isStrong : ['Ganondorf', 'Donkey Kong', 'Bowser', 'KingKRool'],
                isWeak : ['Pikachu', 'Pichu', 'Roy', 'Lucina']
            }
        },
    }
});
