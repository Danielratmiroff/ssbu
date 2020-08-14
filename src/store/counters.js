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
                isStrong : ['Ganondorf', 'KingDedede', 'Ridley', 'KingKRool'],
                isWeak : ['Lucario', 'Pichu', 'YoungLink', 'Pikachu']
            },

            2 : {
                name : 'Bowser',
                tier : 'Mid+',
                isStrong : ['YoungLink', 'DarkSamus', 'Pikachu', 'Samus'],
                isWeak : ['Jigglypuff', 'Kirby', 'Charizard', 'LittleMac']
            },

            88 : {
                name : 'Byleth',
                tier : 'Mid+',
                isStrong : ['DonkeyKong', 'Ganondorf', 'Bowser', 'Ridley'],
                isWeak : ['Pikachu', 'Joker', 'YoungLink', 'Wolf']
            },

            3 : {
                name : 'Bowserjr',
                tier : 'Low',
                isStrong : ['Link', 'Wolf', 'Pikachu', 'Palutena'],
                isWeak : ['Ganondorf', 'Jigglypuff', 'Ryu', 'LittleMac'],
            },
            
            5 : {
                name : 'Charizard',
                tier : 'High',
                isStrong : ['Kirby', 'PiranhaPlant', 'Jigglypuff', 'MrGameWatch'],
                isWeak : ['Pichu', 'Ike', 'Link', 'Sonic']
            },
            
            61 : {
                name : 'Chrom',
                tier : 'High',
                isStrong : ['DonkeyKong', 'Ganondorf', 'Charizard', 'Bowser'],
                isWeak : ['Squirtle', 'Pikachu', 'Inkling', 'YoungLink']
            },
            
            6 : {
                name : 'Cloud',
                tier : 'Mid+',
                isStrong : ['Jigglypuff', 'Yoshi', 'LittleMac', 'KingKRool'],
                isWeak : ['Pikachu', 'Shulk', 'Wolf', 'Inkling']
            },
            
            7 : {
                name : 'Corrin',
                tier : 'Low',
                isStrong : ['Jigglypuff', 'Ganondorf', 'LittleMac', 'Incineroar'],
                isWeak : ['Samus', 'DarkSamus', 'Simon', 'Joker']
            },
            
            60 : {
                name : 'Daisy',
                tier : 'Top',
                isStrong : ['LittleMac', 'DonkeyKong', 'KingDedede', 'Jigglypuff'],
                isWeak : ['Cloud', 'Shulk', 'Wolf', 'RosalinaLuma']
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
                isStrong : ['Ganondorf', 'Chrom', 'DonkeyKong', 'Mega man'],
                isWeak : ['Bowser Jr.', 'Ike', 'Pichu', 'Pikachu']
            },
            
            9 : {
                name : 'DiddyKong',
                tier : 'Mid',
                isStrong : ['Ganondorf', 'DonkeyKong', 'Ridley', 'Dr Mario'],
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
                isStrong : ['Ganondorf', 'Incineroar', 'LittleMac', 'Charizard'],
                isWeak : ['Pichu', 'Pikachu', 'Richter', 'Samus']
            },
            
            
            4 : {
                name : 'CaptainFalcon',
                tier : 'Low+',
                attr : {
                    FallSpeed : '1.865',
                    FullHop : '37.31',
                    Weight : '104',
                    RunSpeed : '2.552',
                    Gravity : '0.0769',
                },
                isStrong : ['Charizard', 'KingKRool', 'DonkeyKong', 'Bowser'],
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
                isStrong : ['DonkeyKong', 'LittleMac', 'KingDedede', 'KingKRool'],
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
                isStrong : ['KingKRool', 'Simon', 'Richter', 'KingDedede'],
                isWeak : ['Pichu', 'Pikachu', 'Greninja', 'Game and Watch']
            },
            
            14 : {
                name : 'Fox',
                tier : 'High',
                isStrong : ['DarkSamus', 'Samus', 'KingKRool', 'Ridley'],
                isWeak : ['Lucina', 'Pikachu', 'ROB', 'Pichu']
            },
            
            15 : {
                name : 'Ganondorf',
                tier : 'Low',
                isStrong : ['Ryu', 'LittleMac', 'Kirby', 'Incineroar'],
                isWeak : ['Richter', 'Ness', 'Snake', 'YoungLink']
            },
            
            16 : {
                name : 'Greninja',
                tier : 'High',
                isStrong : ['LittleMac', 'DonkeyKong', 'Incineroar', 'Cloud'],
                isWeak : ['YoungLink', 'Snake', 'Palutena', 'Sonic']
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
                isWeak : ['Pichu', 'YoungLink', 'Palutena', 'Simon']
            },
            
            59 : {
                name : 'Incineroar',
                tier : 'Low',
                isStrong : ['KingKRool', 'DonkeyKong', 'Bowser', 'Jigglypuff'],
                isWeak : ['Richter', 'Simon', 'Lucas', 'Pikachu']
            },
            
            62 : {
                name : 'Inkling',
                tier : 'High',
                isStrong : ['Ganondorf', 'CaptainFalcon', 'DonkeyKong', 'Ridley'],
                isWeak : ['Lucina', 'ROB', 'Marth', 'Cloud']
            },
            
            72 : {
                name : 'Ivysaur',
                tier : 'Top',
                isStrong : ['LittleMac', 'ROB', 'Snake', 'KingDedede'],
                isWeak : ['Megaman', 'Palutena', 'Wolf', 'YoungLink']
            },
            
            18 : {
                name : 'Jigglypuff',
                tier : 'Low',
                isStrong : ['KingKRool', 'DonkeyKong', 'Bowser', 'Ganondorf'],
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
                isStrong : ['LittleMac', 'DonkeyKong', 'Ganondorf', 'Ridley'],
                isWeak : ['Pikachu', 'Lucina', 'Inkling', 'Pichu']
            },
            
            70 : {
                name : 'Ken',
                tier : 'Mid+',
                isStrong : ['KingKRool', 'Charizard', 'KingDedede', 'DonkeyKong'],
                isWeak : ['Ness', 'Pikachu', 'Pichu', 'YoungLink']
            },
            
            19 : {
                name : 'KingDedede',
                tier : 'Low',
                isStrong : ['Ganondorf', 'LittleMac', 'Incineroar', 'DonkeyKong'],
                isWeak : ['Palutena', 'Pikachu', 'Zelda', 'Pichu']
            },
            
            20 : {
                name : 'Kirby',
                tier : 'Low',
                isStrong : ['LittleMac', 'DonkeyKong', 'Incineroar', 'Bowser'],
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
                isStrong : ['LittleMac', 'Sheik', 'Bayonetta', 'KingDedede'],
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
                isStrong : ['Kirby', 'Ganondorf', 'Charizard', 'LittleMac'],
                isWeak : ['YoungLink', 'Snake', 'Megaman', 'Inkling']
            },
            
            26 : {
                name : 'Luigi',
                tier : 'Mid',
                isStrong : ['Ganondorf', 'DonkeyKong', 'LittleMac', 'Bowser'],
                isWeak : ['YoungLink', 'Samus', 'DarkSamus', 'Lucina']
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
                isStrong : ['LittleMac', 'Ganondorf', 'Kirby', 'DonkeyKong'],
                isWeak : ['YoungLink', 'Snake', 'Inkling', 'ToonLink']
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
                isStrong : ['KingDedede', 'Ridleu', 'Ganondorf', 'DonkeyKong'],
                isWeak : ['Wolf', 'Olimar', 'Fox', 'Pikachu']
            },
            
            30 : {
                name : 'MetaKnight',
                tier : 'Low+',
                isStrong : ['LittleMac', 'Dr Mario', 'Squirtle', 'Sonic'],
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
                isStrong : ['Ganondorf', 'DonkeyKong', 'Incineroar', 'LittleMac'],
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
                isStrong : ['Ganondorf', 'DonkeyKong', 'Bowser', 'KingKRool'],
                isWeak : ['YoungLink', 'Lucina', 'Palutena', 'Link']
            },
            
            37 : {
                name : 'Olimar',
                tier : 'High',
                isStrong : ['Pichu', 'Incineroar', 'LittleMac', 'KingKRool'],
                isWeak : ['ROB', 'Shulk', 'Daisy', 'Wolf']
            },
            
            38 : {
                name : 'PAC-MAN',
                tier : 'High',
                isStrong : ['LittleMac', 'Ganondorf', 'DonkeyKong', 'Ridley'],
                isWeak : ['Fox', 'Palutena', 'Falco', 'Zelda']
            },
            
            39 : {
                name : 'Palutena',
                tier : 'Top',
                isStrong : ['Ridley', 'KingDedede', 'KingKRool', 'Ganondorf'],
                isWeak : ['Pichu', 'Pikachu', 'Inkling', 'Greninja']
            },
            
            40 : {
                name : 'Peach',
                tier : 'Top',
                isStrong : ['LittleMac', 'Bowser', 'Mario', 'KingKRool'],
                isWeak : ['Lucina', 'Link', 'Joker', 'Cloud']
            },
            
            64 : {
                name : 'Pichu',
                tier : 'Mid+',
                isStrong : ['Ganondorf', 'KingKRool', 'DonkeyKong', 'Bowser'],
                isWeak : ['Lucina', 'Snake', 'Marth', 'Chrom']
            },
            
            41 : {
                name : 'Pikachu',
                tier : 'Top',
                isStrong : ['KingKRool', 'Ganondorf', 'DonkeyKong', 'Incineroar'],
                isWeak : ['Ness', 'MrGameWatch', 'Peach', 'Daisy']
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
                isStrong : ['LittleMac', 'Ryu', 'Ganondorf', 'Captain Falco'],
                isWeak : ['Pikachu', 'Lucina', 'Pichu', 'Snake']
            },
            
            63 : {
                name : 'Richter',
                tier : 'Low+',
                isStrong : ['Olimar', 'Ganondorf', 'Bowser', 'DonkeyKong'],
                isWeak : ['Pichu', 'Pikachu', 'Palutena', 'Joker']
            },
            
            71 : {
                name : 'Ridley',
                tier : 'Low+',
                isStrong : ['Ganondorf', 'LittleMac', 'Incineroar', 'Kind Dedede'],
                isWeak : ['Pikachu', 'Pichu', 'Ness', 'Palutena']
            },
            
            43 : {
                name : 'Rob',
                tier : 'High',
                isStrong : ['Incineroar', 'LittleMac', 'DonkeyKong', 'Ridley'],
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
                isStrong : ['Lucas', 'Ness', 'PAC-MAN', 'LittleMac'],
                isWeak : ['Chrom', 'Palutena', 'Pikachu', 'Lucina']
            },
            
            46 : {
                name : 'Roy',
                tier : 'High',
                isStrong : ['Ganondorf', 'DonkeyKong', 'Bowser', 'Charizard'],
                isWeak : ['Snake', 'Pikachu', 'ROB', 'YoungLink']
            },
            
            47 : {
                name : 'Ryu',
                tier : 'Mid+',
                isStrong : ['DonkeyKong', 'Villager', 'PiranhaPlant', 'LittleMac'],
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
                isStrong : ['LittleMac', 'Jigglypuff', 'CaptainFalcon', 'Ridley'],
                isWeak : ['Snake', 'Pikachu', 'ROB', 'Palutena']
            },
            
            66 : {
                name : 'Simon',
                tier : 'Low+',
                isStrong : ['Ganondorf', 'Bowser', 'Charizard', 'Ridley'],
                isWeak : ['Pikachu', 'Pichu', 'Joker', 'ZeroSuitSamus']
            },
            
            65 : {
                name : 'Snake',
                tier : 'High',
                isStrong : ['Kirby', 'Ganondorf', 'LittleMac', 'DonkeyKong'],
                isWeak : ['Ness', 'Lucas', 'YoungLink', 'MrGameWatch']
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
                isStrong : ['Chrom', 'Incineroar', 'LittleMac', 'Richter'],
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
                isStrong : ['DonkeyKong', 'Incineroar', 'Ganondorf', 'CaptainFalcon'],
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
                isStrong : ['KingKRool', 'Charizard', 'DonkeyKong', 'Bowser'],
                isWeak : ['Pikachu', 'Cloud', 'Wolf', 'Fox']
            },
            
            53 : {
                name : 'Villager',
                tier : 'Low+',
                isStrong : ['KingKRool', 'Ganondorf', 'DonkeyKong', 'Simon'],
                isWeak : ['Palutena', 'Pikachu', 'Fox', 'Pichu']
            },
            
            54 : {
                name : 'Wario',
                tier : 'High',
                isStrong : ['DonkeyKong', 'Ganondorf', 'KingKRool', 'Bayonetta'],
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
                isStrong : ['Ganondorf', 'DonkeyKong', 'Ridley', 'Charizard'],
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
                isStrong : ['Ganondorf', 'KingDedede', 'LittleMac', 'CaptainFalcon'],
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
                isStrong : ['Ridley', 'Ganondorf', 'DonkeyKong', 'Bowser'],
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
                isStrong : ['Ganondorf', 'DonkeyKong', 'Ridley', 'KingKRool'],
                isWeak : ['Shulk', 'Yoshi', 'Squirtle', 'Roy']
            },
            
            76 : {
                name : 'BanjoKazooie',
                tier : 'Mid',
                attr : {
                    FallSpeed : '1.76',
                    FullHop : '29.8',
                    Weight : '106',
                    RunSpeed : '2.18',
                    Gravity : '0.11',
                },
                isStrong : ['Hero', 'BowserJr', 'PiranhaPlant', 'KingKRool'],
                isWeak : ['Palutena', 'Joker', 'Link', 'ZeroSuitSamus']
            },
            77 : {
                name : 'Minmin',
                DisplayName : 'Min Min',
                tier : 'Mid',
                attr : {
                    FallSpeed : '1.5',
                    FullHop : '29.8',
                    Weight : '104',
                    RunSpeed : '1.566',
                },
                isStrong : ['Ganondorf', 'DonkeyKong', 'Bowser', 'KingKRool'],
                isWeak : ['Pikachu', 'Pichu', 'Roy', 'Lucina']
            }
        },
    }
});
